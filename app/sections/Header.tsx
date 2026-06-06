"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Compass, Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS = [
    { label: 'Home', href: '/' },
    { label: 'Gear', href: '/#resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140A0A]/90 backdrop-blur-xl border-b border-[#6A3434]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B45309] to-[#D97706] flex items-center justify-center">
            <Compass className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-[#FEF3C7] group-hover:text-[#D97706] transition-colors">
            Outdoor Picks
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-[#D97706] hover:text-[#FEF3C7] rounded-lg hover:bg-[#4A2424] transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-4 py-2 text-sm text-[#D97706] hover:text-[#FEF3C7] rounded-lg hover:bg-[#4A2424] transition-all"
          >
            <Search className="w-4 h-4" />
            Search
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#D97706] hover:text-[#FEF3C7]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#140A0A]/95 backdrop-blur-xl border-b border-[#6A3434]"
        >
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-[#D97706] hover:text-[#FEF3C7] hover:bg-[#4A2424] rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
