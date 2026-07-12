import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { WASI } from 'node:wasi';
import { withKeyedMutex } from './locks.mjs';

export class PatchouliWasmParser {
  #config;
  #exports;
  #status = { ready: false, loading: false, error: null };
  #loadPromise;

  constructor(config) {
    this.#config = config;
  }

  get status() {
    return { ...this.#status, wasm: this.#config.parserWasm, jsffi: this.#config.parserJsffi };
  }

  async load() {
    if (this.#exports) return this.#exports;
    if (this.#loadPromise) return this.#loadPromise;
    this.#status = { ready: false, loading: true, error: null };
    this.#loadPromise = this.#loadInternal().catch((error) => {
      this.#status = { ready: false, loading: false, error: error.message };
      this.#loadPromise = undefined;
      throw error;
    });
    return this.#loadPromise;
  }

  async #loadInternal() {
    await Promise.all([fs.access(this.#config.parserWasm), fs.access(this.#config.parserJsffi)]);
    const jsffiModule = await import(`${pathToFileURL(this.#config.parserJsffi).href}?mtime=${Date.now()}`);
    if (typeof jsffiModule.default !== 'function') {
      throw new Error('ghc_wasm_jsffi.mjs does not have the expected default export.');
    }

    const exported = {};
    const wasi = new WASI({
      version: 'preview1',
      args: ['patchouli-markdown-parser'],
      env: {},
      preopens: {},
      returnOnExit: true,
    });
    const bytes = await fs.readFile(this.#config.parserWasm);
    const module = await WebAssembly.compile(bytes);
    const jsffiImports = await jsffiModule.default(exported);
    const instance = await WebAssembly.instantiate(module, {
      ghc_wasm_jsffi: jsffiImports,
      wasi_snapshot_preview1: wasi.wasiImport,
    });
    Object.assign(exported, instance.exports);
    wasi.initialize(instance);

    if (typeof exported.parse !== 'function' || typeof exported.problems !== 'function') {
      throw new Error('The WASM bundle does not export parse() and problems() through its JSFFI shim.');
    }
    this.#exports = exported;
    this.#status = { ready: true, loading: false, error: null };
    return exported;
  }

  async parse(content) {
    if (typeof content !== 'string') throw new TypeError('content must be a string');
    return withKeyedMutex('patchouli-wasm-parser', async () => {
      const exported = await this.load();
      const rawResult = await Promise.resolve(exported.parse(content));
      const problemCount = await Promise.resolve(exported.problems(content));
      const raw = String(rawResult);
      let document;
      let parseError = null;
      try {
        document = JSON.parse(raw);
      } catch {
        parseError = raw;
      }
      return {
        ok: parseError === null,
        raw,
        document: parseError === null ? document : null,
        parseError,
        problemCount: Number(problemCount),
      };
    });
  }
}
