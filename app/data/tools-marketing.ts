import {
  TrendingUp,
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

export const MARKETING_TOOLS: ToolData[] = [
  {
    id: "semrush-ai",
    name: "Semrush AI",
    category: "AI Marketing & SEO",
    rating: 4.6,
    reviewCount: 8200,
    icon: TrendingUp,
    description: "All-in-one AI-powered SEO and marketing platform that provides keyword research, competitive analysis, content optimization, and campaign management across search, social, and paid channels.",
    longDescription: "Semrush AI is the industry-leading digital marketing suite that combines traditional SEO power tools with AI-driven insights. It offers comprehensive keyword research, site audits, backlink analysis, rank tracking, and content marketing tools. The AI layer enhances these capabilities with smart content recommendations, predictive keyword analysis, automated reporting, and intelligent competitor benchmarking across organic and paid search landscapes.",
    pros: [
      "Industry-standard SEO toolset with unmatched data depth",
      "AI-powered content suggestions and topic clustering",
      "Comprehensive competitive intelligence across channels",
      "Integrated PPC, social media, and PR toolkit",
      "Regular data updates with 25+ billion keywords indexed"
    ],
    cons: [
      "Higher pricing compared to standalone AI writing tools",
      "Steep learning curve for new users due to feature density",
      "Some AI features still feel like add-ons rather than core",
      "Can be overwhelming for small businesses or solopreneurs"
    ],
    pricing: "Paid",
    pricingDetail: "Pro $139.95/mo | Guru $249.95/mo | Business $499.95/mo | Enterprise Custom",
    features: [
      "AI-powered content writing and optimization",
      "Keyword research with intent analysis and difficulty scoring",
      "Competitive domain vs. domain analysis",
      "Site audit with 140+ technical SEO checks",
      "Backlink analytics and gap analysis",
      "Rank tracking across desktop and mobile",
      "Social media management and scheduling",
      "PPC keyword research and ad copy suggestions",
      "AI-generated marketing reports and dashboards",
      "Topic research and content clustering"
    ],
    useCase: "Best for SEO professionals, marketing agencies, and enterprises needing a comprehensive, AI-enhanced marketing intelligence platform.",
    alternatives: ["Ahrefs", "Moz Pro", "Similarweb", "SpyFu"],
    scoreBreakdown: { features: 4.8, reviews: 4.5, momentum: 4.6, popularity: 4.9 },
    userQuotes: [
      { role: "SEO Director", company: "HubSpot", quote: "Semrush is the backbone of our SEO strategy. The AI features have cut our keyword research time in half." },
      { role: "Digital Marketing Manager", company: "Shopify", quote: "The competitive analysis tools in Semrush are unmatched. We track every move our competitors make." }
    ]
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "AI Marketing & SEO",
    rating: 4.5,
    reviewCount: 7800,
    icon: TrendingUp,
    description: "AI content platform purpose-built for marketing teams to generate on-brand copy, blog posts, ad creatives, and social media content at scale with brand voice consistency.",
    longDescription: "Jasper (formerly Jarvis) is a dedicated AI writing assistant designed for marketers and content creators. It offers brand voice customization, 50+ marketing-specific templates, SEO integration with Surfer SEO, and collaboration workflows. Jasper's Boss Mode allows power users to command the AI with simple shortcuts, while its brand voice profiles ensure consistency across all marketing collateral from blog posts to email sequences and social media campaigns.",
    pros: [
      "Purpose-built for marketing content with relevant templates",
      "Excellent brand voice customization and consistency",
      "Direct integration with Surfer SEO for content scoring",
      "Boss Mode enables fast, command-driven content creation",
      "Team collaboration with approval workflows and reviews"
    ],
    cons: [
      "Higher monthly cost than general-purpose AI tools",
      "Output can sometimes feel formulaic or templated",
      "Limited capabilities outside marketing use cases",
      "Requires human editing for nuanced or technical topics"
    ],
    pricing: "Paid",
    pricingDetail: "Creator $49/mo | Pro $69/mo | Business Custom pricing",
    features: [
      "50+ marketing templates and campaign workflows",
      "Brand voice profiles with tone and style customization",
      "Surfer SEO integration for real-time content scoring",
      "Boss Mode command-driven editor",
      "Multi-language content generation (30+ languages)",
      "Team collaboration with review and approval workflows",
      "Plagiarism checker built in",
      "Campaign performance dashboard",
      "API access for custom integrations",
      "AI chat for brainstorming and ideation"
    ],
    useCase: "Best for marketing teams and agencies needing on-brand, SEO-optimized content at scale with team collaboration features.",
    alternatives: ["Copy.ai", "Writesonic", "Anyword", "Frase"],
    scoreBreakdown: { features: 4.6, reviews: 4.4, momentum: 4.3, popularity: 4.7 },
    userQuotes: [
      { role: "Content Marketing Manager", company: "Morning Brew", quote: "Jasper helped us scale content production 4x while maintaining our distinct brand voice." },
      { role: "SEO Strategist", company: "Shopify", quote: "The Surfer SEO integration is a game changer — our organic traffic grew 40% in the first quarter." }
    ]
  },
  {
    id: "surfer-seo",
    name: "Surfer SEO",
    category: "AI Marketing & SEO",
    rating: 4.7,
    reviewCount: 4500,
    icon: TrendingUp,
    description: "AI-powered content optimization platform that analyzes top-ranking pages and provides data-driven recommendations to improve search engine rankings and content relevance.",
    longDescription: "Surfer SEO is a comprehensive on-page optimization tool that uses AI to analyze SERP data and guide content creation. It provides real-time content scoring against competitors, NLP keyword analysis, content structure recommendations, and audit capabilities. Surfer integrates with popular writing tools like Jasper and Google Docs, allowing writers to optimize content as they create. Its AI-driven recommendations cover everything from word count and heading structure to keyword density and semantic relevance.",
    pros: [
      "Data-driven content optimization against top SERP results",
      "Real-time content scoring as you write",
      "Excellent integration with Jasper and Google Docs",
      "NLP-powered keyword and entity recommendations",
      "Comprehensive content audit and restructuring tools"
    ],
    cons: [
      "Strong SEO focus with limited general writing capabilities",
      "Can encourage overly formulaic content if followed rigidly",
      "Pricing adds up when combined with writing tools",
      "SERP analysis is only as good as the sample size"
    ],
    pricing: "Paid",
    pricingDetail: "Basic $69/mo | Pro $149/mo | Business $299/mo | Enterprise Custom",
    features: [
      "SERP-based content scoring and optimization",
      "Real-time NLP keyword and entity recommendations",
      "Content structure and heading analysis",
      "Custom content guidelines and brand rules",
      "Google Docs and Jasper direct integration",
      "Content audit and re-optimization tools",
      "Keyword clustering and topic research",
      "Mobile vs. desktop SERP analysis",
      "Auto-optimization with one-click suggestions",
      "Multi-language SERP analysis support"
    ],
    useCase: "Best for SEO specialists and content teams who want data-backed content optimization to outrank competitors in search results.",
    alternatives: ["Frase", "MarketMuse", "WordLift", "Clearscope"],
    scoreBreakdown: { features: 4.8, reviews: 4.6, momentum: 4.5, popularity: 4.4 },
    userQuotes: [
      { role: "SEO Consultant", company: "Independent", quote: "Surfer SEO turned our content strategy around. We went from page 5 to page 1 for 30+ keywords in 60 days." },
      { role: "Content Director", company: "Forbes", quote: "The real-time scoring while writing in Google Docs is invaluable. It keeps our contributors aligned with SEO best practices." }
    ]
  },
  {
    id: "writer",
    name: "Writer",
    category: "AI Marketing & SEO",
    rating: 4.4,
    reviewCount: 3200,
    icon: TrendingUp,
    description: "Enterprise-grade AI writing platform focused on brand consistency, compliance, and governance across all marketing content and internal communications.",
    longDescription: "Writer is an enterprise AI writing platform that prioritizes brand safety, compliance, and governance. Unlike general-purpose AI tools, Writer allows organizations to define brand guidelines, terminology rules, and compliance requirements that the AI enforces across all generated content. It offers LLM fine-tuning on proprietary data, robust analytics, and deep integrations with enterprise content management systems. Writer is particularly popular in regulated industries like finance, healthcare, and legal.",
    pros: [
      "Strong brand governance and compliance enforcement",
      "Custom LLM fine-tuning on enterprise proprietary data",
      "Centralized brand guidelines and terminology management",
      "Comprehensive content analytics and usage insights",
      "Enterprise-grade security and data privacy controls"
    ],
    cons: [
      "Higher cost suitable primarily for enterprise budgets",
      "Overkill for small teams or individual creators",
      "Setup and onboarding requires dedicated admin effort",
      "Creative flexibility is intentionally constrained by rules"
    ],
    pricing: "Paid",
    pricingDetail: "Team $18/user/mo | Enterprise Custom pricing (starts ~$500/mo)",
    features: [
      "Brand voice and style guide enforcement",
      "Custom LLM fine-tuning on company data",
      "Compliance and regulatory content checks",
      "AI-powered content generation and editing",
      "Terminology management and glossary creation",
      "Content analytics and performance dashboards",
      "Integrations with CMS and enterprise tools",
      "Multi-language content with brand consistency",
      "API access for custom workflows",
      "SOC 2 Type II and enterprise security compliance"
    ],
    useCase: "Best for large enterprises, especially in regulated industries, needing AI writing with strict brand governance and compliance controls.",
    alternatives: ["Jasper", "Acrolinx", "Anyword", "Grammarly Business"],
    scoreBreakdown: { features: 4.5, reviews: 4.2, momentum: 4.4, popularity: 3.8 },
    userQuotes: [
      { role: "VP of Brand", company: "Intuit", quote: "Writer ensures every piece of content — from support docs to marketing copy — stays on brand and compliant." },
      { role: "Compliance Officer", company: "Major Bank", quote: "The governance features are a lifesaver. Writer catches regulatory issues before content ever goes live." }
    ]
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "AI Marketing & SEO",
    rating: 4.5,
    reviewCount: 5600,
    icon: TrendingUp,
    description: "AI-powered copywriting tool that generates high-converting marketing copy, social media posts, product descriptions, and email campaigns with minimal input.",
    longDescription: "Copy.ai specializes in short-form marketing copy that converts. With an intuitive chat-first interface and hundreds of templates, it enables marketers and entrepreneurs to generate compelling ad copy, email sequences, landing page content, and social media posts in seconds. The platform recently added long-form blog capabilities and a workflow builder for multi-step content generation. Its Infinity plan offers unlimited word generation, making it popular for high-volume content production.",
    pros: [
      "Extremely fast content generation for short-form copy",
      "Hundreds of templates covering virtually every marketing need",
      "Intuitive, beginner-friendly chat interface",
      "Infinity plan provides unlimited word generation",
      "Good for rapid A/B testing of ad and email copy"
    ],
    cons: [
      "Less effective for long-form, in-depth blog content",
      "Output quality varies significantly by template and use case",
      "Brand voice features less robust than Jasper or Writer",
      "Can produce generic-sounding copy without manual refinement"
    ],
    pricing: "Freemium",
    pricingDetail: "Free (2,000 words) | Pro $36/mo (unlimited) | Enterprise Custom",
    features: [
      "200+ copywriting templates and marketing frameworks",
      "Blog post outlines and full article generation",
      "Social media content calendar and scheduling",
      "Email marketing copy with subject line generation",
      "Product description generator for e-commerce",
      "Landing page copy creation and optimization",
      "Ad copy generator for Google, Meta, LinkedIn, Twitter",
      "Multi-language support (25+ languages)",
      "Brand voice customization and saved personas",
      "Workflow builder for multi-step content pipelines"
    ],
    useCase: "Best for marketers, entrepreneurs, and e-commerce teams who need fast, high-volume short-form copy for ads, emails, and social media.",
    alternatives: ["Jasper", "Writesonic", "Anyword", "Rytr"],
    scoreBreakdown: { features: 4.4, reviews: 4.3, momentum: 4.2, popularity: 4.5 },
    userQuotes: [
      { role: "Growth Marketer", company: "Notion", quote: "Copy.ai cut our A/B testing cycle from weeks to days. We iterate on ad copy 10x faster now." },
      { role: "E-commerce Founder", company: "Gymshark", quote: "Product descriptions that took 30 minutes now take 30 seconds. The quality is consistently solid for the speed." }
    ]
  },
  {
    id: "marketmuse",
    name: "MarketMuse",
    category: "AI Marketing & SEO",
    rating: 4.6,
    reviewCount: 2800,
    icon: TrendingUp,
    description: "AI-driven content strategy and planning platform that uses machine learning to identify content gaps, optimize topical authority, and prioritize high-impact content opportunities.",
    longDescription: "MarketMuse is an advanced AI content strategy and optimization platform designed for enterprise content teams. It uses natural language processing and machine learning to analyze the entire content landscape for any topic, identifying gaps, opportunities, and competitive weaknesses. MarketMuse provides content briefs, topic cluster recommendations, and optimization scoring that helps teams build topical authority systematically. Its AI models understand semantic relationships between entities, enabling deeper content strategies than simple keyword matching.",
    pros: [
      "Deep content gap analysis and opportunity identification",
      "Sophisticated topical authority modeling and recommendations",
      "AI-generated content briefs with entity-level guidance",
      "Excellent for building comprehensive topic clusters",
      "Enterprise-grade content planning and inventory management"
    ],
    cons: [
      "Premium pricing suited for enterprise budgets",
      "Steep learning curve for full platform utilization",
      "Less useful for short-form or ad-hoc content needs",
      "Requires consistent content output to maximize value"
    ],
    pricing: "Paid",
    pricingDetail: "Standard $149/mo | Premium $399/mo | Enterprise Custom",
    features: [
      "AI-powered content gap analysis and opportunity scoring",
      "Topical authority measurement and tracking",
      "Automated content briefs with entity and term guidance",
      "Content inventory and performance auditing",
      "Topic cluster and pillar page recommendations",
      "Competitive content benchmarking",
      "NLP-based entity extraction and analysis",
      "Content planning calendar and prioritization",
      "Integration with major CMS platforms",
      "Custom taxonomy and subject modeling"
    ],
    useCase: "Best for enterprise content teams focused on building topical authority and data-driven content strategies at scale.",
    alternatives: ["Frase", "Surfer SEO", "Clearscope", "WordLift"],
    scoreBreakdown: { features: 4.7, reviews: 4.4, momentum: 4.3, popularity: 4.0 },
    userQuotes: [
      { role: "Content Strategy Director", company: "Salesforce", quote: "MarketMuse transformed our approach to content. Instead of guessing, we now have a data-driven roadmap for every topic." },
      { role: "Head of SEO", company: "Zendesk", quote: "The topical authority insights helped us double our organic traffic in six months by focusing on the right content clusters." }
    ]
  },
  {
    id: "wordlift",
    name: "WordLift",
    category: "AI Marketing & SEO",
    rating: 4.3,
    reviewCount: 1900,
    icon: TrendingUp,
    description: "AI-powered SEO and content intelligence platform that uses semantic web technologies, entity linking, and structured data to improve search visibility and content discoverability.",
    longDescription: "WordLift is a unique AI-powered SEO platform that leverages semantic web technologies, natural language processing, and knowledge graphs to enhance content visibility. It automatically extracts entities from content, links them to knowledge graphs (like Wikidata and Wikipedia), generates structured data markup (schema.org), and creates internal linking suggestions. WordLift's AI helps search engines better understand content context and relationships, which can improve rich snippet appearance and overall search rankings.",
    pros: [
      "Advanced semantic SEO and entity-based optimization",
      "Automatic schema.org structured data generation",
      "Knowledge graph integration for better search understanding",
      "Smart internal linking suggestions based on content entities",
      "AI-powered content briefs and topic recommendations"
    ],
    cons: [
      "Niche focus on semantic SEO may not suit all users",
      "Setup requires technical understanding of structured data",
      "Less comprehensive than full-suite SEO platforms",
      "Pricing can be high for the specific feature set offered"
    ],
    pricing: "Paid",
    pricingDetail: "Starter €49/mo | Growth €149/mo | Scale €499/mo | Enterprise Custom",
    features: [
      "Automated entity extraction and linking",
      "Schema.org structured data generation and management",
      "Knowledge graph integration (Wikidata, Wikipedia, etc.)",
      "Smart internal linking recommendations",
      "AI-powered content briefs and outlines",
      "SEO content optimization scoring",
      "Visual knowledge graph explorer",
      "Google Knowledge Panel optimization",
      "Natural language processing for content analysis",
      "Integration with WordPress and major CMS platforms"
    ],
    useCase: "Best for SEO professionals and content teams focused on semantic SEO, entity optimization, and maximizing rich snippet visibility in search results.",
    alternatives: ["MarketMuse", "Surfer SEO", "Yoast SEO", "Clearscope"],
    scoreBreakdown: { features: 4.4, reviews: 4.1, momentum: 4.0, popularity: 3.6 },
    userQuotes: [
      { role: "Technical SEO Specialist", company: "Search Agency", quote: "WordLift's entity linking and schema generation is the most sophisticated I've seen. It gave our clients a clear edge in rich snippets." },
      { role: "Content Strategist", company: "Publishing House", quote: "The knowledge graph features are unique. Our articles now appear in Google Knowledge Panels and featured snippets more consistently." }
    ]
  },
  {
    id: "anyword",
    name: "Anyword",
    category: "AI Marketing & SEO",
    rating: 4.4,
    reviewCount: 2400,
    icon: TrendingUp,
    description: "AI-powered copywriting platform with predictive performance scoring that helps marketers write and optimize ad copy, landing pages, and emails for maximum conversion.",
    longDescription: "Anyword is a data-driven AI copywriting platform that distinguishes itself with predictive performance scoring. Before publishing, Anyword analyzes copy and predicts its effectiveness across different channels and audiences. It offers channel-specific optimization for Google Ads, Meta, LinkedIn, email, and landing pages, with real-time scores for engagement, conversion likelihood, and brand alignment. Anyword also provides AI-powered audience targeting recommendations and A/B testing analysis to continuously improve marketing copy performance.",
    pros: [
      "Predictive performance scoring before publishing copy",
      "Channel-specific optimization for ads, emails, and landing pages",
      "Audience targeting recommendations based on copy analysis",
      "AI-powered A/B testing and performance analytics",
      "Brand voice consistency across all marketing copy"
    ],
    cons: [
      "Primarily optimized for short-form advertising copy",
      "Predictive scores are estimates, not guarantees",
      "Less effective for long-form or SEO-focused content",
      "Pricing is higher than basic AI writing alternatives"
    ],
    pricing: "Paid",
    pricingDetail: "Starter $49/mo | Team $99/mo | Business $349/mo | Enterprise Custom",
    features: [
      "Predictive copy performance scoring (0-100)",
      "Channel-specific optimization modes (Google, Meta, LinkedIn, email)",
      "Audience persona and targeting analysis",
      "AI-powered headline and subject line generation",
      "Landing page copy optimization with conversion scoring",
      "A/B testing suggestions and performance tracking",
      "Brand voice profiles and compliance rules",
      "Multi-language copy generation and optimization",
      "Competitive ad copy analysis",
      "API access for programmatic copy generation"
    ],
    useCase: "Best for performance marketers and advertising teams who want data-driven copy optimization with predictive conversion scoring.",
    alternatives: ["Copy.ai", "Jasper", "Persado", "Phrasee"],
    scoreBreakdown: { features: 4.5, reviews: 4.3, momentum: 4.2, popularity: 3.9 },
    userQuotes: [
      { role: "PPC Manager", company: "Digital Agency", quote: "Anyword's predictive scores took the guesswork out of ad copy. Our conversion rates improved 35% in the first month." },
      { role: "Email Marketing Lead", company: "E-commerce Brand", quote: "The email subject line scoring is incredibly accurate. We've seen open rates increase by 25% using Anyword's recommendations." }
    ]
  },
  {
    id: "acrolinx",
    name: "Acrolinx",
    category: "AI Marketing & SEO",
    rating: 4.2,
    reviewCount: 1500,
    icon: TrendingUp,
    description: "Enterprise AI content governance platform that ensures brand consistency, terminology compliance, and quality standards across all marketing and technical content.",
    longDescription: "Acrolinx is an enterprise content governance platform that uses AI to analyze and enforce brand, terminology, and quality standards across all content. It provides real-time writing guidance, content analytics, and automated quality scoring based on customizable rules. Acrolinx is widely used in large organizations with complex content operations, particularly in technical documentation, marketing, and customer communications. Its AI checks for tone, terminology, inclusivity, readability, and structure against a centralized content standard.",
    pros: [
      "Industry-leading content governance and compliance enforcement",
      "Centralized terminology management and brand rules",
      "Comprehensive content quality analytics and dashboards",
      "Real-time guidance integrated into authoring tools",
      "Proven in large-scale enterprise content operations"
    ],
    cons: [
      "Enterprise-focused with pricing to match",
      "Significant setup and configuration investment required",
      "Less suited for small teams or individual creators",
      "Focus on governance can feel restrictive for creative content"
    ],
    pricing: "Paid",
    pricingDetail: "Enterprise Custom pricing (typically $50,000+/year for large deployments)",
    features: [
      "AI-powered content quality scoring and analytics",
      "Brand voice and tone enforcement across all content",
      "Terminology management and glossary creation",
      "Inclusivity and bias detection in content",
      "Readability and structure analysis",
      "Real-time writing guidance in authoring tools",
      "Content compliance reporting and dashboards",
      "Multi-language content governance",
      "Integration with CMS and authoring platforms",
      "Custom rule creation and configuration"
    ],
    useCase: "Best for large enterprises with complex content operations that need AI-powered governance to ensure brand and terminology consistency at scale.",
    alternatives: ["Writer", "Khoros", "Grammarly Business", "Style Guide"],
    scoreBreakdown: { features: 4.3, reviews: 4.0, momentum: 3.7, popularity: 3.4 },
    userQuotes: [
      { role: "Global Content Director", company: "Siemens", quote: "Acrolinx ensures every piece of customer-facing content meets our standards across 30+ languages and dozens of teams." },
      { role: "Technical Documentation Lead", company: "Cisco", quote: "The terminology enforcement alone saved us countless hours of manual review. Our documentation is now consistently on-brand." }
    ]
  },
  {
    id: "cognigy",
    name: "Cognigy",
    category: "AI Marketing & SEO",
    rating: 4.3,
    reviewCount: 1100,
    icon: TrendingUp,
    description: "AI-powered conversational marketing and customer engagement platform that builds intelligent chatbots, voice assistants, and automation workflows for marketing and support.",
    longDescription: "Cognigy is an enterprise conversational AI platform that enables businesses to build, deploy, and manage AI-powered chatbots and voice assistants for marketing, sales, and customer service. Its low-code interface allows marketing teams to create conversational experiences without deep technical expertise. Cognigy supports omnichannel deployment across web, mobile, messaging apps, and voice channels, with advanced NLU, sentiment analysis, and integration with CRM and marketing automation platforms.",
    pros: [
      "Low-code conversational AI builder accessible to marketers",
      "Omnichannel deployment across web, mobile, and messaging",
      "Advanced NLU with multi-language support",
      "Seamless CRM and marketing automation integrations",
      "Enterprise-grade security and scalability"
    ],
    cons: [
      "More focused on conversation than content generation",
      "Enterprise pricing can be substantial",
      "Requires ongoing optimization for best results",
      "Competitive landscape with many alternatives available"
    ],
    pricing: "Paid",
    pricingDetail: "Contact for pricing (starts ~$1,000/mo for smaller deployments; Enterprise Custom)",
    features: [
      "Low-code conversational AI flow builder",
      "Natural language understanding and intent recognition",
      "Multi-language and multi-channel deployment",
      "Sentiment analysis and conversation insights",
      "CRM and marketing automation integrations",
      "Voice assistant capabilities (IVR, voice bots)",
      "Handoff to human agents with context",
      "A/B testing of conversation flows",
      "Analytics dashboards with conversation metrics",
      "Enterprise security (SOC 2, GDPR compliant)"
    ],
    useCase: "Best for marketing and CX teams in enterprises wanting to deploy AI-powered conversational experiences for lead generation, customer engagement, and support automation.",
    alternatives: ["Intercom", "Zendesk AI", "Ada", "Drift"],
    scoreBreakdown: { features: 4.5, reviews: 4.1, momentum: 4.2, popularity: 3.5 },
    userQuotes: [
      { role: "Head of Digital Marketing", company: "Lufthansa", quote: "Cognigy helped us automate 60% of customer inquiries while maintaining a natural, helpful conversation experience." },
      { role: "CX Director", company: "Telecom Provider", quote: "The omnichannel deployment was seamless. Our customers get consistent AI-powered support across web, app, and voice." }
    ]
  }
];
