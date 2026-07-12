import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadConfig } from '../lib/config.mjs';
import { PatchouliWasmParser } from '../lib/parser.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const wasm = path.join(projectRoot, 'parser-dist/analyser.wasm');
const jsffi = path.join(projectRoot, 'parser-dist/ghc_wasm_jsffi.mjs');
const available = await Promise.all([fs.access(wasm), fs.access(jsffi)]).then(() => true, () => false);

test('repository WASM parser returns its AST and problem count', { skip: !available && 'parser-dist is not installed' }, async () => {
  const config = loadConfig({ parserWasm: wasm, parserJsffi: jsffi, parserRequired: true });
  const parser = new PatchouliWasmParser(config);
  const result = await parser.parse('#section\n\nA ^bold^ paragraph.');
  assert.equal(result.ok, true, result.parseError ?? 'parse should succeed');
  assert.ok(Array.isArray(result.document));
  assert.equal(typeof result.problemCount, 'number');
});
