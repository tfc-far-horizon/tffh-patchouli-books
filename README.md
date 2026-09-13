# Patchouli Markdown Server

面向 `tfc-far-horizon/patchouli-markdown` 方言的服务器端编辑器。它不使用 CommonMark、markdown-it 或自制语法解析器；预览、AST 和问题计数全部来自该仓库编译生成的 `analyser.wasm` 与 `ghc_wasm_jsffi.mjs`。

## 设计边界

- 不含账户、登录、权限模型；部署在已有鉴权反向代理之后。
- 所有通过鉴权的用户都能查看和修改 `DOCUMENT_ROOT` 下的全部文件。
- 文件系统是唯一文档数据库。
- 不做 OT/CRDT 或光标同步。
- 通过 revision、全局写锁和原子替换防止覆盖写入。
- 发生并发修改时，客户端进入 Base / Yours / Server 三方合并界面。
- 每 30 分钟创建一次完整快照，默认只保留最近 8 天。

## 1. 安装仓库 parser

先在 `patchouli-markdown` 仓库中执行其构建流程，或下载 CI 的 `wasm-dist` artifact。需要的运行时文件是：

```text
analyser.wasm
ghc_wasm_jsffi.mjs
```

`wizer.wasm` 可以一并保留，但服务器运行时不依赖它。

将 artifact 目录或 ZIP 安装到本项目：

```bash
node scripts/install-parser.mjs /path/to/wasm-dist
# 或
node scripts/install-parser.mjs /path/to/wasm-dist.zip
```

安装脚本会检查 WASM 是否可编译，并验证 JSFFI 模块存在默认函数导出。服务器默认设置 `PARSER_REQUIRED=1`；parser 缺失或加载失败时会直接退出，不会退化到另一套 Markdown parser。

## 2. 启动

需要 Node.js 22 或更高版本。

```bash
npm start
```

默认地址：

```text
http://127.0.0.1:4173
```

生产环境示例：

```bash
HOST=0.0.0.0 \
PORT=4173 \
DOCUMENT_ROOT=/srv/patchouli/documents \
BACKUP_ROOT=/srv/patchouli/backups \
node server.mjs
```

反向代理应在请求到达本服务之前完成鉴权。本服务本身不读取用户身份，也不区分用户权限。

## parser 调用路径

`lib/parser.mjs` 按 GHC WASM JSFFI 的初始化方式执行：

1. 动态导入 `ghc_wasm_jsffi.mjs`。
2. 创建可变的 `__exports` 对象。
3. 用 JSFFI 模块生成 `ghc_wasm_jsffi` imports。
4. 通过 Node `WASI` 实例化 `analyser.wasm`。
5. 将 WASM exports 赋给 `__exports`，调用 `wasi.initialize(instance)`。
6. 串行调用仓库导出的异步函数：
   - `parse(markdown)`：返回 JSON AST 字符串，语法失败时返回错误文本。
   - `problems(markdown)`：返回 warning 数量，语法失败时为 `-1`。

浏览器只调用 `/api/parse` 并渲染返回 AST。它不会根据源码再次推断标题、Patchouli fenced block、列表或行内标记，因此 preview 与仓库 parser 的实际行为保持一致。未知 AST 节点以可展开 JSON 显示，避免静默丢失新节点。

## 写入并发模型

### 读取

```http
GET /api/file?path=categories/metals.md
```

响应包含：

```json
{
  "path": "categories/metals.md",
  "content": "...",
  "revision": "sha256...",
  "size": 1234,
  "mtimeMs": 1780000000000
}
```

`revision` 是文件 UTF-8 内容的 SHA-256。

### 保存

客户端发送：

```http
PUT /api/file?path=categories/metals.md
Content-Type: application/json
```

```json
{
  "content": "本地编辑后的内容",
  "baseRevision": "读取时的 revision",
  "baseContent": "读取时的完整内容"
}
```

服务器在存储锁内重新读取文件：

- 当前 revision 等于 `baseRevision`：将内容写入同目录临时文件，`fsync` 后原子 `rename` 覆盖目标文件。
- 当前 revision 不相等：返回 HTTP `409 revision_conflict`，并携带：
  - `baseContent`
  - `localContent`
  - `remoteContent`
  - `remoteRevision`

所有创建、修改、重命名、删除和备份共享一把带文件系统 lock file 的全局存储锁。单进程内有 promise mutex；多进程误部署时也会通过 `open(..., "wx")` 互斥。活跃锁定期刷新 mtime，崩溃留下的锁超过 `LOCK_STALE_MS` 后可回收。

### 合并界面

收到 409 后，客户端显示全屏四区界面：

- Base：开始编辑时的内容。
- Yours：本地待写入内容。
- Server：服务器最新内容。
- Result：可编辑的合并结果。

内置行级 diff3 会自动合并不重叠修改。重叠修改生成：

