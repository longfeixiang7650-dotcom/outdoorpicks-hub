"use client";

import { useState, useMemo } from "react";
import {
  Search, Star, ArrowRight, Layers, Image, Camera,
  Grid3X3, MapPin, Heart, Bookmark, Share2, Clock,
  Users, Download, ChevronRight, Zap, Sparkles,
  CheckCircle2, Globe, BarChart3, Tag, Filter
} from "lucide-react";
import Link from "next/link";

// ============================================================
// ============================================================

const SITE_NAME = "Outdoor Picks";
const ACCENT_COLOR = "#B45309";
const SECONDARY_COLOR = "#D97706";

import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

interface HomePageProps {
  tools?: any[];
  posts?: any[];
}

export default function HomePage(props?: HomePageProps) {
  const tools = props?.tools || ALL_TOOLS;
  const posts = props?.posts || BLOG_POSTS;
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const m = new Map<string, { count: number; avgRating: number }>();
    for (const t of tools) {
      if (!m.has(t.category)) m.set(t.category, { count: 0, avgRating: 0 });
      const s = m.get(t.category)!;
      s.count++;
      s.avgRating += t.rating;
    }
    return [...m.entries()]
      .map(([name, s]) => ({
        name,
        count: s.count,
        avgRating: Math.round((s.avgRating / s.count) * 10) / 10,
      }))
      .sort((a, b) => b.count - a.count);
  }, [tools]);

  const displayTools = useMemo(() => {
    let filtered = [...tools];
    if (selectedCategory) {
      filtered = filtered.filter(t => t.category === selectedCategory);
    }
    return filtered.sort((a: any, b: any) => b.rating - a.rating);
  }, [tools, selectedCategory]);

  const editorPicks = useMemo(
    () => [...tools].sort((a: any, b: any) => b.rating - a.rating).slice(0, 6),
    [tools]
  );

  const latestPosts = useMemo(
    () => [...posts]
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4),
    [posts]
  );

  const catColors = [
    { bg: "#1A1F30", accent: "#B45309" },
    { bg: "#1F1A30", accent: "#D97706" },
    { bg: "#1A3020", accent: "#10B981" },
    { bg: "#301A1A", accent: "#EF4444" },
    { bg: "#302A1A", accent: "#F59E0B" },
    { bg: "#1A2830", accent: "#06B6D4" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A10]">
      <section className="relative pt-24 pb-8 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A10] via-[#0F0F1A] to-[#0A0A10]" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: `radial-gradient(circle, ${ACCENT_COLOR}, ${SECONDARY_COLOR})` }} />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.slice(0, 6).map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs transition-all border"
                style={{
                  backgroundColor: selectedCategory === cat.name ? catColors[i % 6].accent + "20" : "#1A1A2A",
                  borderColor: selectedCategory === cat.name ? catColors[i % 6].accent : "#2A2A3A",
                  color: selectedCategory === cat.name ? catColors[i % 6].accent : "#9CA3AF",
                }}
              >
                {cat.name}
                <span className="text-[10px] opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Curated{" "}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: `linear-gradient(135deg, ${ACCENT_COLOR}, ${SECONDARY_COLOR})` }}>
                {SITE_NAME}
              </span>
            </h1>
            <p className="text-gray-500 mt-2 max-w-xl">
              Hand-picked outdoor gear and travel equipment, tested and reviewed by our team.
              Find what works for your next adventure.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {categories.slice(0, 6).map((cat, i) => {
              const color = catColors[i % 6];
              return (
                <Link
                  key={cat.name}
                  href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                  className="rounded-xl p-4 transition-all hover:-translate-y-0.5 group"
                  style={{ backgroundColor: color.bg }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2 transition-colors"
                    style={{ backgroundColor: `${color.accent}20` }}>
                    <Layers className="w-4 h-4" style={{ color: color.accent }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:underline">{cat.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{cat.count} items</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-400">{cat.avgRating}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======== 视图切换 ======== */}
      <section className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">
              {selectedCategory || "All Picks"}
            </h2>
            <span className="text-xs text-gray-500 bg-[#1A1A2A] px-2 py-1 rounded-lg">
              {displayTools.length} items
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A1A2A] rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-[#2A2A3A] text-white" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-[#2A2A3A] text-white" : "text-gray-500 hover:text-gray-300"}`}
            >
              <Layers className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className={viewMode === "grid"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "space-y-3"}>
            {editorPicks.map((tool, i) => (
              viewMode === "grid" ? (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="group bg-[#0F0F1A] border border-[#1E1E2E] rounded-xl overflow-hidden hover:border-[#2E2E4E] transition-all"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${catColors[i % 6].accent}20, ${catColors[(i + 3) % 6].accent}10)`
                    }}>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white/20">{tool.name.charAt(0)}</div>
                    </div>
                    {i < 2 && (
                      <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: `${ACCENT_COLOR}CC`, color: "white" }}>
                        Editor&apos;s Pick
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white group-hover:underline">{tool.name}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{tool.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs text-gray-300 font-medium">{tool.rating}</span>
                        <span className="text-xs text-gray-600">({tool.reviewCount || 0})</span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1A1A2A] text-gray-400">
                        {tool.pricing || "$"}
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="flex items-center gap-4 bg-[#0F0F1A] border border-[#1E1E2E] rounded-xl p-4 hover:border-[#2E2E4E] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-lg font-bold flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${catColors[i % 6].accent}30, ${catColors[(i + 3) % 6].accent}15)` }}>
                    {tool.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white">{tool.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{tool.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-white font-medium">{tool.rating}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Bookmark className="w-4 h-4" style={{ color: ACCENT_COLOR }} />
                Latest from {SITE_NAME}
              </h2>
              <Link href="/blog" className="text-xs flex items-center gap-1" style={{ color: ACCENT_COLOR }}>
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {latestPosts.map((post: any, i: number) => (
                <Link
                  key={post.slug || i}
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 bg-[#0F0F1A] border border-[#1E1E2E] rounded-xl p-5 hover:border-[#2E2E4E] transition-all group"
                >
                  <div className="w-1 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: catColors[i % 6].accent }} />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1A1A2A] text-gray-400">
                      {post.category || "Article"}
                    </span>
                    <h3 className="text-sm font-semibold text-white mt-2 mb-1 group-hover:underline line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-600">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime || "3 min"}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== CTA ======== */}
      <section className="px-6 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-10 text-center overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${ACCENT_COLOR}20, ${SECONDARY_COLOR}10)` }}>
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: `radial-gradient(circle at 30% 50%, ${ACCENT_COLOR}, transparent 60%)` }} />
            <div className="relative">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-3" style={{ color: ACCENT_COLOR }} />
              <h2 className="text-xl font-bold text-white mb-2">
                Find your perfect outdoor gear
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Browse our full collection of curated outdoor products and gear.
              </p>
              <Link
                href="/all-tools"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                Browse All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
