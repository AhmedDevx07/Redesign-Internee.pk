import React, { useState } from "react";

export default function BlogsDashboard() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Tech & AI",
    "Web Development",
    "Career Guidance",
    "Internship Tips",
  ];

  const blogsFeed = [
    {
      title: "How to Build a Powerful Portfolio for Remote Tech Jobs",
      category: "Career Guidance",
      date: "June 12, 2026",
      readTime: "5 min read",
      author: "Ahmed Devx",
      desc: "A step-by-step guide on structuring your GitHub profiles, personal websites, and choosing SaaS-grade design styles to catch the eye of global recruiters.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Mastering React & Next.js Performance Optimization",
      category: "Web Development",
      date: "June 08, 2026",
      readTime: "8 min read",
      author: "Tech Team",
      desc: "Deep dive into code splitting, image optimization matrices, component memorization hacks, and preventing layout shifts in highly interactive web systems.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "The Rise of Voice-to-Text AI Modules in Modern Productivity Apps",
      category: "Tech & AI",
      date: "May 28, 2026",
      readTime: "6 min read",
      author: "Internee Staff",
      desc: "An analytical breakdown of how voice integration transforms accessibility in modern software like sticky notes applications and real-time dashboard feeds.",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Why Continuous Integration (CI/CD) Matrix Testing is Essential",
      category: "Web Development",
      date: "May 20, 2026",
      readTime: "7 min read",
      author: "DevOps Desk",
      desc: "Learn why testing software configurations across multiple Node.js runtime environments simultaneously via automation pipelines saves production from catastrophic crashes.",
      image:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "How to Make the Most Out of Your Virtual Internship Journey",
      category: "Internship Tips",
      date: "May 15, 2026",
      readTime: "4 min read",
      author: "Career Coach",
      desc: "A blueprint for tech students seeking to manage tight project deadlines, structure technical task logs, and clear standard portal milestones efficiently.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Filtering dynamic logic
  const filteredBlogs =
    activeCategory === "All"
      ? blogsFeed
      : blogsFeed.filter((blog) => blog.category === activeCategory);

  return (
    <section className="pt-24 pb-12 p-4 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50 space-y-8">
      {/* 1. HERO HEADER AREA */}
      <br />
      <br />
      <br />
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
          Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          Insights, News & Tech Tutorials
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
          Stay updated with high-quality web engineering write-ups, career
          design roadmaps, and latest ecosystem announcements.
        </p>
      </div>

      {/* 2. CATEGORIES FILTER SYSTEM PILLS */}
      <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto border-b border-zinc-200/60 dark:border-zinc-800/80 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-800/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. BLOG FEED TILES MATRIX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredBlogs.map((blog, idx) => (
          <article
            key={idx}
            className="group bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Cover Image Deck */}
              <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-md tracking-wide uppercase">
                  {blog.category}
                </span>
              </div>

              {/* Text Narrative Information */}
              <div className="px-5 space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-bold">
                  <span>📅 {blog.date}</span>
                  <span>•</span>
                  <span>⏱️ {blog.readTime}</span>
                </div>

                <h3 className="text-base font-black tracking-tight text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed font-normal">
                  {blog.desc}
                </p>
              </div>
            </div>

            {/* Footer Interactive Segment */}
            <div className="p-5 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black flex items-center justify-center border border-emerald-500/20">
                  {blog.author[0]}
                </div>
                <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-300">
                  {blog.author}
                </span>
              </div>

              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                Read Article <span className="text-[10px]">➔</span>
              </span>
            </div>
          </article>
        ))}

        {filteredBlogs.length === 0 && (
          <div className="col-span-full text-center py-12 text-xs text-zinc-400 font-medium italic">
            No articles published under this category yet. Stay tuned!
          </div>
        )}
      </div>
    </section>
  );
}
