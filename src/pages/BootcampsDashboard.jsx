import React, { useState } from "react";

export default function BootcampsDashboard() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = ["All", "Live", "Upcoming", "Self-Paced"];

  const bootcampsFeed = [
    {
      title: "Next-Gen Frontend Engineering Bootcamp",
      type: "Live",
      startDate: "July 05, 2026",
      duration: "8 Weeks",
      instructor: "Ahmed Devx & Team",
      slots: "12 Slots Left",
      badgeVariant:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      desc: "An intensive developer ecosystem sprint covering state preservation engines, production deployment matrix configurations, and advanced layout design matrices.",
      features: ["3 Core Projects", "Live Code Reviews", "Direct Slack Access"],
    },
    {
      title: "UI/UX & Minimalist Product Design Masterclass",
      type: "Upcoming",
      startDate: "August 01, 2026",
      duration: "4 Weeks",
      instructor: "Design Core Board",
      slots: "Registration Open",
      badgeVariant:
        "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      desc: "Learn to build Apple-style user interfaces with fluid interaction dynamics, dark-mode optimization, strict alignment layouts, and high-conversion landing page design structures.",
      features: [
        "Figma Workspace Sync",
        "Design Critique Loops",
        "SaaS Component Kits",
      ],
    },
    {
      title: "Automated Workflows & CI/CD Cloud DevOps",
      type: "Self-Paced",
      startDate: "Instant Access",
      duration: "6 Modules",
      instructor: "DevOps Desk Engineers",
      slots: "Pre-recorded Feed",
      badgeVariant:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      desc: "Master automated integration layers, running workflow matrix environments across node variations, automated deployments, and continuous system delivery configurations.",
      features: [
        "Hands-on YAML Guides",
        "Matrix Testing Lab Files",
        "Lifetime Updates",
      ],
    },
  ];

  // Filtering computational logic
  const filteredBootcamps =
    activeFilter === "All"
      ? bootcampsFeed
      : bootcampsFeed.filter((camp) => camp.type === activeFilter);

  return (
    <section className="pt-24 pb-12 p-4 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50 space-y-10">
      {/* 1. TOP HERO REGION CONTAINER */}
      <br />
      <br />
      <br />
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
          Accelerated Training
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          Immersive Technical Bootcamps
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
          Level up your practical skillset with high-intensity engineering
          tracks led by expert industry maintainers.
        </p>
      </div>

      {/* 2. LIVE SCHEDULE FILTERS TRACK */}
      <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto border-b border-zinc-200/60 dark:border-zinc-800/80 pb-4">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-800/80"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. BOOTCAMPS ROW CARDS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredBootcamps.map((camp, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative group"
          >
            <div className="space-y-4">
              {/* Header Badge Layer */}
              <div className="flex justify-between items-center">
                <span
                  className={`px-2.5 py-0.5 border text-[9px] font-black tracking-wider rounded uppercase ${camp.badgeVariant}`}
                >
                  ● {camp.type} Track
                </span>
                <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500">
                  ⏱️ {camp.duration}
                </span>
              </div>

              {/* Course Identity segment */}
              <div className="space-y-1.5">
                <h3 className="text-base font-black tracking-tight text-zinc-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {camp.title}
                </h3>
                <span className="block text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                  Mentor:{" "}
                  <strong className="text-zinc-700 dark:text-zinc-300 font-bold">
                    {camp.instructor}
                  </strong>
                </span>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed line-clamp-4">
                {camp.desc}
              </p>

              {/* Feature Items List Layout */}
              <div className="pt-2 space-y-1.5">
                {camp.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-[11px] font-bold text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="text-emerald-500 text-xs">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Footer Container */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 space-y-3">
              <div className="flex justify-between items-center text-[11px]">
                <div>
                  <span className="block text-[9px] uppercase tracking-wide text-zinc-400 font-bold">
                    START DATE
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 font-black">
                    {camp.startDate}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] uppercase tracking-wide text-zinc-400 font-bold">
                    AVAILABILITY
                  </span>
                  <span className="text-emerald-500 dark:text-emerald-400 font-black">
                    {camp.slots}
                  </span>
                </div>
              </div>

              <button className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-black text-xs rounded-xl transition-all shadow-sm">
                Reserve Seat Now
              </button>
            </div>
          </div>
        ))}

        {filteredBootcamps.length === 0 && (
          <div className="col-span-full text-center py-12 text-xs text-zinc-400 font-medium italic">
            No active bootcamps found matching this category filter.
          </div>
        )}
      </div>
    </section>
  );
}
