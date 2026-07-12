import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function integerEnv(name, fallback, { min = 1, max = Number.MAX_SAFE_INTEGER } = {}) {
  const raw = process.env[name];
  if (raw == null || raw === '') return fallback;
  const value = Number.parseInt(raw, 10);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new Error(`${name} must be an integer between ${min} and ${max}`);
  }
  return value;
}

function booleanEnv(name, fallback) {
  const raw = process.env[name];
  if (raw == null || raw === '') return fallback;
  if (['1', 'true', 'yes', 'on'].includes(raw.toLowerCase())) return true;
  if (['0', 'false', 'no', 'off'].includes(raw.toLowerCase())) return false;
  throw new Error(`${name} must be true/false or 1/0`);
}

export function loadConfig(overrides = {}) {
  const documentRoot = path.resolve(overrides.documentRoot ?? process.env.DOCUMENT_ROOT ?? path.join(projectRoot, 'documents'));
  const backupRoot = path.resolve(overrides.backupRoot ?? process.env.BACKUP_ROOT ?? path.join(projectRoot, 'backups'));
  const parserRoot = path.resolve(overrides.parserRoot ?? process.env.PARSER_ROOT ?? path.join(projectRoot, 'parser-dist'));

  return Object.freeze({
    projectRoot,
    host: overrides.host ?? process.env.HOST ?? '0.0.0.0',
    port: overrides.port ?? integerEnv('PORT', 4173, { min: 1, max: 65535 }),
    documentRoot,
    backupRoot,
    parserRoot,
    parserWasm: path.resolve(overrides.parserWasm ?? process.env.PARSER_WASM ?? path.join(parserRoot, 'analyser.wasm')),
    parserJsffi: path.resolve(overrides.parserJsffi ?? process.env.PARSER_JSFFI ?? path.join(parserRoot, 'ghc_wasm_jsffi.mjs')),
    parserRequired: overrides.parserRequired ?? booleanEnv('PARSER_REQUIRED', true),
    backupIntervalMinutes: overrides.backupIntervalMinutes ?? integerEnv('BACKUP_INTERVAL_MINUTES', 30, { min: 1, max: 1440 }),
    backupRetentionDays: overrides.backupRetentionDays ?? integerEnv('BACKUP_RETENTION_DAYS', 8, { min: 1, max: 365 }),
    maxBodyBytes: overrides.maxBodyBytes ?? integerEnv('MAX_BODY_BYTES', 64 * 1024 * 1024, { min: 1024 }),
    lockWaitMs: overrides.lockWaitMs ?? integerEnv('LOCK_WAIT_MS', 15000, { min: 100 }),
    lockStaleMs: overrides.lockStaleMs ?? integerEnv('LOCK_STALE_MS', 60000, { min: 1000 }),
  });
}
