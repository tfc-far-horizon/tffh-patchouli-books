import YAML from 'yaml';

export const TFC_RECIPE_TYPES = new Set([
  'tfc:knapping_recipe', 'tfc:anvil_recipe', 'tfc:heat_recipe', 'tfc:quern_recipe',
  'tfc:sealed_barrel_recipe', 'tfc:rock_knapping_recipe', 'tfc:loom_recipe',
  'tfc:welding_recipe', 'tfc:glassworking_recipe', 'tfc:drying_recipe',
  'tfc:tri_anvil_recipe', 'tfc:instant_barrel_recipe',
]);

export function patchouliTextToIgem(text) {
  return String(text ?? '')
    .replaceAll('$(br2)', '\n\n')
    .replaceAll('$(br)', '\n')
    .replace(/\$\(l:([^)]+)\)(.*?)\$\(\)/g, (_, target, label) => `[${label}](${target})`)
    .replace(/\$\(bold\)(.*?)\$\(\)/g, '^$1^')
    .replaceAll('$', '\\$');
}

function yamlFence(language, value) {
  const body = YAML.stringify(value, { lineWidth: 0 }).trimEnd();
  return `\`\`\`${language}\n${body}\n\`\`\``;
}

function renderPage(page) {
  if (!page || typeof page !== 'object') return '+ _untitled_';
  const title = page.title ?? '_untitled_';
  const lines = [`+ ${title}`];
  if (page.anchor) lines.push(`\t[](#${page.anchor})`);
  if (page.type === 'patchouli:text') {
    if (page.text) lines.push(...patchouliTextToIgem(page.text).split('\n').map((line) => `\t${line}`));
  } else if (page.type === 'patchouli:empty') {
    // The title-only page is intentional.
  } else if (page.type === 'patchouli:crafting') {
    const recipes = [page.recipe, page.recipe2].filter(Boolean);
    lines.push(`\t${yamlFence('patchouli:crafting', recipes.join('\n')).replaceAll('\n', '\n\t')}`);
    if (page.text) lines.push(...patchouliTextToIgem(page.text).split('\n').map((line) => `\t${line}`));
  } else if (page.type.startsWith('raw/')) {
    lines.push(`\t${yamlFence(page.type, page).replaceAll('\n', '\n\t')}`);
  } else if (TFC_RECIPE_TYPES.has(page.type) || page.type.startsWith('patchouli:') || page.type.startsWith('tfc:')) {
    const data = { ...page }; delete data.type; delete data.title; delete data.anchor; delete data.text;
    lines.push(`\t${yamlFence(page.type, data).replaceAll('\n', '\n\t')}`);
    if (page.text) lines.push(...patchouliTextToIgem(page.text).split('\n').map((line) => `\t${line}`));
  } else {
    lines.push(`\t${yamlFence(`raw/${page.type}`, page).replaceAll('\n', '\n\t')}`);
  }
  return lines.join('\n');
}

export function patchouliBookToMarkdown({ category, entries = [] }) {
  if (!category || typeof category.id !== 'string') throw new TypeError('category.id is required');
  const categoryMeta = { id: category.id, ...category };
  const lines = [yamlFence('patchouli-category', categoryMeta), ''];
  for (const entry of entries) {
    const id = entry.id ?? `${category.id}/entry`;
    lines.push(`#${entry.name ?? id}`, '');
    const metadata = { id, ...entry };
    delete metadata.pages;
    lines.push(yamlFence('patchouli-entry', metadata), '');
    for (const page of entry.pages ?? []) lines.push(renderPage(page), '');
  }
  return `${lines.join('\n').replace(/\n{4,}/g, '\n\n\n').trimEnd()}\n`;
}
