import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { HttpError, RevisionConflictError } from './errors.mjs';
import { withWriteLock } from './locks.mjs';

const INTERNAL_NAMES = new Set(['.patchouli-editor-locks']);

export function contentRevision(content) {
  return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}

export function normalizeRelativePath(input) {
  if (typeof input !== 'string') throw new HttpError(400, 'invalid_path', 'A string path is required.');
  const slashPath = input.replaceAll('\\', '/').replace(/^\/+/, '');
  const normalized = path.posix.normalize(slashPath);
  if (!normalized || normalized === '.' || normalized === '..' || normalized.startsWith('../') || path.posix.isAbsolute(normalized)) {
    throw new HttpError(400, 'invalid_path', 'The path must identify a file inside the document root.');
  }
  if (normalized.split('/').some((part) => INTERNAL_NAMES.has(part))) {
    throw new HttpError(400, 'invalid_path', 'The path is reserved by the editor.');
  }
  return normalized;
}

export function resolveInside(root, input) {
  const relative = normalizeRelativePath(input);
  const absolute = path.resolve(root, ...relative.split('/'));
  const prefix = `${path.resolve(root)}${path.sep}`;
  if (!absolute.startsWith(prefix)) throw new HttpError(400, 'invalid_path', 'The path escapes the document root.');
  return { relative, absolute };
}

async function readExistingFile(config, input) {
  const resolved = resolveInside(config.documentRoot, input);
  let stat;
  try {
    stat = await fs.stat(resolved.absolute);
  } catch (error) {
    if (error.code === 'ENOENT') throw new HttpError(404, 'not_found', `File not found: ${resolved.relative}`);
    throw error;
  }
  if (!stat.isFile()) throw new HttpError(400, 'not_a_file', `Not a file: ${resolved.relative}`);
  const content = await fs.readFile(resolved.absolute, 'utf8');
  return {
    path: resolved.relative,
    absolute: resolved.absolute,
    content,
    revision: contentRevision(content),
    size: stat.size,
    mtimeMs: stat.mtimeMs,
  };
}

export async function ensureStorage(config) {
  await Promise.all([
    fs.mkdir(config.documentRoot, { recursive: true }),
    fs.mkdir(config.backupRoot, { recursive: true }),
  ]);
}

export async function listFiles(config) {
  await ensureStorage(config);
  const files = [];
  async function walk(directory, relativeDirectory = '') {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      if (INTERNAL_NAMES.has(entry.name)) continue;
      const relative = relativeDirectory ? `${relativeDirectory}/${entry.name}` : entry.name;
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(absolute, relative);
      } else if (entry.isFile()) {
        const stat = await fs.stat(absolute);
        files.push({ path: relative, size: stat.size, mtimeMs: stat.mtimeMs });
      }
    }
  }
  await walk(config.documentRoot);
  return files;
}

function publicFile(file) {
  const { absolute, ...value } = file;
  return value;
}

export async function readFile(config, input) {
  return publicFile(await readExistingFile(config, input));
}

