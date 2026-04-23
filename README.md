# Script

脚本与 AI Skill 的集合仓库，按类型分目录存放，便于集中维护与复用。

## 目录结构

```text
.
├── skills/                  AI Skill 目录
│   ├── feat-gcm/            功能类 Git 提交拆分 Skill
│   └── fix-gcm/             修复类 Git 提交拆分 Skill
└── userscript/              油猴脚本目录
```

## AI Skills

`skills` 目录当前收录了 2 个用于 Git 提交拆分的 AI Skill：

| 名称 | 说明 | 入口文件 | 使用方式 |
| --- | --- | --- | --- |
| [feat-gcm](./skills/feat-gcm/SKILL.md) | 基于本地全部修改，按功能自动拆分提交，并生成以 `feat:` 开头的中文提交信息 | `skills/feat-gcm/SKILL.md` | `/feat-gcm` |
| [fix-gcm](./skills/fix-gcm/SKILL.md) | 基于本地全部修改，按修复项自动拆分提交，并生成以 `fix:` 开头的中文提交信息 | `skills/fix-gcm/SKILL.md` | `/fix-gcm` |

这两个 Skill 的共同特点：

- 基于完整工作区改动分析，而不是只看暂存区。
- 先生成提交计划，等待用户确认后再执行提交或推送。
- 强调单次提交只表达一个独立功能或一个独立修复项。
- 提交信息使用简短中文，并保持统一前缀。

如果需要让其他 `AI` 工具自动安装本仓库中的 `Skill`，可直接把仓库链接发给对方。仓库根目录已经提供：

- `AGENTS.md`：给 `AI` 代理的安装与使用指令入口。
- `skills/index.json`：给程序或代理读取的 `Skill` 索引。

### Skills 使用步骤

1. 在支持 `Skill`、系统提示词或自定义工作流的 `AI` 工具中加载对应目录下的 `SKILL.md`。
2. 在当前项目里完成代码修改，并确认工作区存在待提交内容。
3. 将 `SKILL.md` 中的规则提供给当前使用的 `AI` 助手，或封装成可复用命令。
4. 如果本次改动主要是新功能，执行 `/feat-gcm` 或触发对应的功能提交流程。
5. 如果本次改动主要是问题修复，执行 `/fix-gcm` 或触发对应的修复提交流程。
6. 等待 `Skill` 扫描完整工作区改动，并生成拆分后的提交计划。
7. 根据提示选择执行方式：
   `1` 为按计划依次提交。
   `2` 为按计划依次提交，并在全部完成后推送。
   `3` 为取消本次操作。
8. 确认提交结果是否符合预期，必要时再进行后续调整。

## 油猴脚本

| 图标 | 名称 | 说明 | 安装 |
| --- | --- | --- | --- |
| <img src="./userscript/google-search-center/google-search-center-icon.png" width="32"> | [谷歌搜索居中](./userscript/google-search-center/google-search-center.md) | 居中 Google 搜索页面布局，兼容自动翻页脚本 | [Greasy Fork](https://greasyfork.org/zh-CN/scripts/567675-google-search-center) |

### 油猴脚本使用步骤

1. 在浏览器中安装 `Tampermonkey`、`Violentmonkey` 或其他兼容的用户脚本扩展。
2. 在上表中选择需要的脚本，并打开对应说明页或 `Greasy Fork` 安装链接。
3. 点击安装按钮，将脚本添加到用户脚本扩展中。
4. 安装完成后，确保脚本处于启用状态。
5. 打开脚本对应的网站页面，确认脚本效果是否已经生效。
6. 如需了解脚本功能、适用页面或更新说明，可查看仓库中的脚本文档。

## 许可证

[MIT](./LICENSE)
