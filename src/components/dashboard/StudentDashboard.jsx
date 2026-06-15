import React from "react";

export default function StudentDashboard() {
  // 1. Top Mini-Stats Matrix
  const performanceCards = [
    {
      label: "Completion Rate",
      value: "14%",
      icon: "🟢",
      color: "text-emerald-500",
    },
    { label: "Total Badges", value: "0", icon: "🏆", color: "text-amber-500" },
    {
      label: "Interviews Done",
      value: "0",
      icon: "🔥",
      color: "text-purple-500",
    },
    { label: "Avg Rating", value: "0/5", icon: "📈", color: "text-blue-500" },
  ];

  // 2. Central Centralized Checklist Assignments Feed
  const tasksFeed = [
    {
      title: "Redesign internee.pk Website",
      status: "ASSIGNED",
      variant: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "Introduce Your self",
      status: "ASSIGNED",
      variant: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "🚀 AI-Powered Resume Analyzer",
      status: "ASSIGNED",
      variant: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "Chatbot powered by OpenAI/v1 or Gemini",
      status: "ASSIGNED",
      variant: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "Random Quote Generator 🌌",
      status: "ASSIGNED",
      variant: "bg-amber-500/10 text-amber-600 border-amber-200",
    },
    {
      title: "Notes App (Like Google Keep) 📋",
      status: "SUBMITTED",
      variant: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    },
  ];

  return (
    <section className="p-4 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50 space-y-6">
      <br />
      <br />
      <br />
      {/* HEADER SECTION: PERSONALIZED USER PLATFORM DECK */}
      <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 p-4 rounded-2xl shadow-sm">
        <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-black text-lg border border-zinc-300 dark:border-zinc-700">
          MA
        </div>
        <div>
          <div className="text-xs text-zinc-400 font-medium">
            Monday, June 15, 2026
          </div>
          <h1 className="text-xl font-black tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
            Good Afternoon, Muhammad Ahmed! 🧑‍💻
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
            🚀 Today is a great day to learn something new! 🎯
          </p>
        </div>
      </div>

      {/* 4-GRID SUMMARY STATS METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {performanceCards.map((card, i) => (
          <div
            key={i}
            className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl flex items-center justify-between shadow-sm relative group"
          >
            <div className="space-y-1">
              <span className="block text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                {card.label}
              </span>
              <span className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                {card.value}
              </span>
            </div>
            <div className="text-2xl opacity-80">{card.icon}</div>
          </div>
        ))}
      </div>

      {/* CENTRAL ANALYTICS ROW: PROGRESS CHART & MOCK PROFILE CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* PROGRESS OVERVIEW (FAKE SVG ANALYTICAL GRAPH LINE) */}
        <div className="lg:col-span-8 p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm flex flex-col justify-between min-h-[300px]">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight">
              Progress Overview
            </h3>
            <div className="flex gap-3 text-[10px] text-zinc-400 font-bold">
              <span className="flex items-center gap-1">🟢 Tasks</span>
              <span className="flex items-center gap-1">🟡 Badges</span>
              <span className="flex items-center gap-1">🔵 Interviews</span>
            </div>
          </div>

          {/* Custom SVG Line Simulation Graphic */}
          <div className="w-full h-44 relative border-b border-l border-zinc-100 dark:border-zinc-800 mt-4">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 40 Q 50 40 75 30 T 100 5"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M 0 40 L 100 40"
                fill="none"
                stroke="#6366f1"
                strokeWidth="1"
              />
            </svg>
            <div className="absolute bottom-1 left-2 text-[9px] text-zinc-400 flex justify-between w-[95%]">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* MOCK INTERVIEWS LISTER BOX */}
        <div className="lg:col-span-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-1.5">
              💬 Mock Interviews
            </h3>
            <div className="text-center py-10 space-y-1">
              <span className="block text-3xl font-black text-zinc-900 dark:text-white">
                0
              </span>
              <span className="text-xs text-zinc-400 font-medium">
                No interviews found yet.
              </span>
            </div>
          </div>
          <button className="w-full py-2 bg-zinc-950 dark:bg-zinc-800 hover:bg-zinc-900 text-white dark:text-zinc-100 text-xs font-bold rounded-xl transition-colors">
            Show All Interviews →
          </button>
        </div>
      </div>

      {/* TRACKING COLUMNS MATRIX ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* COLUMN 1: EARNED BADGES CORNER */}
        <div className="lg:col-span-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm flex flex-col justify-between min-h-[340px]">
          <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-1.5">
            🏅 Your Achievements
          </h3>
          <div className="text-center py-8 space-y-1 my-auto">
            <span className="text-2xl block">🏆</span>
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-200">
              No badges earned yet
            </span>
            <p className="text-[11px] text-zinc-400">
              Complete tasks to earn rewards.
            </p>
          </div>
          <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm">
            View All Badges
          </button>
        </div>

        {/* COLUMN 2: ASSIGNMENT TASKS INTERFACES LIST */}
        <div className="lg:col-span-4 p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm flex flex-col justify-between min-h-[340px]">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-1.5">
                📋 Tasks
              </h3>
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500">
                1 / 7
              </span>
            </div>

            {/* Embedded Sub Tasks Stream */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {tasksFeed.map((task, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800 rounded-xl flex items-center justify-between gap-2"
                >
                  <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300 truncate">
                    {task.title}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-[8px] font-black tracking-tight border rounded-md shrink-0 ${task.variant}`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-2.5 bg-zinc-950 dark:bg-zinc-800 hover:bg-zinc-900 text-white text-xs font-bold rounded-xl transition-colors mt-3">
            Open Task Portal →
          </button>
        </div>

        {/* COLUMN 3: INTERNSHIP TRACKING CORNER */}
        <div className="lg:col-span-4 space-y-4">
          {/* Active Container status block */}
          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight">
              🧭 Ongoing Internship
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-black text-zinc-900 dark:text-white">
                  React Internship
                </h4>
                <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                  📅 13 days remaining
                </span>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[10px] font-bold text-zinc-400">
                  <span>COMPLETION STATUS</span>
                  <span className="text-emerald-500">14%</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[14%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Archive Completed status block */}
          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm min-h-[110px] flex flex-col justify-between">
            <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight">
              📁 Completed Internships
            </h3>
            <div className="text-center text-[11px] text-zinc-400 font-medium italic my-auto py-2">
              No completed internships yet
            </div>
          </div>
        </div>
      </div>

      {/* RECENT LIVE LIVE FEED SUB SECTION */}
      <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight">
              ⏱️ Recent Activity
            </h3>
            <p className="text-[11px] text-zinc-400 font-normal">
              Your latest progress and achievements
            </p>
          </div>
          <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-black rounded-full tracking-wider uppercase animate-pulse">
            ● Live Feed
          </span>
        </div>

        <div className="p-3 bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-100 dark:border-zinc-800/80 rounded-xl flex items-start gap-3">
          <span className="text-base mt-0.5">✔️</span>
          <div>
            <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
              Submitted "Notes App (Like Google Keep) 📋" task
            </p>
            <span className="text-[10px] text-zinc-400 block mt-0.5">
              5 days ago
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
