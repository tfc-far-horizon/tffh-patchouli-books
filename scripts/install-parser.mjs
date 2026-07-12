#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const destination = path.join(projectRoot, 'parser-dist');
const input = process.argv[2];

if (!input || input === '--help' || input === '-h') {
  console.log('Usage: node scripts/install-parser.mjs <wasm-dist-directory-or-zip>');
  console.log('Copies analyser.wasm and ghc_wasm_jsffi.mjs into parser-dist/.');
  process.exit(input ? 0 : 1);
}

let source = path.resolve(input);
let temporary = null;
const stat = await fs.stat(source).catch(() => null);
if (!stat) throw new Error(`Input does not exist: ${source}`);
if (stat.isFile()) {
  if (!source.toLowerCase().endsWith('.zip')) throw new Error('A file input must be a .zip artifact.');
  temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'patchouli-wasm-dist-'));
  await run('unzip', ['-q', source, '-d', temporary]);
  source = temporary;
}

try {
  const analyser = await findFile(source, 'analyser.wasm');
  const jsffi = await findFile(source, 'ghc_wasm_jsffi.mjs');
  const wizer = await findFile(source, 'wizer.wasm', false);
  await fs.mkdir(destination, { recursive: true });
  await Promise.all([
    fs.copyFile(analyser, path.join(destination, 'analyser.wasm')),
    fs.copyFile(jsffi, path.join(destination, 'ghc_wasm_jsffi.mjs')),
    ...(wizer ? [fs.copyFile(wizer, path.join(destination, 'wizer.wasm'))] : []),
  ]);

  const wasmBytes = await fs.readFile(path.join(destination, 'analyser.wasm'));
  await WebAssembly.compile(wasmBytes);
  const module = await import(`${pathToFileURL(path.join(destination, 'ghc_wasm_jsffi.mjs')).href}?verify=${Date.now()}`);
  if (typeof module.default !== 'function') throw new Error('Installed JSFFI module has no default function export.');
  console.log(`Installed parser bundle in ${destination}`);
  console.log('  analyser.wasm');
  console.log('  ghc_wasm_jsffi.mjs');
  if (wizer) console.log('  wizer.wasm');
} finally {
  if (temporary) await fs.rm(temporary, { recursive: true, force: true });
}

async function findFile(root, filename, required = true) {
  const queue = [root];
  while (queue.length) {
    const directory = queue.shift();
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name);
      if (entry.isFile() && entry.name === filename) return full;
      if (entry.isDirectory()) queue.push(full);
    }
  }
  if (required) throw new Error(`Could not find ${filename} below ${root}`);
  return null;
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) => code === 0 ? resolve() : reject(new Error(`${command} exited with ${code}`)));
  });
}
