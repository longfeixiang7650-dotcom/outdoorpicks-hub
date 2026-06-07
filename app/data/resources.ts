export interface ResourceData {
  id: string;
  name: string;
  type: "model" | "lora" | "workflow" | "checkpoint" | "tutorial";
  style: string;
  description: string;
  longDescription: string;
  features: string[];
  category: string;
  fileType: string;
  fileSize: string;
  compatibility: string[];
  downloadUrl: string;
  pros: string[];
  cons: string[];
  version: string;
  author: string;
}

export const ALL_RESOURCES: ResourceData[] = [
  {
    id: "deliberate-v2",
    name: "Deliberate v2",
    type: "model",
    style: "真实系",
    description: "Versatile realistic checkpoint for Stable Diffusion, excels at portraits, landscapes, and general photography-style generation.",
    longDescription: "Deliberate v2 is one of the most popular and versatile Stable Diffusion checkpoints. It produces high-quality photorealistic images with excellent composition and lighting. The model handles a wide range of subjects — from human portraits and fashion photography to architecture and nature scenes. It works well with most LoRAs and ControlNet models, making it a reliable base model for both beginners and experienced users. v2 improves upon the original with better hands, more consistent skin texture, and enhanced background detail.",
    features: [
      "Excellent photorealism for portraits and landscapes",
      "Works well with most community LoRAs and embeddings",
      "Good prompt adherence and composition",
      "Improved hand generation in v2",
      "Consistent skin texture and lighting",
      "Compatible with ControlNet and T2I-Adapter",
    ],
    category: "Stable Diffusion Checkpoints",
    fileType: ".safetensors",
    fileSize: "5.2 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI", "Forge"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Highly versatile — works for almost any subject",
      "Strong baseline for mixing with LoRAs",
      "Active community support"
    ],
    cons: [
      "Requires VAE for optimal color accuracy",
      "May need negative prompts for complex scenes"
    ],
    version: "v2.0",
    author: "XpucT"
  },
  {
    id: "realistic-vision-v20",
    name: "Realistic Vision V2.0",
    type: "model",
    style: "真实系",
    description: "Specialized photorealistic checkpoint focused on ultra-realistic human portraits, skin details, and natural lighting.",
    longDescription: "Realistic Vision V2.0 is purpose-built for photorealistic human portraits. It excels at skin texture, eye detail, hair strands, and natural lighting that closely resembles actual photography. The model has been fine-tuned specifically to reduce the 'AI look' that many general models produce. It produces images that can often pass as real photographs, especially at mid-to-close range portraits. Works best with realistic LoRAs and VAE for skin tone accuracy.",
    features: [
      "Ultra-realistic skin texture and detail",
      "Natural lighting and shadow rendering",
      "Accurate eye and hair detail",
      "Reduced 'AI artifact' appearance",
      "Excellent for portrait photography style",
      "Works with inpainting for face refinement",
    ],
    category: "Stable Diffusion Checkpoints",
    fileType: ".safetensors",
    fileSize: "5.0 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Best-in-class for photorealism",
      "Minimal AI artifacts",
      "Great for portrait and fashion generation"
    ],
    cons: [
      "Less versatile for non-realistic styles",
      "Requires proper VAE for best results"
    ],
    version: "v2.0",
    author: "SG161222"
  },
  {
    id: "lofi-v2",
    name: "Lofi V2",
    type: "model",
    style: "真实系",
    description: "Soft, atmospheric realistic model with a cinematic film-like aesthetic — ideal for moody portraits and artistic photography.",
    longDescription: "Lofi V2 brings a distinctive cinematic and slightly moody aesthetic to realistic image generation. Unlike typical photorealistic models that aim for clinical accuracy, Lofi V2 embraces artistic imperfection — soft focus, film grain, desaturated tones, and atmospheric lighting. It's ideal for creating images with a nostalgic or 'indie film' feel. The model performs exceptionally well with prompts describing mood, atmosphere, and emotional tone rather than technical detail.",
    features: [
      "Cinematic film-like color grading",
      "Soft focus and atmospheric lighting",
      "Desaturated, moody color palette",
      "Film grain texture for authenticity",
      "Excellent for storytelling-style images",
      "Good with artistic and abstract prompts",
    ],
    category: "Stable Diffusion Checkpoints",
    fileType: ".safetensors",
    fileSize: "5.1 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Unique artistic aesthetic",
      "Great for moody/storytelling images",
      "Distinctive style unlike generic realism"
    ],
    cons: [
      "Not suitable for clinical/technical photorealism",
      "Specific aesthetic may not suit all use cases"
    ],
    version: "v2.0",
    author: "Nijikage"
  },

  {
    id: "anything-v5",
    name: "Anything V5",
    type: "model",
    style: "二次元",
    description: "The definitive anime-style checkpoint — produces high-quality illustrations in Japanese anime and manga art styles.",
    longDescription: "Anything V5 is the latest iteration of the most popular anime-style Stable Diffusion checkpoint. It produces stunning anime illustrations with accurate anatomy, expressive faces, and vibrant colors. The model handles a wide range of anime styles — from modern shonen and slice-of-life to fantasy and sci-fi. It excels at generating characters with consistent facial features and detailed costumes. V5 brings improved hand anatomy, better background rendering, and enhanced prompt adherence compared to earlier versions.",
    features: [
      "High-quality anime illustration output",
      "Accurate anatomy and proportional characters",
      "Vibrant and consistent color palette",
      "Expressive facial features and eyes",
      "Good with character design prompts",
      "Support for multiple anime art substyles",
    ],
    category: "Anime Models",
    fileType: ".safetensors",
    fileSize: "5.3 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI", "NovelAI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Best all-around anime checkpoint",
      "Works with most anime LoRAs",
      "Active community and resources"
    ],
    cons: [
      "May need Danbooru tags for best results",
      "Not suitable for realistic styles"
    ],
    version: "V5V3",
    author: "Linaqruf"
  },
  {
    id: "counterfeit-v25",
    name: "Counterfeit V2.5",
    type: "model",
    style: "二次元",
    description: "High-quality anime checkpoint known for its clean linework, vibrant cel-shaded aesthetics, and consistent character generation.",
    longDescription: "Counterfeit V2.5 is a meticulously crafted anime-style checkpoint that produces images with exceptionally clean linework and vibrant cel-shaded aesthetics. The model is particularly strong at generating characters with consistent facial features, detailed clothing, and dynamic poses. It has a distinctive 'clean anime' look that sets it apart from other anime models — less painterly, more akin to high-budget anime productions. It handles complex compositions well and maintains consistency across multiple generations of the same character.",
    features: [
      "Clean linework and cel-shaded style",
      "Consistent character facial features",
      "Vibrant, saturated color output",
      "Detailed costume and accessory generation",
      "Good for character sheets and turnarounds",
      "Dynamic pose and action scene handling",
    ],
    category: "Anime Models",
    fileType: ".safetensors",
    fileSize: "5.0 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Exceptionally clean output quality",
      "Great character consistency",
      "Distinctive high-quality anime look"
    ],
    cons: [
      "Specific style may not suit all anime genres",
      "Less flexible for painterly/watercolor styles"
    ],
    version: "v2.5",
    author: "gsdf"
  },
  {
    id: "dreamlike-diffusion",
    name: "Dreamlike Diffusion 1.0",
    type: "model",
    style: "二次元",
    description: "Dreamlike anime-style checkpoint with a painterly, ethereal aesthetic — perfect for fantasy and dreamlike illustrations.",
    longDescription: "Dreamlike Diffusion 1.0 offers a unique painterly interpretation of anime-style generation. Unlike the clean cel-shaded look of other anime models, Dreamlike Diffusion produces images with soft brush strokes, ethereal lighting, and a dreamy atmosphere. It's particularly well-suited for fantasy scenes, magical girl themes, and illustrations that call for a softer, more artistic touch. The .ckpt format is compatible with most SD 1.5 workflows, and the model pairs beautifully with artistic LoRAs.",
    features: [
      "Painterly, soft brush-stroke aesthetic",
      "Ethereal lighting and atmosphere",
      "Dreamy, artistic color palette",
      "Excellent for fantasy and magical themes",
      "Soft character rendering with artistic feel",
      "Good with artistic style mixing",
    ],
    category: "Anime Models",
    fileType: ".ckpt",
    fileSize: "5.0 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Unique artistic style",
      "Beautiful for fantasy themes",
      "Pairs well with art LoRAs"
    ],
    cons: [
      ".ckpt format (slightly larger than .safetensors)",
      "Not ideal for clean/crisp anime style"
    ],
    version: "1.0",
    author: "dreamlike.art"
  },

  {
    id: "dreamned-vae",
    name: "Neverending Dream (NED)",
    type: "model",
    style: "2.5D",
    description: "Premium 2.5D checkpoint blending anime aesthetics with realistic lighting and detail — perfect for semi-realistic characters.",
    longDescription: "Neverending Dream (NED) is a refined 2.5D checkpoint that expertly bridges the gap between anime and photorealism. It produces characters with anime-style facial features but realistic skin texture, lighting, and environmental detail. The baked VAE ensures consistent color accuracy out of the box. This model is ideal for game character concepts, visual novel art, and any project requiring stylized but grounded character illustrations. It handles complex lighting scenarios particularly well.",
    features: [
      "Baked VAE for optimal color accuracy",
      "Anime proportions with realistic textures",
      "Excellent lighting and shadow rendering",
      "Consistent character generation",
      "Good for game art and concept design",
      "Versatile across fantasy and modern settings",
    ],
    category: "2.5D Models",
    fileType: ".safetensors",
    fileSize: "5.1 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI", "Forge"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Baked VAE — no extra setup needed",
      "Excellent 2.5D balance",
      "Great for character art"
    ],
    cons: [
      "Less suitable for pure realism or pure anime",
      "May need specific prompting for best results"
    ],
    version: "NED",
    author: "Neverending Dream"
  },
  {
    id: "protogen-x34",
    name: "Protogen x34 Photorealism",
    type: "model",
    style: "2.5D",
    description: "Advanced 2.5D checkpoint specializing in photorealism with enhanced facial detail and natural human features.",
    longDescription: "Protogen x34 Photorealism is a specialized 2.5D merging checkpoint that pushes photorealism further than typical 2.5D models while retaining enough stylization for creative flexibility. It excels at human facial features — producing realistic eyes, skin texture, and expressions that feel natural and unposed. The model handles portrait photography prompts exceptionally well and can produce results that are difficult to distinguish from actual photographs when used with the right settings.",
    features: [
      "Advanced facial detail rendering",
      "Natural and unposed expression generation",
      "Realistic skin texture with subsurface scattering effect",
      "Enhanced eye detail and reflections",
      "Good with portrait and close-up prompts",
      "Versatile for both human and environmental scenes",
    ],
    category: "2.5D Models",
    fileType: ".safetensors",
    fileSize: "5.0 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Excellent facial photorealism",
      "Natural expressions",
      "Versatile for portrait work"
    ],
    cons: [
      "Heavy model — requires good GPU",
      "Niche use case (portrait-focused)"
    ],
    version: "x34",
    author: "darkstorm2150"
  },
  {
    id: "guofeng3",
    name: "Guofeng3 (国风3)",
    type: "model",
    style: "2.5D",
    description: "Specialized Chinese ink-wash painting style checkpoint — blends traditional Chinese art with modern AI generation.",
    longDescription: "Guofeng3 (国风3) is a unique cultural heritage checkpoint that specializes in generating images in traditional Chinese ink-wash painting (水墨画) style, blended with modern illustration techniques. It produces stunning pieces that capture the essence of Chinese brush painting — flowing lines, atmospheric perspective, and the characteristic 'boneless' technique of traditional Chinese art. The .ckpt format model excels at landscapes, floral subjects, and classical Chinese figures, making it invaluable for projects requiring authentic Chinese aesthetic elements.",
    features: [
      "Authentic Chinese ink-wash painting style",
      "Traditional brush stroke simulation",
      "Atmospheric perspective and mist effects",
      "Classical Chinese color palette",
      "Excellent for landscape and nature scenes",
      "Cultural heritage preservation through AI",
    ],
    category: "2.5D Models",
    fileType: ".ckpt",
    fileSize: "5.0 GB",
    compatibility: ["Stable Diffusion 1.5", "Automatic1111", "ComfyUI"],
    downloadUrl: "https://pan.quark.cn/s/1d96ea0af4cd",
    pros: [
      "Unique and culturally significant style",
      "Authentic Chinese art aesthetic",
      "Beautiful for landscape generation"
    ],
    cons: [
      ".ckpt format (legacy format)",
      "Limited to specific artistic style"
    ],
    version: "v3.2",
    author: "OnodoFreeln"
  }
];

export const RESOURCES_BY_STYLE = {
  "真实系": ALL_RESOURCES.filter(r => r.style === "真实系"),
  "二次元": ALL_RESOURCES.filter(r => r.style === "二次元"),
  "2.5D": ALL_RESOURCES.filter(r => r.style === "2.5D"),
};

export const RESOURCES_BY_CATEGORY = ALL_RESOURCES.reduce((acc, r) => {
  if (!acc[r.category]) acc[r.category] = [];
  acc[r.category].push(r);
  return acc;
}, {} as Record<string, ResourceData[]>);

export const ALL_STYLES = ["真实系", "二次元", "2.5D"] as const;
export const ALL_CATEGORIES = [...new Set(ALL_RESOURCES.map(r => r.category))];

export const RESOURCE_MAP = new Map(ALL_RESOURCES.map(r => [r.id, r]));
