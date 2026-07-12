import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { loadConfig } from '../lib/config.mjs';
import { createFile } from '../lib/storage.mjs';
import { createBackup, listBackups, pruneBackups } from '../lib/backups.mjs';

test('backup copies the document tree with manifest hashes and prunes after retention', async (t) => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'patchouli-backup-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const config = loadConfig({
    documentRoot: path.join(root, 'documents'),
    backupRoot: path.join(root, 'backups'),
    parserRoot: path.join(root, 'parser'),
    backupRetentionDays: 8,
  });
  await createFile(config, 'nested/book.md', 'hello');
  const oldDate = new Date('2026-01-01T00:00:00.000Z');
  const recentDate = new Date('2026-01-10T00:00:00.000Z');
  const old = await createBackup(config, oldDate);
  const recent = await createBackup(config, recentDate);
  assert.equal(await fs.readFile(path.join(recent.path, 'documents/nested/book.md'), 'utf8'), 'hello');
  const manifest = JSON.parse(await fs.readFile(path.join(recent.path, 'manifest.json'), 'utf8'));
  assert.equal(manifest.files[0].path, 'nested/book.md');
  assert.match(manifest.files[0].sha256, /^[a-f0-9]{64}$/);

  const removed = await pruneBackups(config, new Date('2026-01-10T00:00:01.000Z'));
  assert.deepEqual(removed, [old.name]);
  const listed = await listBackups(config);
  assert.deepEqual(listed.map((item) => item.name), [recent.name]);
});
