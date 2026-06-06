"use client";
import { Compass } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#6A3434] bg-[#140A0A]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B45309] to-[#D97706] flex items-center justify-center">
                <Compass className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-[#FEF3C7]">Outdoor Picks</span>
            </Link>
            <p className="text-sm text-[#D97706] leading-relaxed mb-6">
              The most comprehensive collection of outdoor gear reviews and recommendations. Camping, hiking, travel essentials curated for adventurers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              title: "Categories",
              links: [
                { name: 'Camping', href: '/' },
                { name: 'Hiking', href: '/' },
                { name: 'Travel', href: '/' },
                { name: 'Climbing', href: '/' },
              ]
            }, {
              title: "Company",
              links: [
                { name: 'About', href: '/about' },
                { name: 'Blog', href: '/blog' },
              ]
            }, {
              title: "Legal",
              links: [
                { name: 'Privacy', href: '/privacy' },
                { name: 'Terms', href: '/terms' },
                { name: 'Affiliate Disclosure', href: '/disclosure' },
              ]
            }].map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold text-[#FEF3C7] mb-4">{section.title}</h4>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-[#D97706] hover:text-[#B45309] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-[#6A3434] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#B45309]">
            &copy; {new Date().getFullYear()} Outdoor Picks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
