import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { withKeyedMutex, withWriteLock } from './locks.mjs';

function snapshotName(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, '-');
}

async function copyTree(source, destination, manifest, relative = '') {
  const entries = await fs.readdir(source, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.name === '.patchouli-editor-locks') continue;
    const from = path.join(source, entry.name);
    const rel = relative ? `${relative}/${entry.name}` : entry.name;
    const to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      await fs.mkdir(to, { recursive: true });
      await copyTree(from, to, manifest, rel);
    } else if (entry.isFile()) {
      const bytes = await fs.readFile(from);
      await fs.mkdir(path.dirname(to), { recursive: true });
      await fs.writeFile(to, bytes);
      const stat = await fs.stat(from);
      manifest.files.push({
        path: rel,
        size: bytes.length,
        mtimeMs: stat.mtimeMs,
        sha256: crypto.createHash('sha256').update(bytes).digest('hex'),
      });
    }
  }
}

export async function createBackup(config, now = new Date()) {
  return withKeyedMutex('backup-snapshot', () => withWriteLock(config, 'backup', async () => {
    await Promise.all([
      fs.mkdir(config.documentRoot, { recursive: true }),
      fs.mkdir(config.backupRoot, { recursive: true }),
    ]);
    const name = snapshotName(now);
    const temporary = path.join(config.backupRoot, `.${name}.tmp-${process.pid}-${crypto.randomUUID()}`);
    const destination = path.join(config.backupRoot, name);
    const manifest = { createdAt: now.toISOString(), files: [] };
    await fs.mkdir(temporary, { recursive: true });
    try {
      await copyTree(config.documentRoot, path.join(temporary, 'documents'), manifest);
      manifest.files.sort((a, b) => a.path.localeCompare(b.path));
      await fs.writeFile(path.join(temporary, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
      await fs.rename(temporary, destination);
      return { name, path: destination, ...manifest };
    } catch (error) {
      await fs.rm(temporary, { recursive: true, force: true });
      throw error;
    }
  }));
}

export async function listBackups(config) {
  await fs.mkdir(config.backupRoot, { recursive: true });
  const entries = await fs.readdir(config.backupRoot, { withFileTypes: true });
  const backups = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('.')) continue;
    const full = path.join(config.backupRoot, entry.name);
    try {
      const manifest = JSON.parse(await fs.readFile(path.join(full, 'manifest.json'), 'utf8'));
      backups.push({ name: entry.name, createdAt: manifest.createdAt, fileCount: manifest.files?.length ?? 0 });
    } catch {
      const stat = await fs.stat(full);
      backups.push({ name: entry.name, createdAt: stat.mtime.toISOString(), fileCount: null });
    }
  }
  return backups.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function pruneBackups(config, now = new Date()) {
  const cutoff = now.getTime() - config.backupRetentionDays * 24 * 60 * 60 * 1000;
  const backups = await listBackups(config);
  const removed = [];
  for (const backup of backups) {
    const timestamp = Date.parse(backup.createdAt);
    if (Number.isFinite(timestamp) && timestamp < cutoff) {
      await fs.rm(path.join(config.backupRoot, backup.name), { recursive: true, force: true });
      removed.push(backup.name);
    }
  }
  return removed;
}

export async function runBackupCycle(config, now = new Date()) {
  const backup = await createBackup(config, now);
  const removed = await pruneBackups(config, now);
  return { backup, removed };
}

export function startBackupScheduler(config, logger = console) {
  const intervalMs = config.backupIntervalMinutes * 60 * 1000;
  let timer;
  let stopped = false;

  const schedule = () => {
    if (stopped) return;
    const now = Date.now();
    const nextBoundary = Math.ceil(now / intervalMs) * intervalMs;
    const delay = Math.max(1000, nextBoundary - now);
    timer = setTimeout(async () => {
      try {
        const result = await runBackupCycle(config);
        logger.info?.(`[backup] created ${result.backup.name}; removed ${result.removed.length} expired snapshots`);
      } catch (error) {
        logger.error?.('[backup] snapshot failed', error);
      } finally {
        schedule();
      }
    }, delay);
    timer.unref?.();
  };

  const initial = (async () => {
    try {
      const backups = await listBackups(config);
      const newest = backups[0] ? Date.parse(backups[0].createdAt) : 0;
      if (!newest || Date.now() - newest >= intervalMs) {
        const result = await runBackupCycle(config);
        logger.info?.(`[backup] initial snapshot ${result.backup.name}`);
      } else {
        await pruneBackups(config);
      }
    } catch (error) {
      logger.error?.('[backup] initial snapshot failed', error);
    }
  })();
  schedule();

  return {
    initial,
    stop() {
      stopped = true;
      if (timer) clearTimeout(timer);
    },
  };
}
