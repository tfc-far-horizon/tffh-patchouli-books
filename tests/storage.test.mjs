import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { loadConfig } from '../lib/config.mjs';
import { createFile, readFile, updateFile } from '../lib/storage.mjs';
import { RevisionConflictError } from '../lib/errors.mjs';

async function fixture() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'patchouli-storage-'));
  const config = loadConfig({
    documentRoot: path.join(root, 'documents'),
    backupRoot: path.join(root, 'backups'),
    parserRoot: path.join(root, 'parser'),
    lockWaitMs: 2000,
    lockStaleMs: 5000,
  });
  return { root, config };
}

test('update uses an exact content revision and reports all three merge inputs', async (t) => {
  const { root, config } = await fixture();
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const original = await createFile(config, 'guide.md', 'base\n');
  const first = await updateFile(config, 'guide.md', {
    content: 'server\n',
    baseRevision: original.revision,
    baseContent: original.content,
  });
  assert.equal(first.content, 'server\n');

  await assert.rejects(
    updateFile(config, 'guide.md', {
      content: 'yours\n',
      baseRevision: original.revision,
      baseContent: original.content,
    }),
    (error) => {
      assert.ok(error instanceof RevisionConflictError);
      assert.equal(error.details.baseContent, 'base\n');
      assert.equal(error.details.localContent, 'yours\n');
      assert.equal(error.details.remoteContent, 'server\n');
      assert.equal(error.details.remoteRevision, first.revision);
      return true;
    },
  );
});

test('two simultaneous writes from one revision cannot both win', async (t) => {
  const { root, config } = await fixture();
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const original = await createFile(config, 'race.md', 'zero');
  const requests = ['one', 'two'].map((content) => updateFile(config, 'race.md', {
    content,
    baseRevision: original.revision,
    baseContent: original.content,
  }));
  const results = await Promise.allSettled(requests);
  assert.equal(results.filter((result) => result.status === 'fulfilled').length, 1);
  assert.equal(results.filter((result) => result.status === 'rejected' && result.reason instanceof RevisionConflictError).length, 1);
  const current = await readFile(config, 'race.md');
  assert.ok(current.content === 'one' || current.content === 'two');
});
