import React from "react";

export default function GraduateHero() {
  // Stat counters data mapping
  const programStats = [
    { label: "Tracks", count: "20+" },
    { label: "Projects", count: "80+" },
    { label: "Mentors", count: "35+" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      {/* Soft atmospheric gradient vector element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: PRIMARY HEADERS & CALL TO ACTION MAP */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Graduate Pill Identifier Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 w-fit">
              {/* Custom Academic Cap SVG */}
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.174L10.72 14.175a3.745 3.745 0 003.56 0l6.46-4.001m-16.48 0A3.73 3.73 0 003 12.75v4.347c0 .907.492 1.742 1.28 2.18l6.47 3.6c.77.428 1.69.428 2.46 0l6.47-3.6c.788-.438 1.28-1.273 1.28-2.18v-4.347a3.73 3.73 0 00-1.28-2.576m-16.47 0l6.47-4.001a3.745 3.745 0 013.56 0l6.47 4.001M12 21.75V12"
                />
              </svg>
              Graduate Programs
            </div>

            {/* Title Space */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Graduate Programs <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                That Launch Careers
              </span>
            </h1>

            {/* Subtext Statement paragraph layout */}
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-normal">
              Explore structured, career-focused programs designed to build
              job-ready skills through real projects, mentorship, and industry
              expertise.
            </p>

            {/* Lower operational triggers CTA buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md shadow-emerald-500/10 active:scale-95 transition-all">
                Browse Programs
                {/* Clean Local Sparkle SVG */}
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" />
                </svg>
              </button>
              <button className="px-6 py-3.5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold rounded-xl text-sm shadow-sm transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: RECONFIGURED FEATURES DASHBOARD GRID */}
          <div className="lg:col-span-5 space-y-5">
            {/* Top Profile Features Layout Box */}
            <div className="p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 rounded-3xl space-y-6">
              {/* Feature indicator block line */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.174L10.72 14.175a3.745 3.745 0 003.56 0l6.46-4.001m-16.48 0A3.73 3.73 0 003 12.75v4.347c0 .907.492 1.742 1.28 2.18l6.47 3.6c.77.428 1.69.428 2.46 0l6.47-3.6c.788-.438 1.28-1.273 1.28-2.18v-4.347a3.73 3.73 0 00-1.28-2.576m-16.47 0l6.47-4.001a3.745 3.745 0 013.56 0l6.47 4.001M12 21.75V12"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">
                      Program Features
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white">
                      Comprehensive Learning
                    </h3>
                  </div>
                </div>

                {/* Duration visual label element */}
                <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 px-2.5 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm">
                  12 Weeks
                </span>
              </div>

              {/* Internal micro dashboard count matrix elements */}
              <div className="grid grid-cols-3 gap-3">
                {programStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 rounded-2xl text-center"
                  >
                    <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white">
                      {stat.count}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 tracking-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Outcome Frame (Premium Dark Board Plate) */}
            <div className="p-6 sm:p-8 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-5 relative overflow-hidden group">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-0.5">
                    Outcome Snapshot
                  </span>
                  <h3 className="text-lg font-extrabold text-white">
                    Career-Ready Portfolio
                  </h3>
                </div>
                <svg
                  className="text-emerald-400 h-4 w-4 mt-1 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" />
                </svg>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Build verified projects with feedback and present a portfolio
                recruiters trust.
              </p>

              {/* Sub-grid dynamic validation badges panels layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                  {/* Briefcase SVG */}
                  <svg
                    className="h-4 w-4 text-emerald-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 00-1.875-2.217A15.05 15.05 0 0012 11.25c-2.83 0-5.43.784-7.625 2.15a2.25 2.25 0 00-1.875 2.217m16.5 0a2.25 2.25 0 001.5-2.25v-2.25a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 001.5 2.25M9 3h6m-6 0a1.125 1.125 0 00-1.125 1.125V6.75h8.25V4.125A1.125 1.125 0 0015 3M9 3h6"
                    />
                  </svg>
                  <span className="text-xs font-bold text-zinc-300">
                    Real-World Work
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                  {/* Check Circle SVG */}
                  <svg
                    className="h-4 w-4 text-emerald-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs font-bold text-zinc-300">
                    Verified Skills
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* End right split */}
        </div>
      </div>
    </section>
  );
}
