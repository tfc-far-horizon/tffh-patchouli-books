import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadConfig } from './lib/config.mjs';
import { HttpError, RevisionConflictError } from './lib/errors.mjs';
import {
  ensureStorage,
  listFiles,
  readFile,
  updateFile,
  createFile,
  deleteFile,
  renameFile,
} from './lib/storage.mjs';
import { PatchouliWasmParser } from './lib/parser.mjs';
import { convertIgemAstToPatchouli } from './lib/converter.mjs';
import { createBackup, listBackups, pruneBackups, startBackupScheduler } from './lib/backups.mjs';

const config = loadConfig();
const parser = new PatchouliWasmParser(config);
const publicRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.json', 'application/json; charset=utf-8'],
  ['.ico', 'image/x-icon'],
]);

function writeJson(response, status, value, headers = {}) {
  const body = `${JSON.stringify(value)}\n`;
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store',
    ...headers,
  });
  response.end(body);
}

async function readJson(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > config.maxBodyBytes) throw new HttpError(413, 'body_too_large', 'Request body is too large.');
    chunks.push(chunk);
  }
  if (chunks.length === 0) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new HttpError(400, 'invalid_json', 'Request body must be valid JSON.');
  }
}

function apiPath(url) {
  const value = url.searchParams.get('path');
  if (value == null) throw new HttpError(400, 'missing_path', 'The path query parameter is required.');
  return value;
}

async function handleApi(request, response, url) {
  if (request.method === 'GET' && url.pathname === '/api/status') {
    return writeJson(response, 200, {
      parser: parser.status,
      documentRoot: config.documentRoot,
      backupRoot: config.backupRoot,
      backupIntervalMinutes: config.backupIntervalMinutes,
      backupRetentionDays: config.backupRetentionDays,
      parserRequired: config.parserRequired,
    });
  }

  if (request.method === 'GET' && url.pathname === '/api/files') {
    return writeJson(response, 200, { files: await listFiles(config) });
  }

  if (request.method === 'GET' && url.pathname === '/api/file') {
    const file = await readFile(config, apiPath(url));
    return writeJson(response, 200, file, { etag: `"${file.revision}"` });
  }

  if (request.method === 'PUT' && url.pathname === '/api/file') {
    const body = await readJson(request);
    const file = await updateFile(config, apiPath(url), body);
    return writeJson(response, 200, file, { etag: `"${file.revision}"` });
  }

  if (request.method === 'POST' && url.pathname === '/api/file') {
    const body = await readJson(request);
    const file = await createFile(config, body.path, body.content ?? '');
    return writeJson(response, 201, file, { etag: `"${file.revision}"` });
  }

  if (request.method === 'DELETE' && url.pathname === '/api/file') {
    const body = await readJson(request);
    return writeJson(response, 200, await deleteFile(config, apiPath(url), body.baseRevision));
  }

  if (request.method === 'POST' && url.pathname === '/api/rename') {
    const body = await readJson(request);
    const file = await renameFile(config, body.from, body.to, body.baseRevision);
    return writeJson(response, 200, file, { etag: `"${file.revision}"` });
  }

  if (request.method === 'POST' && url.pathname === '/api/parse') {
    const body = await readJson(request);
    if (typeof body.content !== 'string') throw new HttpError(400, 'invalid_content', 'content must be a string.');
    try {
      return writeJson(response, 200, await parser.parse(body.content));
    } catch (error) {
      return writeJson(response, 503, {
        error: 'parser_unavailable',
        message: error.message,
        parser: parser.status,
      });
    }
  }

  if (request.method === 'POST' && url.pathname === '/api/convert') {
    const body = await readJson(request);
    if (typeof body.content !== 'string') throw new HttpError(400, 'invalid_content', 'content must be a string.');
    if (!body.category || typeof body.category.id !== 'string' || typeof body.category.name !== 'string') {
      throw new HttpError(400, 'invalid_category', 'category.id and category.name are required.');
    }
    try {
      const parsed = await parser.parse(body.content);
      if (!parsed.ok) return writeJson(response, 422, { error: 'source_parse_failed', parse: parsed });
      const converted = convertIgemAstToPatchouli(parsed.document, { category: body.category, entries: body.entries });
      return writeJson(response, 200, { ...converted, parserWarnings: parsed.document?.[1] ?? [] });
    } catch (error) {
      return writeJson(response, 503, { error: 'converter_unavailable', message: error.message, parser: parser.status });
    }
  }

  if (request.method === 'GET' && url.pathname === '/api/backups') {
    return writeJson(response, 200, { backups: await listBackups(config) });
  }

  if (request.method === 'POST' && url.pathname === '/api/backups') {
    const backup = await createBackup(config);
    const removed = await pruneBackups(config);
    return writeJson(response, 201, { backup, removed });
  }

  throw new HttpError(404, 'api_not_found', 'API endpoint not found.');
}

async function serveStatic(request, response, url) {
  let relative = decodeURIComponent(url.pathname);
  if (relative === '/') relative = '/index.html';
  const absolute = path.resolve(publicRoot, `.${relative}`);
  if (!absolute.startsWith(`${publicRoot}${path.sep}`)) throw new HttpError(404, 'not_found', 'Not found.');
  let bytes;
  try {
    bytes = await fs.readFile(absolute);
  } catch (error) {
    if (error.code === 'ENOENT') {
      bytes = await fs.readFile(path.join(publicRoot, 'index.html'));
      response.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache' });
      response.end(bytes);
      return;
    }
    throw error;
  }
  response.writeHead(200, {
    'content-type': contentTypes.get(path.extname(absolute)) ?? 'application/octet-stream',
    'content-length': bytes.length,
    'cache-control': relative.endsWith('.html') ? 'no-cache' : 'public, max-age=300',
  });
  if (request.method === 'HEAD') response.end();
  else response.end(bytes);
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
    if (url.pathname.startsWith('/api/')) await handleApi(request, response, url);
    else if (request.method === 'GET' || request.method === 'HEAD') await serveStatic(request, response, url);
    else throw new HttpError(405, 'method_not_allowed', 'Method not allowed.');
  } catch (error) {
    const status = error instanceof HttpError ? error.status : error.code === 'LOCK_TIMEOUT' ? 503 : 500;
    const payload = {
      error: error instanceof HttpError ? error.code : 'internal_error',
      message: error.message,
      ...(error instanceof RevisionConflictError ? error.details : {}),
      ...(error instanceof HttpError && error.details && !(error instanceof RevisionConflictError) ? { details: error.details } : {}),
    };
    if (status >= 500) console.error(error);
    if (!response.headersSent) writeJson(response, status, payload);
    else response.destroy(error);
  }
});

await ensureStorage(config);
try {
  await parser.load();
  console.info('[parser] patchouli-markdown WASM parser loaded');
} catch (error) {
  if (config.parserRequired) {
    console.error(`[parser] required parser bundle could not be loaded: ${error.message}`);
    console.error('[parser] install wasm-dist with: node scripts/install-parser.mjs <path>');
    process.exit(1);
  }
  console.warn(`[parser] unavailable: ${error.message}`);
}
const backupScheduler = startBackupScheduler(config);

server.listen(config.port, config.host, () => {
  console.info(`Patchouli Markdown Server listening on http://${config.host}:${config.port}`);
  console.info(`Documents: ${config.documentRoot}`);
  console.info(`Backups:   ${config.backupRoot}`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    backupScheduler.stop();
    server.close(() => process.exit(0));
  });
}
