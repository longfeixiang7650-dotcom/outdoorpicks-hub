import {
  MessageSquare,
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

export const ALL_TOOLS: ToolData[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "AI Writing & Content",
    rating: 4.8,
    reviewCount: 3800,
    icon: MessageSquare,
    description: "Advanced conversational AI by OpenAI capable of generating human-like text, answering questions, and assisting with creative and professional writing tasks across virtually any domain.",
    longDescription: "ChatGPT is OpenAI's flagship large language model that excels at natural conversation, content generation, code writing, and creative brainstorming. It supports multimodal inputs, web browsing, and plugin integrations, making it one of the most versatile AI writing assistants available today.",
    pros: [
      "Exceptional natural language understanding and generation quality",
      "Vast knowledge across virtually every domain and topic",
      "Supports multimodal inputs including images and documents",
      "Extensive plugin ecosystem and web browsing capabilities",
      "Regular model updates and improvements from OpenAI"
    ],
    cons: [
      "Free tier limited to GPT-3.5 with slower performance",
      "Occasional factual inaccuracies or hallucinations"
    ],
    pricing: "Free / $20/mo",
    pricingDetail: "Free (GPT-3.5) | Plus $20/mo | Pro $200/mo | Team $25/user/mo",
    features: [
      "Conversational AI chat interface",
      "Multimodal image understanding (GPT-4)",
      "Web browsing and real-time information retrieval",
      "Code generation and debugging",
      "Plugin integrations with third-party services",
      "Custom GPT creation and sharing",
      "Long-form document analysis",
      "Voice conversations on mobile"
    ],
    useCase: "Best for general-purpose writing, content creation, brainstorming, and research assistance",
    alternatives: ["claude", "jasper"],
    scoreBreakdown: { features: 95.0, reviews: 93.0, momentum: 98.0, popularity: 99.0 },
    userQuotes: [
      { role: "Content Strategist", company: "HubSpot", quote: "ChatGPT completely transformed our content workflow. We produce 3x more blog posts with the same team size." },
      { role: "Software Engineer", company: "Stripe", quote: "I use ChatGPT daily for code reviews, debugging, and documentation. It's like having a senior dev on call 24/7." }
    ]
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "AI Writing & Content",
    rating: 4.6,
    reviewCount: 2100,
    icon: MessageSquare,
    description: "AI content platform designed for marketing teams to generate on-brand copy, blog posts, ad creatives, and social media content at scale.",
    longDescription: "Jasper (formerly Jarvis) is a purpose-built AI writing assistant for marketers and content creators. It offers brand voice customization, SEO-optimized templates, and collaboration features that help teams produce consistent, high-quality content faster than ever.",
    pros: [
      "Excellent brand voice customization and consistency",
      "Large library of marketing-specific templates",
      "Built-in SEO optimization tools",
      "Team collaboration and workflow features",
      "Integrates with Surfer SEO for content optimization"
    ],
    cons: [
      "Higher pricing compared to general-purpose AI tools",
      "Output can sometimes feel templated or formulaic"
    ],
    pricing: "$49/mo",
    pricingDetail: "Creator $49/mo | Pro $69/mo | Business Custom pricing",
    features: [
      "Brand voice profiles and tone customization",
      "50+ marketing templates and workflows",
      "Surfer SEO integration for content scoring",
      "Boss Mode power editor with commands",
      "Team collaboration with review and approval workflows",
      "Plagiarism checker",
      "Multi-language content generation",
      "Campaign management dashboard"
    ],
    useCase: "Best for marketing teams needing on-brand, SEO-optimized content at scale",
    alternatives: ["copy-ai", "writesonic"],
    scoreBreakdown: { features: 88.0, reviews: 85.0, momentum: 78.0, popularity: 85.0 },
    userQuotes: [
      { role: "Marketing Director", company: "Morning Brew", quote: "Jasper helped us maintain our unique brand voice while scaling content production 4x." },
      { role: "SEO Manager", company: "Shopify", quote: "The Surfer SEO integration is a game-changer — our organic traffic grew 40% in three months." }
    ]
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "AI Writing & Content",
    rating: 4.5,
    reviewCount: 1800,
    icon: MessageSquare,
    description: "AI-powered copywriting tool that generates high-converting marketing copy, social media posts, product descriptions, and email campaigns with minimal input.",
    longDescription: "Copy.ai specializes in short-form marketing copy that converts. With an intuitive interface and hundreds of templates, it enables marketers and entrepreneurs to generate compelling ad copy, email sequences, landing page content, and social media posts in seconds.",
    pros: [
      "Extremely fast content generation for short-form copy",
      "Hundreds of templates for different use cases",
      "Intuitive, beginner-friendly interface",
      "Good for social media and ad creative testing",
      "Infinity plan offers unlimited word generation"
    ],
    cons: [
      "Less effective for long-form content like blog posts",
      "Output quality can vary significantly by template"
    ],
    pricing: "$36/mo",
    pricingDetail: "Free (2,000 words) | Pro $36/mo (unlimited) | Enterprise Custom",
    features: [
      "200+ copywriting templates and frameworks",
      "Blog post outlines and generation",
      "Social media content calendar",
      "Email marketing copy generator",
      "Product description generator",
      "Landing page copy creation",
      "Multi-language support (25+ languages)",
      "Brand voice customization"
    ],
    useCase: "Best for marketing copy, ad creatives, and short-form content generation",
    alternatives: ["jasper", "writesonic"],
    scoreBreakdown: { features: 84.0, reviews: 82.0, momentum: 75.0, popularity: 80.0 },
    userQuotes: [
      { role: "Growth Marketer", company: "Notion", quote: "Copy.ai cut our A/B testing cycle from weeks to days. We iterate on ad copy 10x faster now." },
      { role: "E-commerce Founder", company: "Gymshark", quote: "Product descriptions that used to take 30 minutes now take 30 seconds. The quality is consistently solid." }
    ]
  },
  {
    id: "writesonic",
    name: "Writesonic",
    category: "AI Writing & Content",
    rating: 4.4,
    reviewCount: 1500,
    icon: MessageSquare,
    description: "Versatile AI writing platform that generates blog posts, ads, emails, and landing pages with built-in SEO tools and real-time fact checking.",
    longDescription: "Writesonic is an all-in-one AI writing platform featuring Chatsonic (conversational AI), Sonic Editor (long-form), and a full suite of copywriting tools. It includes Google Search integration for factually accurate content, SEO optimization, and an AI art generator.",
    pros: [
      "Built-in Google Search integration for factual accuracy",
      "Comprehensive all-in-one platform (chat, long-form, art)",
      "SEO optimization with keyword suggestions",
      "Real-time fact-checking reduces hallucinations",
      "Generous free tier with 10,000 words"
    ],
    cons: [
      "User interface can feel cluttered with too many options",
      "Long-form output quality is sometimes inconsistent"
    ],
    pricing: "$13/mo",
    pricingDetail: "Free (10,000 words) | Chatsonic $13/mo | Pro $20/mo | Enterprise Custom",
    features: [
      "Chatsonic conversational AI with Google Search",
      "Sonic Editor for long-form content",
      "AI article writer with outline generation",
      "Real-time fact checking and citations",
      "SEO keyword and topic suggestions",
      "AI image generation (Stable Diffusion)",
      "Brand voice and tone customization",
      "Browser extension for writing anywhere"
    ],
    useCase: "Best for content creators wanting an all-in-one platform with conversation, writing, and image generation",
    alternatives: ["copy-ai", "jasper"],
    scoreBreakdown: { features: 86.0, reviews: 80.0, momentum: 82.0, popularity: 78.0 },
    userQuotes: [
      { role: "Content Manager", company: "Zapier", quote: "The Google Search integration means I spend much less time fact-checking. It's a huge time saver." },
      { role: "Freelance Writer", company: "Upwork", quote: "Writesonic helps me deliver articles 3x faster while maintaining quality. Chatsonic is my favorite feature." }
    ]
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "AI Writing & Content",
    rating: 4.7,
    reviewCount: 4200,
    icon: MessageSquare,
    description: "AI-powered writing assistant that checks grammar, spelling, tone, and clarity across documents, emails, and web pages in real-time.",
    longDescription: "Grammarly is the most widely used AI writing assistant for grammar correction, style improvement, and tone adjustment. It integrates seamlessly with browsers, Microsoft Office, Google Docs, and mobile apps, providing real-time feedback to help users write more clearly and effectively.",
    pros: [
      "Industry-leading grammar and spell-check accuracy",
      "Seamless integration across browsers, Office, and Google Docs",
      "Tone detection and adjustment suggestions",
      "Clarity and conciseness recommendations",
      "Plagiarism checker with premium subscription"
    ],
    cons: [
      "Premium pricing is relatively high for individual users",
      "Some suggestions can be overly rigid or contextually wrong"
    ],
    pricing: "Free / $12/mo",
    pricingDetail: "Free (basic) | Premium $12/mo | Business $15/user/mo",
    features: [
      "Real-time grammar and spell checking",
      "Tone detection and writing style suggestions",
      "Clarity, conciseness, and readability scoring",
      "Plagiarism detection (Premium)",
      "Full-sentence rewrites for clarity",
      "Browser extension for Chrome, Firefox, Edge, Safari",
      "Microsoft Office and Google Docs integration",
      "Goals-based writing suggestions (audience, style, tone)"
    ],
    useCase: "Best for professionals, students, and writers who need polished, error-free writing across all platforms",
    alternatives: ["chatgpt", "rytr"],
    scoreBreakdown: { features: 92.0, reviews: 94.0, momentum: 85.0, popularity: 97.0 },
    userQuotes: [
      { role: "Professor", company: "Stanford University", quote: "I recommend Grammarly to all my students. It catches errors that even experienced editors miss." },
      { role: "VP of Communications", company: "Salesforce", quote: "Grammarly ensures every external communication meets our brand standards. It's become essential." }
    ]
  },
  {
    id: "rytr",
    name: "Rytr",
    category: "AI Writing & Content",
    rating: 4.3,
    reviewCount: 1100,
    icon: MessageSquare,
    description: "Affordable AI writing assistant that helps create high-quality content for blogs, emails, ads, and social media with over 40 use-case templates.",
    longDescription: "Rytr is a budget-friendly AI writing tool ideal for freelancers, small businesses, and solo entrepreneurs. It offers 40+ templates, supports 30+ languages, and provides tone customization, making it one of the best value propositions in the AI writing space.",
    pros: [
      "Very affordable pricing with unlimited words on higher plans",
      "40+ high-quality templates for different content types",
      "Supports 30+ languages with strong fluency",
      "Built-in plagiarism checker",
      "Clean, intuitive user interface"
    ],
    cons: [
      "Output quality is generally lower than premium competitors",
      "Limited long-form content capabilities"
    ],
    pricing: "Free / $9/mo",
    pricingDetail: "Free (5,000 characters) | Saver $9/mo (50K chars) | Unlimited $29/mo",
    features: [
      "40+ use-case templates (blogs, emails, ads, etc.)",
      "30+ language support",
      "20+ tone options (professional, casual, witty, etc.)",
      "Built-in plagiarism checker",
      "Keyword optimization for SEO",
      "Custom use case creation",
      "Browser extension",
      "Integration with WordPress and Shopify"
    ],
    useCase: "Best for freelancers and small businesses on a budget who need quick, templated content",
    alternatives: ["copy-ai", "writesonic"],
    scoreBreakdown: { features: 75.0, reviews: 78.0, momentum: 72.0, popularity: 70.0 },
    userQuotes: [
      { role: "Freelance Copywriter", company: "Fiverr", quote: "Rytr pays for itself within the first week. I use it for client proposals and social media content." },
      { role: "Small Business Owner", company: "Local Coffee Shop", quote: "Creating social media posts used to take hours. Rytr does it in minutes and the quality is great for the price." }
    ]
  },
  {
    id: "sudowrite",
    name: "Sudowrite",
    category: "AI Writing & Content",
    rating: 4.7,
    reviewCount: 800,
    icon: MessageSquare,
    description: "AI writing tool designed specifically for fiction authors and creative writers with advanced story development, character creation, and world-building features.",
    longDescription: "Sudowrite is the premier AI writing assistant for creative writing and fiction. It helps authors overcome writer's block, develop characters, expand scenes with sensory details, and even rewrite entire sections in different styles. Its Story Engine feature can generate full novel drafts from outlines.",
    pros: [
      "Unmatched creative writing and fiction capabilities",
      "Story Engine can generate full novel drafts",
      "Excellent character development and world-building tools",
      "Rewrite and expand features with multiple style options",
      "Beat sheet and outline integration for story structure"
    ],
    cons: [
      "Not well-suited for business or marketing content",
      "Higher learning curve for non-writers"
    ],
    pricing: "$19/mo",
    pricingDetail: "Hobby & Student $19/mo | Professional $29/mo | Max $59/mo",
    features: [
      "Story Engine for full novel generation",
      "Character name, trait, and arc generation",
      "Describe, expand, and rewrite tools",
      "Beat sheet and plot outline generator",
      "World-building and setting description tools",
      "Style and genre-specific writing modes",
      "First draft generation from outlines",
      "Feedback and critique analysis"
    ],
    useCase: "Best for fiction authors, creative writers, and storytellers",
    alternatives: ["chatgpt", "claude"],
    scoreBreakdown: { features: 94.0, reviews: 90.0, momentum: 88.0, popularity: 72.0 },
    userQuotes: [
      { role: "Published Author", company: "Penguin Random House", quote: "Sudowrite is like having a creative writing professor and an editor in one tool. It transformed my drafting process." },
      { role: "Screenwriter", company: "Netflix", quote: "The character development tools are incredible. I can generate detailed backstories and arcs in minutes." }
    ]
  },
  {
    id: "claude",
    name: "Claude",
    category: "AI Writing & Content",
    rating: 4.7,
    reviewCount: 900,
    icon: MessageSquare,
    description: "Anthropic's advanced AI assistant focused on safety and nuanced reasoning, excelling at long-form content, analysis, and thoughtful prose.",
    longDescription: "Claude by Anthropic is a next-generation AI assistant designed with constitutional AI principles for safety and reliability. It excels at long-form content creation, document analysis, nuanced reasoning, and maintaining context over very long conversations with its 200K token context window.",
    pros: [
      "Massive 200K token context window for long documents",
      "Exceptional at nuanced, thoughtful, and well-structured writing",
      "Strong safety and ethical design (constitutional AI)",
      "Excellent document analysis and summarization",
      "Less prone to hallucinations than many competitors"
    ],
    cons: [
      "No multimodal image generation capabilities",
      "Smaller plugin/integration ecosystem than ChatGPT"
    ],
    pricing: "Free / $20/mo",
    pricingDetail: "Free (limited) | Pro $20/mo | Team $25/user/mo | Enterprise Custom",
    features: [
      "200K token context window (supports very long documents)",
      "Constitutional AI for safety and reliability",
      "Long-form content creation and editing",
      "Document analysis and summarization",
      "Nuanced reasoning and analytical writing",
      "Code generation and review",
      "API access for custom integrations",
      "Artifacts for real-time collaborative editing"
    ],
    useCase: "Best for long-form content, document analysis, and tasks requiring nuanced reasoning",
    alternatives: ["chatgpt", "frase"],
    scoreBreakdown: { features: 93.0, reviews: 88.0, momentum: 95.0, popularity: 85.0 },
    userQuotes: [
      { role: "Research Scientist", company: "DeepMind", quote: "Claude's ability to analyze 100+ page papers and extract key insights is unmatched. It's become essential for my research." },
      { role: "Editor-in-Chief", company: "The Atlantic", quote: "For long-form editorial content, Claude produces the most natural, thoughtful prose I've seen from an AI." }
    ]
  },
  {
    id: "frase",
    name: "Frase",
    category: "AI Writing & Content",
    rating: 4.5,
    reviewCount: 600,
    icon: MessageSquare,
    description: "AI-powered SEO content optimization platform that helps create content that ranks by analyzing top search results and providing data-driven recommendations.",
    longDescription: "Frase combines AI writing with deep SEO research, analyzing top-ranking content for any query and generating optimized briefs and drafts. It helps content teams research topics, build outlines, write articles, and optimize for search intent — all in one platform.",
    pros: [
      "Excellent SEO research and SERP analysis capabilities",
      "Automatically generates content briefs from top results",
      "AI writing with real-time SEO scoring",
      "Integration with Google Search Console",
      "Content optimization against competitors"
    ],
    cons: [
      "Writing capabilities are weaker than dedicated AI writers",
      "Higher pricing compared to basic writing tools"
    ],
    pricing: "$15/mo",
    pricingDetail: "Free (1 doc) | Basic $15/mo | Team $35/mo | Enterprise Custom",
    features: [
      "SERP analysis and competitor content research",
      "AI-powered content brief generation",
      "SEO-optimized article writing and editing",
      "Content optimization scoring in real-time",
      "Question extraction from top-ranking content",
      "Google Search Console integration",
      "Content outlines and topic clusters",
      "Multi-language SEO research"
    ],
    useCase: "Best for SEO professionals and content marketers focused on ranking content",
    alternatives: ["jasper", "writesonic"],
    scoreBreakdown: { features: 87.0, reviews: 82.0, momentum: 76.0, popularity: 74.0 },
    userQuotes: [
      { role: "SEO Director", company: "Moz", quote: "Frase's SERP analysis saves us hours of manual research. The content briefs are incredibly detailed." },
      { role: "Content Strategist", company: "Ahrefs", quote: "Our organic traffic grew 60% after switching to Frase for our content planning. The optimization scoring is gold." }
    ]
  },
  {
    id: "contentbot",
    name: "ContentBot",
    category: "AI Writing & Content",
    rating: 4.2,
    reviewCount: 400,
    icon: MessageSquare,
    description: "AI writing platform with powerful automation workflows for bulk content generation, SEO optimization, and AI content detection bypass.",
    longDescription: "ContentBot is a versatile AI writing assistant that focuses on workflow automation and bulk content generation. It offers AI detection bypass features, GPT-4 and GPT-3.5 model access, and a drag-and-drop workflow builder for creating automated content pipelines.",
    pros: [
      "Powerful automation workflows for bulk content generation",
      "AI content detection bypass capabilities",
      "Access to multiple AI models (GPT-4, GPT-3.5, Claude)",
      "Drag-and-drop workflow builder",
      "Good for large-scale content production"
    ],
    cons: [
      "Smaller user community and fewer templates",
      "AI detection bypass feature is controversial"
    ],
    pricing: "$19/mo",
    pricingDetail: "Starter $19/mo (50K words) | Growth $49/mo (200K words) | Pro $99/mo (unlimited)",
    features: [
      "Workflow automation with drag-and-drop builder",
      "Bulk content generation and scheduling",
      "AI detection bypass (humanization)",
      "Multiple AI model support (GPT-4, GPT-3.5, Claude)",
      "SEO content optimization tools",
      "Blog post generation with outlines",
      "Landing page and sales copy writer",
      "Content rewriting and paraphrasing"
    ],
    useCase: "Best for agencies and content teams needing automated, bulk content production workflows",
    alternatives: ["writesonic", "rytr"],
    scoreBreakdown: { features: 78.0, reviews: 74.0, momentum: 68.0, popularity: 65.0 },
    userQuotes: [
      { role: "Agency Owner", company: "Digital Marketing Agency", quote: "ContentBot's workflow builder lets me create automated content pipelines for all my clients. It's a massive time saver." },
      { role: "Content Operations Manager", company: "HubSpot", quote: "Bulk generation with workflow automation means we publish 50+ articles per week with a small team." }
    ]
  }
];
