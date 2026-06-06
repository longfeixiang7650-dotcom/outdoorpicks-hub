import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import { renderMarkdown } from "@/lib/markdown";
import { ArrowLeft, Calendar, Clock, User, Tags } from "lucide-react";
import { blogPostSchema, organizationSchema } from "@/lib/schema";

// Generate static params for all blog posts
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.slug }));
}

// Dynamic metadata per post
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata | undefined {
  const post = BLOG_POSTS.find((p) => p.slug === params.id);
  if (!post) return undefined;

  return {
    title: `${post.title} — Outdoor Picks`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.id);

  if (!post) {
    notFound();
  }

  const contentHtml = renderMarkdown(post.content);

  const blogJsonLd = blogPostSchema(
    post.title,
    post.author,
    post.date,
    'Outdoor Picks',
    post.excerpt
  );
  const orgJsonLd = organizationSchema(
    'Outdoor Picks',
    'https://outdoorpicks.com',
    'Curated outdoor gear reviews, camping equipment guides, and hiking essentials for outdoor enthusiasts.'
  );

  return (
    <div className="relative pt-28 pb-20 px-6">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgJsonLd),
        }}
      />
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-[#D97706] hover:text-[#B45309] transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#B45309]/20 text-[#B45309]">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#B45309]">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#B45309]">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#FEF3C7] mb-4 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-[#D97706] mb-4 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-2 mb-4 text-sm text-[#D97706]">
            <User className="w-4 h-4" />
            <span>
              By <strong className="text-[#FEF3C7]">{post.author}</strong>
              {post.authorRole ? ` — ${post.authorRole}` : ""}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            <Tags className="w-4 h-4 text-[#B45309] mr-1 self-center" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#B45309] bg-[#4A2424] px-2 py-0.5 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article
          className="prose-content mb-12"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Footer navigation */}
        <div className="border-t border-[#4A2424] pt-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#D97706] hover:text-[#B45309] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
