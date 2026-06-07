import Link from "next/link";
import { notFound } from "next/navigation";
import { Star, ArrowLeft, ArrowRight, BookOpen, Layers, ChevronRight } from "lucide-react";
import { ALL_TOOLS } from "@/data/tools";
import { BLOG_POSTS } from "@/data/blog-posts";

const ALL_CATEGORIES = Array.from(new Set(ALL_TOOLS.map((t) => t.category)));

function slugify(category: string) {
  return category.toLowerCase().replace(/ & /g, "-").replace(/&/g, "-and-").replace(/\s+/g, "-");
}

function deslugify(slug: string): string | undefined {
  return ALL_CATEGORIES.find((c) => slugify(c) === slug);
}

const CATEGORY_STATS = ALL_CATEGORIES.reduce(
  (acc, cat) => {
    const tools = ALL_TOOLS.filter((t) => t.category === cat);
    const avgRating =
      tools.reduce((sum, t) => sum + t.rating, 0) / tools.length;
    acc[cat] = {
      count: tools.length,
      avgRating: Math.round(avgRating * 10) / 10,
    };
    return acc;
  },
  {} as Record<string, { count: number; avgRating: number }>
);

export function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({
    slug: slugify(cat),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) return { title: "Category Not Found" };

  const stats = CATEGORY_STATS[category];
  return {
    title: `${category} Tools & Software — Outdoor Picks`,
    description: `Browse our curated collection of ${stats.count} ${category} tools with ratings, reviews, and comparisons. Find the best ${category.toLowerCase()} solutions for your needs.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = deslugify(params.slug);
  if (!category) {
    notFound();
  }

  const tools = ALL_TOOLS.filter((t) => t.category === category);
  const stats = CATEGORY_STATS[category];
  const blogPosts = BLOG_POSTS.filter((p) => p.category === category);

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">{category}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Best {category} Tools
            </h1>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#162440] text-[#3B82F6]">
              <Layers className="w-3 h-3" />
              {stats.count} tools
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              Avg. {stats.avgRating}/5
            </span>
          </div>
        </div>

        {/* Tool Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="block p-5 rounded-xl bg-[#0B1326]/60 border border-[#1E2A45] hover:border-[#3B82F6]/40 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-white">{tool.title}</h3>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  <span className="text-yellow-500 font-medium">{tool.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 line-clamp-2">
                {tool.description || tool.shortDescription || ""}
              </p>
            </Link>
          ))}
        </div>

        {/* Related Blog Posts */}
        {blogPosts.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#3B82F6]" />
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts.slice(0, 4).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-4 rounded-xl bg-[#0B1326]/40 border border-[#1E2A45] hover:border-[#3B82F6]/40 transition-all"
                >
                  <h3 className="font-medium text-white mb-1">{post.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#3B82F6] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
