export interface Tutorial {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  readTime: number;
  tags: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tool: string;
}

export const TUTORIALS: Tutorial[] = [
  {
    id: "chatgpt-hidden-features",
    title: "ChatGPT Plus 会员的10个隐藏功能，90%的用户不知道",
    excerpt: "ChatGPT Plus 每月花$20，但大多数用户只用到了不到20%的功能。本文将揭示10个强大的隐藏功能，让你的会员费物超所值。",
    content: `ChatGPT Plus 每月收费 $20，但你很可能只用到了它最基础的功能。我花了大量时间探索这些"隐藏"特性——以下是我认为最实用的10个。

## 1. Advanced Data Analysis（原Code Interpreter）

大多数用户不知道 ChatGPT Plus 内置了一个完整的 Python 运行环境。

**如何开启：**
点击底部模型选择器 → 选择 "GPT-4o" → 点击下方的 "... More" 确保 "Advanced Data Analysis" 已开启。

**它能做什么：**
- 上传 CSV/Excel 文件，让 ChatGPT 自动分析数据并生成图表
- 上传图片，ChatGPT 可以提取文字、分析内容
- 上传 PDF，自动摘要和翻译
- 运行 Python 代码并返回结果

\`\`\`
Upload: sales_data.csv (2.3MB)
ChatGPT 自动输出：
├── 数据清洗（检测到 15 个空值）
├── 描述性统计（平均值、中位数、标准差）
├── 可视化（柱状图、折线图、热力图）
└── 结论（"Q3销售额最高，建议加大Q3投入"）
\`\`\`

**最佳场景：** 数据分析师、市场人员快速处理报表。

## 2. 自定义 GPTs（Custom GPTs）

你可以创建自己的专属 GPT，设定特定的指令、知识库和能力。

**如何创建：**
左侧栏 → "Explore GPTs" → "Create a GPT"

**实用案例：**
- **写作助手 GPT：** 设定你的品牌语调、常用词汇，生成内容一键匹配品牌风格
- **代码审查 GPT：** 上传你的代码规范文档，每次审查代码时自动按规范检查
- **翻译 GPT：** 设定专业术语库，确保翻译一致性

## 3. 记忆功能（Memory）

ChatGPT 可以记住你的个人信息和偏好。

**如何开启：**
Settings → Personalization → Memory → 开启

**记忆效果：**
- 告诉它 "我是前端开发者" → 后续回答代码问题会默认用 JavaScript
- 告诉它 "我喜欢简洁的回答" → 以后回复会变得更短
- 告诉它 "我团队有5个人" → 项目规划时自动按5人团队计算

**管理记忆：**
Settings → Manage Memory → 可以查看和删除不需要的记忆项

## 4. 多模态输入（Vision）

GPT-4o 可以直接"看"图片。

**使用方法：**
直接上传图片到对话中，然后提问。支持格式：JPG、PNG、GIF、WEBP。

**实用案例：**
- 拍一张白板会议记录 → "帮我把这个整理成结构化的会议纪要"
- 拍一张菜单 → "帮我翻译这份菜单并推荐3道菜"
- 上传UI设计图 → "帮我写这个页面的HTML/CSS代码"

## 5. 对话分享与协作

你可以生成一个公开链接分享整个对话。

**如何操作：**
右上角 "Share" 按钮 → "Copy Link"

**实用场景：**
- 分享Prompt模板给同事
- 保存重要对话（即使用户删除了对话，分享链接仍然有效）
- 团队协作：一个人写好Prompt，分享给全团队使用

## 6. 插件生态系统

Plus 会员可以访问 ChatGPT 插件市场。

**推荐插件：**
- **Zapier：** 将 ChatGPT 和 5000+ 应用连接
- **WebPilot：** 让 ChatGPT 浏览网页获取最新信息
- **Wolfram：** 处理数学计算和数据可视化
- **Diagrams：** 生成流程图和架构图

## 7. 语音对话模式

ChatGPT App 支持语音输入和语音回复。

**打开方式：**
ChatGPT App → 点击耳机图标

**实用场景：**
- 开车时口头朗读文章摘要
- 睡前让它给你读故事
- 语言学习：和ChatGPT用英语对话，练习口语

## 8. 对话文件夹

你可以整理对话到不同的文件夹。

**如何操作：**
左侧栏 → 点击 "New Folder" → 命名并拖拽对话进去

**推荐分类：**
\`\`\`
📁 工作项目
  ├── 代码审查
  ├── 邮件草稿
  └── 数据分析
📁 学习
  ├── Python教程
  └── 英语练习
📁 Prompt 模板库
  └── 常用Prompt存档
\`\`\`

## 9. 数据分析图表导出

Advanced Data Analysis 生成的图表可以直接导出。

**操作：**
右键点击生成的图表 → "Download" → 选择格式（PNG、HTML、CSV）

**技巧：** 使用HTML格式导出，可以保持交互性（鼠标悬停显示数据）。

## 10. 自定义指令

在 Settings 中设置固定的行为准则。

**如何设置：**
Settings → Personalization → Custom Instructions

**推荐配置：**
\`\`\`
关于我：
"我是一名前端开发者，使用React和TypeScript。需要代码示例时用TypeScript。"

偏好：
"回答要简洁、结构清晰。不要重复我之前说过的话。代码要有注释。"
\`\`\`

## 总结

这10个功能中，**Advanced Data Analysis** 和 **Custom GPTs** 最值得优先探索。光是这两个功能，$20/月的会员费就值回票价了。`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-19",
    category: "ChatGPT",
    readTime: 10,
    tags: ["ChatGPT", "Tips", "Productivity", "Hidden Features"],
    difficulty: "Advanced",
    tool: "ChatGPT"
  },
  {
    id: "midjourney-prompt-guide",
    title: "Midjourney Prompt工程：从入门到精通",
    excerpt: "写好Prompt是使用Midjourney的核心技能。从基础结构到高级参数，本文带你系统掌握Midjourney的Prompt写法。",
    content: `# Midjourney Prompt 工程：从入门到精通

Midjourney 是目前最强大的AI图像生成器之一，但很多用户的 Prompt 只写了 "a cat" —— 这完全浪费了它的能力。

## 基础结构

一个完整的 Midjourney Prompt 包含五个部分：

\`\`\`
[主体] + [环境/背景] + [风格] + [灯光/色彩] + [参数]
\`\`\`

**示例：**
\`\`\`
/imagine prompt: 
a Siberian husky wearing aviator goggles --ar 16:9 --v 6
\`\`\`

## 进阶技巧

### 1. 使用参数控制输出

Midjourney 支持丰富的参数：

| 参数 | 作用 | 示例 |
|------|------|------|
| --ar | 宽高比 | --ar 16:9, --ar 9:16 |
| --v | 版本 | --v 6（最新版）|
| --s | 风格化程度 | --s 250（默认）, --s 1000（高风格化）|
| --iw | 图片权重 | --iw 2（参考图权重）|
| --no | 排除元素 | --no text,watermark |

### 2. 权重控制

用 \`::\` 分隔不同部分并分配权重：

\`\`\`
/imagine prompt: 
a futuristic city::2 sunset sky::1 --ar 16:9
\`\`\`

这样 "futuristic city" 的权重是 "sunset sky" 的两倍。

### 3. 风格混合

组合不同的艺术家风格：

\`\`\`
/imagine prompt: 
Japanese garden in the style of Studio Ghibli and Monet, 
soft lighting, watercolor texture --ar 16:9
\`\`\`

## 实战Prompt模板

### 电商产品图
\`\`\`
/imagine prompt: 
minimalist white ceramic coffee cup on wooden table, 
professional product photography, soft studio lighting, 
clean background, 8k --ar 4:3 --v 6
\`\`\`

### 人物肖像
\`\`\`
/imagine prompt: 
portrait of an elderly fisherman with weathered face, 
cinematic lighting, shallow depth of field, 
grainy film texture --ar 3:4 --s 200 --v 6
\`\`\`

### 概念设计
\`\`\`
/imagine prompt: 
floating crystal city in the clouds at sunset, 
concept art, epic scale, volumetric lighting, 
trending on ArtStation --ar 21:9 --s 400 --v 6
\`\`\`

## 常见问题

**Q: 为什么我的图不够清晰？**
A: 在 Discord 中图片上点击 "Open in Browser" 可以查看原图。或者使用 --s 50-100 降低风格化程度。

**Q: 如何保持角色一致性？**
A: 使用 --seed 参数固定随机种子，每次生成同样种子+同样Prompt可以得到一致的风格。

**Q: 图片尺寸不合适？**
A: 用 --ar 控制宽高比。常见比例：16:9（宽屏）、4:3（标准）、3:4（竖屏）、1:1（方形）。`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-19",
    category: "Midjourney",
    readTime: 8,
    tags: ["Midjourney", "Prompt Engineering", "AI Art", "Image Generation"],
    difficulty: "Intermediate",
    tool: "Midjourney"
  },
  {
    id: "cursor-claude-workflow",
    title: "Cursor + Claude 搭配使用，让AI写代码效率翻倍",
    excerpt: "Cursor 是目前最强大的AI代码编辑器，搭配 Claude 可以让开发效率提升数倍。本文分享实战配置和高效工作流。",
    content: `# Cursor + Claude 搭配使用工作流

Cursor 是 VS Code 的一个 AI-first 分支，内置了 DeepSeek 和 Claude 等多种模型。合理配置可以显著提升编码效率。

## 基础配置

### 1. 选择正确的模型

在 Cursor 设置中，建议为不同任务配置不同的模型：

- **日常编码补全：** Cursor Tab（默认，最快）
- **代码生成/重构：** Claude Sonnet（平衡速度和质量）
- **复杂逻辑/架构设计：** Claude Opus（最强大）

### 2. 快捷键

| 操作 | 快捷键 | 作用 |
|------|--------|------|
| Tab | Tab | 接受AI补全建议 |
| Cmd/Ctrl + K | 编辑 | 选中代码后按此键，用自然语言修改代码 |
| Cmd/Ctrl + L | 对话 | 打开AI聊天面板 |
| Cmd/Ctrl + I | Composer | 多文件编辑模式 |

## 高效工作流

### 场景1：从头写一个新功能

**Step 1:** 用 \`Cmd+I\` 打开 Composer
**Step 2:** 输入 "Create a React component for a user profile card"
**Step 3:** Cursor 生成代码后，用 \`Tab\` 接受
**Step 4:** 选中生成的代码，\`Cmd+K\` 输入 "Add TypeScript types"
**Step 5:** 继续用对话优化

### 场景2：调试Bug

**Step 1:** 选中报错的代码行
**Step 2:** \`Cmd+L\` 打开对话面板
**Step 3:** 输入 "This code has a bug. The error message is X. Find and fix it."
**Step 4:** Claude 会分析代码并给出修复建议

### 场景3：代码重构

**Step 1:** \`Cmd+Shift+F\` 全局搜索相关代码
**Step 2:** 选中需要重构的代码块
**Step 3:** \`Cmd+K\` 输入 "Refactor this to use proper error handling with try-catch"

## .cursorrules 配置

创建 \`.cursorrules\` 文件在项目根目录，让AI了解你的项目规范：

\`\`\`
You are an expert in React, TypeScript, and Tailwind CSS.
- Use functional components with hooks
- Prefer \`const\` over \`function\` declarations
- Add JSDoc comments for public APIs
- Use Tailwind CSS for styling, no CSS modules
- Use Zod for validation
\`\`\`

## 配对Prompt模板

### 代码审查
\`\`\`
Review this code for:
1. Potential bugs
2. Performance issues
3. Security vulnerabilities
4. Code style violations
\`\`\`

### 生成测试
\`\`\`
Write comprehensive unit tests for this function using Vitest.
Cover: happy path, edge cases, error scenarios.
\`\`\`

### 文档生成
\`\`\`
Generate JSDoc documentation for this component.
Include: props description, usage examples, edge cases.
\`\`\`

## 注意事项

- Cursor 的 Composer 模式（Cmd+I）适合多文件编辑
- 对话模式（Cmd+L）适合分析和提问
- 模型选择：简单补全用默认，复杂逻辑切到Claude
- .cursorrules 文件让AI理解你的编码规范`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-18",
    category: "Cursor",
    readTime: 9,
    tags: ["Cursor", "Claude", "AI Coding", "Developer Tools", "Workflow"],
    difficulty: "Advanced",
    tool: "Cursor"
  },
  {
    id: "notion-ai-templates",
    title: "Notion AI 项目管理模板（可复制使用）",
    excerpt: "Notion AI 不仅是一个笔记工具，结合AI功能它还能成为强大的项目管理平台。本文提供5个可直接复用的模板。",
    content: `# Notion AI 项目管理模板

Notion AI 的月费是 $10/月（附加到已有的 Notion 订阅上）。用好AI功能后，这笔投入很容易回本。

## 模板1：周报自动生成器

**用途：** 输入本周工作要点，AI自动生成结构化的周报。

**设置方法：**
1. 新建一个 Page
2. 输入 Prompt: "Act as my weekly report assistant"
3. 设置固定格式

**使用方式：**
每周五输入你的工作要点，AI会自动整理成：

\`\`\`
## 本周完成
- [AI 整理你的要点]

## 遇到的问题
- [AI 识别出的风险点]

## 下周计划
- [AI 根据本周情况建议]
\`\`\`

## 模板2：会议纪要AI

**用途：** 输入会议录音文字，AI生成结构化的会议纪要。

**操作步骤：**
1. 将会议录音发给 Otter.ai 或其他转录工具
2. 将转录文本粘贴到 Notion
3. 选中全文，点击 AI -> "Summarize"
4. AI 自动生成：

\`\`\`
📅 会议日期: [自动识别]
👥 参与者: [AI提取人名]
✅ 决策: [关键决策点]
📋 待办事项:
- [任务1] → [负责人]
- [任务2] → [负责人]
\`\`\`

## 模板3：项目数据库

Notion 的 Database + AI 是最强大的组合。

**创建方式：**
1. 新建一个 Database (Table 视图)
2. 添加字段：Task, Status, Priority, Due Date, Assignee
3. 每次新增任务时，用 AI 自动补全：

**操作：** 输入任务名 → 选中 → AI → "Auto-fill properties"

## 模板4：文档翻译机

选中任意内容 → AI → Translate → 选择目标语言

**实际案例：**
\`\`\`
Source: "The Q3 revenue increased by 15%..."
Target: 中文翻译
Output: "第三季度收入增长了15%..."
\`\`\`

## 模板5：AI写作助手

在 Notion 中直接写文章，AI帮你优化。

**常用 Prompt：**
\`\`\`
- "Make this more professional"
- "Rewrite for a beginner audience"
- "Fix spelling and grammar"
- "Create a table of contents"
- "Summarize this into 3 bullet points"
\`\`\`

## 最佳实践

1. **固定模板：** 创建常用模板后复制使用，不必每次都从头写Prompt
2. **AI 按钮：** 在 Notion 中创建 AI 按钮（输入 /ai），一键执行常用操作
3. **团队共享：** Notion AI 支持团队协作，全团队可以用同一套模板`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-18",
    category: "Notion AI",
    readTime: 7,
    tags: ["Notion AI", "Templates", "Productivity", "Project Management"],
    difficulty: "Beginner",
    tool: "Notion AI"
  },
  {
    id: "otter-ai-meeting-guide",
    title: "用Otter.ai自动记录会议并生成摘要，每周省3小时",
    excerpt: "Otter.ai 是目前最优秀的AI会议记录工具。本文从基础设置到高级技巧，帮你把会议效率提升到极致。",
    content: `# Otter.ai 会议记录完整指南

Otter.ai 是领先的AI会议助手，可以自动转录、记录和生成会议摘要。Free 版每月300分钟，Pro 版 $17/月（6000分钟）。

## 基础设置

### Step 1: 连接日历

登录 Otter.ai → Settings → Calendar → 连接 Google Calendar 或 Outlook

连接后，Otter 会自动加入你日历上的所有会议。

### Step 2: 设置自动加入

可以设置 Otter 自动加入特定类型的会议（如"只加入标记了需要记录的重要会议"）。

### Step 3: 选择AI模型

Otter 提供不同的 AI 模型：
- **OtterPilot：** 自动参加会议并转录
- **Otter Chat：** 会议中实时提问（Pro功能）
- **Ask Otter：** 会后查询会议内容

## 会后操作

### 查看纪要模板

Otter 自动生成的会议纪要保持固定的格式：

\`\`\`
📝 Meeting Summary
Keyword: [AI识别的关键词]
Action Items:
- [任务1] → [负责人]
- [任务2] → [负责人]

Key Takeaways:
- [AI总结的要点1]
- [AI总结的要点2]

Full Transcript (展开查看)
\`\`\`

### 分享会议纪要

点击 "Share" 按钮：
- 通过链接分享
- 导出为 PDF/Word/TXT
- 自动发送邮件给参会者

## 高级技巧

### 技巧1：高亮标记

会议中如果听到重要信息，在 Otter 界面点一下高亮按钮。会后可以直接跳转到标记位置。

### 技巧2：自定义词库

如果你们团队常用专业术语（比如 "AGI", "RAG", "向量数据库"），先在 Settings → Vocabulary 中添加。

这样 Otter 转录时不会把这些词写成奇怪的拼写。

### 技巧3：团队工作空间

Otter Pro 以上支持团队空间：
- 创建团队 → 邀请成员 → 共享会议文件夹
- 所有成员可以查看彼此的会议摘要（需授权）

## Otter vs 竞品

| 功能 | Otter.ai | Fireflies.ai | Krisp |
|------|---------|-------------|-------|
| 免费额度 | 300min/月 | 800min/月 | 60min/天 |
| 自动加入会议 | ✅ | ✅ | ❌ |
| AI摘要 | ✅ | ✅ | ❌ |
| 中文支持 | 🟡 有限 | 🟡 有限 | ✅ 好 |
| 价格 | $17/mo | $10/mo | $8/mo |

**推荐：** 如果你的团队主要说英语，Otter 是最佳选择。中文会议建议用 Fireflies 或飞书自带转录。`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-17",
    category: "Otter.ai",
    readTime: 6,
    tags: ["Otter.ai", "Meeting", "Productivity", "Transcription"],
    difficulty: "Beginner",
    tool: "Otter.ai"
  },
  {
    id: "elevenlabs-voice-cloning",
    title: "ElevenLabs 语音克隆：从录制到上线的完整流程",
    excerpt: "ElevenLabs 的语音克隆技术已经非常成熟，从录制声音到生成合成语音，整个流程只需要30分钟。本文带你走完每一步。",
    content: `# ElevenLabs 语音克隆完整流程

ElevenLabs 是目前最先进的AI语音合成平台。它的语音克隆功能可以复制任何人的声音，并用AI生成全新的语音内容。

## 前置准备

你需要：
- ElevenLabs 账号（Free 版即可体验，Pro 版 $99/月解锁全部功能）
- 一段人声录音（建议 2-5 分钟）
- 干净的录音环境（无背景噪音）

## Step 1: 录制声音样本

**最佳实践：**
- 录制 3-5 分钟的纯人声
- 使用麦克风（手机录音即可，但避免使用免提）
- 背景安静，不要有音乐或噪音
- 说话自然，像日常对话一样

**录音内容推荐：**
- 朗读一段新闻或文章（包含不同情感和语调）
- 自然的对话（如果是为播客制作）

## Step 2: 上传并训练

1. 登录 ElevenLabs 网站
2. 点击 "Voice Lab" → "Add Voice" → "Instant Voice Cloning"
3. 上传你的录音文件
4. 等待处理（约 1-2 分钟）

**注意：** Instant Voice Cloning 不需要长时间训练，上传后立即可用。如果需要更高品质，选择 "Professional Voice Cloning"（需要提交申请）。

## Step 3: 生成语音

1. 在 Text to Speech 页面选择克隆的语音
2. 输入或粘贴需要朗读的文字
3. 调整参数：

\`\`\`
Stability: 70%（稳定度，越高越平稳）
Similarity: 80%（与原声相似度）
Style Exaggeration: 30%（情感夸张程度）
\`\`\`

4. 点击 "Generate" 试听

## Step 4: 批量生成（Pro功能）

ElevenLabs Pro 支持批量生成：
- 上传 CSV 文件（每行一段文字）
- 自动生成所有语音并打包下载
- 支持 SSML 标记（控制语速、停顿、重音）

## 最佳应用场景

### 播客制作
生成完整的播客内容，可以使用多个不同声音进行对话。

### 视频配音
- 为视频配旁白
- 多语言版本（ElevenLabs 支持 29 种语言）

### 有声书
- 长文本朗读
- 控制不同角色的声音

## 注意事项

1. **版权问题：** 不要克隆他人的声音用于商业用途。ElevenLabs 有语音验证机制，未经授权的克隆会被删除。
2. **音质限制：** Free 版会降低音质。Pro 版提供 192kbps 的高品质。
3. **中文效果：** ElevenLabs 支持中文，但效果不如英文好。建议先用短文本测试。`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-17",
    category: "ElevenLabs",
    readTime: 7,
    tags: ["ElevenLabs", "Voice Cloning", "AI Voice", "TTS"],
    difficulty: "Intermediate",
    tool: "ElevenLabs"
  },
  {
    id: "zapier-ai-automation",
    title: "Zapier 串联 AI工具：6个自动化工流，每天省2小时",
    excerpt: "Zapier 是目前最强大的自动化平台，支持超过7000个应用。结合AI功能后，你可以创建真正智能的工作流。",
    content: `# Zapier AI 自动化工作流指南

Zapier 连接了 7000+ 应用，每月处理数十亿次自动化任务。Free 版每月100个任务，Starter $20/月（750个任务），Professional $49/月（2000个任务）。

## 自动化基础概念

一个 Zap（自动化流程）由三个部分组成：

\`\`\`
Trigger（触发器） → Action（动作）

示例：
Gmail收到新邮件 → 在Slack发送通知
\`\`\`

## 6个高效工作流

### 工作流1：AI写作自动化

**用途：** 将 Notion 中的草稿自动用 AI 优化后发布到博客。

\`\`\`
Trigger: Notion Database 新增条目
  → Action: OpenAI (ChatGPT) 优化文字
  → Action: WordPress 创建草稿
  → Action: Slack 通知"新文章已准备就绪"
\`\`\`

### 工作流2：会议跟进自动化

**用途：** 会议结束后自动发送跟进邮件。

\`\`\`
Trigger: Google Calendar 会议结束
  → Action: Otter.ai 获取会议摘要
  → Action: ChatGPT 生成跟进邮件
  → Action: Gmail 发送给所有参会者
  → Action: Notion 添加待办事项
\`\`\`

### 工作流3：社交媒体内容工厂

**用途：** 从RSS源提取文章，用AI改写成社交媒体帖子。

\`\`\`
Trigger: RSS Feed 有新文章
  → Action: ChatGPT 提取要点
  → Action: ChatGPT 改写成 Twitter 帖子和 LinkedIn 帖子
  → Action: Buffer 排期发布
\`\`\`

### 工作流4：客户支持自动化

**用途：** 客户邮件自动分类和回复。

\`\`\`
Trigger: Gmail 收到客户邮件
  → Action: ChatGPT 分析意图（投诉/咨询/退款）
  → Action: 根据意图分流：
    ├── 投诉 → 通知Slack #urgent频道
    ├── 咨询 → ChatGPT 生成回复草稿
    └── 退款 → 创建 Trello 卡片
\`\`\`

### 工作流5：日报自动生成

**用途：** 每日自动汇总工作内容。

\`\`\`
Trigger: 每天下午5点 (Schedule)
  → Action: Toggl/Clockify 获取今日工时
  → Action: Notion 获取今日完成任务
  → Action: ChatGPT 生成日报摘要
  → Action: Slack 发送到团队频道
\`\`\`

### 工作流6：AI协作内容审核

**用途：** AI预审内容后再手动审批。

\`\`\`
Trigger: Google Forms 收到内容提交
  → Action: ChatGPT 检查内容质量（语法、事实、品牌一致性）
  → Action: 根据评分分流：
    ├── 评分 > 80 → 自动发布到WordPress
    └── 评分 < 80 → 创建Asana任务待人工审核
\`\`\`

## 高级技巧

### 使用 Filters

在Zap中加入 Filter 步骤，只处理符合条件的数据。例如：只处理标题中包含"urgent"的邮件。

### 使用 Paths

Zapier 的 Paths 功能可以创建条件分支（就像编程中的 if-else）。

### 使用 Formatter

格式化数据后再传递给下一个应用。例如：将日期格式从 "2026-05-19" 改为 "May 19, 2026"。

## 注意事项

- Free 版 100 个任务/月，建议先用 Starter 计划
- 每个 Zap 最多可以有 10 个步骤（Professional 版）
- 复杂工作流建议先在小范围测试
- 注意 API 调用限制，避免触发反滥用机制`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-16",
    category: "Zapier AI",
    readTime: 10,
    tags: ["Zapier", "Automation", "Workflow", "AI Integration"],
    difficulty: "Advanced",
    tool: "Zapier AI"
  },
  {
    id: "github-copilot-tips",
    title: "GitHub Copilot 效率提升10倍的12个快捷键和技巧",
    excerpt: "GitHub Copilot 每月 $10，但很多开发者只用到了 Tab 键接受建议。本文分享12个高级技巧，让你的 Copilot 投入产出比最大化。",
    content: `# GitHub Copilot 高效技巧指南

GitHub Copilot 每月 $10（Individual），支持 VS Code、JetBrains、Neovim 等主流编辑器。绝大多数用户只用到了不到30%的功能。

## 基础必备快捷键

| 快捷键 | 功能 | 说明 |
|--------|------|------|
| Tab | 接受建议 | 最常用，没有之一 |
| Esc | 拒绝建议 | 关闭当前建议 |
| Ctrl+Enter | 打开建议面板 | 显示10个备选方案 |
| Alt+] | 下一条建议 | 切换不同补全方案 |
| Alt+[ | 上一条建议 | 回到上一个方案 |

## 12个高级技巧

### 技巧1：用注释描述需求

最好的Prompt就是注释。在写代码之前，先用注释描述你要做什么：

\`\`\`typescript
\`\`\`

Copilot 会根据注释生成对应的代码实现。

### 技巧2：写测试先于实现（TDD模式）

先写测试名称，Copilot 会推荐测试实现：

\`\`\`typescript
describe("UserService", () => {
  it("should return cached data if available", () => {
  })
})
\`\`\`

### 技巧3：利用Completions面板

按 \`Ctrl+Enter\` 打开建议面板，可以看到10个不同的补全方案。适合在不确定最佳实现时查看多种选择。

### 技巧4：生成样板代码

输入重复性代码的起始几行，Copilot 会自动补全剩余部分。例如：

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}
\`\`\`

### 技巧5：代码解释

选中一段代码，输入注释 \`// explain this:\`，Copilot 会用自然语言解释这段代码的作用。

### 技巧6：生成正则表达式

正则表达式难写难记。用注释让 Copilot 帮你写：

\`\`\`javascript
const emailRegex = /[Copilot 自动生成]/
\`\`\`

### 技巧7：多语言翻译

Copilot 可以将代码从一种语言翻译到另一种：

\`\`\`javascript
\`\`\`

粘贴 Python 代码，Copilot 会生成对应的 TypeScript 版本。

### 技巧8：生成文档注释

在函数上方输入 \`/**\`，Copilot 会自动生成 JSDoc 注释。

### 技巧9：修复bug

选中有bug的代码，按 \`Ctrl+I\` 打开 Copilot Chat，输入 "Fix bugs in this code"。

### 技巧10：代码重构

在 Copilot Chat 中输入：
\`\`\`
Refactor this function to use async/await instead of callbacks
\`\`\`

### 技巧11：学习新语言

Copilot 是学习新语言的好工具。你可以用 Python 写逻辑，Copilot 会帮你转换为 Rust/Go/Java。

### 技巧12：与 Cursor 配合使用

Copilot 的代码补全（Tab）是最快的。但如果需要大规模重构或理解代码库，切换到 Cursor 使用 Claude 效果更好。两者可以共存。

## 效率对比

| 场景 | 不用Copilot | 用Copilot（基础） | 用Copilot（高级技巧）|
|------|-----------|----------------|------------------|
| 写新函数 | 15min | 5min | 3min |
| 写测试 | 30min | 10min | 5min |
| 调试Bug | 1h | 20min | 10min |
| 代码重构 | 2h | 45min | 20min |

## 注意事项

- Copilot 生成的代码可能有安全漏洞，生产环境需要人工review
- 如果 Copilot 连续几次给出低质量建议，尝试换一个更具体的注释
- 在敏感项目中，建议开启 Copilot 的 "屏蔽匹配公开代码" 选项`,
    author: "Alex Chen",
    authorRole: "AI Tools Expert",
    date: "2026-05-16",
    category: "GitHub Copilot",
    readTime: 9,
    tags: ["GitHub Copilot", "AI Coding", "Productivity", "VS Code"],
    difficulty: "Intermediate",
    tool: "GitHub Copilot"
  }
];
