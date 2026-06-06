"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  XCircle,
  Sparkles,
  TrendingUp,
  Users,
  Layers,
  Zap,
  Tag,
  DollarSign,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { TOOL_MAP, ALL_TOOLS } from "@/data/tools";

const ACCENT = "#B45309";
const ACCENT_HOVER = "#92400E";

export default function ToolDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tool = TOOL_MAP.get(slug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-[#140A0A] relative pt-32 px-6 text-center">
        <h1 className="text-3xl font-bold text-[#FEF3C7] mb-4">
          Tool Not Found
        </h1>
        <p className="text-[#D97706] mb-8 max-w-md mx-auto">
          The gear item you are looking for does not exist or has been removed from
          our directory.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-[#D97706] hover:text-[#B45309] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
        </Link>
      </div>
    );
  }

  const IconComponent = tool.icon;

  // Related tools — same category excluding current
  const relatedTools = ALL_TOOLS.filter(
    (t) => t.category === tool.category && t.id !== tool.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#140A0A]">
      <div className="relative pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* ========== Back Link ========== */}
          <Link
            href="/"
            className="inline-flex items-center text-[#D97706] hover:text-[#B45309] transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
          </Link>

          {/* ========== Header ========== */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[#4A2424] border border-[#6A3434] flex items-center justify-center">
                <IconComponent className="w-7 h-7 text-[#D97706]" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 bg-[#4A2424] text-[#D97706] text-xs font-bold rounded-full border border-[#6A3434]">
                    {tool.category}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider border ${
                      tool.pricing === "Free"
                        ? "bg-green-900/30 text-green-400 border-green-800/30"
                        : tool.pricing === "Paid"
                          ? "bg-amber-900/30 text-amber-400 border-amber-800/30"
                          : "bg-blue-900/30 text-blue-400 border-blue-800/30"
                    }`}
                  >
                    {tool.pricing}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-[#4A2424] text-[#D97706] text-xs font-bold rounded-full border border-[#6A3434]">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    {tool.rating}
                    <span className="text-[#B45309] font-normal">
                      ({tool.reviewCount.toLocaleString()})
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#FEF3C7] mb-4 tracking-tight">
              {tool.name}
            </h1>
            <p className="text-lg md:text-xl text-[#D97706] leading-relaxed">
              {tool.longDescription}
            </p>
          </header>

          {/* ========== AdSense Placeholder ========== */}
          <div className="mb-10">
            <div className="bg-[#2A1414] border border-dashed border-[#4A2424] rounded-xl p-6 text-center">
              <p className="text-xs text-[#B45309] uppercase tracking-wider mb-1">
                — Advertisement —
              </p>
              <p className="text-sm text-[#6A3434]">
                Google AdSense Ad Unit (Responsive)
              </p>
            </div>
          </div>

          {/* ========== Quick Stats ========== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-4">
              <DollarSign className="w-5 h-5 text-[#D97706] mb-2" />
              <p className="text-xs text-[#B45309] uppercase tracking-wider mb-1">
                Pricing
              </p>
              <p className="text-sm font-bold text-[#FEF3C7]">
                {tool.pricing}
              </p>
            </div>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-4">
              <Star className="w-5 h-5 text-[#D97706] mb-2" />
              <p className="text-xs text-[#B45309] uppercase tracking-wider mb-1">
                Rating
              </p>
              <p className="text-sm font-bold text-[#FEF3C7]">
                {tool.rating} / 5
              </p>
            </div>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-4">
              <Users className="w-5 h-5 text-[#D97706] mb-2" />
              <p className="text-xs text-[#B45309] uppercase tracking-wider mb-1">
                Reviews
              </p>
              <p className="text-sm font-bold text-[#FEF3C7]">
                {tool.reviewCount.toLocaleString()}
              </p>
            </div>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-4">
              <Tag className="w-5 h-5 text-[#D97706] mb-2" />
              <p className="text-xs text-[#B45309] uppercase tracking-wider mb-1">
                Category
              </p>
              <p className="text-sm font-bold text-[#FEF3C7] truncate">
                {tool.category}
              </p>
            </div>
          </div>

          {/* ========== Score Breakdown ========== */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#D97706]" />
              Performance Score
            </h2>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Features", value: tool.scoreBreakdown.features },
                  { label: "Reviews", value: tool.scoreBreakdown.reviews },
                  { label: "Momentum", value: tool.scoreBreakdown.momentum },
                  {
                    label: "Popularity",
                    value: tool.scoreBreakdown.popularity,
                  },
                ].map((score) => (
                  <div key={score.label} className="text-center">
                    <p className="text-3xl font-extrabold text-[#D97706]">
                      {score.value}
                    </p>
                    <p className="text-xs text-[#B45309] uppercase tracking-wider mt-1">
                      {score.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ========== Pros & Cons ========== */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6">
              <h3 className="font-bold text-green-400 mb-4 flex items-center text-base">
                <ThumbsUp className="w-5 h-5 mr-2" /> Pros
              </h3>
              <ul className="space-y-3">
                {tool.pros.map((pro, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-[#D97706]"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6">
              <h3 className="font-bold text-red-400 mb-4 flex items-center text-base">
                <ThumbsDown className="w-5 h-5 mr-2" /> Cons
              </h3>
              <ul className="space-y-3">
                {tool.cons.map((con, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-[#D97706]"
                  >
                    <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ========== Pricing Detail ========== */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-[#D97706]" />
              Pricing
            </h2>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6">
              <p className="text-sm text-[#D97706] leading-relaxed">
                {tool.pricingDetail}
              </p>
            </div>
          </div>

          {/* ========== Features ========== */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#D97706]" />
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {tool.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-[#2A1414] border border-[#4A2424] rounded-lg px-4 py-3 text-sm text-[#D97706] hover:text-[#FEF3C7] hover:border-[#6A3434] transition-all flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* ========== AdSense Placeholder 2 ========== */}
          <div className="mb-10">
            <div className="bg-[#2A1414] border border-dashed border-[#4A2424] rounded-xl p-6 text-center">
              <p className="text-xs text-[#B45309] uppercase tracking-wider mb-1">
                — Advertisement —
              </p>
              <p className="text-sm text-[#6A3434]">
                Google AdSense Ad Unit (Responsive)
              </p>
            </div>
          </div>

          {/* ========== Use Case ========== */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#D97706]" />
              Use Case
            </h2>
            <div className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6">
              <p className="text-sm text-[#D97706] leading-relaxed">
                {tool.useCase}
              </p>
            </div>
          </div>

          {/* ========== Alternatives ========== */}
          {tool.alternatives.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#D97706]" />
                Alternatives
              </h2>
              <div className="flex flex-wrap gap-3">
                {tool.alternatives.map((alt, i) => {
                  const altTool = TOOL_MAP.get(alt);
                  return altTool ? (
                    <Link
                      key={alt}
                      href={`/tools/${alt}`}
                      className="px-4 py-2 bg-[#4A2424] border border-[#6A3434] rounded-full text-sm text-[#D97706] hover:text-[#FEF3C7] hover:border-[#6A3434] transition-all"
                    >
                      {altTool.name}
                    </Link>
                  ) : (
                    <span
                      key={alt}
                      className="px-4 py-2 bg-[#4A2424] border border-[#6A3434] rounded-full text-sm text-[#B45309]"
                    >
                      {alt}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========== Related Tools ========== */}
          {relatedTools.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#D97706]" />
                More in {tool.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedTools.map((rt) => {
                  const RelIcon = rt.icon;
                  return (
                    <Link
                      key={rt.id}
                      href={`/tools/${rt.id}`}
                      className="group bg-[#2A1414] border border-[#4A2424] rounded-xl p-5 hover:border-[#6A3434] transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4A2424] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <RelIcon className="w-5 h-5 text-[#D97706]" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-[#FEF3C7] group-hover:text-[#D97706] transition-colors">
                            {rt.name}
                          </h3>
                          <p className="text-xs text-[#B45309] mt-0.5 line-clamp-2">
                            {rt.description}
                          </p>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className="text-xs text-[#B45309]">
                              {rt.pricing}
                            </span>
                            <span className="text-xs text-[#B45309]">·</span>
                            <span className="text-xs text-[#B45309] flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                              {rt.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========== Footer Note ========== */}
          <div className="mt-10 text-center">
            <p className="text-xs text-[#B45309]">
              Information on this page is based on publicly available data and
              may change over time. Always verify pricing and features on the
              manufacturer's website. When you purchase through links on our site, we
              may earn an affiliate commission.{" "}
              <Link
                href="/disclosure"
                className="text-[#D97706] hover:underline"
              >
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
