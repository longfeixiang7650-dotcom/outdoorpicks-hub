import { Palette, type LucideIcon } from "lucide-react";

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

export const IMAGE_TOOLS: ToolData[] = [
  {
    id: "midjourney",
    name: "Midjourney",
    category: "AI Image & Design",
    rating: 4.8,
    reviewCount: 5200,
    icon: Palette,
    description: "AI image generator known for stunning artistic quality and creative compositions.",
    longDescription: "Midjourney is a leading AI image generation platform that produces highly artistic, photorealistic, and imaginative visuals from text prompts. Known for its distinctive aesthetic quality, it operates primarily through Discord, offering fine-grained control over style, composition, and detail through advanced prompt engineering.",
    pros: [
      "Exceptional artistic quality and aesthetic output",
      "Highly customizable prompt parameters for fine-grained control",
      "Active community with daily inspiration and prompt sharing",
    ],
    cons: [
      "Requires Discord to use — no standalone web app",
      "Limited free tier; paid plans required for commercial use",
    ],
    pricing: "$10/mo",
    pricingDetail: "Basic $10/mo | Standard $30/mo | Pro $60/mo | Mega $120/mo",
    features: [
      "Text-to-Image Generation from Natural Language Prompts",
      "Advanced Prompt Parameters (ar, stylize, chaos, seed, iw)",
      "Image-to-Image and Image Blending (Remix Mode)",
      "Upscaling and Outpainting (Zoom Out, Make Square)",
      "Style Reference (--sref) and Character Reference (--cref)",
      "Batch Generation with Consistent Styles",
      "Community Gallery with Search and Remixing",
      "Discord Bot Integration for Team Workflows",
      "Commercial Usage Terms on Paid Plans",
      "Version Upgrades (V6, V5, Niji for Anime)",
    ],
    useCase: "Artists, designers, and creative professionals seeking high-quality, artistic AI-generated imagery for concept art, marketing visuals, and creative projects.",
    alternatives: ["dall-e-3", "stable-diffusion"],
    scoreBreakdown: { features: 92.0, reviews: 94.0, momentum: 97.0, popularity: 99.0 },
    userQuotes: [
      { role: "Creative Director", company: "Design Studio", quote: "Midjourney has become an essential part of our creative workflow — the artistic quality is unmatched." },
    ],
  },
  {
    id: "dall-e-3",
    name: "DALL-E 3",
    category: "AI Image & Design",
    rating: 4.7,
    reviewCount: 3800,
    icon: Palette,
    description: "OpenAI's advanced text-to-image model with superior prompt adherence.",
    longDescription: "DALL-E 3 is OpenAI's latest image generation model, boasting significantly improved prompt adherence and text rendering compared to its predecessors. Integrated natively into ChatGPT Plus, it allows users to generate, edit, and refine images through natural conversation, making it one of the most accessible AI image generators available.",
    pros: [
      "Best-in-class prompt adherence and text rendering",
      "Seamless ChatGPT integration for conversational image editing",
      "Strong safety guardrails and content moderation",
    ],
    cons: [
      "Less artistic stylization compared to Midjourney",
      "Limited fine-grained control over composition parameters",
    ],
    pricing: "$20/mo",
    pricingDetail: "ChatGPT Plus $20/mo includes DALL-E 3 | Enterprise custom pricing",
    features: [
      "Text-to-Image Generation with Superior Prompt Understanding",
      "In-Context Image Editing and Refinement via Chat",
      "Accurate Text Rendering in Generated Images",
      "Image Variations from Existing Images",
      "Built-in Safety Filters and Content Policy Enforcement",
      "Integration with ChatGPT Plus and Enterprise",
      "High-Resolution Output (up to 1792x1024)",
      "Multi-Turn Conversation for Iterative Design",
    ],
    useCase: "Content creators, marketers, and teams who need fast, reliable image generation with excellent prompt accuracy and integrated chat-based editing.",
    alternatives: ["midjourney", "adobe-firefly"],
    scoreBreakdown: { features: 95.0, reviews: 91.0, momentum: 94.0, popularity: 98.0 },
    userQuotes: [
      { role: "Product Manager", company: "SaaS Company", quote: "DALL-E 3's ability to render text in images accurately has been a game-changer for our mockups and presentations." },
    ],
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    category: "AI Image & Design",
    rating: 4.6,
    reviewCount: 4200,
    icon: Palette,
    description: "Open-source image generation model with full local control and customization.",
    longDescription: "Stable Diffusion is the leading open-source AI image generation model, developed by Stability AI. It can run locally on consumer GPUs, giving users complete control over the generation process. With a vast ecosystem of community models (Checkpoints, LoRAs, ControlNets) and interfaces like Automatic1111 and ComfyUI, it offers unmatched flexibility and customization.",
    pros: [
      "Fully open-source and runs locally on your own hardware",
      "Vast ecosystem of community models and extensions",
      "Complete control over every aspect of generation",
    ],
    cons: [
      "Steeper learning curve compared to managed services",
      "Quality depends heavily on model selection and settings",
    ],
    pricing: "Free (Open Source)",
    pricingDetail: "Free — requires compatible GPU | Cloud APIs from third-party providers",
    features: [
      "Open-Source Text-to-Image Generation (SDXL, SD3.5, SD4)",
      "Local Inference on Consumer GPUs (No Internet Required)",
      "Community Model Ecosystem (Checkpoints, LoRAs, Textual Inversion)",
      "ControlNet for Fine-Grained Pose, Depth, and Edge Control",
      "Image-to-Image and Inpainting/Outpainting",
      "ComfyUI and Automatic1111 Web UIs",
      "Video Generation (Stable Video Diffusion, SVD)",
      "Custom Training with Dreambooth and LoRA",
      "Batch Processing and API Server Support",
      "Commercial Licensing Options via Stability AI",
    ],
    useCase: "Developers, researchers, and advanced users who want complete control over AI image generation with local execution and unlimited customization.",
    alternatives: ["midjourney", "dall-e-3"],
    scoreBreakdown: { features: 98.0, reviews: 88.0, momentum: 93.0, popularity: 95.0 },
    userQuotes: [
      { role: "AI Researcher", company: "University Lab", quote: "Stable Diffusion's open-source nature and ControlNet support make it the go-to platform for research and custom pipelines." },
    ],
  },
  {
    id: "adobe-firefly",
    name: "Adobe Firefly",
    category: "AI Image & Design",
    rating: 4.5,
    reviewCount: 2900,
    icon: Palette,
    description: "Adobe's generative AI suite integrated into Creative Cloud applications.",
    longDescription: "Adobe Firefly is a family of generative AI models integrated directly into Adobe's Creative Cloud ecosystem, including Photoshop, Illustrator, and Express. It offers text-to-image, generative fill, text effects, and vector recoloring — all designed to work seamlessly within professional creative workflows while being commercially safe and rights-cleared.",
    pros: [
      "Deep integration with Photoshop, Illustrator, and Express",
      "Commercially safe — trained on licensed content",
      "Generative Fill and Expand work directly on real photos",
    ],
    cons: [
      "Requires Creative Cloud subscription for full features",
      "Limited standalone web capabilities compared to competitors",
    ],
    pricing: "$54.99/mo",
    pricingDetail: "Firefly Free Plan | Creative Cloud Photography $9.99/mo | All Apps $54.99/mo",
    features: [
      "Text-to-Image Generation with Commercial Safety",
      "Generative Fill in Photoshop (Select, Fill, Replace)",
      "Generative Expand for Outpainting Photos",
      "Text Effects from Styles and Textures",
      "Vector Recoloring in Adobe Illustrator",
      "3D-to-Image Conversion and Lighting",
      "Integration with Adobe Express for Quick Designs",
      "Content Credentials for Transparency",
      "Enterprise-Grade IP Protection",
      "Batch Image Generation and Editing",
    ],
    useCase: "Professional photographers, graphic designers, and creative teams who work within the Adobe ecosystem and need commercially safe generative AI tools.",
    alternatives: ["dall-e-3", "midjourney"],
    scoreBreakdown: { features: 90.0, reviews: 87.0, momentum: 91.0, popularity: 93.0 },
    userQuotes: [
      { role: "Graphic Designer", company: "Creative Agency", quote: "Firefly's generative fill in Photoshop has cut my image retouching time by 70% while maintaining professional quality." },
    ],
  },
  {
    id: "canva-ai",
    name: "Canva AI",
    category: "AI Image & Design",
    rating: 4.7,
    reviewCount: 4500,
    icon: Palette,
    description: "All-in-one design platform with integrated AI-powered creation tools.",
    longDescription: "Canva AI (Magic Studio) brings powerful generative AI capabilities directly into the world's most popular design platform. From Magic Media's text-to-image and text-to-video to Magic Write for copy generation, AI-powered background removal, and Magic Eraser, Canva makes AI-powered design accessible to everyone — no design skills required.",
    pros: [
      "Extremely accessible — no design experience needed",
      "Comprehensive AI suite covering images, video, copy, and editing",
      "Vast template library integrated with AI generation",
    ],
    cons: [
      "Less fine-grained control than professional tools like Photoshop",
      "Advanced AI features locked behind Pro subscription",
    ],
    pricing: "$12.99/mo",
    pricingDetail: "Free | Pro $12.99/mo | Teams $10/seat/mo | Enterprise Custom",
    features: [
      "Magic Media: AI Text-to-Image and Text-to-Video",
      "Magic Design: AI-Powered Template Generation",
      "Magic Write: AI Copywriting and Content Generation",
      "Background Removal and Magic Eraser",
      "AI Image Expansion and Reimagine",
      "Brand Kit with AI-Powered Consistency",
      "Magic Morph for Text and Shape Styling",
      "AI-Powered Photo Editing and Filters",
      "Multi-Format Export (PNG, PDF, MP4, GIF, SVG)",
      "Team Collaboration and Commenting",
    ],
    useCase: "Social media managers, small business owners, educators, and non-designers who need quick, professional-looking visual content with AI assistance.",
    alternatives: ["adobe-firefly", "picsart-ai"],
    scoreBreakdown: { features: 88.0, reviews: 93.0, momentum: 96.0, popularity: 97.0 },
    userQuotes: [
      { role: "Social Media Manager", company: "Startup", quote: "Canva AI has completely replaced my need for multiple design tools — it's the ultimate all-in-one for content creation." },
    ],
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    category: "AI Image & Design",
    rating: 4.6,
    reviewCount: 3500,
    icon: Palette,
    description: "Advanced AI image generator tailored for game assets and concept art.",
    longDescription: "Leonardo AI is a comprehensive AI image generation platform specifically designed for game development, concept art, and creative asset production. It offers a wide range of pre-trained models, fine-tuned styles, and powerful tools like Canvas Editor, AI Animation, and Realtime Generation, making it a favorite among indie game developers and digital artists.",
    pros: [
      "Excellent for game asset and character design pipelines",
      "Canvas Editor with powerful inpainting/outpainting",
      "Realtime generation for rapid iteration",
    ],
    cons: [
      "Free tier has daily token limits",
      "Some advanced features require higher-tier plans",
    ],
    pricing: "Free ($150 tokens/mo)",
    pricingDetail: "Free $150 tokens/mo | Apprentice $10/mo (2,500 tokens) | Artisan $24/mo (7,000 tokens) | Maestro $48/mo (18,000 tokens)",
    features: [
      "Text-to-Image with 50+ Pre-Trained Models (SDXL, SD3.5, Anime)",
      "Canvas Editor with Inpainting, Outpainting, and Sketch-to-Image",
      "AI Animation from Static Images",
      "Realtime Generation with Instant Preview",
      "Image Guidance and Style Transfer",
      "3D Texture Generation",
      "Consistent Character Generation",
      "AI Pattern Generator for Textures",
      "Batch Image Generation with Variations",
      "API Access for Developer Integration",
    ],
    useCase: "Game developers, concept artists, and asset creators who need specialized AI tools for generating consistent game characters, environments, and textures.",
    alternatives: ["midjourney", "stable-diffusion"],
    scoreBreakdown: { features: 91.0, reviews: 89.0, momentum: 92.0, popularity: 88.0 },
    userQuotes: [
      { role: "Indie Game Developer", company: "Solo Studio", quote: "Leonardo AI's consistent character generation and texture tools have been invaluable for my indie game development workflow." },
    ],
  },
  {
    id: "runway",
    name: "Runway",
    category: "AI Image & Design",
    rating: 4.5,
    reviewCount: 3100,
    icon: Palette,
    description: "Professional AI video and image generation platform for creators.",
    longDescription: "Runway is a cutting-edge creative AI platform that goes beyond image generation to offer video generation, AI-powered editing, inpainting, and real-time green screen effects. Used by major studios and individual creators alike, Runway provides professional-grade tools like Gen-3 Alpha for video generation, Frame Interpolation, and Motion Brush for dynamic content creation.",
    pros: [
      "Industry-leading AI video generation (Gen-3 Alpha)",
      "Real-time video effects and green screen tools",
      "Professional-grade editing suite with AI layers",
    ],
    cons: [
      "Higher pricing for video generation credits",
      "Image generation less refined than dedicated tools",
    ],
    pricing: "$12/mo",
    pricingDetail: "Free (limited) | Plus $12/mo (625 credits) | Pro $28/mo (2,250 credits) | Unlimited Custom",
    features: [
      "Gen-3 Alpha: Text-to-Video and Image-to-Video",
      "Frame Interpolation for Smooth Slow Motion",
      "Motion Brush for Animated Effects",
      "AI Inpainting and Outpainting for Video",
      "Real-Time Green Screen (Chroma Key)",
      "Text-to-Image Generation",
      "AI Training on Custom Subjects",
      "Multi-Track Video Editor with AI Layers",
      "Collaboration Tools for Teams",
      "API Access for Developer Integration",
    ],
    useCase: "Video editors, filmmakers, content creators, and studios who need AI-powered video generation, editing, and visual effects in their production pipeline.",
    alternatives: ["picsart-ai", "canva-ai"],
    scoreBreakdown: { features: 94.0, reviews: 86.0, momentum: 95.0, popularity: 90.0 },
    userQuotes: [
      { role: "Film Director", company: "Independent Studio", quote: "Runway's Gen-3 Alpha has transformed our pre-visualization workflow, letting us iterate on VFX shots in minutes instead of days." },
    ],
  },
  {
    id: "picsart-ai",
    name: "Picsart AI",
    category: "AI Image & Design",
    rating: 4.4,
    reviewCount: 2700,
    icon: Palette,
    description: "AI-powered photo editor and design platform for quick creative edits.",
    longDescription: "Picsart AI is a versatile photo editing and design platform that integrates a wide range of AI-powered tools including AI Image Generator, AI Replace, AI Expand, AI Remove Background, and AI Avatar. With a mobile-first approach and social community features, it makes professional-grade AI photo editing accessible to casual users and creators alike.",
    pros: [
      "Mobile-first design with robust editing on the go",
      "AI Replace and AI Expand for creative photo manipulation",
      "Built-in social community for sharing and inspiration",
    ],
    cons: [
      "Free version has watermarks on exports",
      "Some AI features slower than desktop alternatives",
    ],
    pricing: "$7/mo",
    pricingDetail: "Free | Plus $7/mo | Pro $13/mo",
    features: [
      "AI Image Generator from Text Prompts",
      "AI Replace: Object and Background Replacement",
      "AI Expand: Outpainting and Image Extension",
      "AI Remove Background and Magic Eraser",
      "AI Avatar and Portrait Generation",
      "AI Enhance for Photo Restoration and Upscaling",
      "AI Sketch and AI Style Transfer",
      "Video Editing with AI Effects",
      "Sticker Maker and Template Library",
      "Social Community and Remix Features",
    ],
    useCase: "Social media creators, mobile photographers, and casual users who want quick, AI-powered photo edits and designs directly from their phone.",
    alternatives: ["canva-ai", "adobe-firefly"],
    scoreBreakdown: { features: 85.0, reviews: 84.0, momentum: 88.0, popularity: 89.0 },
    userQuotes: [
      { role: "Content Creator", company: "Social Media", quote: "Picsart AI's Replace tool is perfect for quickly swapping backgrounds and objects in product photos — it's my go-to for Instagram content." },
    ],
  },
  {
    id: "clipdrop",
    name: "Clipdrop",
    category: "AI Image & Design",
    rating: 4.3,
    reviewCount: 1800,
    icon: Palette,
    description: "AI-powered image editing suite by Stability AI for quick visual tasks.",
    longDescription: "Clipdrop by Stability AI is a suite of AI-powered image editing and generation tools designed for speed and simplicity. It offers Clean Up (object removal), Reimagine XL (style transfer), Relight, Text-to-Image, and Image Upscaling — all accessible through a streamlined web interface and API, making it ideal for rapid image editing workflows.",
    pros: [
      "Fast, focused tools for specific editing tasks",
      "Clean Up tool is one of the best object removers",
      "API available for developer integration",
    ],
    cons: [
      "Fewer features than full-suite platforms like Canva",
      "Free tier limited to lower resolution outputs",
    ],
    pricing: "Free (limited)",
    pricingDetail: "Free (2,000 images/mo) | Pro $9/mo (up to 10,000 images/mo) | API Custom Pricing",
    features: [
      "Clean Up: AI Object Removal and Inpainting",
      "Reimagine XL: AI Style Transfer and Variation",
      "Relight: Adjust Lighting and Shadows on Photos",
      "Text-to-Image Generation (SDXL Based)",
      "Image Upscaling (2x, 4x, up to 16x)",
      "Background Removal (Sky Replacement)",
      "Stable Doodle: Sketch-to-Image Conversion",
      "API Access for Automated Workflows",
    ],
    useCase: "Photographers, e-commerce sellers, and developers who need quick, reliable AI image editing tools for specific tasks like background removal, object cleanup, and upscaling.",
    alternatives: ["picsart-ai", "adobe-firefly"],
    scoreBreakdown: { features: 82.0, reviews: 83.0, momentum: 85.0, popularity: 82.0 },
    userQuotes: [
      { role: "E-Commerce Manager", company: "Online Store", quote: "Clipdrop's Clean Up tool saves me hours of manual Photoshop work for product photography — it's incredibly fast and accurate." },
    ],
  },
  {
    id: "ideogram",
    name: "Ideogram",
    category: "AI Image & Design",
    rating: 4.5,
    reviewCount: 2200,
    icon: Palette,
    description: "AI image generator specializing in text rendering and typography.",
    longDescription: "Ideogram is an AI image generation platform that excels at rendering accurate text within images — a traditionally difficult task for generative AI. Known for its exceptional typography capabilities, it also offers features like Magic Prompt for prompt optimization, image editing, Describe (image-to-prompt), and vector generation, making it a favorite for logo and graphic design.",
    pros: [
      "Industry-leading text rendering accuracy in generated images",
      "Magic Prompt auto-enhances prompts for better results",
      "Vector generation for scalable graphics",
    ],
    cons: [
      "Smaller user community and fewer resources",
      "Newer platform with fewer advanced features than incumbents",
    ],
    pricing: "Free (limited)",
    pricingDetail: "Free (50 credits/day) | Basic $7/mo (100 credits/day) | Starter $16/mo (300 credits/day) | Turbo $40/mo (600 credits/day)",
    features: [
      "Text-to-Image with Superior Text Rendering",
      "Magic Prompt: AI-Powered Prompt Enhancement",
      "Image Editing with Inpainting",
      "Describe: AI-Generated Prompts from Images",
      "Vector Generation for Logos and Graphics",
      "Style-Specific Models (Realistic, Design, Others)",
      "Prompt Remixing from Community Gallery",
      "Commercial Usage Included on Paid Plans",
    ],
    useCase: "Graphic designers, logo designers, marketers, and anyone who needs AI-generated images with accurate, readable text and typography.",
    alternatives: ["dall-e-3", "midjourney"],
    scoreBreakdown: { features: 87.0, reviews: 88.0, momentum: 90.0, popularity: 84.0 },
    userQuotes: [
      { role: "Logo Designer", company: "Freelance", quote: "Ideogram's text rendering is miles ahead of any other AI image generator. It's become essential for my typography-heavy design work." },
    ],
  },
];
