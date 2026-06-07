"use client";
import { motion } from 'framer-motion';
import { Star, ArrowRight, Compass, Tent, Map, Backpack, TreePine, Mountain, Waves } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  icon: LucideIcon;
  pricing: string;
}

const FEATURED_TOOLS: Tool[] = [
  {
    id: 'tool-1',
    name: 'TrailMaster Pro Tent',
    category: 'Camping',
    rating: 4.9,
    reviews: 128,
    description: 'Advanced 4-season tent with weatherproof construction and ultralight materials.',
    icon: Tent,
    pricing: 'From $349',
  },
  {
    id: 'tool-2',
    name: 'Summit XC Hiking Boots',
    category: 'Hiking',
    rating: 4.8,
    reviews: 342,
    description: 'End-to-end waterproof hiking boots with Vibram soles for rugged terrain.',
    icon: Mountain,
    pricing: 'From $189',
  },
  {
    id: 'tool-3',
    name: 'VenturePack 65L',
    category: 'Backpacking',
    rating: 4.7,
    reviews: 89,
    description: 'Lightweight 65-liter backpack with advanced suspension and hydration system.',
    icon: Backpack,
    pricing: 'From $259',
  },
  {
    id: 'tool-4',
    name: 'ClimbSecure Harness',
    category: 'Climbing',
    rating: 4.6,
    reviews: 215,
    description: 'Professional climbing harness with double-lock buckles and gear loops.',
    icon: Map,
    pricing: 'From $129',
  },
  {
    id: 'tool-5',
    name: 'DeepBlue Fishing Kit',
    category: 'Fishing',
    rating: 4.9,
    reviews: 512,
    description: 'Complete fishing gear set with carbon fiber rods and precision reels.',
    icon: Waves,
    pricing: 'From $199',
  },
  {
    id: 'tool-6',
    name: 'Survivor Pro Kit',
    category: 'Survival',
    rating: 4.5,
    reviews: 76,
    description: 'All-in-one survival kit with fire starter, first aid, and navigation tools.',
    icon: Compass,
    pricing: 'From $79',
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

export default function FeaturedTools() {
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
              Top-Rated Gear
            </h2>
            <p className="text-[#D97706] mt-1 text-base">
              Hand-picked outdoor equipment highly rated by adventure enthusiasts.
            </p>
          </div>
          <a
            href="#categories"
            className="hidden sm:flex items-center gap-1 text-[#D97706] hover:text-[#B45309] font-medium text-sm transition-colors"
          >
            View All Categories
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
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <motion.article
                key={tool.id}
                variants={cardVariants}
                className="group bg-[#2A1414] border border-[#4A2424] rounded-xl p-6 card-hover cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4A2424] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <div className="flex items-center gap-1 bg-[#4A2424] px-2 py-1 rounded-md border border-[#6A3434]">
                    <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                    <span className="text-sm font-semibold text-[#FEF3C7]">{tool.rating}</span>
                    <span className="text-sm text-[#B45309]">({tool.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#FEF3C7] mb-1 group-hover:text-[#D97706] transition-colors">
                  {tool.name}
                </h3>

                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D97706] bg-[#4A2424] px-2.5 py-1 rounded-md mb-3">
                  {tool.category}
                </span>

                <p className="text-sm text-[#D97706] mb-6 leading-relaxed">
                  {tool.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#4A2424]">
                  <span className="text-sm font-semibold text-[#FEF3C7]">{tool.pricing}</span>
                  <button className="px-4 py-1.5 text-xs font-medium text-[#D97706] bg-transparent border border-[#4A2424] rounded-lg group-hover:bg-[#4A2424] group-hover:text-[#D97706] group-hover:border-[#6A3434] transition-all">
                    Learn More
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-8 sm:hidden flex justify-center">
          <button className="w-full px-6 py-3 text-sm font-medium text-[#D97706] bg-[#2A1414] border border-[#4A2424] rounded-lg hover:bg-[#4A2424] transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
