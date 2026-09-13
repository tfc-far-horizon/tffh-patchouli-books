# Patchouli JSON 与 igem-markdown 的双向转换

## 方向

```text
Patchouli JSON → Patchouli Markdown / igem-markdown → igem AST → Patchouli JSON
```

JSON → Markdown 的符号约定来自同级 `patchouli-md-studio/src/format.js`：

- category → `patchouli-category` fenced block；
- entry → `#条目名` 和 `patchouli-entry` fenced block；
- page → `+ 页面标题`；
- 正文/fenced block 缩进一个 tab；
- 链接 → `$(l:target)文本$()`；
- 粗体 → `$(bold)文本$()`；
- 段内换行/段落 → `$(br)` / `$(br2)`；
- 未知页面 → `raw/<page-type>` JSON block。

新书是手写的 `igem-markdown`，反向转换应使用 `igem-markdown` WASM AST，按上述
符号约定生成 Patchouli JSON；不能把 `old-*.md` 当成待替换的输入。

当前 server 已实现基础 AST → Patchouli JSON 文件集合：

- category 输出为 `categories/<id>.json`；
- section 输出为 `entries/<category>/<entry>.json`；
- paragraph、plain、math、link、bold、figure 已有初步映射；
- 无法表达的节点通过 warnings 报告。

仍需继续补齐：

- JSON → Markdown 的既有 `format.js` 能力在 server 中的复用或抽取；
- 完整页面类型和 TFC recipe/multiblock 映射；
- 新书源的正式 metadata 配置；
- JSON 文件集合的 diff、备份和确认式写入。