async function atomicWrite(absolute, content) {
  await fs.mkdir(path.dirname(absolute), { recursive: true });
  const temporary = `${absolute}.patchouli-tmp-${process.pid}-${crypto.randomUUID()}`;
  let handle;
  try {
    handle = await fs.open(temporary, 'wx', 0o600);
    await handle.writeFile(content, 'utf8');
    await handle.sync();
    await handle.close();
    handle = undefined;
    await fs.rename(temporary, absolute);
    try {
      const directory = await fs.open(path.dirname(absolute), 'r');
      await directory.sync();
      await directory.close();
    } catch {}
  } finally {
    try { await handle?.close(); } catch {}
    try { await fs.unlink(temporary); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

function requireBaseRevision(baseRevision) {
  if (typeof baseRevision !== 'string' || !/^[a-f0-9]{64}$/i.test(baseRevision)) {
    throw new HttpError(400, 'invalid_revision', 'baseRevision must be the SHA-256 revision returned by the read API.');
  }
}

export async function updateFile(config, input, { content, baseRevision, baseContent }) {
  if (typeof content !== 'string') throw new HttpError(400, 'invalid_content', 'content must be a string.');
  if (typeof baseContent !== 'string') throw new HttpError(400, 'invalid_base_content', 'baseContent must be the exact content originally read.');
  requireBaseRevision(baseRevision);
  const resolved = resolveInside(config.documentRoot, input);

  return withWriteLock(config, `file:${resolved.relative}`, async () => {
    const current = await readExistingFile(config, resolved.relative);
    if (current.revision !== baseRevision) {
      throw new RevisionConflictError({
        path: resolved.relative,
        baseContent,
        localContent: content,
        remoteContent: current.content,
        remoteRevision: current.revision,
        remoteMtimeMs: current.mtimeMs,
      });
    }
    await atomicWrite(resolved.absolute, content);
    const stat = await fs.stat(resolved.absolute);
    return {
      path: resolved.relative,
      content,
      revision: contentRevision(content),
      size: stat.size,
      mtimeMs: stat.mtimeMs,
    };
  });
}

export async function createFile(config, input, content = '') {
  if (typeof content !== 'string') throw new HttpError(400, 'invalid_content', 'content must be a string.');
  const resolved = resolveInside(config.documentRoot, input);
  return withWriteLock(config, `file:${resolved.relative}`, async () => {
    await fs.mkdir(path.dirname(resolved.absolute), { recursive: true });
    let handle;
    try {
      handle = await fs.open(resolved.absolute, 'wx', 0o600);
      await handle.writeFile(content, 'utf8');
      await handle.sync();
    } catch (error) {
      if (error.code === 'EEXIST') throw new HttpError(409, 'already_exists', `File already exists: ${resolved.relative}`);
      throw error;
    } finally {
      await handle?.close();
    }
    return publicFile(await readExistingFile(config, resolved.relative));
  });
}

export async function deleteFile(config, input, baseRevision) {
  requireBaseRevision(baseRevision);
  const resolved = resolveInside(config.documentRoot, input);
  return withWriteLock(config, `file:${resolved.relative}`, async () => {
    const current = await readExistingFile(config, resolved.relative);
    if (current.revision !== baseRevision) {
      throw new RevisionConflictError({
        path: resolved.relative,
        baseContent: '',
        localContent: '',
        remoteContent: current.content,
        remoteRevision: current.revision,
        remoteMtimeMs: current.mtimeMs,
        operation: 'delete',
      });
    }
    await fs.unlink(resolved.absolute);
    return { path: resolved.relative, deleted: true };
  });
}

export async function renameFile(config, fromInput, toInput, baseRevision) {
  requireBaseRevision(baseRevision);
  const from = resolveInside(config.documentRoot, fromInput);
  const to = resolveInside(config.documentRoot, toInput);
  const lockKey = `rename:${[from.relative, to.relative].sort().join(':')}`;
  return withWriteLock(config, lockKey, async () => {
    const current = await readExistingFile(config, from.relative);
    if (current.revision !== baseRevision) {
      throw new RevisionConflictError({
        path: from.relative,
        baseContent: '',
        localContent: '',
        remoteContent: current.content,
        remoteRevision: current.revision,
        remoteMtimeMs: current.mtimeMs,
        operation: 'rename',
      });
    }
    try {
      await fs.stat(to.absolute);
      throw new HttpError(409, 'already_exists', `Destination already exists: ${to.relative}`);
    } catch (error) {
      if (error instanceof HttpError) throw error;
      if (error.code !== 'ENOENT') throw error;
    }
    await fs.mkdir(path.dirname(to.absolute), { recursive: true });
    await fs.rename(from.absolute, to.absolute);
    return { ...publicFile(await readExistingFile(config, to.relative)), previousPath: from.relative };
  });
}
