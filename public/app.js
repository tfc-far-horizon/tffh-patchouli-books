import { renderParsedDocument, extractWarnings } from './ast-renderer.js';
import { threeWayMerge, resolveFirstConflict, countConflictMarkers } from './merge.js';

const $ = (selector) => document.querySelector(selector);
const elements = {
  fileList: $('#file-list'),
  fileCount: $('#file-count'),
  fileFilter: $('#file-filter'),
  currentPath: $('#current-path'),
  dirty: $('#dirty-indicator'),
  revision: $('#revision-label'),
  saveStatus: $('#save-status'),
  editor: $('#editor'),
  lines: $('#line-numbers'),
  preview: $('#preview'),
  warnings: $('#warnings'),
  ast: $('#ast'),
  parseStatus: $('#parse-status'),
  problemBadge: $('#problem-badge'),
  parserDot: $('#parser-dot'),
  parserStatus: $('#parser-status'),
  save: $('#save-file'),
  rename: $('#rename-file'),
  delete: $('#delete-file'),
  pathDialog: $('#path-dialog'),
  pathForm: $('#path-form'),
  pathDialogTitle: $('#path-dialog-title'),
  pathDialogDescription: $('#path-dialog-description'),
  pathInput: $('#path-input'),
  pathError: $('#path-error'),
  pathSubmit: $('#path-submit'),
  mergeDialog: $('#merge-dialog'),
  mergeBase: $('#merge-base'),
  mergeYours: $('#merge-yours'),
  mergeServer: $('#merge-server'),
  mergeResult: $('#merge-result'),
  mergeCount: $('#merge-conflict-count'),
  mergeMessage: $('#merge-message'),
  toastRegion: $('#toast-region'),
};

const state = {
  files: [],
  path: null,
  baseContent: '',
  revision: null,
  dirty: false,
  saving: false,
  saveAgain: false,
  parseTimer: null,
  parseController: null,
  parseSequence: 0,
  autosaveTimer: null,
  pathMode: 'create',
  merge: null,
};

class ApiError extends Error {
  constructor(status, data) {
    super(data?.message || `HTTP ${status}`);
    this.status = status;
    this.data = data;
  }
}

async function api(url, options = {}) {
  const headers = { ...(options.headers ?? {}) };
  if (options.body != null && typeof options.body !== 'string') {
    headers['content-type'] = 'application/json';
    options.body = JSON.stringify(options.body);
  }
  const response = await fetch(url, { ...options, headers });
  let data;
  try { data = await response.json(); } catch { data = null; }
  if (!response.ok) throw new ApiError(response.status, data);
  return data;
}

