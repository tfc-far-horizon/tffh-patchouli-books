# Parser bundle

Place the `patchouli-markdown` build outputs here:

- `analyser.wasm`
- `ghc_wasm_jsffi.mjs`
- `wizer.wasm` (optional at runtime)

Recommended:

```bash
node scripts/install-parser.mjs /path/to/wasm-dist
```

The application deliberately has no fallback Markdown parser. `/api/parse` returns HTTP 503 until the repository's parser bundle is installed.