```text
<<<<<<< YOURS
...
||||||| BASE
...
=======
...
>>>>>>> SERVER
```

可逐块选择 Yours、Server 或两者，也可整体采用一方。保存 Result 时使用 `remoteRevision` 作为新基线；若合并期间又有人写入，服务器再次返回 409，界面以刚才的 Result 作为新的 Yours 继续三方合并，不会覆盖最新内容。

## 备份

默认配置：

```text
BACKUP_INTERVAL_MINUTES=30
BACKUP_RETENTION_DAYS=8
```

行为：

- 启动时若没有最近一个周期内的快照，立即备份一次。
- 后续对齐时间边界运行；默认在每小时 `:00` 和 `:30`。
- 快照期间持有与写操作相同的存储锁。
- 每个快照是独立目录：

```text
backups/
  2026-07-12T08-30-00-000Z/
    documents/
      ...
    manifest.json
```

`manifest.json` 记录每个文件的路径、大小、mtime 与 SHA-256。超过保留天数的快照目录会在备份周期后删除。

可在界面点击“立即备份”，或调用：

```http
POST /api/backups
```

## 环境变量

| 变量 | 默认值 | 说明 |
|---|---:|---|
| `HOST` | `0.0.0.0` | 监听地址 |
| `PORT` | `4173` | 监听端口 |
| `DOCUMENT_ROOT` | `./documents` | 可编辑文件根目录 |
| `BACKUP_ROOT` | `./backups` | 快照目录，建议放在文档目录之外 |
| `PARSER_ROOT` | `./parser-dist` | parser bundle 目录 |
| `PARSER_WASM` | `<PARSER_ROOT>/analyser.wasm` | WASM 路径 |
| `PARSER_JSFFI` | `<PARSER_ROOT>/ghc_wasm_jsffi.mjs` | JSFFI 路径 |
| `PARSER_REQUIRED` | `1` | parser 加载失败时是否退出 |
| `BACKUP_INTERVAL_MINUTES` | `30` | 快照周期 |
| `BACKUP_RETENTION_DAYS` | `8` | 快照保留天数 |
| `MAX_BODY_BYTES` | `67108864` | JSON 请求体上限 |
| `LOCK_WAIT_MS` | `15000` | 等待存储锁的最长时间 |
| `LOCK_STALE_MS` | `60000` | 无心跳锁的回收阈值 |

`PARSER_REQUIRED=0` 仅用于维护或排查文件 API；此时编辑与保存仍可使用，但 `/api/parse` 返回 503，界面不会使用任何替代 parser。

## API

| 方法 | 路径 | 用途 |
|---|---|---|
| `GET` | `/api/status` | parser、目录和备份配置状态 |
| `GET` | `/api/files` | 递归列出全部文件 |
| `GET` | `/api/file?path=...` | 读取文件和 revision |
| `POST` | `/api/file` | 新建文件 |
| `PUT` | `/api/file?path=...` | revision 条件写入 |
| `DELETE` | `/api/file?path=...` | revision 条件删除 |
| `POST` | `/api/rename` | revision 条件重命名 |
| `POST` | `/api/parse` | 调用仓库 WASM parser |
| `POST` | `/api/convert` | 将 igem-markdown 内容转换为 Patchouli JSON 文件集合（只生成，不写盘） |
| `POST` | `/api/export` | 将 Patchouli JSON book model 按既有符号约定导出为 igem Markdown |
| `GET` | `/api/backups` | 列出快照 |
| `POST` | `/api/backups` | 立即创建快照 |

## igem 书迁移 dry-run

使用 `igem-markdown` 新书生成 TFC Patchouli JSON 文件集合，不会修改旧书：

```bash
node scripts/convert-book.mjs source.md migration.json generated/
```

`migration.json` 至少需要提供 category：

```json
{
  "category": {
    "id": "getting_started",
    "name": "新手入门",
    "icon": "tfc:stone/axe/sedimentary",
    "sortnum": 1
  },
  "entries": {
    "0": {
      "id": "getting_started/introduction",
      "icon": "tfc:rock/loose/granite",
      "read_by_default": true
    }
  }
}
```

命令同时生成 `generated/conversion-warnings.json`。输出目录已存在时命令会失败，只有明确传入
`--force` 才允许覆盖。

## Docker

先将 parser bundle 安装到 `parser-dist/`，再构建镜像：

```bash
docker build -t patchouli-markdown-server .
docker run --rm -p 4173:4173 \
  -v /srv/patchouli/documents:/data/documents \
  -v /srv/patchouli/backups:/data/backups \
  patchouli-markdown-server
```

## 测试

```bash
npm test
npm run check
```

测试覆盖：

- 旧 revision 写入返回三方内容。
- 同一 revision 的两个并发写入只能有一个成功。
- 不重叠 diff3 自动合并和重叠冲突解决。
- 快照内容、manifest 哈希和 8 天清理策略。
- parser bundle 存在时的真实 WASM 集成测试。
