import React from "react";

export default function ExploreCategories() {
  const categories = [
    {
      title: "Health Care",
      tag: "Graduate Track",
      desc: "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action.",
      // Placeholder or local image reference path
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Engineering",
      tag: "Graduate Track",
      desc: "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver's seat of innovation.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Information Technology",
      tag: "Graduate Track",
      desc: "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div className="space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
              Explore All Categories
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
              Choose from diverse program tracks tailored to your interests
            </p>
          </div>

          {/* Top-Right Navigation Link */}
          <a
            href="#all-programs"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline group self-start sm:self-auto"
          >
            View All Programs
            <svg
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* 3-COLUMN CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 rounded-3xl overflow-hidden hover:shadow-lg dark:hover:border-zinc-700/60 transition-all duration-300 flex flex-col"
            >
              {/* Card Image Banner Box */}
              <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Absolute Top Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-white dark:bg-zinc-900 px-2.5 py-1 rounded-md shadow-sm border border-emerald-100 dark:border-emerald-500/10">
                    {cat.tag}
                  </span>
                </div>

                {/* Visual Bottom Fade Layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 dark:from-zinc-900/40 to-transparent pointer-events-none" />
              </div>

              {/* Card Meta Content Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
