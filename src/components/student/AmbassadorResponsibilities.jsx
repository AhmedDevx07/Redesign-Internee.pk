import React from "react";

export default function AmbassadorResponsibilities() {
  const campusDuties = [
    {
      title: "Organize Events",
      desc: "Host 2-3 events monthly - workshops, hackathons, talks, networking sessions",
    },
    {
      title: "Recruit Students",
      desc: "Connect with students and share Internee.pk opportunities and programs",
    },
    {
      title: "Share Updates",
      desc: "Keep campus informed about new programs and success stories",
    },
    {
      title: "Mentor Peers",
      desc: "Guide new students through programs and opportunity selection",
    },
    {
      title: "Brand Representation",
      desc: "Represent Internee.pk at college events and competitions",
    },
  ];

  const onlineDuties = [
    {
      title: "Content Creation",
      desc: "Share engaging posts, stories, and testimonials on social media",
    },
    {
      title: "Community Engagement",
      desc: "Answer questions on forums and support ambassador community",
    },
    {
      title: "Track Metrics",
      desc: "Report event attendance, engagement, and outcomes monthly",
    },
    {
      title: "Attend Training",
      desc: "Participate in monthly ambassador training and webinars",
    },
    {
      title: "Provide Feedback",
      desc: "Share insights and suggestions to help improve our programs",
    },
  ];

  const metaRequirements = [
    {
      label: "Time Required",
      detail: "8-10 hours per week (flexible)",
      // Clock Icon
      icon: (
        <svg
          className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Commitment",
      detail: "6-12 months (negotiable)",
      // Bolt Lightning Icon
      icon: (
        <svg
          className="h-5 w-5 text-amber-500 dark:text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
    {
      label: "Compensation",
      detail: "Monthly stipend + performance bonus",
      // Gift Box Icon
      icon: (
        <svg
          className="h-5 w-5 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.5v16.5m-7.5-6h15M12 4.5a3 3 0 013-3h.75a2.25 2.25 0 012.25 2.25v.75m-6-3a3 3 0 00-3 3v.75M12 4.5H9.75A2.25 2.25 0 007.5 6.75v.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION CENTERED HEADERS */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            What You'll Do As an Ambassador
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Make real impact with meaningful responsibilities and full support
            from our team
          </p>
        </div>

        {/* TWO COLUMN SPECIFICATION PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          {/* PANEL 1: ON CAMPUS (GREEN HIGHLIGHT) */}
          <div className="p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 rounded-3xl space-y-6 text-left">
            <div className="flex items-center gap-4 border-b border-zinc-200/60 dark:border-zinc-800 pb-4">
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl border border-emerald-100 dark:border-emerald-500/10">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v3H3V3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                  On Campus
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Physical presence & engagement
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {campusDuties.map((duty, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white dark:bg-zinc-900/70 border border-zinc-100 dark:border-zinc-800/60 rounded-2xl flex gap-4 items-start shadow-sm"
                >
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-emerald-500 text-white font-extrabold text-[11px] flex items-center justify-center mt-0.5 shadow-sm shadow-emerald-500/20">
                    {idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {duty.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
                      {duty.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 2: ONLINE (BLUE HIGHLIGHT) */}
          <div className="p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 rounded-3xl space-y-6 text-left">
            <div className="flex items-center gap-4 border-b border-zinc-200/60 dark:border-zinc-800 pb-4">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-100 dark:border-blue-500/10">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 6.747M12 3a9.003 9.003 0 00-8.716 6.747M3.75 9h16.5m-16.5 6h16.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                  Online
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                  Digital & community engagement
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {onlineDuties.map((duty, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white dark:bg-zinc-900/70 border border-zinc-100 dark:border-zinc-800/60 rounded-2xl flex gap-4 items-start shadow-sm"
                >
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-blue-500 text-white font-extrabold text-[11px] flex items-center justify-center mt-0.5 shadow-sm shadow-blue-500/20">
                    {idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {duty.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
                      {duty.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM METRIC RECAP FOOTER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl">
          {metaRequirements.map((req, index) => (
            <div key={index} className="flex items-center gap-4 text-left px-2">
              <div className="p-2 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-xl shadow-sm flex-shrink-0">
                {req.icon}
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-black text-zinc-800 dark:text-zinc-200 tracking-tight block">
                  {req.label}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium block">
                  {req.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
