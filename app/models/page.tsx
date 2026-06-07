"use client";

import Link from "next/link";
import { ArrowLeft, Star, HardDrive, BookOpen, Package, Download } from "lucide-react";
import { ALL_RESOURCES, ALL_STYLES, RESOURCES_BY_STYLE } from "@/data/resources";
import { useState, useMemo } from "react";

export default function ModelsPage() {
  const [activeStyle, setActiveStyle] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeStyle) return ALL_RESOURCES;
    return RESOURCES_BY_STYLE[activeStyle] || [];
  }, [activeStyle]);

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <Link href="/" className="inline-flex items-center text-[#D97706] hover:text-[#B45309] transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
        </Link>

        <h1 className="text-3xl font-bold text-[#FEF3C7] mb-2">Gear & Equipment Library</h1>
        <p className="text-[#D97706] mb-8">Curated outdoor gear collection, all with detailed reviews.</p>

        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <button onClick={() => setActiveStyle(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              !activeStyle ? "bg-[#B45309] text-white" : "bg-[#4A2424] border border-[#6A3434] text-[#D97706] hover:border-[#B45309]"
            }`}>All ({ALL_RESOURCES.length})</button>
          {ALL_STYLES.map(s => (
            <button key={s} onClick={() => setActiveStyle(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeStyle === s ? "bg-[#B45309] text-white" : "bg-[#4A2424] border border-[#6A3434] text-[#D97706] hover:border-[#B45309]"
              }`}>{s} ({RESOURCES_BY_STYLE[s]?.length || 0})</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filtered.map((r) => (
            <Link key={r.id} href={`/models/${r.id}`}
              className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-5 card-hover flex flex-col group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#B45309]/20 text-[#D97706]">{r.category || r.style}</span>
              </div>
              <h3 className="text-lg font-bold text-[#FEF3C7] mb-2 group-hover:text-[#D97706] transition-colors">{r.name}</h3>
              <p className="text-sm text-[#D97706] mb-4 flex-grow line-clamp-2">{r.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs text-[#D97706] bg-[#4A2424] px-2 py-0.5 rounded-md">{r.category}</span>
                <span className="text-xs text-[#D97706] bg-[#4A2424] px-2 py-0.5 rounded-md">{r.version}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#4A2424] text-xs text-[#B45309]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><HardDrive className="w-3.5 h-3.5" />{r.fileSize}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" />{r.fileType}</span>
                </div>
                <span className="flex items-center gap-1 px-3 py-1.5 bg-[#B45309] hover:bg-[#92400E] text-white rounded-lg transition-colors text-xs font-medium">
                  <Download className="w-3 h-3" /> View Details
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
