import test from 'node:test';
import assert from 'node:assert/strict';
import { threeWayMerge, resolveFirstConflict, countConflictMarkers } from '../public/merge.js';

test('three-way merge combines non-overlapping line changes', () => {
  const base = 'a\nb\nc\nd';
  const ours = 'A\nb\nc\nd';
  const theirs = 'a\nb\nc\nD';
  const result = threeWayMerge(base, ours, theirs);
  assert.equal(result.conflicts, 0);
  assert.equal(result.text, 'A\nb\nc\nD');
});

test('three-way merge emits resolvable conflict markers for overlapping changes', () => {
  const result = threeWayMerge('a\nb\nc', 'a\nOURS\nc', 'a\nTHEIRS\nc');
  assert.equal(result.conflicts, 1);
  assert.equal(countConflictMarkers(result.text), 1);
  const resolved = resolveFirstConflict(result.text, 'theirs');
  assert.equal(resolved.resolved, true);
  assert.equal(resolved.text, 'a\nTHEIRS\nc');
});
