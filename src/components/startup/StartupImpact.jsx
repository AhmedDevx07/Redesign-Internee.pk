import React from "react";

export default function StartupImpact() {
  // Left column checklist stats data array
  const statsList = [
    "20,000+ students empowered with real-world experience",
    "200+ companies partnering with us for talent development",
    "50+ diverse skill tracks covering various tech domains",
    "98% success rate in securing internships or jobs",
    "2 years of rapid growth and excellence since 2023",
    "4 major national and international awards",
  ];

  // Right column strategic statements array
  const visionStack = [
    {
      label: "OUR MISSION",
      text: "Bridge the gap between fresh talent and industry needs through experiential learning.",
    },
    {
      label: "OUR VISION",
      text: "Become South Asia's premier platform transforming youth into industry-ready professionals.",
    },
    {
      label: "OUR PROMISE",
      text: "Every student deserves a chance to succeed. We provide the platform, mentorship, and opportunity.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/10 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT SIDE: HEADING & NUMERICAL MILESTONES */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
              Real Impact,{" "}
              <span className="text-emerald-500 dark:text-emerald-400">
                Real Results
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
              We measure our success by the careers launched, skills developed,
              and lives transformed. Every statistic represents a student who
              changed their trajectory through Internee.pk.
            </p>

            {/* CHECKLIST ITEMS */}
            <div className="space-y-3.5 pt-2">
              {statsList.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <svg
                      className="h-3.5 w-3.5"
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
                  </div>
                  <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium tracking-tight">
                    {stat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: SOFT EMBEDDED STRATEGIC PANEL */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 bg-emerald-500/5 dark:bg-zinc-900/40 border border-emerald-500/10 dark:border-zinc-800/80 rounded-[2.5rem] space-y-4 shadow-sm">
              {visionStack.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span className="block text-[10px] font-black tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                    {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
