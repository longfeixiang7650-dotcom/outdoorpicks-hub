"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Tent, Map, Backpack, TreePine, Mountain, Waves, Sun } from 'lucide-react';

const CATEGORIES = [
  { label: 'Camping', icon: Tent },
  { label: 'Hiking', icon: Mountain },
  { label: 'Backpacking', icon: Backpack },
  { label: 'Climbing', icon: Map },
  { label: 'Fishing', icon: Waves },
  { label: 'Survival', icon: Compass },
  { label: 'Winter Gear', icon: Sun },
  { label: 'Travel', icon: TreePine },
];

export default function Hero() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A1414] border border-[#4A2424] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D97706] pulse-dot" />
          <span className="text-sm font-medium text-[#D97706]">500+ Outdoor Gear Items Curated</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#FEF3C7] tracking-tight leading-[1.05] mb-6 max-w-3xl"
        >
          Find the Perfect Gear for{' '}
          <span className="text-gradient" style={{ textShadow: '0 0 40px rgba(180,83,9,0.3)' }}>
            Your Next Adventure
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-[#D97706] max-w-2xl mb-10 leading-relaxed"
        >
          Compare top-rated outdoor gear. Read expert reviews, analyze features, and find the right equipment for your adventures.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className={`w-full max-w-[640px] flex items-center relative transition-all duration-300 ${
            isFocused ? 'shadow-glow-sm' : ''
          }`}
        >
          <div
            className={`w-full flex items-center rounded-full border transition-all duration-300 ${
              isFocused
                ? 'border-[#6A3434] bg-[#2A1414]'
                : 'border-[#4A2424] bg-[#1A0E0E]'
            }`}
          >
            <Search className="ml-5 w-5 h-5 text-[#B45309] flex-shrink-0" />
            <input
              type="search"
              placeholder="Search for tents, backpacks, hiking boots..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 py-4 px-3 bg-transparent text-[#FEF3C7] placeholder:text-[#B45309] outline-none text-base"
            />
            <button
              type="submit"
              className="mr-2 px-6 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white text-sm font-medium rounded-full transition-colors flex-shrink-0"
            >
              Search
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-2 max-w-2xl"
        >
          {CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: '#2A1414' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A0E0E] border border-[#4A2424] text-sm text-[#D97706] hover:text-[#FEF3C7] hover:border-[#6A3434] transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
