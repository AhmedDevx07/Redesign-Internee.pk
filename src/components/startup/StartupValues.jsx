import React from "react";

export default function StartupValues() {
  // Values metadata array mapping
  const valuesList = [
    {
      title: "Mission-Driven",
      description:
        "Every decision is guided by our commitment to empower youth through real-world experience and skill development.",
      badge: "Impact First",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Community First",
      description:
        "We believe in building strong networks of mentors, partners, and students who support each other's success.",
      badge: "Collaboration",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-1.03m7.608-11.08l.707-1.03M12 3v1.5m0 15V21m4.514-17.785l-1.15.827M6.337 12.242l-1.15.827m14.094 5.13l-1.41.513M3.906 8.923l1.41.513M9.14 2.73l-.707 1.03m7.608 11.08l-.707 1.03"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We continuously push boundaries, adopting new technologies and methodologies to stay ahead in tech education.",
      badge: "Forward-Thinking",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      ),
    },
    {
      title: "Growth Focused",
      description:
        "Measurable impact is our commitment. We track outcomes, improve continuously, and showcase real results.",
      badge: "Excellence",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      {/* Background ambient decorative light source */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mx-auto w-fit">
            🍃 What Drives Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Principles that guide every decision and action we take
          </p>
        </div>

        {/* 4-COLUMN CARDS GRID MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((val, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-zinc-900/40 border border-zinc-200/70 dark:border-zinc-800/80 rounded-[2rem] flex flex-col items-center text-center justify-between space-y-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top Layout Stack */}
              <div className="space-y-5 flex flex-col items-center">
                {/* Modern Soft Square Rounded Icon Wrapper */}
                <div className="w-14 h-14 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-emerald-500/20">
                  {val.icon}
                </div>

                {/* Content Title & Subdescription */}
                <div className="space-y-2.5">
                  <h3 className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </div>

              {/* Dynamic Bottom Tag Pill */}
              <span className="inline-block px-3 py-1 bg-emerald-500/10 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 rounded-full tracking-wide">
                {val.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
