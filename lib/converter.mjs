function textOf(node) {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (node.type === 'plain' || node.type === 'math') return node.content ?? '';
  if (node.type === 'paragraph') return textOf(node.content);
  if (node.type === 'link') return textOf(node.text);
  if (node.type === 'figure') return textOf(node.caption);
  return textOf(node.content ?? node.title);
}

function inline(node, context) {
  if (node == null) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map((item) => inline(item, context)).join('');
  switch (node.type) {
    case 'plain': return node.content ?? '';
    case 'paragraph': return inline(node.content, context);
    case 'math': return node.mode === 'display' ? `\\[${node.content ?? ''}\\]` : `$${node.content ?? ''}$`;
    case 'link': return `$(l:${node.link ?? ''})${inline(node.text, context)}$()`;
    case 'bold': return `$(bold)${inline(node.content, context)}$()`;
    case 'italic':
    case 'underlined': context.warnings.push({ nodeType: node.type, message: `${node.type} emitted as plain text` }); return inline(node.content, context);
    default: context.warnings.push({ nodeType: node.type, message: 'unsupported inline node emitted as text' }); return textOf(node);
  }
}

function textPage(nodes, context) {
  const paragraphs = [];
  for (const node of nodes) {
    if (node?.type === 'paragraph' || node?.type === 'math') paragraphs.push(inline(node, context));
    else if (node?.type === 'code-block') { paragraphs.push(`\\n${node.content ?? ''}`); context.warnings.push({ nodeType: node.type, message: 'code block emitted in a text page' }); }
    else if (node) context.warnings.push({ nodeType: node.type, message: `${node.type} has no dedicated Patchouli page mapping` });
  }
  return paragraphs.filter(Boolean).length ? { type: 'patchouli:text', text: paragraphs.filter(Boolean).join('$(br2)') } : null;
}

function overridesFor(entries, title, index) {
  if (Array.isArray(entries)) return entries[index] ?? {};
  return entries?.[title] ?? entries?.[String(index)] ?? {};
}

function slug(value, fallback) {
  const result = String(value ?? '').trim().toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, '_').replace(/^_+|_+$/g, '');
  return result || fallback;
}

export function convertIgemAstToPatchouliFiles(document, { category, entries = {} } = {}) {
  if (!category || typeof category.id !== 'string' || typeof category.name !== 'string') throw new TypeError('category.id and category.name are required');
  const nodes = Array.isArray(document) && Array.isArray(document[0]) ? document[0] : document;
  if (!Array.isArray(nodes)) throw new TypeError('document must be an AST node array or [nodes, warnings]');
  const warnings = [];
  const categoryJson = { ...category }; delete categoryJson.id;
  const files = [{ path: `categories/${category.id}.json`, content: `${JSON.stringify(categoryJson, null, 2)}\n` }];
  let entryCount = 0;
  for (const node of nodes) {
    if (node?.type !== 'section') { warnings.push({ nodeType: node?.type ?? typeof node, message: 'top-level node omitted; only sections become entries' }); continue; }
    const title = textOf(node.title).trim() || `Untitled ${entryCount + 1}`;
    const override = overridesFor(entries, title, entryCount);
    const rawId = override.id ?? `${category.id}/${slug(title, `entry_${entryCount + 1}`)}`;
    const entryId = rawId.includes('/') ? rawId.split(/\/(.+)/)[1] : rawId;
    const meta = { ...override, name: override.name ?? title, category: override.category ?? category.id }; delete meta.id;
    const pages = [];
    let textNodes = [];
    for (const child of node.content ?? []) {
      if (child?.type === 'figure') {
        const page = textPage(textNodes, { warnings }); if (page) pages.push(page); textNodes = [];
        pages.push({ type: 'patchouli:image', images: [child.path ?? ''], text: inline(child.caption, { warnings }) });
      } else textNodes.push(child);
    }
    const page = textPage(textNodes, { warnings }); if (page) pages.push(page);
    files.push({ path: `entries/${category.id}/${entryId}.json`, content: `${JSON.stringify({ ...meta, pages }, null, 2)}\n` });
    entryCount += 1;
  }
  return { files, warnings, entryCount };
}

export const convertIgemAstToPatchouli = convertIgemAstToPatchouliFiles;
