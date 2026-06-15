import React from "react";

export default function WhyChooseGrad() {
  const features = [
    {
      title: "Career-Focused Curriculum",
      description:
        "Programs aligned with current industry demands and hiring requirements",
      // Target/Bullseye Icon
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14zm0 3a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      ),
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from professionals working at top tech companies worldwide",
      // Users/Mentors Icon
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
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
    {
      title: "Job Placement Support",
      description:
        "Direct connections with hiring partners and job interview prep",
      // Trending Up/Growth Icon
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
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      ),
    },
    {
      title: "Verified Certificates",
      description: "Industry-recognized credentials that boost your resume",
      // Ribbon/Badge Icon
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
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0V4.625A2.375 2.375 0 0014.25 2.25h-4.5A2.375 2.375 0 007.375 4.625v14.125"
          />
        </svg>
      ),
    },
    {
      title: "Flexible Scheduling",
      description: "Learn at your own pace with live and recorded sessions",
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
      title: "Real Projects",
      description: "Work on actual client projects and build portfolio pieces",
      // Lightning Bolt Icon
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
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Why Choose Our Graduate Programs?
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Designed by industry experts for modern graduates seeking
            accelerated career growth.
          </p>
        </div>

        {/* 3x2 RESPONSIVE FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md dark:hover:border-zinc-700/60 transition-all duration-250 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Wrapper Badge */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:bg-emerald-600">
                  <div className="group-hover:text-white transition-colors duration-200">
                    {item.icon}
                  </div>
                </div>

                {/* Text Metadata */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.description}
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
