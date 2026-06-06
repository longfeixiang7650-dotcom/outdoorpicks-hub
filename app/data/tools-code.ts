import {
  Code2,
  type LucideIcon,
} from "lucide-react";

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

export const CODE_TOOLS: ToolData[] = [
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "AI Code Assistant",
    rating: 4.5,
    reviewCount: 12500,
    icon: Code2,
    description: "AI pair programmer that offers autocomplete-style suggestions as you code, powered by OpenAI Codex.",
    longDescription: "GitHub Copilot is an AI-powered code completion tool developed by GitHub in collaboration with OpenAI. It integrates directly into popular IDEs like VS Code, JetBrains, and Neovim, providing real-time suggestions for entire lines or blocks of code. Trained on billions of lines of public code, Copilot adapts to your coding style and context, supporting a wide range of programming languages and frameworks.",
    pros: [
      "Deep IDE integration with minimal setup",
      "Supports many languages including Python, JS, TS, Ruby, Go",
      "Understands context from comments and function names",
      "Fast inline suggestions with Tab to accept"
    ],
    cons: [
      "Can produce insecure or buggy code without review",
      "Limited free tier; paid subscription required for full access",
      "Privacy concerns with code sent to cloud",
      "Occasionally suggests outdated or deprecated APIs"
    ],
    pricing: "Freemium",
    pricingDetail: "Free for open-source maintainers and verified students; $10/month for Individuals ($100/year); $19/user/month for Business",
    features: [
      "Real-time code completion",
      "Multi-line suggestion",
      "Supports 30+ programming languages",
      "VS Code, JetBrains, Neovim, and more",
      "Chat interface for code explanations"
    ],
    useCase: "Best for individual developers and teams wanting accelerated coding with AI-assisted autocomplete in their existing IDE workflow.",
    alternatives: ["Cursor", "Tabnine", "Codeium", "Amazon CodeWhisperer"],
    scoreBreakdown: { features: 4.6, reviews: 4.4, momentum: 4.8, popularity: 4.9 },
    userQuotes: [
      { role: "Senior Frontend Developer", company: "Stripe", quote: "Copilot has become an indispensable part of my daily workflow. It's like having a senior dev looking over my shoulder." },
      { role: "Software Engineer", company: "Freelancer", quote: "The time saved on boilerplate code alone justifies the cost. It's my first recommendation to any developer." }
    ]
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AI Code Editor",
    rating: 4.7,
    reviewCount: 8500,
    icon: Code2,
    description: "AI-first code editor built on VS Code with powerful AI features for editing, debugging, and understanding codebases.",
    longDescription: "Cursor is an AI-native code editor forked from VS Code that embeds AI deeply into the development experience. It offers features like AI-powered multi-line edits, natural language command of the editor, codebase-wide Q&A, and AI-driven debugging. Cursor uses models like GPT-4, Claude, and its own custom models to provide context-aware assistance at every step of the development process.",
    pros: [
      "AI-native editor built on familiar VS Code base",
      "Excellent codebase-wide understanding and search",
      "AI chat can read and modify files directly",
      "Supports multiple AI models under the hood"
    ],
    cons: [
      "Smaller plugin ecosystem than full VS Code",
      "Subscription cost higher than some alternatives",
      "Relatively new; occasional stability issues",
      "Heavy reliance on cloud for AI features"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with limited requests; Pro at $20/month; Business at $40/user/month",
    features: [
      "AI-powered multi-line editing",
      "Natural language command palette",
      "Codebase-wide semantic search",
      "AI chat with file read/write capability",
      "Debugging assistance with AI"
    ],
    useCase: "Ideal for developers who want a fully AI-integrated coding environment rather than just an autocomplete plugin.",
    alternatives: ["GitHub Copilot", "Replit AI", "Sourcegraph Cody"],
    scoreBreakdown: { features: 4.9, reviews: 4.6, momentum: 4.9, popularity: 4.5 },
    userQuotes: [
      { role: "Full-Stack Developer", company: "Startup", quote: "Cursor completely changed how I approach coding. I can refactor entire files with a single prompt." },
      { role: "Tech Lead", company: "Mid-Size SaaS", quote: "The codebase search alone is worth the price. Finding relevant code across our monorepo is instant." }
    ]
  },
  {
    id: "replit-ai",
    name: "Replit AI",
    category: "Cloud IDE with AI",
    rating: 4.3,
    reviewCount: 7200,
    icon: Code2,
    description: "AI-powered cloud development environment that enables coding, debugging, and deploying from any browser.",
    longDescription: "Replit AI brings artificial intelligence into the Replit browser-based IDE, offering code completion, natural language code generation, AI debugging, and GhostWriter — an AI pair programmer. Replit is particularly popular in education and for rapid prototyping, allowing developers to write, run, and deploy code without any local setup. The AI features are deeply integrated into the collaborative environment.",
    pros: [
      "Zero setup — code from any browser instantly",
      "Collaborative multi-player editing built-in",
      "AI GhostWriter assists with code generation",
      "Excellent for learning, teaching, and prototyping"
    ],
    cons: [
      "Limited for large or complex enterprise projects",
      "Dependent on internet connection",
      "Free tier has resource limitations",
      "Less powerful than local IDEs for heavy workloads"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with basic features; Hacker at $25/month; Teams at $40/user/month",
    features: [
      "Browser-based IDE with AI assistance",
      "GhostWriter AI code generation",
      "AI-powered debugging",
      "One-click deploy",
      "Multi-player real-time collaboration"
    ],
    useCase: "Great for learners, educators, hackathon participants, and developers who want a zero-setup environment with AI help.",
    alternatives: ["GitHub Codespaces", "CodeSandbox", "Cursor"],
    scoreBreakdown: { features: 4.2, reviews: 4.1, momentum: 4.5, popularity: 4.3 },
    userQuotes: [
      { role: "Computer Science Instructor", company: "University", quote: "Replit AI makes teaching programming so much easier. Students can focus on concepts without setup friction." },
      { role: "Indie Hacker", company: "Solo", quote: "I prototype all my ideas in Replit. The AI helps me move from concept to working demo in hours." }
    ]
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "AI Code Completion",
    rating: 4.2,
    reviewCount: 5800,
    icon: Code2,
    description: "AI-powered code completion tool that learns from your codebase to provide personalized suggestions.",
    longDescription: "Tabnine (formerly Codota) is an AI code completion assistant that uses deep learning models to predict and suggest code as you type. It offers both cloud-based and on-premise deployment options, with a strong focus on privacy. Tabnine's models can be trained on your private codebase for highly personalized suggestions, making it popular among enterprise teams with strict data policies.",
    pros: [
      "On-premise deployment option for data privacy",
      "Personalized suggestions based on your codebase",
      "Wide IDE support (VS Code, IntelliJ, Vim, etc.)",
      "Works offline with local models"
    ],
    cons: [
      "Suggestions can be less context-aware than Copilot",
      "Free tier is quite limited",
      "Enterprise pricing can be expensive",
      "Requires training time for best results"
    ],
    pricing: "Freemium",
    pricingDetail: "Basic free tier; Pro at $12/month; Enterprise with on-premise at custom pricing",
    features: [
      "AI code completions",
      "Full-line and full-function completions",
      "Private codebase training",
      "On-premise deployment",
      "Supports 30+ languages and 15+ IDEs"
    ],
    useCase: "Best for enterprises and teams with strict data privacy requirements who want personalized code completion.",
    alternatives: ["GitHub Copilot", "Codeium", "Amazon CodeWhisperer"],
    scoreBreakdown: { features: 4.3, reviews: 4.0, momentum: 3.8, popularity: 4.0 },
    userQuotes: [
      { role: "DevOps Engineer", company: "Enterprise Bank", quote: "The on-premise option was the deciding factor. We get AI assistance without sending code to any third-party servers." },
      { role: "Java Developer", company: "Fintech", quote: "Tabnine understands our Java codebase incredibly well after training. The suggestions are spot-on." }
    ]
  },
  {
    id: "codeium",
    name: "Codeium",
    category: "AI Code Toolkit",
    rating: 4.4,
    reviewCount: 6300,
    icon: Code2,
    description: "Free AI-powered code acceleration toolkit with autocomplete, search, and chat capabilities.",
    longDescription: "Codeium is a modern AI-powered code acceleration platform that offers code completion, codebase search, and AI chat — all with a generous free tier. Built by ex-Google and ex-NVIDIA engineers, Codeium supports over 70 programming languages and integrates with 40+ IDEs. It's designed to be a cost-effective alternative to GitHub Copilot, with strong performance and privacy features.",
    pros: [
      "Generous free tier for individual developers",
      "Supports 70+ languages and 40+ IDEs",
      "Code search across your entire codebase",
      "Fast and lightweight compared to alternatives"
    ],
    cons: [
      "Less mature than Copilot in some scenarios",
      "Enterprise features less polished",
      "Some users report occasional irrelevant suggestions",
      "Brand recognition still growing"
    ],
    pricing: "Freemium",
    pricingDetail: "Free for individuals; Teams at $15/user/month; Enterprise at custom pricing",
    features: [
      "AI code autocomplete",
      "Codebase-wide semantic search",
      "AI chat assistant",
      "Multi-line suggestions",
      "70+ language support"
    ],
    useCase: "Perfect for individual developers and small teams who want a powerful, free AI coding assistant to accelerate daily development.",
    alternatives: ["GitHub Copilot", "Tabnine", "Amazon CodeWhisperer"],
    scoreBreakdown: { features: 4.5, reviews: 4.3, momentum: 4.6, popularity: 4.2 },
    userQuotes: [
      { role: "Frontend Engineer", company: "Startup", quote: "Codeium's free tier is incredibly generous. I get all the features I need without paying a cent." },
      { role: "Independent Contractor", company: "Self-Employed", quote: "The code search feature alone saves me hours per week. It's like grep on steroids with AI context." }
    ]
  },
  {
    id: "amazon-codewhisperer",
    name: "Amazon CodeWhisperer",
    category: "AI Code Developer",
    rating: 4.1,
    reviewCount: 4800,
    icon: Code2,
    description: "AWS-powered AI code generator that provides real-time code suggestions with a focus on security and AWS integration.",
    longDescription: "Amazon CodeWhisperer is an AI-powered code development tool from AWS that generates real-time code suggestions directly in your IDE. It's trained on Amazon's vast codebase and excels at generating AWS API calls and cloud-native code. A standout feature is its security scanning capability that can detect vulnerabilities in your code. CodeWhisperer is free for individual developers, making it an attractive option.",
    pros: [
      "Excellent AWS service integration",
      "Free for individual developers",
      "Built-in security vulnerability scanning",
      "Supports 15+ languages and major IDEs"
    ],
    cons: [
      "Best results when using AWS services",
      "Less useful for non-AWS cloud development",
      "Smaller community and fewer updates than Copilot",
      "Suggestions can be too AWS-specific"
    ],
    pricing: "Free",
    pricingDetail: "Free for individual developers; Enterprise tier included with AWS account (pay-as-you-go)",
    features: [
      "Real-time code suggestions",
      "AWS API and service optimization",
      "Security vulnerability scanning",
      "Reference tracking for code lineage",
      "Supports Python, Java, JS, TypeScript, C#, and more"
    ],
    useCase: "Ideal for developers building on AWS who want free AI code assistance with built-in security scanning and cloud-native suggestions.",
    alternatives: ["GitHub Copilot", "Codeium", "Tabnine"],
    scoreBreakdown: { features: 4.2, reviews: 3.9, momentum: 4.3, popularity: 4.1 },
    userQuotes: [
      { role: "Cloud Architect", company: "AWS Consulting", quote: "For anyone working with AWS services, CodeWhisperer is a no-brainer. It generates correct SDK calls effortlessly." },
      { role: "DevOps Lead", company: "E-Commerce", quote: "The security scanning feature caught several vulnerabilities in our code. That alone made it invaluable." }
    ]
  },
  {
    id: "gitlab-duo",
    name: "GitLab Duo",
    category: "AI DevSecOps Platform",
    rating: 4.3,
    reviewCount: 3900,
    icon: Code2,
    description: "AI-powered DevSecOps platform integrated into GitLab for code suggestions, review, and security throughout the lifecycle.",
    longDescription: "GitLab Duo is GitLab's suite of AI capabilities woven into the entire DevSecOps lifecycle. It includes code suggestions in the IDE, AI-powered code review, merge request summarization, vulnerability explanation, and chat-based assistance. Duo is deeply integrated with GitLab's existing CI/CD, security scanning, and project management tools, providing contextual AI help at every stage from planning to monitoring.",
    pros: [
      "Deep integration with GitLab ecosystem",
      "AI across the entire DevSecOps lifecycle",
      "Merge request summarization saves review time",
      "Security vulnerability explanations and remediation"
    ],
    cons: [
      "Limited value outside GitLab ecosystem",
      "Requires GitLab Premium or Ultimate subscription",
      "Newer to market with fewer features than dedicated tools",
      "IDE integration still maturing"
    ],
    pricing: "Paid",
    pricingDetail: "Included with GitLab Premium ($29/user/month) and GitLab Ultimate ($99/user/month)",
    features: [
      "AI code suggestions in IDE",
      "Merge request description generation",
      "Code review AI summaries",
      "Vulnerability explanation and fix suggestions",
      "GitLab Duo Chat for natural language queries"
    ],
    useCase: "Best for teams already using GitLab who want an integrated AI assistant across the full development lifecycle.",
    alternatives: ["GitHub Copilot", "Sourcegraph Cody", "Amazon CodeWhisperer"],
    scoreBreakdown: { features: 4.4, reviews: 4.1, momentum: 4.5, popularity: 3.8 },
    userQuotes: [
      { role: "DevOps Manager", company: "Mid-Size Tech", quote: "Duo's merge request summaries have cut our code review time by 30%. It's a force multiplier for our team." },
      { role: "Security Engineer", company: "SaaS Company", quote: "Having AI explain vulnerabilities and suggest fixes directly in GitLab streamlined our security workflow." }
    ]
  },
  {
    id: "sourcegraph-cody",
    name: "Sourcegraph Cody",
    category: "AI Code Understanding",
    rating: 4.5,
    reviewCount: 3200,
    icon: Code2,
    description: "AI coding assistant that understands your entire codebase, enabling powerful contextual code generation and explanation.",
    longDescription: "Sourcegraph Cody is an AI coding assistant that combines Sourcegraph's code intelligence with large language models. Unlike tools that only see the file you're editing, Cody understands your entire codebase — across repositories, dependencies, and services. It can answer questions about code architecture, generate code within existing patterns, explain complex functions, and help with refactoring at scale.",
    pros: [
      "Understands entire codebase, not just open files",
      "Excellent for large monorepos and microservice architectures",
      "Can explain code across multiple repositories",
      "Contextual code generation respects existing patterns"
    ],
    cons: [
      "Requires Sourcegraph setup (self-hosted or cloud)",
      "Overkill for small or simple projects",
      "Learning curve for advanced features",
      "Pricing can be high for large teams"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier for small teams; Enterprise at custom pricing based on size and deployment model",
    features: [
      "Full codebase context understanding",
      "Cross-repository code search",
      "AI code generation with codebase awareness",
      "Code explanation and documentation",
      "Automated refactoring suggestions"
    ],
    useCase: "Ideal for engineering teams with large, complex codebases who need AI assistance that understands cross-repository context.",
    alternatives: ["GitHub Copilot", "Cursor", "GitLab Duo"],
    scoreBreakdown: { features: 4.7, reviews: 4.4, momentum: 4.6, popularity: 3.9 },
    userQuotes: [
      { role: "Principal Engineer", company: "Large Enterprise", quote: "Cody understands our monorepo better than any human on the team. It's like having a codebase expert always available." },
      { role: "Engineering Director", company: "Fintech", quote: "The cross-repository awareness is a game changer. Cody helped us trace a bug through five microservices in minutes." }
    ]
  },
  {
    id: "pieces",
    name: "Pieces",
    category: "AI Developer Productivity",
    rating: 4.0,
    reviewCount: 2400,
    icon: Code2,
    description: "AI-powered developer productivity tool that captures, enriches, and surfaces useful code snippets and context.",
    longDescription: "Pieces is an AI-powered developer productivity platform that helps developers capture, enrich, and reuse code snippets and contextual information. It includes a desktop app, browser extension, and IDE plugins that work together to automatically save code you interact with, enrich it with metadata and AI explanations, and make it searchable. Pieces also offers AI chat, code transformation, and collaboration features.",
    pros: [
      "Automatic snippet capture with AI enrichment",
      "Seamless across desktop, browser, and IDE",
      "Local-first architecture for privacy",
      "Powerful search across saved snippets"
    ],
    cons: [
      "Less focused on code generation than alternatives",
      "Requires installing multiple components",
      "Smaller user community",
      "Some features still in beta"
    ],
    pricing: "Freemium",
    pricingDetail: "Free for individuals; Teams at $20/user/month; Enterprise at custom pricing",
    features: [
      "Automatic snippet capture",
      "AI enrichment and tagging",
      "Cross-device sync",
      "Pieces for Developers copilot",
      "Browser extension for web-based code capture"
    ],
    useCase: "Best for developers who frequently work across multiple contexts and want an AI-powered memory tool to capture and retrieve code snippets.",
    alternatives: ["Sourcegraph Cody", "Notion AI", "GitHub Copilot"],
    scoreBreakdown: { features: 4.1, reviews: 3.9, momentum: 4.0, popularity: 3.5 },
    userQuotes: [
      { role: "Full-Stack Developer", company: "Consultancy", quote: "Pieces automatically saves every useful snippet I encounter. It's like a second brain for my code." },
      { role: "Data Scientist", company: "Research Lab", quote: "The AI enrichment is amazing — it explains what each snippet does so I can actually remember it later." }
    ]
  },
  {
    id: "debuild",
    name: "Debuild",
    category: "AI App Builder",
    rating: 4.0,
    reviewCount: 1800,
    icon: Code2,
    description: "AI-powered no-code app builder that generates complete web applications from natural language descriptions.",
    longDescription: "Debuild is an AI-powered low-code platform that enables developers and non-developers to build web applications using natural language. You describe what you want in plain English, and Debuild generates the full application — including frontend, backend, database schema, and API integrations. It uses AI to understand requirements, generate code, and deploy applications rapidly, dramatically reducing development time.",
    pros: [
      "Build complete apps from natural language",
      "Generates both frontend and backend code",
      "Handles database schema and API creation",
      "Fast prototyping and iteration"
    ],
    cons: [
      "Less control over generated code quality",
      "Limited customization for complex requirements",
      "Primarily for web applications",
      "Newer platform with evolving reliability"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with limited builds; Pro at $29/month; Enterprise at custom pricing",
    features: [
      "Natural language to full app generation",
      "Frontend + backend + database generation",
      "Built-in hosting and deployment",
      "API endpoint generation",
      "Visual preview and iteration"
    ],
    useCase: "Perfect for founders, product managers, and developers who want to rapidly prototype and build full-stack web applications from natural language descriptions.",
    alternatives: ["Replit AI", "Bolt.new", "v0.dev"],
    scoreBreakdown: { features: 4.2, reviews: 3.8, momentum: 4.3, popularity: 3.7 },
    userQuotes: [
      { role: "Product Manager", company: "Startup", quote: "I built a working MVP in two hours using Debuild. My developers were shocked when I showed them fully functional code." },
      { role: "Indie Founder", company: "Solo", quote: "Debuild helped me validate my idea by building a working prototype without writing a single line of code myself." }
    ]
  }
];
