import { Zap, type LucideIcon } from "lucide-react";

export interface ToolData {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  pros: string[];
  cons: string[];
  pricing: string;
  pricingDetail: string;
  features: string[];
  useCase: string;
  alternatives: string[];
  scoreBreakdown: {
    features: number;
    reviews: number;
    momentum: number;
    popularity: number;
  };
  userQuotes: {
    role: string;
    company: string;
    quote: string;
  }[];
}

export const PRODUCTIVITY_TOOLS: ToolData[] = [
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "AI Writing & Knowledge Assistant",
    rating: 4.4,
    reviewCount: 15200,
    icon: Zap,
    description: "AI-powered writing assistant integrated into Notion, helping with content generation, summarization, editing, and knowledge management.",
    longDescription: "Notion AI brings generative AI directly into the Notion workspace, enabling users to draft documents, summarize notes, brainstorm ideas, rewrite content, translate text, and more — all without leaving their workspace. It leverages large language models to understand context and produce relevant output based on your existing Notion pages. Whether you're writing a project proposal, meeting agenda, or blog post, Notion AI acts as an always-available co-writer and research assistant integrated with your company knowledge base.",
    pros: [
      "Deep integration with existing Notion workspace and databases",
      "Can reference your existing pages and knowledge base for context",
      "Versatile — write, summarize, translate, brainstorm, edit",
      "Improves team collaboration with AI-assisted documentation"
    ],
    cons: [
      "Requires a Notion subscription on top of AI add-on fee",
      "Occasionally produces generic or off-brand content",
      "No image generation or multi-modal capabilities",
      "Context window limited to current page and linked pages"
    ],
    pricing: "Add-on Subscription",
    pricingDetail: "Notion AI is $10/user/month (annual) or $12/user/month (monthly) on top of any Notion plan; Free plan includes 20 AI responses per month",
    features: [
      "AI writing and drafting from prompts",
      "Summarize existing notes and documents",
      "Translate content across multiple languages",
      "Brainstorming and creative idea generation",
      "Rewrite, shorten, or expand existing text"
    ],
    useCase: "Perfect for teams and individuals already using Notion who want an integrated AI writing assistant to speed up documentation, note-taking, and content creation.",
    alternatives: ["Mem", "Craft AI", "Google Workspace Labs", "Microsoft Copilot"],
    scoreBreakdown: { features: 4.5, reviews: 4.3, momentum: 4.6, popularity: 4.8 },
    userQuotes: [
      { role: "Product Manager", company: "SaaS Company", quote: "Notion AI turned our chaotic meeting notes into structured documents in seconds. It's become our team's default writing companion." },
      { role: "Content Strategist", company: "Agency", quote: "The ability to draft, rewrite, and summarize without switching tabs is a game-changer for my writing workflow." }
    ]
  },
  {
    id: "motion",
    name: "Motion",
    category: "AI Calendar & Task Management",
    rating: 4.5,
    reviewCount: 8700,
    icon: Zap,
    description: "AI-powered calendar and project management tool that automatically schedules tasks, meetings, and priorities to optimize your time.",
    longDescription: "Motion is an intelligent calendar and task management platform that uses AI to automatically schedule your tasks, meetings, and priorities. It analyzes your workload, deadlines, and availability to build the optimal daily schedule. When unexpected changes occur, Motion dynamically reschedules everything. It combines project management (Kanban boards, task lists, dependencies) with calendar automation, ensuring your most important work gets dedicated time slots. Motion adapts to your workflow patterns and learns over time.",
    pros: [
      "AI auto-scheduling saves hours of manual calendar management",
      "Dynamic rescheduling when priorities shift or meetings get added",
      "Combines project management with calendar execution",
      "Built-in Pomodoro and focus time protection"
    ],
    cons: [
      "Steep learning curve for setup and configuration",
      "Premium pricing compared to traditional calendar tools",
      "Over-reliance on AI scheduling can feel rigid at times",
      "Mobile app less feature-rich than desktop version"
    ],
    pricing: "Subscription",
    pricingDetail: "Starter at $34/month (billed annually); Team at $20/user/month (billed annually); Enterprise at custom pricing",
    features: [
      "AI-powered automatic daily scheduling",
      "Dynamic rescheduling on priority changes",
      "Kanban-style project management boards",
      "Time blocking and focus session protection",
      "Meeting scheduling with smart availability detection"
    ],
    useCase: "Best for busy professionals, project managers, and teams who want AI to handle their calendar optimization so they can focus on deep work.",
    alternatives: ["Reclaim AI", "Clockwise", "Akiflow", "Amie"],
    scoreBreakdown: { features: 4.7, reviews: 4.4, momentum: 4.8, popularity: 4.5 },
    userQuotes: [
      { role: "CTO", company: "Startup", quote: "Motion saved me from calendar chaos. I went from 10+ hours scheduling manually to zero — it just works." },
      { role: "Operations Manager", company: "Mid-Size Tech", quote: "The AI rescheduling is incredible. When an urgent meeting pops up, everything rearranges intelligently without me lifting a finger." }
    ]
  },
  {
    id: "mem",
    name: "Mem",
    category: "AI Knowledge Management",
    rating: 4.2,
    reviewCount: 5400,
    icon: Zap,
    description: "AI-powered note-taking and knowledge management platform that automatically organizes, surfaces, and connects your ideas.",
    longDescription: "Mem is an AI-first knowledge management tool that reimagines note-taking for the AI era. Unlike traditional linear note apps, Mem uses AI to automatically organize, tag, link, and surface notes based on their content and context. It features an intelligent timeline, semantic search, AI-generated summaries, and smart collections that evolve as you add more information. Mem's AI acts as a 'second brain' — it connects related ideas across notes, suggests relevant content, and helps you retrieve information naturally.",
    pros: [
      "AI auto-organizes notes without manual folder management",
      "Semantic search finds relevant information by meaning, not just keywords",
      "AI-generated summaries and daily digests",
      "Auto-linking between related notes and ideas"
    ],
    cons: [
      "Limited export options compared to traditional note apps",
      "Can feel overwhelming for simple note-taking needs",
      "AI suggestions sometimes miss context or relevance",
      "Smaller integration ecosystem than Notion or Obsidian"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with limited AI features; Pro at $14.99/month; Business at $25/user/month (billed annually)",
    features: [
      "AI-powered auto-organization and tagging",
      "Semantic search across all notes",
      "Smart collections that update automatically",
      "AI daily digest and note summaries",
      "Automatic backlinking between related content"
    ],
    useCase: "Ideal for knowledge workers, researchers, and writers who want an AI-powered 'second brain' that automatically organizes and connects their ideas.",
    alternatives: ["Notion AI", "Obsidian", "Roam Research", "Reflect"],
    scoreBreakdown: { features: 4.4, reviews: 4.0, momentum: 4.3, popularity: 4.0 },
    userQuotes: [
      { role: "PhD Researcher", company: "University", quote: "Mem's AI connects research papers and notes in ways I never thought of. It's like having a research assistant who knows everything I've read." },
      { role: "Product Designer", company: "Design Studio", quote: "I stopped organizing my notes manually. Mem just does it for me, and the search is incredible — it finds what I need even when I can't remember the words." }
    ]
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    category: "AI Meeting & Transcription Assistant",
    rating: 4.3,
    reviewCount: 11400,
    icon: Zap,
    description: "AI meeting assistant that provides real-time transcription, automated notes, action items, and meeting summaries.",
    longDescription: "Otter.ai is an AI-powered meeting assistant that automatically transcribes conversations in real-time, generates meeting notes, captures action items, and creates shareable summaries. It integrates with Zoom, Google Meet, Microsoft Teams, and other major video conferencing platforms. Otter's AI identifies speakers, highlights key moments, and can even generate a meeting recaps document. The Otter Assistant can join meetings on your behalf, ensuring you never miss a note. It also allows you to search across all your meetings to find specific discussions.",
    pros: [
      "Real-time transcription with high accuracy",
      "Automatic meeting summaries and action items",
      "Seamless integration with major video conferencing tools",
      "Searchable meeting archive across all conversations"
    ],
    cons: [
      "Free tier has limited transcription minutes per month",
      "Accuracy can drop with heavy accents or poor audio",
      "Privacy concerns with cloud-based processing",
      "Speaker identification requires setup for best results"
    ],
    pricing: "Freemium",
    pricingDetail: "Free plan (300 min/month); Pro at $16.99/month; Business at $30/user/month; Enterprise at custom pricing",
    features: [
      "Real-time live transcription",
      "Automated meeting summaries with action items",
      "Speaker identification and labeling",
      "Integration with Zoom, Google Meet, Teams",
      "Searchable meeting archive"
    ],
    useCase: "Essential for professionals who attend frequent meetings and need accurate, searchable transcripts and automated summaries to stay on top of decisions and action items.",
    alternatives: ["Fireflies.ai", "Fathom", "Grain", "Rev"],
    scoreBreakdown: { features: 4.5, reviews: 4.2, momentum: 4.4, popularity: 4.6 },
    userQuotes: [
      { role: "Project Manager", company: "Enterprise", quote: "Otter.ai saves me hours every week. I never have to scramble for notes after a meeting — everything is captured and organized automatically." },
      { role: "Journalist", company: "Media Outlet", quote: "For interviews and press conferences, Otter is indispensable. I get accurate transcripts I can search through instantly." }
    ]
  },
  {
    id: "fireflies-ai",
    name: "Fireflies.ai",
    category: "AI Meeting Intelligence",
    rating: 4.4,
    reviewCount: 9600,
    icon: Zap,
    description: "AI-powered meeting assistant that records, transcribes, and analyzes conversations across multiple platforms.",
    longDescription: "Fireflies.ai is a comprehensive meeting intelligence platform that automatically records, transcribes, and analyzes voice conversations across over 50 video conferencing, voice, and telephony platforms. It uses natural language processing to identify key topics, action items, sentiment, and meeting metrics. Fireflies integrates deeply with CRM and project management tools like Salesforce, HubSpot, Slack, and Asana, automatically logging meeting insights. Its AI search allows you to query across all meetings conversationally.",
    pros: [
      "Works with 50+ meeting and communication platforms",
      "Deep CRM and workflow integrations (Salesforce, Slack, Asana)",
      "AI topic tracking, sentiment analysis, and action item detection",
      "Customizable meeting templates and soundbite clips"
    ],
    cons: [
      "Setup can be complex with multiple integrations",
      "Audio quality issues can affect transcription accuracy",
      "Privacy and compliance concerns for sensitive meetings",
      "Can record meetings inadvertently if not configured carefully"
    ],
    pricing: "Freemium",
    pricingDetail: "Free plan (limited credits); Pro at $19/month (billed annually); Business at $29/user/month (billed annually); Enterprise at custom pricing",
    features: [
      "Multi-platform meeting recording and transcription",
      "AI-powered action item and topic extraction",
      "CRM and project management integrations",
      "Conversation search across all meetings",
      "Custom soundbite and clip creation"
    ],
    useCase: "Best for sales teams, customer success, and revenue-focused organizations who need meeting intelligence integrated with their CRM and workflow tools.",
    alternatives: ["Otter.ai", "Fathom", "Grain", "Wingman"],
    scoreBreakdown: { features: 4.6, reviews: 4.3, momentum: 4.5, popularity: 4.4 },
    userQuotes: [
      { role: "Sales Director", company: "B2B SaaS", quote: "Fireflies transcribes all my customer calls and automatically logs insights into Salesforce. My pipeline visibility has never been better." },
      { role: "Customer Success Manager", company: "Tech Company", quote: "The AI topic tracking helps me identify which product features customers are asking about most. Invaluable for product feedback." }
    ]
  },
  {
    id: "krisp",
    name: "Krisp",
    category: "AI Audio Enhancement",
    rating: 4.3,
    reviewCount: 7200,
    icon: Zap,
    description: "AI-powered noise cancellation and audio enhancement tool that removes background noise from any communication app.",
    longDescription: "Krisp is an AI-powered audio processing engine that provides real-time noise cancellation, voice clarity enhancement, and echo removal for both microphone input and speaker output. It works at the system level, meaning it integrates with any communication app — Zoom, Teams, Slack, Discord, phone calls, recording software — without requiring app-specific plugins. Krisp uses deep learning models trained on millions of sound samples to distinguish human voices from background noise, allowing you to mute your noisy environment or remove distracting sounds from others.",
    pros: [
      "Works with any audio app at the system level",
      "Bidirectional noise cancellation (input and output)",
      "Voice clarity enhancement for professional-quality audio",
      "AI echo removal and room reverb suppression"
    ],
    cons: [
      "Can occasionally clip parts of speech as noise",
      "Premium pricing for advanced features",
      "Requires local processing which can use CPU resources",
      "Limited free tier with daily usage caps"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier (limited minutes/day); Pro at $8/month (billed annually); Business at $15/user/month (billed annually); Enterprise at custom pricing",
    features: [
      "Real-time AI noise cancellation for mic and speaker",
      "Voice clarity enhancement",
      "Echo and reverb removal",
      "Works with any communication app",
      "Local processing for privacy (no cloud upload)"
    ],
    useCase: "Essential for remote workers, podcasters, and anyone who takes calls in less-than-ideal environments and wants studio-quality audio without hardware upgrades.",
    alternatives: ["NVIDIA Broadcast", "Riverside.fm", "Descript Studio Sound"],
    scoreBreakdown: { features: 4.5, reviews: 4.2, momentum: 4.3, popularity: 4.2 },
    userQuotes: [
      { role: "Remote Developer", company: "Tech Startup", quote: "Krisp is magic. I take calls from coffee shops and my team thinks I'm in a soundproof booth. It's become non-negotiable for my remote setup." },
      { role: "Podcast Host", company: "Media", quote: "The audio quality improvement is incredible. Krisp cleaned up my co-host's recording from a noisy hotel room — sounded like a professional studio." }
    ]
  },
  {
    id: "superhuman-ai",
    name: "Superhuman AI",
    category: "AI Email Assistant",
    rating: 4.5,
    reviewCount: 6800,
    icon: Zap,
    description: "AI-powered email client designed for speed, with smart triage, automated responses, and calendar features for power users.",
    longDescription: "Superhuman is a premium email client that combines an ultra-fast interface with powerful AI features to help users achieve inbox zero faster. Its AI capabilities include smart triage that surfaces your most important emails, AI-powered writing assistance (Split Inbox), automated reply suggestions, calendar scheduling, and follow-up reminders. Superhuman is designed for speed — with keyboard shortcuts, instant search, and optimized rendering that makes email processing significantly faster than standard clients. The AI learns your priorities and communication patterns over time.",
    pros: [
      "Lightning-fast email experience with keyboard-first design",
      "AI-powered email triage and priority sorting",
      "Split Inbox separates important emails from newsletters",
      "AI writing assistant for faster email composition"
    ],
    cons: [
      "Premium pricing significantly higher than alternatives",
      "Gmail/Outlook only — no other email provider support",
      "Learning curve for keyboard shortcuts and workflow",
      "AI features require constant learning to be effective"
    ],
    pricing: "Subscription",
    pricingDetail: "$30/month (billed annually at $360/year) or $35/month (monthly billing); includes all AI features",
    features: [
      "Split Inbox with AI-powered priority sorting",
      "AI email composition and reply suggestions",
      "Scheduled sending and follow-up reminders",
      "Read receipts and link tracking",
      "Calendar scheduling with availability sharing"
    ],
    useCase: "Ideal for executives, founders, and power users who process high volumes of email daily and want the fastest, most intelligent email experience available.",
    alternatives: ["Spark Mail", "Newton Mail", "Shortwave", "Canary Mail"],
    scoreBreakdown: { features: 4.6, reviews: 4.4, momentum: 4.5, popularity: 4.3 },
    userQuotes: [
      { role: "CEO", company: "Venture-Backed Startup", quote: "Superhuman cut my email time in half. The AI triage makes sure I never miss an important message, and the keyboard shortcuts are incredible." },
      { role: "Investor", company: "VC Firm", quote: "Processing 300+ emails daily was a nightmare until Superhuman. The AI writing assistant saves me hours every week." }
    ]
  },
  {
    id: "reclaim-ai",
    name: "Reclaim AI",
    category: "AI Calendar Optimization",
    rating: 4.3,
    reviewCount: 5600,
    icon: Zap,
    description: "AI-powered calendar assistant that automatically schedules tasks, protects focus time, and optimizes team schedules.",
    longDescription: "Reclaim AI is an intelligent calendar optimization tool built for Google Calendar that uses machine learning to automatically schedule tasks, habits, and breaks around your existing meetings. It analyzes your availability patterns, priorities, and workload to find optimal time slots. Reclaim's AI protects your focus time from being overrun by meetings, automatically reschedules tasks when conflicts arise, and can coordinate scheduling across teams. It also tracks productivity statistics and provides insights into how your time is distributed.",
    pros: [
      "Automatic task scheduling around your existing calendar",
      "Focus time protection prevents meeting overload",
      "Smart rescheduling when priorities shift",
      "Productivity tracking and time analytics"
    ],
    cons: [
      "Google Calendar only — no Outlook integration",
      "Free tier is very limited in features",
      "AI scheduling can feel aggressive with rescheduling",
      "Requires trust in AI to manage your calendar"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier (limited features); Starter at $12/month; Business at $18/user/month; Enterprise at custom pricing",
    features: [
      "AI-powered task scheduling on calendar",
      "Focus time protection and buffer zones",
      "Automatic rescheduling of conflicts",
      "Team scheduling and availability coordination",
      "Productivity analytics and time insights"
    ],
    useCase: "Best for professionals and teams who want to reclaim their time through AI-optimized scheduling, task management, and focus time protection on Google Calendar.",
    alternatives: ["Motion", "Clockwise", "Akiflow", "TimeHero"],
    scoreBreakdown: { features: 4.5, reviews: 4.1, momentum: 4.4, popularity: 4.1 },
    userQuotes: [
      { role: "Engineering Manager", company: "Tech Company", quote: "Reclaim automatically schedules my 1:1s, code reviews, and personal tasks around the chaos of meetings. Finally feels like I'm in control." },
      { role: "Design Lead", company: "Agency", quote: "The focus time protection changed how I work. I get 3 hours of uninterrupted deep work daily now, and Reclaim handles the rest." }
    ]
  },
  {
    id: "clockwise",
    name: "Clockwise",
    category: "AI Calendar Management",
    rating: 4.2,
    reviewCount: 4900,
    icon: Zap,
    description: "AI-powered calendar assistant that creates focused work time by automatically adjusting meetings and optimizing schedules.",
    longDescription: "Clockwise is an intelligent calendar management tool that uses AI to create more time for focused work by automatically adjusting meeting schedules. It analyzes your calendar and team's calendars to find opportunities to compress, move, or adjust meetings, creating blocks of uninterrupted focus time. Clockwise's AI can automatically move flexible meetings, suggest better meeting times, add buffer between meetings, and protect your preferred deep work hours. It integrates with Google Calendar and Slack to coordinate scheduling across your team while respecting everyone's preferences.",
    pros: [
      "Creates meaningful focus time blocks automatically",
      "Squash, move, and compress flexible meetings",
      "Team-synchronized scheduling with Slack integration",
      "Respects individual work style preferences and time zones"
    ],
    cons: [
      "Google Calendar only — no native Outlook support",
      "Free tier limited to basic features",
      "AI decisions sometimes need manual override",
      "Team coordination requires universal adoption"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier (basic optimization); Pro at $15/user/month; Enterprise at custom pricing",
    features: [
      "Automatic focus time creation and protection",
      "Meeting compression and flexible rescheduling",
      "Buffer time between meetings",
      "Team-wide schedule optimization",
      "Slack scheduling and coordination"
    ],
    useCase: "Perfect for teams and individuals using Google Calendar who want AI to automatically reclaim focus time by intelligently managing their meeting schedule.",
    alternatives: ["Reclaim AI", "Motion", "Akiflow", "Tactiq"],
    scoreBreakdown: { features: 4.3, reviews: 4.0, momentum: 4.2, popularity: 4.1 },
    userQuotes: [
      { role: "Software Engineer", company: "Large Enterprise", quote: "Clockwise gave me back 5+ hours of focus time per week. Simply moving flexible meetings around made a massive difference." },
      { role: "Team Lead", company: "Mid-Size Company", quote: "The team calendar optimization is amazing. We all get more focus time without stepping on each other's preferred work hours." }
    ]
  },
  {
    id: "goblin-tools",
    name: "Goblin.tools",
    category: "AI Neurodiversity & Task Assistant",
    rating: 4.6,
    reviewCount: 3200,
    icon: Zap,
    description: "AI-powered task management suite designed for neurodivergent individuals, helping break down tasks and manage executive function challenges.",
    longDescription: "Goblin.tools is a collection of small, simple, single-task AI tools designed primarily to help neurodivergent individuals with executive function challenges. The toolkit includes a Magic To Do list that can break down overwhelming tasks into manageable steps, an AI Estimator for task duration, a Formalizer that adjusts text tone, a Judge that evaluates message tone, and a Compiler for organizing thoughts. The tools use AI in a gentle, non-judgmental way — with visual modes that are warm, playful, and reduce anxiety around task management and communication.",
    pros: [
      "Designed specifically for neurodivergent users and accessibility",
      "Breaks down overwhelming tasks into actionable steps",
      "Warm, non-judgmental tone and playful interface",
      "Simple, focused tools for specific needs without bloat"
    ],
    cons: [
      "Not designed for enterprise or team collaboration",
      "Limited integration with other productivity tools",
      "AI task breakdown can be overly granular sometimes",
      "Small developer team means slower updates"
    ],
    pricing: "Pay What You Want",
    pricingDetail: "Pay What You Want model (suggested $1-$10 for full access); no subscription required; most features available for free with usage limits",
    features: [
      "Magic To Do list with AI task breakdown",
      "Task time estimator based on difficulty",
      "Text tone formalizer and adjuster",
      "Message tone judge for communication clarity",
      "AI compiler for organizing scattered thoughts"
    ],
    useCase: "Ideal for neurodivergent individuals, people with ADHD, anxiety, or anyone who struggles with executive function and wants a kind, simple AI assistant to help manage tasks and communication.",
    alternatives: ["Todoist", "TickTick", "Remember The Milk", "Trello"],
    scoreBreakdown: { features: 4.5, reviews: 4.7, momentum: 4.6, popularity: 4.4 },
    userQuotes: [
      { role: "ADHD Coach", company: "Private Practice", quote: "Goblin.tools is the first productivity tool I've seen that truly understands neurodivergent brains. The task breakdown feature is life-changing for my clients." },
      { role: "UX Designer", company: "Freelance", quote: "The Magic To Do list turned my overwhelming to-do list into manageable steps. The non-judgmental tone makes me actually want to use it instead of avoiding it." }
    ]
  }
];
