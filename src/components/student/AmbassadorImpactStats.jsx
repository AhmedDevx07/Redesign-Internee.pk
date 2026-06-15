import React from "react";

export default function AmbassadorImpactStats() {
  const stats = [
    {
      value: "300+",
      label: "Active Ambassadors",
      sublabel: "Across Pakistan",
    },
    {
      value: "50+",
      label: "Campuses",
      sublabel: "Represented",
    },
    {
      value: "1000+",
      label: "Events",
      sublabel: "Organized",
    },
    {
      value: "15K+",
      label: "Students",
      sublabel: "Reached",
    },
  ];

  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-900/20 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CENTERED TITLES */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Ambassador Community Impact
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Join a thriving community making real impact
          </p>
        </div>

        {/* 4-COLUMN STATS MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all text-center flex flex-col justify-center space-y-2"
            >
              {/* Green Big Counter Value */}
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight transition-transform group-hover:scale-105 duration-200">
                {stat.value}
              </div>

              {/* Labels & Structural Hierarchy */}
              <div className="space-y-0.5">
                <div className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
