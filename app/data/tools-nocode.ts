import {
  Layout,
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

export const NOCODE_TOOLS: ToolData[] = [
  {
    id: "zapier-ai",
    name: "Zapier AI",
    category: "AI Automation Platform",
    rating: 4.6,
    reviewCount: 15200,
    icon: Layout,
    description: "AI-powered automation platform that connects 7000+ apps to create intelligent workflows without code.",
    longDescription: "Zapier AI brings artificial intelligence to the world's leading automation platform. With features like AI-powered Zaps, natural language workflow creation, and intelligent data mapping, Zapier enables users to build sophisticated automations that connect over 7,000 apps. The AI layer helps users design workflows, transform data between steps, and handle exceptions automatically. Zapier's new Copilot feature allows users to describe their automation needs in plain English and have the AI build the entire workflow end-to-end.",
    pros: [
      "Massive app ecosystem with 7,000+ integrations",
      "Natural language workflow creation with AI Copilot",
      "Reliable and battle-tested enterprise-grade infrastructure",
      "AI-powered data transformation between steps"
    ],
    cons: [
      "Pricing becomes expensive with many active Zaps",
      "Complex logic can be difficult to debug",
      "Free tier limits tasks per month significantly",
      "AI features require higher-tier plans"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with 100 tasks/month; Starter at $19.99/month; Professional at $49/month; Team at $299/month; Enterprise at custom pricing",
    features: [
      "7,000+ app integrations",
      "AI Copilot for natural language workflow creation",
      "Multi-step Zap workflows",
      "AI-powered data formatting and transformation",
      "Error handling and path routing"
    ],
    useCase: "Best for businesses of all sizes wanting to automate workflows across thousands of apps using AI-powered natural language workflow creation.",
    alternatives: ["Make AI", "n8n AI", "Bardeen AI", "Tray.ai"],
    scoreBreakdown: { features: 4.7, reviews: 4.5, momentum: 4.6, popularity: 4.9 },
    userQuotes: [
      { role: "Marketing Operations Manager", company: "Mid-Size SaaS", quote: "Zapier AI's Copilot saved me hours of manual workflow setup. I just describe what I need and it builds the entire automation." },
      { role: "Freelance Automation Consultant", company: "Self-Employed", quote: "With 7,000+ integrations, Zapier connects almost everything. The AI features make complex workflows surprisingly easy to create." }
    ]
  },
  {
    id: "make-ai",
    name: "Make AI",
    category: "AI Visual Automation",
    rating: 4.5,
    reviewCount: 9800,
    icon: Layout,
    description: "Visual AI automation platform for designing, building, and automating complex workflows with an intuitive drag-and-drop interface.",
    longDescription: "Make (formerly Integromat) AI is a powerful visual automation platform enhanced with artificial intelligence capabilities. It offers a rich drag-and-drop scenario builder where users can visually design complex multi-step automations. Make AI adds intelligent features like smart template suggestions, natural language scenario creation, AI-powered data operators, and intelligent error handling. The platform excels at handling complex transformations and logic, giving users granular control over every step of their automation while leveraging AI to streamline the design process.",
    pros: [
      "Intuitive visual drag-and-drop scenario builder",
      "Handles complex logic and data transformations well",
      "Rich set of filters, routers, and aggregators",
      "AI-powered scenario suggestions and templates"
    ],
    cons: [
      "Learning curve steeper than Zapier for simple tasks",
      "Scenario design can become visually complex",
      "AI features still maturing compared to competitors",
      "Free tier limited to 1,000 operations per month"
    ],
    pricing: "Freemium",
    pricingDetail: "Free with 1,000 operations/month; Core at $9/month; Pro at $16/month; Teams at $29/month; Enterprise at custom pricing",
    features: [
      "Visual drag-and-drop scenario builder",
      "AI-powered scenario creation assistant",
      "2,000+ app integrations",
      "Advanced data transformation tools",
      "Conditional logic routers and aggregators"
    ],
    useCase: "Ideal for power users and teams who need visually designed complex automations with granular control and AI-assisted workflow creation.",
    alternatives: ["Zapier AI", "n8n AI", "Tray.ai", "Bardeen AI"],
    scoreBreakdown: { features: 4.8, reviews: 4.4, momentum: 4.5, popularity: 4.3 },
    userQuotes: [
      { role: "Automation Engineer", company: "E-Commerce Company", quote: "Make's visual builder is unmatched for complex workflows. The AI suggestions help me design scenarios I wouldn't have thought of." },
      { role: "Operations Lead", company: "Tech Startup", quote: "The granular control over data transformations makes Make perfect for our complex order processing pipeline." }
    ]
  },
  {
    id: "n8n-ai",
    name: "n8n AI",
    category: "AI Workflow Automation",
    rating: 4.4,
    reviewCount: 7200,
    icon: Layout,
    description: "Open-source AI workflow automation platform with self-hosting capabilities and fair-code licensing.",
    longDescription: "n8n is a fair-code workflow automation platform that gives users complete control over their automations. With n8n AI, the platform adds artificial intelligence capabilities including AI-powered node creation, intelligent workflow suggestions, and natural language querying of workflow data. As an open-source solution, n8n can be self-hosted on your own infrastructure, making it ideal for organizations with strict data privacy requirements. It supports 400+ integrations and offers a visual node-based editor for building sophisticated automations.",
    pros: [
      "Self-hostable open-source platform (fair-code licensed)",
      "Full data privacy and control over infrastructure",
      "Active community with extensive node library",
      "AI-assisted workflow node creation"
    ],
    cons: [
      "Requires technical skills for self-hosting setup",
      "Fewer native integrations than Zapier or Make",
      "Cloud-hosted version has less generous free tier",
      "AI features newer and less mature than alternatives"
    ],
    pricing: "Freemium",
    pricingDetail: "Free self-hosted (community edition); Cloud Starter at $20/month; Cloud Pro at $50/month; Enterprise at custom pricing",
    features: [
      "Self-hostable fair-code platform",
      "400+ integrations and nodes",
      "Visual workflow editor",
      "AI-powered node creation",
      "Error handling and retry logic"
    ],
    useCase: "Best for organizations with data privacy requirements who want a self-hostable, open-core AI workflow automation platform.",
    alternatives: ["Make AI", "Zapier AI", "Tray.ai", "Bardeen AI"],
    scoreBreakdown: { features: 4.5, reviews: 4.3, momentum: 4.7, popularity: 4.0 },
    userQuotes: [
      { role: "CTO", company: "HealthTech Startup", quote: "n8n's self-hosting capability was critical for our HIPAA compliance. We get powerful automation while keeping patient data on our infrastructure." },
      { role: "DevOps Engineer", company: "Fintech Company", quote: "Being able to self-host n8n gives us complete control. The AI features are a nice bonus on top of an already solid platform." }
    ]
  },
  {
    id: "bubble-ai",
    name: "Bubble AI",
    category: "AI No-Code App Builder",
    rating: 4.3,
    reviewCount: 11000,
    icon: Layout,
    description: "AI-enhanced no-code platform for building fully functional web applications with visual programming and AI assistance.",
    longDescription: "Bubble is a leading no-code platform that enables users to build sophisticated web applications without writing code. With Bubble AI, the platform introduces AI-powered features including natural language app creation, AI-assisted workflow design, and intelligent component suggestions. Users can describe their app idea and have Bubble generate the initial structure, data models, and UI components. Bubble's visual programming environment handles everything from frontend design to backend logic, database management, and user authentication entirely through visual editors.",
    pros: [
      "Build complex full-stack web apps without code",
      "AI-assisted natural language app generation",
      "Visual workflow and database design",
      "Responsive design and scalable hosting included"
    ],
    cons: [
      "Steep learning curve for truly complex apps",
      "Lock-in to Bubble ecosystem",
      "Performance limitations on lower-tier plans",
      "AI-generated apps often require manual refinement"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with Bubble branding; Starter at $29/month; Growth at $79/month; Team at $159/month; Enterprise at custom pricing",
    features: [
      "Visual web application builder",
      "AI-powered app generation from descriptions",
      "Built-in database and user management",
      "Workflow automation and API integrations",
      "Responsive design tools"
    ],
    useCase: "Perfect for entrepreneurs, product managers, and non-technical founders who want to build full-stack web applications with AI-powered no-code tools.",
    alternatives: ["Softr AI", "Adalo AI", "Glide AI", "Bolt.new"],
    scoreBreakdown: { features: 4.6, reviews: 4.2, momentum: 4.4, popularity: 4.5 },
    userQuotes: [
      { role: "Startup Founder", company: "SaaS Startup", quote: "I built my entire MVP on Bubble without hiring a developer. The AI helped me get started faster than I ever expected." },
      { role: "Product Manager", company: "Enterprise", quote: "Bubble lets me prototype app ideas in days instead of months. The AI features make the initial setup incredibly fast." }
    ]
  },
  {
    id: "airtable-ai",
    name: "Airtable AI",
    category: "AI Database & Automation",
    rating: 4.5,
    reviewCount: 13500,
    icon: Layout,
    description: "AI-powered spreadsheet-database hybrid that combines flexible data management with intelligent automation and collaboration.",
    longDescription: "Airtable combines the familiarity of spreadsheets with the power of databases, enhanced by artificial intelligence. Airtable AI introduces features like AI-powered field suggestions, natural language formula creation, intelligent data categorization, and AI-assisted automation. Users can build custom apps, manage projects, track inventories, and automate workflows — all within a collaborative interface. The AI layer helps users clean and enrich data, generate summaries, and build automations by describing what they want in natural language.",
    pros: [
      "Flexible spreadsheet-database hybrid interface",
      "AI-powered formula and automation creation",
      "Rich field types including attachments and links",
      "Strong collaboration and sharing features"
    ],
    cons: [
      "Record limits on lower-tier plans are restrictive",
      "Can become slow with very large datasets",
      "Complex relational data still challenging",
      "AI features limited to higher pricing tiers"
    ],
    pricing: "Freemium",
    pricingDetail: "Free with 1,000 records/base; Team at $20/user/month; Business at $45/user/month; Enterprise Scale at custom pricing",
    features: [
      "Spreadsheet-database hybrid interface",
      "AI-powered field and formula suggestions",
      "Automations and custom workflows",
      "Rich field types (attachments, links, barcodes)",
      "Interfaces for building custom apps"
    ],
    useCase: "Ideal for teams and organizations who need a flexible, collaborative data platform with AI-powered automation and intelligent data management.",
    alternatives: ["Notion AI", "Coda AI", "Smartsheet", "Monday.com"],
    scoreBreakdown: { features: 4.6, reviews: 4.4, momentum: 4.5, popularity: 4.7 },
    userQuotes: [
      { role: "Project Manager", company: "Creative Agency", quote: "Airtable replaced our messy spreadsheets with a proper database. The AI formulas save me from learning complex syntax." },
      { role: "Operations Director", company: "Non-Profit", quote: "We run our entire program tracking on Airtable. The AI automation helps us process applications and send notifications seamlessly." }
    ]
  },
  {
    id: "softr-ai",
    name: "Softr AI",
    category: "AI No-Code Portal Builder",
    rating: 4.2,
    reviewCount: 4500,
    icon: Layout,
    description: "AI-powered no-code platform for building client portals, membership sites, and internal tools from data sources.",
    longDescription: "Softr is a no-code platform that specializes in building web applications and portals using data from sources like Airtable, Google Sheets, and HubSpot. Softr AI adds intelligent features including natural language app creation, AI-powered component suggestions, and smart data mapping. Users can quickly build client portals, membership sites, internal dashboards, and marketplace applications by selecting pre-built blocks and connecting them to their data. The AI assistant helps users design layouts, set up authentication, and configure permissions with minimal effort.",
    pros: [
      "Quickly build portals and membership sites",
      "Strong integration with Airtable and Google Sheets",
      "Pre-built component blocks for rapid development",
      "AI-assisted app creation and layout design"
    ],
    cons: [
      "Limited flexibility for unique or complex designs",
      "Relies heavily on external data sources",
      "Less suitable for transactional applications",
      "AI features still in early stages"
    ],
    pricing: "Freemium",
    pricingDetail: "Free with 2 published users; Basic at $24/month; Professional at $49/month; Business at $139/month; Enterprise at custom pricing",
    features: [
      "Pre-built app blocks and templates",
      "AI-powered app generation",
      "Airtable, Google Sheets, HubSpot integration",
      "User authentication and permissions",
      "Custom domains and branding"
    ],
    useCase: "Best for businesses wanting to quickly build client portals, membership sites, and internal tools connected to existing data sources with AI assistance.",
    alternatives: ["Bubble AI", "Glide AI", "Adalo AI", "Retool"],
    scoreBreakdown: { features: 4.2, reviews: 4.0, momentum: 4.3, popularity: 3.8 },
    userQuotes: [
      { role: "Consultant", company: "Independent", quote: "I built a client portal in one afternoon with Softr. Connected it to my Airtable and had a professional site running immediately." },
      { role: "Community Manager", company: "Online Community", quote: "Softr made building our membership portal incredibly easy. The AI helped me pick the right layout for our needs." }
    ]
  },
  {
    id: "adalo-ai",
    name: "Adalo AI",
    category: "AI Mobile App Builder",
    rating: 4.1,
    reviewCount: 5800,
    icon: Layout,
    description: "AI-enhanced no-code platform for building native mobile apps with drag-and-drop components and visual design tools.",
    longDescription: "Adalo is a no-code platform focused specifically on building native mobile apps for iOS and Android. With Adalo AI, the platform introduces AI-powered features including natural language screen creation, intelligent component placement, and AI-assisted app styling. Users can design their app's interface by dragging and dropping components, set up database collections, and define app logic — all without writing code. Adalo handles the complexity of publishing to app stores, making it accessible to non-developers who want to launch mobile apps.",
    pros: [
      "Build and publish native mobile apps without code",
      "AI-assisted screen and component generation",
      "Visual drag-and-drop app builder",
      "Handles app store submission process"
    ],
    cons: [
      "App complexity limited compared to native development",
      "Performance can be slower than hand-coded apps",
      "Limited customization for advanced use cases",
      "AI features are newer and less refined"
    ],
    pricing: "Freemium",
    pricingDetail: "Free with 50 app users; Starter at $36/month; Pro at $60/month; Business at $200/month; Enterprise at custom pricing",
    features: [
      "Visual mobile app builder",
      "AI-powered screen and UI generation",
      "iOS and Android native publishing",
      "Database collections and user authentication",
      "Marketplace with third-party components"
    ],
    useCase: "Ideal for entrepreneurs and small businesses who want to build and publish native mobile apps for iOS and Android without any coding.",
    alternatives: ["Glide AI", "Bubble AI", "Softr AI", "FlutterFlow"],
    scoreBreakdown: { features: 4.1, reviews: 4.0, momentum: 4.2, popularity: 3.9 },
    userQuotes: [
      { role: "Small Business Owner", company: "Retail Shop", quote: "I created a loyalty app for my store using Adalo. The AI helped me design the screens, and it was in the App Store within days." },
      { role: "Fitness Coach", company: "Solo Practice", quote: "Adalo let me build a workout tracking app for my clients without hiring developers. The drag-and-drop is so intuitive." }
    ]
  },
  {
    id: "glide-ai",
    name: "Glide AI",
    category: "AI No-Code App Platform",
    rating: 4.3,
    reviewCount: 6400,
    icon: Layout,
    description: "AI-powered no-code platform for building beautiful mobile and web apps from spreadsheets and databases.",
    longDescription: "Glide is a no-code platform that turns spreadsheets and databases into beautiful, functional mobile and web applications. Glide AI introduces intelligent features including natural language app creation, AI-powered design suggestions, and smart data visualization recommendations. Users can start with data from Google Sheets, Excel, Airtable, or Glide's own database, and transform it into polished apps with native-like experiences. The AI assistant helps users choose the right layout, apply consistent styling, and optimize the app for different devices.",
    pros: [
      "Turn spreadsheets into beautiful apps instantly",
      "AI-powered app creation and design suggestions",
      "Supports both mobile and web apps",
      "Polished, native-like user experience"
    ],
    cons: [
      "Data-centric apps with limited custom logic",
      "Higher-tier plans needed for advanced features",
      "Less suitable for complex transactional apps",
      "App store publishing requires higher tier"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier with Glide branding; Maker at $32/month; Business at $79/month; Enterprise at custom pricing",
    features: [
      "Spreadsheet-to-app conversion",
      "AI-powered app generation",
      "Mobile and web app support",
      "Pre-built component library",
      "User authentication and data sync"
    ],
    useCase: "Best for individuals and businesses who want to quickly turn spreadsheet data into polished, functional mobile and web apps with AI assistance.",
    alternatives: ["Adalo AI", "Bubble AI", "Softr AI", "AppSheet"],
    scoreBreakdown: { features: 4.4, reviews: 4.2, momentum: 4.3, popularity: 4.1 },
    userQuotes: [
      { role: "Operations Manager", company: "Logistics Company", quote: "We turned our dispatch spreadsheet into a fully functional app with Glide in days. The AI design suggestions made it look professional." },
      { role: "Event Coordinator", company: "Event Planning", quote: "Glide transformed our event data into a beautiful attendee app. Our guests loved the polished experience." }
    ]
  },
  {
    id: "bardeen-ai",
    name: "Bardeen AI",
    category: "AI Browser Automation",
    rating: 4.2,
    reviewCount: 3600,
    icon: Layout,
    description: "AI-powered browser automation platform that performs repetitive web tasks using natural language commands.",
    longDescription: "Bardeen is an AI-powered browser automation tool that helps users automate repetitive web tasks without coding. Unlike traditional automation platforms, Bardeen operates directly in the browser as a Chrome extension, allowing it to interact with web pages, extract data, and trigger actions across multiple web apps. Users can create automations by simply describing what they want in natural language, and Bardeen's AI understands the context and executes the tasks. It's particularly powerful for sales prospecting, data enrichment, research, and web scraping tasks.",
    pros: [
      "Natural language automation creation",
      "Operates directly in the browser",
      "Excellent for web scraping and data extraction",
      "Integrates with popular sales and productivity tools"
    ],
    cons: [
      "Limited to browser-based automations",
      "Not suitable for heavy backend integrations",
      "Chrome extension dependency",
      "Free tier has limited automation runs"
    ],
    pricing: "Freemium",
    pricingDetail: "Free with limited automations; Pro at $20/month; Team at $30/user/month; Enterprise at custom pricing",
    features: [
      "Natural language automation creation",
      "Browser-based web interaction",
      "Web scraping and data extraction",
      "Pre-built automation templates",
      "Integration with CRM, email, and productivity tools"
    ],
    useCase: "Perfect for sales professionals, marketers, and researchers who want to automate repetitive browser tasks using simple natural language commands.",
    alternatives: ["Zapier AI", "Make AI", "UiPath", "Automation Anywhere"],
    scoreBreakdown: { features: 4.3, reviews: 4.1, momentum: 4.4, popularity: 3.7 },
    userQuotes: [
      { role: "Sales Development Rep", company: "B2B SaaS", quote: "Bardeen automates my LinkedIn prospecting and data enrichment. I just describe what I need and it handles the rest." },
      { role: "Market Researcher", company: "Consulting Firm", quote: "I use Bardeen daily for competitive research. It scrapes competitor sites and feeds data into our sheets automatically." }
    ]
  },
  {
    id: "tray-ai",
    name: "Tray.ai",
    category: "AI Enterprise Automation",
    rating: 4.3,
    reviewCount: 2900,
    icon: Layout,
    description: "AI-powered enterprise automation platform with embedded AI agents, custom connectors, and robust data handling.",
    longDescription: "Tray.ai is an enterprise-grade automation platform that combines powerful workflow automation with embedded artificial intelligence. It enables teams to build sophisticated automations using a visual builder, with AI agents that can make decisions, process unstructured data, and adapt to changing conditions. Tray.ai excels at handling complex enterprise use cases including API integrations, data synchronization, document processing, and intelligent decision-making workflows. Its Universal API Connector allows connecting to virtually any REST or GraphQL API, making it highly flexible for custom enterprise environments.",
    pros: [
      "Enterprise-grade reliability and scalability",
      "Embedded AI agents for intelligent decision-making",
      "Universal API Connector for custom integrations",
      "Powerful data transformation and processing capabilities"
    ],
    cons: [
      "Higher price point than most competitors",
      "Overkill for simple personal automations",
      "Steeper learning curve for the platform",
      "Less community support than open-source alternatives"
    ],
    pricing: "Paid",
    pricingDetail: "Starter at $99/month; Business at $499/month; Enterprise at custom pricing (usage-based models available)",
    features: [
      "Visual workflow builder with AI agents",
      "Universal API Connector (any REST/GraphQL API)",
      "Embedded AI for intelligent automation",
      "Advanced data mapping and transformation",
      "Enterprise security and compliance features"
    ],
    useCase: "Best for mid-to-large enterprises needing a robust, scalable AI-powered automation platform with custom API connectivity and intelligent decision-making.",
    alternatives: ["Zapier AI", "Make AI", "n8n AI", "Workato"],
    scoreBreakdown: { features: 4.6, reviews: 4.2, momentum: 4.3, popularity: 3.6 },
    userQuotes: [
      { role: "VP of Engineering", company: "Enterprise SaaS", quote: "Tray.ai's Universal API Connector let us integrate with our legacy systems seamlessly. The AI agents handle data routing intelligently." },
      { role: "Integration Architect", company: "Financial Services", quote: "For enterprise-grade automation with complex data transformations, Tray.ai is in a league of its own. The AI capabilities are genuinely useful." }
    ]
  }
];
