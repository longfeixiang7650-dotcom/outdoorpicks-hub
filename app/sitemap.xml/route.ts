import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blog-posts";

export async function GET() {
  const baseUrl = "https://outdoorpicks.com";
  
  const urls: string[] = [];
  
  // Static pages
  urls.push(`<url><loc>${baseUrl}</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/models</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/about</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/faq</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/terms</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  urls.push(`<url><loc>${baseUrl}/disclosure</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>`);
  
  // Blog pages — dynamically from data source
  for (const post of BLOG_POSTS) {
    urls.push(`<url><loc>${baseUrl}/blog/${post.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
  }
  
  const sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">
${urls.join("\n")}
</urlset>`;
  
  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
