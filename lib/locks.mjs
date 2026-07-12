import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const queues = new Map();

export async function withKeyedMutex(key, task) {
  const previous = queues.get(key) ?? Promise.resolve();
  let release;
  const gate = new Promise((resolve) => { release = resolve; });
  const tail = previous.catch(() => {}).then(() => gate);
  queues.set(key, tail);
  await previous.catch(() => {});
  try {
    return await task();
  } finally {
    release();
    if (queues.get(key) === tail) queues.delete(key);
  }
}

function lockName(key) {
  return `${crypto.createHash('sha256').update(key).digest('hex')}.lock`;
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function withFilesystemLock(lockRoot, key, task, { waitMs = 15000, staleMs = 60000 } = {}) {
  await fs.mkdir(lockRoot, { recursive: true });
  const lockPath = path.join(lockRoot, lockName(key));
  const started = Date.now();
  let handle;

  while (!handle) {
    try {
      handle = await fs.open(lockPath, 'wx', 0o600);
      await handle.writeFile(JSON.stringify({ pid: process.pid, createdAt: new Date().toISOString(), key }));
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      try {
        const stat = await fs.stat(lockPath);
        if (Date.now() - stat.mtimeMs > staleMs) {
          await fs.unlink(lockPath);
          continue;
        }
      } catch (statError) {
        if (statError.code === 'ENOENT') continue;
        throw statError;
      }
      if (Date.now() - started >= waitMs) {
        const timeout = new Error(`Timed out waiting for lock: ${key}`);
        timeout.code = 'LOCK_TIMEOUT';
        throw timeout;
      }
      await sleep(25 + Math.floor(Math.random() * 50));
    }
  }

  const heartbeat = setInterval(() => {
    const now = new Date();
    fs.utimes(lockPath, now, now).catch(() => {});
  }, Math.max(1000, Math.floor(staleMs / 3)));
  heartbeat.unref?.();

  try {
    return await task();
  } finally {
    clearInterval(heartbeat);
    try { await handle?.close(); } catch {}
    try { await fs.unlink(lockPath); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

export async function withWriteLock(config, key, task) {
  const globalKey = 'storage-global';
  return withKeyedMutex(globalKey, () => withFilesystemLock(
    path.join(config.documentRoot, '.patchouli-editor-locks'),
    globalKey,
    task,
    { waitMs: config.lockWaitMs, staleMs: config.lockStaleMs },
  ));
}
