import React from "react";

export default function StudentAmbassadorHero() {
  // Dynamic stats grid data mapping
  const communityStats = [
    { label: "Events", count: "34" },
    { label: "Leads", count: "120+" },
    { label: "Campus Reach", count: "8.4k" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      {/* Premium background soft glow effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: CALL TO ACTION & COPY HOOK */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Identifier Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-xs font-bold text-zinc-600 dark:text-zinc-400 w-fit">
              Student Ambassadors
            </div>

            {/* Main Header Display */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Internee.pk Student <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                Ambassadors
              </span>
            </h1>

            {/* Program Statement Subtext */}
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-normal">
              Join our global community of students who build real projects,
              grow leadership skills, and represent Internee.pk on campus.
            </p>

            {/* Interaction Buttons Layout */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md shadow-emerald-500/10 active:scale-95 transition-all">
                Get Started
                {/* Arrow Right SVG */}
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button className="px-6 py-3.5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400 font-bold rounded-xl text-sm shadow-sm transition-all">
                View Community
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE HUB METRICS SPLIT CARD PANEL */}
          <div className="lg:col-span-5 space-y-5">
            {/* Top Stat Matrix Card (Community Pulse) */}
            <div className="p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 rounded-3xl space-y-6">
              {/* Header inside card layout */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    {/* User Group SVG */}
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
                        d="M15 19.128a9.336 9.336 0 002.625-.372 3.374 3.374 0 004.704-2.83A3.077 3.077 0 0019.043 13.5m-4.043 5.628a3 3 0 01-3-3V12m3 7.128v-6A11.956 11.956 0 0012 11.75c-1.91 0-3.71.447-5.308 1.243m10.308 6.13c-2.393.404-4.854.608-7.361.608-2.507 0-4.968-.204-7.36-.608m14.722 0c.257-.068.51-.143.757-.225m-15.48.225c-.257-.068-.51-.143-.757-.225m15.48-.225V13.5m-15.48 5.625V13.5m15.48 5.625a3.3 3.3 0 00.58-1.543 3.76 3.76 0 00-3.072-3.75M3.75 19.128a3.3 3.3 0 01-.58-1.543 3.76 3.76 0 013.072-3.75M21 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM5.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM15.75 6a3.75 3.75 0 11-7 0 3.75 3.75 0 017 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">
                      Ambassador Hub
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white">
                      Community Pulse
                    </h3>
                  </div>
                </div>

                {/* Interval Pill Label */}
                <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 px-2.5 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm">
                  Weekly
                </span>
              </div>

              {/* Data metric columns array mapping */}
              <div className="grid grid-cols-3 gap-3">
                {communityStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 rounded-2xl text-center"
                  >
                    <span className="block text-base sm:text-lg font-black text-zinc-900 dark:text-white">
                      {stat.count}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 tracking-tight block mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Panel (Build Your Impact Layer) */}
            <div className="p-6 sm:p-8 bg-zinc-950 border border-zinc-800 rounded-3xl space-y-5 relative overflow-hidden group text-left">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-0.5">
                    Leadership Track
                  </span>
                  <h3 className="text-lg font-extrabold text-white">
                    Build Your Impact
                  </h3>
                </div>
                {/* Sparkle local indicator */}
                <svg
                  className="text-emerald-400 h-4 w-4 mt-1 opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" />
                </svg>
              </div>

              {/* Real-time Dynamic Progress Metrics Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Progress Bar Item 1 */}
                <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-2 text-zinc-300">
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
                        d="M4.26 10.174L10.72 14.175a3.745 3.745 0 003.56 0l6.46-4.001m-16.48 0A3.73 3.73 0 003 12.75v4.347c0 .907.492 1.742 1.28 2.18l6.47 3.6c.77.428 1.69.428 2.46 0l6.47-3.6c.788-.438 1.28-1.273 1.28-2.18v-4.347a3.73 3.73 0 00-1.28-2.576m-16.47 0l6.47-4.001a3.745 3.745 0 013.56 0l6.47 4.001M12 21.75V12"
                      />
                    </svg>
                    <span className="text-xs font-bold">Skill Growth</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-1.5 rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Progress Bar Item 2 */}
                <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2.5">
                  <div className="flex items-center gap-2 text-zinc-300">
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
                        d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0V4.625A2.375 2.375 0 0014.25 2.25h-4.5A2.375 2.375 0 007.375 4.625v14.125"
                      />
                    </svg>
                    <span className="text-xs font-bold">Recognition</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-emerald-500 h-1.5 rounded-full w-[45%]" />
                  </div>
                </div>
              </div>

              {/* Footer Meta Data Labels Inside Panel */}
              <div className="flex items-center justify-between pt-1 border-t border-zinc-900 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                <span>Verified Projects</span>
                <span className="text-emerald-400">+27%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