function toast(message, type = '') {
  const node = document.createElement('div');
  node.className = `toast ${type}`;
  node.textContent = message;
  elements.toastRegion.append(node);
  setTimeout(() => node.remove(), 4200);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KiB`;
  return `${(bytes / 1024 ** 2).toFixed(1)} MiB`;
}

function setDirty(value) {
  state.dirty = value;
  elements.dirty.hidden = !value;
  elements.save.disabled = !state.path || state.saving || !value;
  elements.saveStatus.textContent = state.saving ? '正在保存…' : value ? '等待保存' : state.path ? '已保存' : '未打开文件';
}

function updateDocumentUi() {
  elements.currentPath.textContent = state.path ?? '未选择文件';
  elements.revision.textContent = state.revision ? `revision ${state.revision.slice(0, 10)}` : 'revision —';
  elements.editor.disabled = !state.path;
  elements.rename.disabled = !state.path;
  elements.delete.disabled = !state.path;
  setDirty(state.dirty);
  renderFileList();
}

function updateLineNumbers() {
  const count = Math.max(1, elements.editor.value.split('\n').length);
  elements.lines.textContent = Array.from({ length: count }, (_, index) => index + 1).join('\n');
  elements.lines.scrollTop = elements.editor.scrollTop;
}

function renderFileList() {
  const filter = elements.fileFilter.value.trim().toLowerCase();
  elements.fileList.replaceChildren();
  const visible = state.files.filter((file) => file.path.toLowerCase().includes(filter));
  for (const file of visible) {
    const button = document.createElement('button');
    button.className = `file-item${file.path === state.path ? ' active' : ''}`;
    button.title = `${file.path}\n${formatBytes(file.size)}`;
    const icon = document.createElement('span');
    icon.className = 'file-icon';
    icon.textContent = file.path.endsWith('.md') ? '◇' : '·';
    const label = document.createElement('span');
    label.textContent = file.path;
    button.append(icon, label);
    button.addEventListener('click', () => openFile(file.path));
    elements.fileList.append(button);
  }
  if (visible.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = state.files.length ? '没有匹配的文件' : '文档根目录为空';
    elements.fileList.append(empty);
  }
  elements.fileCount.textContent = String(state.files.length);
}

async function refreshFiles() {
  try {
    const data = await api('/api/files');
    state.files = data.files;
    renderFileList();
  } catch (error) {
    toast(`读取文件列表失败：${error.message}`, 'error');
  }
}

async function openFile(path) {
  if (path === state.path) return;
  if (state.dirty && !confirm(`“${state.path}”有未保存修改。放弃这些修改并打开其他文件？`)) return;
  try {
    elements.saveStatus.textContent = '正在读取…';
    const file = await api(`/api/file?path=${encodeURIComponent(path)}`);
    state.path = file.path;
    state.baseContent = file.content;
    state.revision = file.revision;
    state.dirty = false;
    elements.editor.value = file.content;
    updateLineNumbers();
    updateDocumentUi();
    scheduleParse(true);
  } catch (error) {
    toast(`打开文件失败：${error.message}`, 'error');
  }
}

function scheduleParse(immediate = false) {
  clearTimeout(state.parseTimer);
  state.parseController?.abort();
  const sequence = ++state.parseSequence;
  const run = async () => {
    if (!state.path) return;
    const controller = new AbortController();
    state.parseController = controller;
    elements.parseStatus.textContent = 'WASM parser 正在解析…';
    try {
      const result = await api('/api/parse', {
        method: 'POST',
        body: { content: elements.editor.value },
        signal: controller.signal,
      });
      if (sequence !== state.parseSequence) return;
      renderParseResult(result);
    } catch (error) {
      if (error.name === 'AbortError') return;
      elements.parseStatus.textContent = 'parser 不可用';
      renderParsedDocument(elements.preview, {
        ok: false,
        parseError: error.data?.message || error.message,
      });
      elements.ast.textContent = JSON.stringify(error.data ?? { error: error.message }, null, 2);
      renderWarnings([]);
    }
  };
  state.parseTimer = setTimeout(run, immediate ? 0 : 350);
}

function renderParseResult(result) {
  renderParsedDocument(elements.preview, result);
  elements.ast.textContent = result.ok
    ? JSON.stringify(result.document, null, 2)
    : result.raw || result.parseError || '';
  const warnings = extractWarnings(result);
  renderWarnings(warnings, result);
  const summary = result.ok
    ? `解析完成 · ${result.problemCount} 个问题`
    : '语法解析失败';
  elements.parseStatus.textContent = summary;
}

function renderWarnings(warnings, result = null) {
  elements.warnings.replaceChildren();
  const count = Number.isFinite(result?.problemCount) ? result.problemCount : warnings.length;
  elements.problemBadge.textContent = String(Math.max(0, count));
  if (result && !result.ok) {
    const item = document.createElement('div');
    item.className = 'diagnostic';
    const pre = document.createElement('pre');
    pre.textContent = result.parseError;
    item.append(pre);
    elements.warnings.append(item);
    return;
  }
  if (warnings.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.textContent = 'parser 没有返回 warning';
    elements.warnings.append(empty);
    return;
  }
  warnings.forEach((warning) => {
    const item = document.createElement('div');
    item.className = 'diagnostic';
    const pre = document.createElement('pre');
    pre.textContent = typeof warning === 'string' ? warning : JSON.stringify(warning, null, 2);
    item.append(pre);
    elements.warnings.append(item);
  });
}

function scheduleAutosave() {
  clearTimeout(state.autosaveTimer);
  state.autosaveTimer = setTimeout(() => saveFile(), 2500);
}

async function saveFile() {
  if (!state.path || !state.dirty) return;
  if (state.saving) {
    state.saveAgain = true;
    return;
  }
  const content = elements.editor.value;
  const request = {
    content,
    baseRevision: state.revision,
    baseContent: state.baseContent,
  };
  state.saving = true;
  updateDocumentUi();
  try {
    const file = await api(`/api/file?path=${encodeURIComponent(state.path)}`, {
      method: 'PUT',
      body: request,
    });
    state.revision = file.revision;
    state.baseContent = content;
    setDirty(elements.editor.value !== content);
    elements.revision.textContent = `revision ${file.revision.slice(0, 10)}`;
    toast(`已保存 ${state.path}`, 'success');
    await refreshFiles();
  } catch (error) {
    if (error.status === 409 && error.data?.error === 'revision_conflict') {
      openMerge({ ...error.data, localContent: elements.editor.value });
    } else {
      toast(`保存失败：${error.message}`, 'error');
    }
  } finally {
    state.saving = false;
    updateDocumentUi();
    if (state.saveAgain) {
      state.saveAgain = false;
      if (state.dirty && !elements.mergeDialog.open) saveFile();
    }
  }
}

function openMerge(conflict) {
  state.merge = {
    path: conflict.path || state.path,
    baseContent: conflict.baseContent,
    localContent: conflict.localContent,
    remoteContent: conflict.remoteContent,
    remoteRevision: conflict.remoteRevision,
  };
  elements.mergeBase.value = state.merge.baseContent;
  elements.mergeYours.value = state.merge.localContent;
  elements.mergeServer.value = state.merge.remoteContent;
  applyAutoMerge();
  elements.mergeMessage.textContent = '保存时会以 Server revision 为新基线再次执行原子比较。';
  if (!elements.mergeDialog.open) elements.mergeDialog.showModal();
}

function applyAutoMerge() {
  const merged = threeWayMerge(
    elements.mergeBase.value,
    elements.mergeYours.value,
    elements.mergeServer.value,
  );
  elements.mergeResult.value = merged.text;
  updateMergeCount();
}

function updateMergeCount() {
  const count = countConflictMarkers(elements.mergeResult.value);
  elements.mergeCount.textContent = `${count} 个待解决冲突`;
  elements.mergeCount.style.color = count ? 'var(--amber)' : 'var(--green)';
}

function resolveCurrent(choice) {
  const result = resolveFirstConflict(elements.mergeResult.value, choice);
  if (!result.resolved) {
    toast('合并结果中没有冲突标记');
    return;
  }
  elements.mergeResult.value = result.text;
  updateMergeCount();
}

async function saveMergeResult() {
  if (!state.merge) return;
  const content = elements.mergeResult.value;
  if (countConflictMarkers(content) > 0 && !confirm('合并结果仍含有冲突标记。仍然保存？')) return;
  elements.mergeMessage.textContent = '正在以服务器最新 revision 保存…';
  try {
    const file = await api(`/api/file?path=${encodeURIComponent(state.merge.path)}`, {
      method: 'PUT',
      body: {
        content,
        baseRevision: state.merge.remoteRevision,
        baseContent: state.merge.remoteContent,
      },
    });
    state.path = file.path;
    state.revision = file.revision;
    state.baseContent = content;
    elements.editor.value = content;
    setDirty(false);
    updateLineNumbers();
    updateDocumentUi();
    scheduleParse(true);
    elements.mergeDialog.close();
    state.merge = null;
    toast('合并结果已保存', 'success');
    await refreshFiles();
  } catch (error) {
    if (error.status === 409 && error.data?.error === 'revision_conflict') {
      const previousResult = content;
      state.merge = {
        path: error.data.path || state.path,
        baseContent: error.data.baseContent,
        localContent: previousResult,
        remoteContent: error.data.remoteContent,
        remoteRevision: error.data.remoteRevision,
      };
      elements.mergeBase.value = state.merge.baseContent;
      elements.mergeYours.value = previousResult;
      elements.mergeServer.value = state.merge.remoteContent;
      applyAutoMerge();
      elements.mergeMessage.textContent = '合并期间服务器再次变化；已用刚才结果作为 Yours 重新合并。';
    } else {
      elements.mergeMessage.textContent = `保存失败：${error.message}`;
    }
  }
}

function showPathDialog(mode) {
  state.pathMode = mode;
  elements.pathError.hidden = true;
  if (mode === 'create') {
    elements.pathDialogTitle.textContent = '新建文件';
    elements.pathDialogDescription.textContent = '路径相对于服务器 DOCUMENT_ROOT。父目录会自动创建。';
    elements.pathInput.value = 'new-document.md';
  } else {
    elements.pathDialogTitle.textContent = '重命名文件';
    elements.pathDialogDescription.textContent = `重命名 ${state.path}`;
    elements.pathInput.value = state.path;
  }
  elements.pathDialog.showModal();
  elements.pathInput.select();
}

async function submitPathDialog() {
  const path = elements.pathInput.value.trim();
  if (!path) return;
  elements.pathError.hidden = true;
  try {
    if (state.pathMode === 'create') {
      const file = await api('/api/file', { method: 'POST', body: { path, content: '' } });
      elements.pathDialog.close();
      await refreshFiles();
      await openFile(file.path);
      elements.editor.focus();
    } else {
      const file = await api('/api/rename', {
        method: 'POST',
        body: { from: state.path, to: path, baseRevision: state.revision },
      });
      state.path = file.path;
      state.revision = file.revision;
      elements.pathDialog.close();
      updateDocumentUi();
      await refreshFiles();
      toast(`已重命名为 ${file.path}`, 'success');
    }
  } catch (error) {
    if (error.status === 409 && error.data?.error === 'revision_conflict') {
      elements.pathDialog.close();
      toast('重命名前文件已变化，请重新读取或先保存本地内容。', 'error');
    } else {
      elements.pathError.textContent = error.message;
      elements.pathError.hidden = false;
    }
  }
}

async function deleteCurrentFile() {
  if (!state.path) return;
  if (!confirm(`删除“${state.path}”？此操作不会修改已有备份。`)) return;
  try {
    await api(`/api/file?path=${encodeURIComponent(state.path)}`, {
      method: 'DELETE',
      body: { baseRevision: state.revision },
    });
    const deleted = state.path;
    state.path = null;
    state.revision = null;
    state.baseContent = '';
    state.dirty = false;
    elements.editor.value = '';
    updateLineNumbers();
    updateDocumentUi();
    renderParsedDocument(elements.preview, null);
    elements.ast.textContent = '';
    renderWarnings([]);
    await refreshFiles();
    toast(`已删除 ${deleted}`, 'success');
  } catch (error) {
    if (error.status === 409) toast('删除失败：文件已被其他用户修改，请重新打开后再删除。', 'error');
    else toast(`删除失败：${error.message}`, 'error');
  }
}

async function backupNow() {
  try {
    const result = await api('/api/backups', { method: 'POST', body: {} });
    toast(`备份已创建：${result.backup.name}`, 'success');
  } catch (error) {
    toast(`备份失败：${error.message}`, 'error');
  }
}

async function checkStatus() {
  try {
    const status = await api('/api/status');
    if (status.parser.ready) {
      elements.parserDot.className = 'status-dot ready';
      elements.parserStatus.textContent = '仓库 WASM parser 已加载';
    } else if (status.parser.loading) {
      elements.parserStatus.textContent = '正在加载仓库 WASM parser…';
      setTimeout(checkStatus, 800);
    } else {
      elements.parserDot.className = 'status-dot error';
      elements.parserStatus.textContent = status.parser.error || 'WASM parser 不可用';
    }
  } catch (error) {
    elements.parserDot.className = 'status-dot error';
    elements.parserStatus.textContent = `状态检查失败：${error.message}`;
  }
}

elements.editor.addEventListener('input', () => {
  setDirty(elements.editor.value !== state.baseContent);
  updateLineNumbers();
  scheduleParse();
  if (state.dirty) scheduleAutosave();
});
elements.editor.addEventListener('scroll', () => { elements.lines.scrollTop = elements.editor.scrollTop; });
elements.editor.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    const start = elements.editor.selectionStart;
    const end = elements.editor.selectionEnd;
    elements.editor.setRangeText('  ', start, end, 'end');
    elements.editor.dispatchEvent(new Event('input'));
  }
});

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
    event.preventDefault();
    saveFile();
  }
});

elements.fileFilter.addEventListener('input', renderFileList);
$('#refresh-files').addEventListener('click', refreshFiles);
$('#new-file').addEventListener('click', () => showPathDialog('create'));
elements.rename.addEventListener('click', () => showPathDialog('rename'));
elements.delete.addEventListener('click', deleteCurrentFile);
elements.save.addEventListener('click', saveFile);
$('#backup-now').addEventListener('click', backupNow);

$('#path-cancel').addEventListener('click', () => elements.pathDialog.close());
elements.pathForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitPathDialog();
});

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((candidate) => candidate.classList.toggle('active', candidate === tab));
    document.querySelectorAll('.tab-panel').forEach((panel) => panel.classList.toggle('active', panel.id === tab.dataset.tab));
  });
});

$('#close-merge').addEventListener('click', () => {
  elements.mergeDialog.close();
  toast('合并尚未保存，本地编辑内容仍保留在编辑器中。');
});
$('#merge-auto').addEventListener('click', applyAutoMerge);
$('#merge-use-yours').addEventListener('click', () => { elements.mergeResult.value = elements.mergeYours.value; updateMergeCount(); });
$('#merge-use-server').addEventListener('click', () => { elements.mergeResult.value = elements.mergeServer.value; updateMergeCount(); });
$('#resolve-yours').addEventListener('click', () => resolveCurrent('ours'));
$('#resolve-server').addEventListener('click', () => resolveCurrent('theirs'));
$('#resolve-both').addEventListener('click', () => resolveCurrent('both'));
$('#save-merge').addEventListener('click', saveMergeResult);
elements.mergeResult.addEventListener('input', updateMergeCount);

window.addEventListener('beforeunload', (event) => {
  if (!state.dirty) return;
  event.preventDefault();
  event.returnValue = '';
});

renderParsedDocument(elements.preview, null);
renderWarnings([]);
updateLineNumbers();
updateDocumentUi();
await Promise.all([refreshFiles(), checkStatus()]);
if (state.files.length > 0) await openFile(state.files[0].path);
