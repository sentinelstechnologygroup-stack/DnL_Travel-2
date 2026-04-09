import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "../components/shared/SectionLabel";
import CTAStrip from "../components/shared/CTAStrip";

const BLOG_POSTS = [
  {
    title: "European Travel: Custom Itineraries for You",
    excerpt: "Discover how a personalized European itinerary can transform your trip from ordinary to extraordinary. From hidden gems in Italy to the best time to visit Paris.",
    category: "EUROPE",
    image: "/images/blog/01.png",
    date: "Feb 2026",
  },
  {
    title: "How to Select the Right Cruise Cabin",
    excerpt: "Cabin selection can make or break your cruise experience. Learn the insider tips on locations, categories, and upgrades that most travelers miss.",
    category: "CRUISES",
    image: "/images/blog/02.png",
    date: "Feb 2026",
  },
  {
    title: "Creating Your Ultimate Bucket-List Adventure",
    excerpt: "From Machu Picchu to the Maldives — how to prioritize your dream destinations and turn your bucket list into an actionable travel plan.",
    category: "DESTINATIONS",
    image: "/images/blog/03.png",
    date: "Feb 2026",
  },
  {
    title: "Hidden Gems of the Caribbean You Can't Miss",
    excerpt: "Beyond the popular resorts lie incredible Caribbean experiences. Discover secluded beaches, local cuisine, and adventures most tourists never find.",
    category: "CARIBBEAN",
    image: "/images/blog/04.png",
    date: "Feb 2026",
  },
  {
    title: "Why All-Inclusive Packages Are Worth It",
    excerpt: "Breaking down the true value of all-inclusive resorts and why they often save you money compared to à la carte vacations.",
    category: "RESORTS",
    image: "/images/blog/05.png",
    date: "Feb 2026",
  },
  {
    title: "Top Tips for Stress-Free Travel Planning",
    excerpt: "Expert advice on how to plan your next vacation without the overwhelm — from choosing destinations to packing efficiently.",
    category: "TIPS",
    image: "/images/blog/06.png",
    date: "Feb 2026",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionLabel label="TRAVEL INSIGHTS" />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Travel <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Expert travel tips, destination guides, and insider knowledge to inspire your next adventure.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border overflow-hidden cursor-pointer">
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={BLOG_POSTS[0].image}
                alt={BLOG_POSTS[0].title}
                className="w-full h-full object-cover img-grayscale transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-[10px] tracking-[0.2em] text-primary font-semibold mb-4">
                {BLOG_POSTS[0].category} — {BLOG_POSTS[0].date}
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {BLOG_POSTS[0].excerpt}
              </p>
              <span className="text-[11px] tracking-[0.15em] text-primary uppercase flex items-center gap-2">
                READ MORE <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-background cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover img-grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="text-[10px] tracking-[0.2em] text-primary font-semibold mb-3">
                    {post.category} — {post.date}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}