function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = String(text);
  return node;
}

function contentArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

function appendContent(parent, value) {
  for (const node of contentArray(value)) parent.append(renderNode(node));
}

function renderUnknown(node) {
  const details = element('details', 'ast-unknown');
  details.append(element('summary', '', `Unsupported AST node: ${node?.type ?? typeof node}`));
  details.append(element('pre', '', JSON.stringify(node, null, 2)));
  return details;
}

export function renderNode(node) {
  if (node == null) return document.createTextNode('');
  if (typeof node === 'string' || typeof node === 'number') return document.createTextNode(String(node));
  if (Array.isArray(node)) {
    const fragment = document.createDocumentFragment();
    node.forEach((child) => fragment.append(renderNode(child)));
    return fragment;
  }

  switch (node.type) {
    case 'plain':
      return document.createTextNode(node.content ?? '');
    case 'paragraph': {
      const p = element('span', 'md-paragraph');
      appendContent(p, node.content);
      return p;
    }
    case 'italic': {
      const em = element('em');
      appendContent(em, node.content);
      return em;
    }
    case 'bold': {
      const strong = element('strong');
      appendContent(strong, node.content);
      return strong;
    }
    case 'underlined': {
      const underline = element('u');
      appendContent(underline, node.content);
      return underline;
    }
    case 'math': {
      const math = element(node.mode === 'display' ? 'div' : 'span', `math math-${node.mode ?? 'inline'}`);
      math.textContent = node.content ?? '';
      return math;
    }
    case 'link': {
      const link = element('a');
      link.href = node.link ?? '#';
      link.target = '_blank';
      link.rel = 'noreferrer';
      appendContent(link, node.text);
      return link;
    }
    case 'figure': {
      const figure = element('figure', 'md-figure');
      const image = element('img');
      image.src = node.path ?? '';
      image.alt = '';
      image.loading = 'lazy';
      image.addEventListener('error', () => image.classList.add('image-error'));
      figure.append(image);
      const caption = element('figcaption');
      appendContent(caption, node.caption);
      figure.append(caption);
      return figure;
    }
    case 'section': {
      const section = element('section', 'md-section');
      const heading = element('h2');
      appendContent(heading, node.title);
      section.append(heading);
      if (node.date) section.append(element('time', 'section-date', node.date));
      appendContent(section, node.content);
      return section;
    }
    case 'itemization': {
      const list = element('ul', 'md-list');
      contentArray(node.items).forEach((item) => list.append(renderNode(item)));
      return list;
    }
    case 'normal-item': {
      const item = element('li', 'md-list-item');
      const title = element('div', 'list-title');
      appendContent(title, node.title);
      item.append(title);
      appendContent(item, node.content);
      return item;
    }
    case 'plain-item': {
      const item = element('li', 'md-list-item plain-list-item');
      appendContent(item, node.content);
      return item;
    }
    case 'code-block': {
      const wrapper = element('section', 'code-card');
      const header = element('header', 'code-card-header');
      header.append(element('span', 'code-language', node.language || 'text'));
      if (node['line-number'] != null) header.append(element('span', 'code-line-number', `starts at ${node['line-number']}`));
      const pre = element('pre');
      pre.append(element('code', '', node.content ?? ''));
      wrapper.append(header, pre);
      return wrapper;
    }
    case 'table': {
      const wrapper = element('div', 'table-wrapper');
      const table = element('table');
      const rows = node.rows ?? node.content ?? [];
      for (const rowValue of contentArray(rows)) {
        const tr = element('tr');
        const cells = rowValue.cells ?? rowValue.content ?? rowValue;
        for (const cellValue of contentArray(cells)) {
          const td = element('td');
          appendContent(td, cellValue.content ?? cellValue);
          tr.append(td);
        }
        table.append(tr);
      }
      wrapper.append(table);
      return wrapper;
    }
    default:
      return renderUnknown(node);
  }
}

export function renderParsedDocument(target, parseResult) {
  target.replaceChildren();
  if (!parseResult) {
    target.append(element('div', 'empty-state', '等待解析…'));
    return;
  }
  if (!parseResult.ok) {
    const error = element('pre', 'parse-error', parseResult.parseError || 'Parser failed without an error message.');
    target.append(error);
    return;
  }
  const payload = parseResult.document;
  const nodes = Array.isArray(payload) && Array.isArray(payload[0]) ? payload[0] : payload;
  const article = element('article', 'rendered-document');
  appendContent(article, nodes);
  target.append(article);
}

export function extractWarnings(parseResult) {
  const payload = parseResult?.document;
  if (!Array.isArray(payload) || !Array.isArray(payload[1])) return [];
  return payload[1];
}
