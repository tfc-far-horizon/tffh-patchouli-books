import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { convertIgemAstToPatchouli } from '../lib/converter.mjs';
import { patchouliBookToMarkdown, patchouliTextToIgem } from '../lib/patchouli-format.mjs';
import { loadConfig } from '../lib/config.mjs';
import { PatchouliWasmParser } from '../lib/parser.mjs';

test('converts igem sections and common inline nodes into Patchouli entries', () => {
  const result = convertIgemAstToPatchouli([[{
    type: 'section',
    title: { type: 'paragraph', content: [{ type: 'plain', content: '第一天' }] },
    content: [
      { type: 'paragraph', content: [
        { type: 'plain', content: '拿起 ' },
        { type: 'bold', content: { type: 'paragraph', content: [{ type: 'plain', content: '石头' }] } },
        { type: 'plain', content: '。' },
      ] },
      { type: 'figure', path: 'images/rock.png', caption: { type: 'paragraph', content: [{ type: 'plain', content: '示意图' }] } },
    ],
  }], []], { category: { id: 'getting_started', name: '新手入门' }, entries: { 第一天: { id: 'getting_started/day_one' } } });

  assert.equal(result.entryCount, 1);
  assert.equal(result.files.length, 2);
  const entry = JSON.parse(result.files[1].content);
  assert.equal(entry.id, undefined);
  assert.equal(entry.name, '第一天');
  assert.match(entry.pages[0].text, /\$\(bold\)石头\$\(\)/);
  assert.equal(entry.pages[1].type, 'patchouli:image');
  assert.equal(result.warnings.length, 0);
});

test('reports semantically lossy nodes instead of silently dropping them', () => {
  const result = convertIgemAstToPatchouli([{ type: 'section', title: '表格', content: [{
    type: 'table', header: [], rows: [],
  }] }], { category: { id: 'cat', name: '分类' } });
  assert.equal(result.entryCount, 1);
  assert.equal(result.warnings.length, 1);
  assert.match(result.warnings[0].message, /table/);
});

test('converts the real igem-markdown parser fixture end to end', async () => {
  const source = await fs.readFile('/home/erchius/development/igem-markdown/test.md', 'utf8');
  const parser = new PatchouliWasmParser(loadConfig({
    parserWasm: new URL('../parser-dist/analyser.wasm', import.meta.url).pathname,
    parserJsffi: new URL('../parser-dist/ghc_wasm_jsffi.mjs', import.meta.url).pathname,
  }));
  const parsed = await parser.parse(source);
  assert.equal(parsed.ok, true, parsed.parseError ?? 'fixture should parse');
  const result = convertIgemAstToPatchouli(parsed.document, {
    category: { id: 'igem_fixture', name: 'iGEM 测试书' },
  });
  assert.equal(result.entryCount, 5);
  assert.ok(result.files.some((file) => file.path === 'categories/igem_fixture.json'));
  assert.ok(result.files.some((file) => file.path.endsWith('/basic_inline_elements_and_math_formulas.json')));
  assert.ok(result.files.some((file) => file.content.includes('patchouli:image')));
  assert.ok(result.files.some((file) => file.content.includes('$(bold)')));
});

test('uses Patchouli control-code conventions for JSON to igem Markdown', () => {
  assert.equal(patchouliTextToIgem('a$(br)b$(br2)$(bold)c$() $(l:x/y)link$()'), 'a\nb\n\n^c^ [link](x/y)');
  const markdown = patchouliBookToMarkdown({
    category: { id: 'cat', name: '分类' },
    entries: [{ id: 'cat/entry', name: '条目', pages: [{ type: 'patchouli:text', text: 'a$(br2)^b^' }] }],
  });
  assert.match(markdown, /```patchouli-category/);
  assert.match(markdown, /```patchouli-entry/);
  assert.match(markdown, /\+ _untitled_/);
  assert.match(markdown, /\^b\^/);
});

test('uses raw JSON for nested multimultiblock pages', () => {
  const markdown = patchouliBookToMarkdown({
    category: { id: 'mechanics', name: 'Mechanics' },
    entries: [{ id: 'mechanics/power', name: 'Power', pages: [{
      type: 'tfc:multimultiblock', multiblocks: ['a', 'b'], text: 'keep this',
    }] }],
  });
  assert.match(markdown, /```raw\/tfc:multimultiblock/);
  assert.match(markdown, /"multiblocks": \[/);
});
