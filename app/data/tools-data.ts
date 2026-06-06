import { BarChart3, type LucideIcon } from "lucide-react";

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

export const DATA_TOOLS: ToolData[] = [
  {
    id: "tableau-ai",
    name: "Tableau AI",
    category: "AI Data & Analytics",
    rating: 4.7,
    reviewCount: 2000,
    icon: BarChart3,
    description: "AI-powered analytics platform that combines Tableau's visual analytics with Einstein GPT for natural language querying and automated insights.",
    longDescription: "Tableau AI (formerly Tableau with Einstein GPT) embeds generative AI directly into Tableau's industry-leading analytics platform. Users can ask questions in natural language, automatically generate explainers and summaries for dashboards, and receive AI-driven insight suggestions. It integrates with Tableau Pulse, which surfaces key metrics and trends proactively. The platform is designed to make data analysis accessible to everyone in an organization, from power users to business stakeholders.",
    pros: [
      "Natural language querying makes data accessible to non-technical users",
      "Deep integration with Tableau's existing visualization ecosystem",
      "Automated dashboard summaries and explanations save time",
      "Pulse feature delivers proactive, personalized insights to users"
    ],
    cons: [
      "Requires existing Tableau Cloud or Server subscription",
      "AI features still rolling out — not all capabilities available globally",
      "Can be expensive for smaller teams or individual analysts",
      "Natural language accuracy depends on data quality and schema clarity"
    ],
    pricing: "$75/mo",
    pricingDetail: "Tableau AI features are included with Tableau Cloud subscriptions starting at $75/user/month for the Explorer plan; Viewer plans start at $35/user/month.",
    features: [
      "Natural language querying (Ask Data)",
      "AI-generated dashboard explanations and summaries",
      "Tableau Pulse for proactive metric tracking",
      "Automated insight suggestions",
      "Einstein GPT integration for embedded analytics"
    ],
    useCase: "Best for enterprises and data-driven organizations that already use Tableau and want to add AI-powered natural language interaction and automated insights to their analytics workflows.",
    alternatives: ["julius-ai", "polymer"],
    scoreBreakdown: { features: 95.0, reviews: 93.0, momentum: 98.0, popularity: 99.0 },
    userQuotes: [
      { role: "Data Analytics Director", company: "Fortune 500 Retailer", quote: "Tableau AI has democratized data access in our organization. Our non-technical teams can now ask questions and get answers without writing a single line of code." },
      { role: "BI Analyst", company: "Healthcare Provider", quote: "The AI-generated dashboard summaries save me hours each week. I can focus on deeper analysis instead of explaining what's already on the screen." }
    ]
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    category: "AI Data & Analytics",
    rating: 4.5,
    reviewCount: 3500,
    icon: BarChart3,
    description: "AI-powered data analysis assistant that lets you chat with your data, generate visualizations, and build models using natural language.",
    longDescription: "Julius AI is a conversational data analysis platform that connects to your data sources (CSV, Excel, Google Sheets, SQL databases) and lets you analyze them through natural language chat. It can generate charts, create predictive models, perform statistical tests, and export results. Julius is designed for analysts, data scientists, and business users who want to accelerate their data workflows without switching between multiple tools.",
    pros: [
      "Chat-based interface makes data analysis intuitive and fast",
      "Supports multiple data sources including CSV, Excel, SQL, and Google Sheets",
      "Generates publication-ready charts and visualizations from chat",
      "Can build and explain predictive models without coding"
    ],
    cons: [
      "Limited advanced customization for complex modeling needs",
      "Large datasets can be slow to process",
      "Free tier has usage caps and limited features",
      "Still maturing in handling very complex multi-step analyses"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier includes basic analysis and 20 queries/month; Pro plan at $25/month for unlimited queries and advanced features; Team plans available.",
    features: [
      "Natural language data querying and analysis",
      "Automated chart and graph generation",
      "Predictive modeling and statistical analysis",
      "Multi-source data connection (CSV, Excel, SQL, Sheets)",
      "Export to PDF, PNG, and CSV"
    ],
    useCase: "Best for data analysts, researchers, and business professionals who want a conversational interface to explore data, generate visualizations, and build simple models quickly.",
    alternatives: ["obviously-ai", "pandas-ai"],
    scoreBreakdown: { features: 90.0, reviews: 88.0, momentum: 95.0, popularity: 93.0 },
    userQuotes: [
      { role: "Data Analyst", company: "Fintech Startup", quote: "Julius has become my go-to for exploratory data analysis. I can go from raw data to insights in minutes instead of hours." },
      { role: "Marketing Researcher", company: "Consumer Goods Co.", quote: "I love that I can just upload my survey data and ask questions in plain English. The visualizations are beautiful and ready to present." }
    ]
  },
  {
    id: "obviously-ai",
    name: "Obviously AI",
    category: "AI Data & Analytics",
    rating: 4.3,
    reviewCount: 1200,
    icon: BarChart3,
    description: "No-code AI platform that lets users build, deploy, and monitor machine learning models using natural language descriptions.",
    longDescription: "Obviously AI is a no-code machine learning platform that enables anyone to build predictive AI models by simply describing what they want in natural language. It automates the entire ML pipeline — data preprocessing, feature engineering, model selection, training, and deployment. Users can upload CSV files or connect to databases, describe their prediction goal, and get a deployable model with API endpoints. The platform also includes model monitoring and drift detection for production use cases.",
    pros: [
      "True no-code ML — describe your goal in plain English",
      "End-to-end pipeline automation from data prep to deployment",
      "Built-in model monitoring and drift detection",
      "Supports regression, classification, time series, and NLP tasks"
    ],
    cons: [
      "Less flexible than hand-coded models for complex problems",
      "Pricing can be high for enterprise-scale deployments",
      "Limited integration with custom or on-premise data infrastructure",
      "Smaller community and fewer learning resources than open-source alternatives"
    ],
    pricing: "Paid",
    pricingDetail: "Starts at $49/month for the Starter plan; $199/month for Professional; Custom Enterprise pricing with dedicated infrastructure and support.",
    features: [
      "Natural language model building",
      "Automated data preprocessing and feature engineering",
      "One-click model deployment with API endpoints",
      "Model performance monitoring and drift alerts",
      "Support for CSV, database, and API data connections"
    ],
    useCase: "Best for business analysts, product managers, and small-to-medium businesses that want to leverage predictive ML models without hiring dedicated data science teams.",
    alternatives: ["akkio", "julius-ai"],
    scoreBreakdown: { features: 88.0, reviews: 86.0, momentum: 85.0, popularity: 82.0 },
    userQuotes: [
      { role: "Product Manager", company: "E-commerce Platform", quote: "We built a churn prediction model in under an hour without any ML experience. The natural language interface is incredibly intuitive." },
      { role: "Operations Director", company: "Logistics Company", quote: "Obviously AI helped us forecast demand accurately across 20 warehouses. The deployment was seamless and the API integration was straightforward." }
    ]
  },
  {
    id: "akkio",
    name: "Akkio",
    category: "AI Data & Analytics",
    rating: 4.4,
    reviewCount: 800,
    icon: BarChart3,
    description: "AI data platform that enables users to build predictive models, analyze data, and automate decisions — no coding required.",
    longDescription: "Akkio is an end-to-end AI platform that combines data preparation, analytics, and machine learning into a single no-code interface. It connects to popular data sources (HubSpot, Salesforce, Snowflake, Google Analytics, etc.), cleans and prepares data automatically, and allows users to build predictive models by selecting a target variable. Akkio is particularly well-suited for marketing, sales, and business operations teams looking to add AI-driven forecasting and decision-making to their workflows.",
    pros: [
      "Deep integrations with popular marketing and sales tools",
      "Automated data cleaning and preparation",
      "One-click model building with clear performance metrics",
      "Built-in deployment for real-time predictions"
    ],
    cons: [
      "Best suited for structured, tabular data — limited for unstructured data",
      "Enterprise pricing can be expensive",
      "Model customization and hyperparameter tuning are limited",
      "Relatively newer platform with smaller user community"
    ],
    pricing: "Paid",
    pricingDetail: "Starter plan at $49/month; Professional at $199/month; Enterprise with custom pricing for advanced features, dedicated support, and SSO.",
    features: [
      "No-code AI model building",
      "Pre-built integrations with HubSpot, Salesforce, Snowflake, Google Analytics",
      "Automated data cleaning and feature engineering",
      "Real-time model deployment and prediction APIs",
      "Collaborative dashboards and reporting"
    ],
    useCase: "Best for marketing, sales, and operations teams that want to build predictive models directly from their existing business tools without writing code.",
    alternatives: ["obviously-ai", "seek-ai"],
    scoreBreakdown: { features: 87.0, reviews: 85.0, momentum: 90.0, popularity: 84.0 },
    userQuotes: [
      { role: "Marketing Director", company: "SaaS Company", quote: "Akkio let us build a lead scoring model connected directly to HubSpot in 20 minutes. The integration is seamless and the predictions are highly accurate." },
      { role: "Business Operations Lead", company: "Professional Services Firm", quote: "We use Akkio to forecast project resource needs. It's saved us countless hours of manual spreadsheet analysis." }
    ]
  },
  {
    id: "polymer",
    name: "Polymer",
    category: "AI Data & Analytics",
    rating: 4.2,
    reviewCount: 1500,
    icon: BarChart3,
    description: "AI-powered spreadsheet tool that transforms data into interactive dashboards and visualizations using natural language commands.",
    longDescription: "Polymer is an AI-first data platform that turns spreadsheets into interactive, intelligent databases. Users can upload CSV or Excel files (or connect to live data sources) and immediately use natural language to filter, aggregate, visualize, and analyze their data. Polymer automatically detects data types and relationships, suggesting visualizations and insights. It's designed to bridge the gap between traditional spreadsheets and full BI platforms, making data analysis visual and conversational.",
    pros: [
      "Transforms static spreadsheets into interactive, visual databases",
      "Natural language commands for filtering, sorting, and aggregating data",
      "Auto-suggests relevant charts and visualizations",
      "No technical setup required — works directly from uploaded files"
    ],
    cons: [
      "Less powerful than full BI tools for complex multi-source analysis",
      "Limited support for very large datasets (over 1M rows)",
      "Custom formulas and advanced calculations are restricted",
      "Data refresh for live connections is limited in lower tiers"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier includes 2 sheets and limited AI queries; Pro at $20/month for unlimited sheets and AI features; Business at $50/user/month with team collaboration.",
    features: [
      "Natural language data querying and filtering",
      "One-click visualization generation (bar, line, pie, scatter)",
      "Interactive dashboards with drill-down capabilities",
      "Support for CSV, Excel, Google Sheets, and Airtable imports",
      "AI-powered data type detection and relationship mapping"
    ],
    useCase: "Best for business professionals, analysts, and small teams who want to turn their spreadsheets into interactive dashboards and gain insights through natural language queries.",
    alternatives: ["tableau-ai", "julius-ai"],
    scoreBreakdown: { features: 84.0, reviews: 83.0, momentum: 86.0, popularity: 88.0 },
    userQuotes: [
      { role: "Business Analyst", company: "Mid-Market Retailer", quote: "Polymer turned our clunky inventory spreadsheet into an interactive dashboard in minutes. The AI suggestions for charts are surprisingly relevant." },
      { role: "Operations Manager", company: "Nonprofit Organization", quote: "My team has no technical background, but they can analyze donor data with Polymer using plain English. It's been transformational for our reporting." }
    ]
  },
  {
    id: "seek-ai",
    name: "Seek AI",
    category: "AI Data & Analytics",
    rating: 4.1,
    reviewCount: 600,
    icon: BarChart3,
    description: "Natural language query engine for databases that lets users ask data questions in plain English and get instant SQL answers.",
    longDescription: "Seek AI is a natural language interface for databases that enables anyone to query data using conversational language. It connects to existing SQL databases (PostgreSQL, MySQL, Snowflake, BigQuery, etc.) and translates English questions into optimized SQL queries. Seek AI also provides data lineage, query explanations, and automated reporting. It's designed to reduce the bottleneck of data teams by enabling business users to self-serve their data needs while maintaining governance and security.",
    pros: [
      "Direct connection to existing databases with no migration needed",
      "Translates natural language to accurate, optimized SQL",
      "Query explanations help users understand the logic behind results",
      "Built-in data governance and access controls"
    ],
    cons: [
      "Requires existing SQL database setup and configuration",
      "May struggle with highly complex or ambiguous multi-table queries",
      "Limited visualization capabilities — best paired with a BI tool",
      "Smaller user base and community compared to established tools"
    ],
    pricing: "Paid",
    pricingDetail: "Starts at $99/month for the Starter plan with 1 database connection; Team plan at $299/month; Enterprise pricing available with custom deployment options.",
    features: [
      "Natural language to SQL translation",
      "Connection to PostgreSQL, MySQL, Snowflake, BigQuery, Redshift",
      "Query explanation and data lineage tracking",
      "Automated report generation and scheduling",
      "Role-based access control and governance"
    ],
    useCase: "Best for data-driven organizations where non-technical teams need frequent access to database insights without relying on data engineers for every query.",
    alternatives: ["julius-ai", "pandas-ai"],
    scoreBreakdown: { features: 82.0, reviews: 80.0, momentum: 88.0, popularity: 79.0 },
    userQuotes: [
      { role: "VP of Analytics", company: "E-commerce Company", quote: "Seek AI has cut our data team's ad-hoc query workload by 60%. Business users can get answers instantly without bothering engineers." },
      { role: "Marketing Analyst", company: "SaaS Platform", quote: "I used to wait days for SQL queries. Now I just ask in English and get results in seconds. The query explanations also help me learn SQL." }
    ]
  },
  {
    id: "pandas-ai",
    name: "Pandas AI",
    category: "AI Data & Analytics",
    rating: 4.6,
    reviewCount: 4500,
    icon: BarChart3,
    description: "Open-source Python library that adds generative AI capabilities to pandas, enabling natural language data manipulation and analysis.",
    longDescription: "Pandas AI is an open-source Python library that extends the popular pandas DataFrame library with generative AI capabilities. It allows data scientists and analysts to interact with their DataFrames using natural language prompts — asking questions, requesting transformations, generating visualizations, and performing analysis without writing traditional pandas code. It integrates with OpenAI, Hugging Face, and other LLM providers. Pandas AI is designed for Python users who want to accelerate their data workflows with AI assistance while staying in their familiar programming environment.",
    pros: [
      "Integrates directly with pandas API — familiar for Python users",
      "Open source and free with no vendor lock-in",
      "Supports multiple LLM backends (OpenAI, Hugging Face, Azure, Google)",
      "Can generate complex multi-step data transformations from simple prompts"
    ],
    cons: [
      "Requires Python programming knowledge to install and use",
      "LLM API costs can add up with heavy usage",
      "Not a standalone tool — requires Python environment setup",
      "Output quality depends on prompt clarity and LLM model used"
    ],
    pricing: "Free",
    pricingDetail: "Open source (MIT license) — completely free to use. Requires API keys for LLM providers (OpenAI, etc.) which have their own usage costs.",
    features: [
      "Natural language DataFrame querying and manipulation",
      "AI-powered data visualization generation",
      "Multiple LLM backend support (OpenAI, Hugging Face, Azure, Google)",
      "Smart data cleaning and transformation suggestions",
      "Conversational memory for multi-step analysis chains"
    ],
    useCase: "Best for data scientists, analysts, and Python developers who want to accelerate pandas-based data analysis workflows using natural language prompts.",
    alternatives: ["julius-ai", "seek-ai"],
    scoreBreakdown: { features: 92.0, reviews: 90.0, momentum: 97.0, popularity: 95.0 },
    userQuotes: [
      { role: "Data Scientist", company: "Tech Startup", quote: "Pandas AI completely changed my workflow. I can now do in 5 prompts what used to take me 50 lines of pandas code." },
      { role: "Senior Data Analyst", company: "Financial Services Firm", quote: "It's like having a pandas expert sitting next to you. I use it daily for exploratory analysis and data cleaning tasks." }
    ]
  },
  {
    id: "hex-ai",
    name: "Hex AI",
    category: "AI Data & Analytics",
    rating: 4.5,
    reviewCount: 2800,
    icon: BarChart3,
    description: "Collaborative data and AI platform that combines notebooks, SQL, Python, and AI-powered features for end-to-end analytics.",
    longDescription: "Hex AI is a cloud-based collaborative data platform that brings together SQL, Python, no-code transformations, and AI-powered features in a single workspace. It offers a rich notebook-style environment where teams can explore data, build and deploy machine learning models, create interactive data apps, and share results. Hex's AI features include natural language to code generation, AI-assisted data profiling, automated chart recommendations, and smart code completion — all designed to accelerate the entire analytics workflow from exploration to production.",
    pros: [
      "Combines SQL, Python, and no-code in one collaborative environment",
      "AI-powered code generation and data profiling",
      "Interactive data apps and dashboards that can be shared with stakeholders",
      "Built-in compute and data connection management"
    ],
    cons: [
      "Cloud-only — no offline or local-first mode",
      "Can be expensive for large teams with heavy compute usage",
      "Learning curve for users coming from traditional notebooks alone",
      "Some advanced Python libraries may not be pre-installed"
    ],
    pricing: "Freemium",
    pricingDetail: "Free tier includes 1 workspace and limited compute; Team at $99/user/month; Business at $199/user/month; Enterprise with custom pricing.",
    features: [
      "Collaborative SQL, Python, and no-code notebooks",
      "AI-assisted code generation and completion",
      "Interactive data app building and sharing",
      "Built-in data connections (Snowflake, BigQuery, Redshift, etc.)",
      "Version control and project management for analytics"
    ],
    useCase: "Best for data teams and analysts who need a collaborative, all-in-one platform for exploratory analysis, model building, and sharing interactive data products with stakeholders.",
    alternatives: ["tableau-ai", "pandas-ai"],
    scoreBreakdown: { features: 91.0, reviews: 89.0, momentum: 94.0, popularity: 92.0 },
    userQuotes: [
      { role: "Data Engineering Lead", company: "Mid-Size Enterprise", quote: "Hex replaced a dozen tools in our stack. The collaboration features alone have been worth the switch — no more 'works on my machine' problems." },
      { role: "Analytics Manager", company: "B2B SaaS Company", quote: "The AI code generation in Hex is incredibly accurate. It understands our data schema and generates production-ready SQL and Python." }
    ]
  },
  {
    id: "sisu",
    name: "Sisu",
    category: "AI Data & Analytics",
    rating: 4.3,
    reviewCount: 900,
    icon: BarChart3,
    description: "AI-powered analytics engine that automatically identifies and explains root causes of key business metric changes.",
    longDescription: "Sisu is an AI-driven analytics platform focused on root cause analysis and metric intelligence. It connects to an organization's data sources and continuously monitors key business metrics (revenue, churn, engagement, etc.). When a metric changes, Sisu automatically identifies the statistical drivers behind that change, ranks them by impact, and generates natural language explanations. It's designed for data teams and business leaders who need to understand not just what happened, but why it happened — without manual analysis.",
    pros: [
      "Automated root cause analysis saves hours of manual investigation",
      "Natural language explanations make insights accessible to non-technical users",
      "Continuous monitoring proactively surfaces important metric changes",
      "Ranks drivers by statistical significance and business impact"
    ],
    cons: [
      "Focused on root cause analysis — not a general-purpose BI tool",
      "Requires clean, well-structured data with consistent naming",
      "Pricing is enterprise-oriented and not disclosed publicly",
      "Best results require proper metric and dimension setup upfront"
    ],
    pricing: "Paid",
    pricingDetail: "Custom enterprise pricing based on data volume, users, and deployment requirements. Contact sales for a quote.",
    features: [
      "Automated root cause analysis for metric changes",
      "Continuous metric monitoring and anomaly detection",
      "Natural language explanation generation",
      "Driver ranking by impact and statistical significance",
      "Integration with Snowflake, BigQuery, Redshift, and more"
    ],
    useCase: "Best for data teams and business leaders in medium-to-large organizations who need automated, explainable root cause analysis for key business metrics.",
    alternatives: ["tableau-ai", "hex-ai"],
    scoreBreakdown: { features: 86.0, reviews: 84.0, momentum: 87.0, popularity: 83.0 },
    userQuotes: [
      { role: "Head of Data", company: "Subscription Service", quote: "Sisu turned our weekly metric review from a 3-hour investigation into a 15-minute confirmation. It surfaces drivers we would have missed completely." },
      { role: "Growth Manager", company: "Consumer App", quote: "When our conversion rate dropped, Sisu identified the exact user segment and feature change responsible within minutes. Invaluable for rapid response." }
    ]
  },
  {
    id: "chatgpt-advanced-data-analysis",
    name: "ChatGPT Advanced Data Analysis",
    category: "AI Data & Analytics",
    rating: 4.8,
    reviewCount: 22000,
    icon: BarChart3,
    description: "OpenAI's ChatGPT feature that enables uploading files and running Python-powered data analysis, visualization, and machine learning in a chat interface.",
    longDescription: "ChatGPT Advanced Data Analysis (formerly Code Interpreter) is a powerful feature of ChatGPT Plus that provides a secure, sandboxed Python environment directly within the chat interface. Users can upload CSV, Excel, PDF, image, and other file types, and ChatGPT can write and execute Python code to analyze data, create visualizations, perform statistical analysis, train machine learning models, and more. The AI iteratively debugs and refines its code based on results, making complex data analysis accessible through natural conversation. It supports file export and handles everything from simple charts to complex multi-step analytical pipelines.",
    pros: [
      "No setup required — works directly in ChatGPT with file uploads",
      "Iterative, conversational debugging and refinement of analyses",
      "Handles diverse file types: CSV, Excel, PDF, images, text, ZIP",
      "Capable of complex analyses including ML, time series, and NLP"
    ],
    cons: [
      "Requires ChatGPT Plus subscription ($20/month)",
      "Session timeout after ~60 minutes of inactivity",
      "Cannot access the internet or install arbitrary Python packages",
      "Data privacy concerns — data is sent to OpenAI's servers"
    ],
    pricing: "$20/mo",
    pricingDetail: "Available exclusively with ChatGPT Plus at $20/month. Includes access to GPT-4, Advanced Data Analysis, DALL-E 3, and web browsing.",
    features: [
      "File upload and analysis (CSV, Excel, PDF, JSON, images, ZIP)",
      "Python code execution in a secure sandboxed environment",
      "Data visualization (matplotlib, seaborn, plotly)",
      "Statistical analysis and hypothesis testing",
      "Machine learning model training and evaluation"
    ],
    useCase: "Best for anyone — from students to experienced data professionals — who wants a zero-setup, conversational environment for analyzing data, creating visualizations, and building models using natural language.",
    alternatives: ["julius-ai", "pandas-ai"],
    scoreBreakdown: { features: 96.0, reviews: 95.0, momentum: 99.0, popularity: 99.0 },
    userQuotes: [
      { role: "Data Analyst", company: "Consulting Firm", quote: "ChatGPT Advanced Data Analysis has become my daily driver for quick data tasks. Upload a CSV, ask for insights, and get polished visualizations in minutes." },
      { role: "PhD Researcher", company: "University", quote: "I use it to analyze experimental data and generate publication-ready figures. The conversational debugging is a game-changer — it fixes its own mistakes." }
    ]
  }
];
