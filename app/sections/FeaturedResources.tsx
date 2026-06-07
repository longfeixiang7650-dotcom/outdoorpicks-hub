"use client";
import { motion } from 'framer-motion';
import { Star, ArrowRight, Download, ExternalLink, FileText, Image, Music, Code, Video, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  category: string;
  rating: number;
  downloads: number;
  description: string;
  icon: LucideIcon;
  type: 'free' | 'premium' | 'open-source';
  fileSize: string;
}

const FEATURED_RESOURCES: Resource[] = [
  {
    id: 'res-1',
    name: 'AI Model Collection',
    category: 'Models',
    rating: 4.9,
    downloads: 12800,
    description: 'Curated collection of 500+ pre-trained AI models for NLP, computer vision, and more. Includes weights and inference scripts.',
    icon: Download,
    type: 'free',
    fileSize: '2.4 GB',
  },
  {
    id: 'res-2',
    name: 'Prompt Engineering Guide',
    category: 'Guides',
    rating: 4.8,
    downloads: 34200,
    description: 'Comprehensive PDF guide covering advanced prompt techniques, chain-of-thought, and few-shot learning strategies.',
    icon: FileText,
    type: 'free',
    fileSize: '12 MB',
  },
  {
    id: 'res-3',
    name: 'AI Image Dataset Pack',
    category: 'Datasets',
    rating: 4.7,
    downloads: 8900,
    description: 'High-resolution 100K+ image dataset with annotations, perfect for training custom diffusion models and classifiers.',
    icon: Image,
    type: 'premium',
    fileSize: '8.6 GB',
  },
  {
    id: 'res-4',
    name: 'Voice Synthesis Library',
    category: 'Audio',
    rating: 4.6,
    downloads: 21500,
    description: 'State-of-the-art TTS and voice cloning library with 50+ voices. Supports 20+ languages with real-time inference.',
    icon: Music,
    type: 'open-source',
    fileSize: '340 MB',
  },
  {
    id: 'res-5',
    name: 'ML Pipeline Templates',
    category: 'Code',
    rating: 4.9,
    downloads: 51200,
    description: 'Production-ready ML pipeline templates for TensorFlow, PyTorch, and JAX. Includes CI/CD and monitoring setup.',
    icon: Code,
    type: 'open-source',
    fileSize: '2 MB',
  },
  {
    id: 'res-6',
    name: 'AI Video Toolkit Pro',
    category: 'Video',
    rating: 4.5,
    downloads: 7600,
    description: 'Professional video generation and editing toolkit with inpainting, super-resolution, and frame interpolation.',
    icon: Video,
    type: 'premium',
    fileSize: '1.2 GB',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const typeColors: Record<string, { badge: string; bg: string }> = {
  'free': { badge: 'text-green-400 bg-green-900/30', bg: 'from-green-500/10' },
  'premium': { badge: 'text-[#D97706] bg-[#D97706]/20', bg: 'from-[#D97706]/10' },
  'open-source': { badge: 'text-[#B45309] bg-[#B45309]/20', bg: 'from-[#B45309]/10' },
};

export default function FeaturedResources() {


  return (
    <section id="featured" className="relative py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-[2rem] font-bold text-[#FEF3C7] tracking-tight">
              Featured Gear
            </h2>
            <p className="text-[#D97706] mt-1 text-base">
              Hand-picked outdoor gear highly rated by enthusiasts.
            </p>
          </div>
          <a
            href="#categories"
            className="hidden sm:flex items-center gap-1 text-[#D97706] hover:text-[#B45309] font-medium text-sm transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_RESOURCES.map((resource) => {
            const Icon = resource.icon;
            const typeInfo = typeColors[resource.type];
            return (
              <motion.article
                key={resource.id}
                variants={cardVariants}
                className="group bg-[#2A1414] border border-[#4A2424] rounded-xl p-6 card-hover cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${typeInfo.bg} to-transparent`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4A2424] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${typeInfo.badge}`}>
                    {resource.type === 'free' && 'Free'}
                    {resource.type === 'premium' && 'Premium'}
                    {resource.type === 'open-source' && 'Open Source'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#FEF3C7] mb-1 group-hover:text-[#D97706] transition-colors">
                  {resource.name}
                </h3>

                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D97706] bg-[#4A2424] px-2.5 py-1 rounded-md mb-3">
                  {resource.category}
                </span>

                <p className="text-sm text-[#D97706] mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#4A2424]">
                  <div className="flex items-center gap-3 text-xs text-[#B45309]">
                    <div className="flex items-center gap-1">
                      <Download className="w-3.5 h-3.5" />
                      <span>{(resource.downloads / 1000).toFixed(1)}K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                      <span>{resource.rating}</span>
                    </div>
                    <span>{resource.fileSize}</span>
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-[#D97706] bg-transparent border border-[#4A2424] rounded-lg group-hover:bg-[#4A2424] group-hover:text-[#D97706] group-hover:border-[#6A3434] transition-all">
                    Learn More
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-8 sm:hidden flex justify-center">
          <button className="w-full px-6 py-3 text-sm font-medium text-[#D97706] bg-[#2A1414] border border-[#4A2424] rounded-lg hover:bg-[#4A2424] transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
