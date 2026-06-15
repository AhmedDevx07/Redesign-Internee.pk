import React from "react";

export default function StartupJourneyHero() {
  // Right side colorful statistical blocks data mapping
  const featureStats = [
    {
      count: "20K+",
      label: "Students Transformed",
      sublabel: "Real careers launched",
      colorClass: "bg-emerald-600 dark:bg-emerald-600 text-white",
      icon: (
        <svg
          className="h-6 w-6 opacity-90"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.336 9.336 0 002.625-.372 3.374 3.374 0 004.704-2.83A3.077 3.077 0 0019.043 13.5m-4.043 5.628a3 3 0 01-3-3V12m3 7.128v-6A11.956 11.956 0 0012 11.75c-1.91 0-3.71.447-5.308 1.243m10.308 6.13c-2.393.404-4.854.608-7.361.608-2.507 0-4.968-.204-7.36-.608m14.722 0c.257-.068.51-.143.757-.225m-15.48.225c-.257-.068-.51-.143-.757-.225m15.48-.225V13.5m-15.48 5.625V13.5m15.48 5.625a3.3 3.3 0 00.58-1.543 3.76 3.76 0 00-3.072-3.75M3.75 19.128a3.3 3.3 0 01-.58-1.543 3.76 3.76 0 013.072-3.75M21 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM5.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM15.75 6a3.75 3.75 0 11-7 0 3.75 3.75 0 017 0z"
          />
        </svg>
      ),
    },
    {
      count: "200+",
      label: "Industry Partners",
      sublabel: "Leading companies",
      colorClass: "bg-blue-600 dark:bg-blue-600 text-white",
      icon: (
        <svg
          className="h-6 w-6 opacity-90"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a14.964 14.964 0 003.5-9 14.964 14.964 0 00-3.5-9m0 18a14.964 14.964 0 01-3.5-9 14.964 14.964 0 013.5-9M3.75 9h16.5m-16.5 6h16.5"
          />
        </svg>
      ),
    },
    {
      count: "98%",
      label: "Success Rate",
      sublabel: "Jobs or internships",
      colorClass: "bg-purple-600 dark:bg-purple-600 text-white",
      icon: (
        <svg
          className="h-6 w-6 opacity-90"
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
    {
      count: "4+",
      label: "Major Awards",
      sublabel: "National Recognition",
      colorClass: "bg-orange-600 dark:bg-orange-600 text-white",
      icon: (
        <svg
          className="h-6 w-6 opacity-90"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0V4.625A2.375 2.375 0 0014.25 2.25h-4.5A2.375 2.375 0 007.375 4.625v14.125"
          />
        </svg>
      ),
    },
  ];

  // Bottom text counter metrics row data array
  const footerCounters = [
    { number: "2", label: "Years Active" },
    { number: "200+", label: "Companies" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      {/* Absolute subtle background gradient light flare overlay */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: HERO HEADERS & ACTION TRIGGERS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Split Colored Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Our Journey to <br />
              Impact &{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Excellence
              </span>
            </h1>

            {/* Strategic Subtitle Statement */}
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-normal">
              From launch in 2023 to South Asia's leading virtual internship
              platform. We've transformed 20,000+ careers and partnered with
              200+ companies in just 2 years. This is our story.
            </p>

            {/* Button Layout Links */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md transition-all active:scale-95">
                Explore Programs
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.922 14.922 0 01-5.96 5.96m0 0A14.923 14.923 0 013.71 14.37a14.98 14.98 0 0112.12-6.16m-5.96 5.96L3.75 20.25"
                  />
                </svg>
              </button>
              <button className="px-6 py-3.5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold rounded-xl text-sm shadow-sm transition-all">
                Join Community
              </button>
            </div>

            {/* Verification Check Row Items */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-emerald-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                20,000+ Students
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-emerald-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                4 Major Awards
              </div>
            </div>

            <div className="w-full h-px bg-zinc-100 dark:bg-zinc-900 pt-2" />

            {/* Bottom Meta Inline Micro-Counters */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {footerCounters.map((countObj, cIdx) => (
                <div key={cIdx} className="space-y-1 text-left">
                  <span className="block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                    {countObj.number}
                  </span>
                  <span className="block text-xs font-bold text-zinc-400 dark:text-zinc-500">
                    {countObj.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 SOLID STAT GRID MATRIX BOXES */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {featureStats.map((feat, fIdx) => (
              <div
                key={fIdx}
                className={`p-6 sm:p-7 rounded-3xl ${feat.colorClass} flex flex-col justify-between space-y-12 relative overflow-hidden group hover:-translate-y-1 duration-300 shadow-md`}
              >
                {/* Embedded decorative smooth corner ambient circle overlay inside stat blocks */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full pointer-events-none transition-transform group-hover:scale-125" />

                {/* Top Section Icon wrapper */}
                <div className="w-fit">{feat.icon}</div>

                {/* Bottom Core Metrics Stack Labels */}
                <div className="space-y-1 text-left">
                  <div className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
                    {feat.count}
                  </div>
                  <div className="text-sm font-black tracking-tight leading-snug">
                    {feat.label}
                  </div>
                  <div className="text-[11px] font-medium opacity-80">
                    {feat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
