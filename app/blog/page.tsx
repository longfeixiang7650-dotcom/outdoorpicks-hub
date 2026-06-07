import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { ArrowRight, Calendar, Clock, Tags } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Outdoor Picks",
  description:
    "Expert outdoor gear reviews, camping guides, hiking tips, and adventure travel advice. In-depth comparisons of the best outdoor equipment.",
};

export default function BlogListPage() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const allCategories = [...new Set(sortedPosts.map((p) => p.category))];

  return (
    <div className="relative pt-28 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FEF3C7] tracking-tight mb-4">
            Outdoor Gear Blog
          </h1>
          <p className="text-lg text-[#D97706] max-w-2xl mx-auto">
            Expert reviews, buying guides, and outdoor adventure stories to help you choose the best gear for your next trip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6 card-hover flex flex-col group transition-all hover:border-[#B45309]/50"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#B45309]/20 text-[#B45309]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#B45309]">
                  <Clock className="w-3 h-3" />
                  {post.readTime} min read
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#FEF3C7] mb-3 group-hover:text-[#D97706] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-[#D97706] mb-4 leading-relaxed flex-grow line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#B45309] bg-[#4A2424] px-2 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-[#4A2424]">
                <span className="flex items-center gap-1 text-xs text-[#B45309]">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#D97706] font-medium">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
