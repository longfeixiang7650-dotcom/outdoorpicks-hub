import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Mountain, RefreshCw, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Outdoor Picks",
  description:
    "Outdoor Picks is an independent directory of outdoor gear, camping equipment, and hiking essentials. We curate and review the best gear for outdoor enthusiasts.",
};

const VALUES = [
  {
    icon: Compass,
    title: "Curated Excellence",
    desc: "Every piece of gear on our platform is hand-picked based on quality, durability, and real-world performance — not sponsorship or paid placement.",
  },
  {
    icon: Mountain,
    title: "Practical Discovery",
    desc: "We organize gear by category, activity, and use case so you can quickly find the right tent, backpack, or hiking boot for your specific adventure.",
  },
  {
    icon: RefreshCw,
    title: "Fresh & Up-to-Date",
    desc: "The outdoor gear market evolves constantly. We continuously monitor new releases, updates, and community favorites to keep our catalog current.",
  },
  {
    icon: Globe,
    title: "Community-Driven",
    desc: "Our recommendations are informed by real user reviews, outdoor community feedback, and expert testing — not by advertising dollars.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D97706] bg-[#4A2424] px-3 py-1.5 rounded-md mb-4">
            About
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#FEF3C7] tracking-tight mb-6">
            Your Guide to{" "}
            <span className="text-gradient">Outdoor Gear</span>
          </h1>
          <p className="text-lg text-[#D97706] leading-relaxed max-w-2xl mx-auto">
            Outdoor Picks is an independent directory that helps adventurers,
            campers, and hikers discover, evaluate, and choose the best
            outdoor gear and equipment from across the web.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6">What We Do</h2>
          <div className="space-y-4 text-[#D97706] leading-relaxed">
            <p>
              Outdoor Picks was created to solve a growing problem: the outdoor
              gear market is expanding faster than anyone can track. New products
              are released daily, brands spring up overnight, and finding quality
              gear has become a challenge of its own.
            </p>
            <p>
              We catalog and organize outdoor gear across dozens of categories —
              including camping, hiking, climbing, backpacking, travel accessories,
              weather gear, navigation tools, and survival equipment. Each gear
              page includes a clear description, relevant links, category tags,
              and community context to help you decide what is worth your money.
            </p>
            <p>
              Our data is compiled from public sources including manufacturer
              documentation, professional reviews, official websites, and
              community discussions. We do not claim to have tested every
              product personally — instead, we synthesize the best available
              public information to help you make informed choices.
            </p>
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#FEF3C7] mb-8 text-center">
            How We Curate Gear
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#2A1414] border border-[#4A2424] rounded-xl p-6 card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#4A2424] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#FEF3C7] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#D97706] leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Update Frequency */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6">Update Frequency</h2>
          <div className="space-y-4 text-[#D97706] leading-relaxed">
            <p>
              We strive to keep Outdoor Picks as current as the field it covers.
              Our team monitors new releases and updates on a daily basis. Blog
              articles and new gear listings are published multiple times per
              week. Existing gear pages are reviewed and refreshed at least
              monthly to ensure links remain active and descriptions stay accurate.
            </p>
            <p>
              If you notice a broken link or outdated information, please let us
              know through our contact page. Community contributions help keep
              this resource reliable for everyone.
            </p>
          </div>
        </div>

        {/* Operation */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#FEF3C7] mb-6">How We Operate</h2>
          <div className="space-y-4 text-[#D97706] leading-relaxed">
            <p>
              Outdoor Picks is operated independently. We are not owned by or
              affiliated with any gear manufacturer, retailer, or outdoor brand.
              Our mission is simple: help people find the right gear without the noise.
            </p>
            <p>
              The site is supported through affiliate partnerships and
              advertising via Google AdSense. These revenue streams allow us to
              keep the platform free for all users. Sponsored content, if any,
              is always clearly labeled. Our curation decisions remain independent
              of commercial relationships.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#2A1414] border border-[#4A2424] rounded-xl p-10">
          <h2 className="text-2xl font-bold text-[#FEF3C7] mb-4">
            Have feedback or a suggestion?
          </h2>
          <p className="text-[#D97706] mb-6 max-w-lg mx-auto">
            We are always improving. If you know of a great outdoor gear we
            should add, or notice something that needs updating, let us know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#B45309] hover:bg-[#92400E] text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@outdoorpicks.com"
              className="px-6 py-3 border border-[#4A2424] hover:border-[#6A3434] text-[#D97706] hover:text-[#FEF3C7] font-medium rounded-lg transition-all"
            >
              info@outdoorpicks.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
