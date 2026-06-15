import React from "react";

export default function AmbassadorPerksGrid() {
  const perks = [
    {
      title: "Exclusive Stipend",
      description:
        "Earn competitive stipend based on performance and events organized.",
      // Gift/Stipend Icon
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
            d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.5v16.5m-7.5-6h15M12 4.5a3 3 0 013-3h.75a2.25 2.25 0 012.25 2.25v.75m-6-3a3 3 0 00-3 3v.75M12 4.5H9.75A2.25 2.25 0 007.5 6.75v.75"
          />
        </svg>
      ),
    },
    {
      title: "Priority Recognition",
      description:
        "Get featured on Internee.pk social media and internal platforms.",
      // Star/Badge Icon
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
            d="M11.48 3.499c.151-.312.596-.312.748 0l2.14 4.337 4.786.696c.342.05.479.472.232.716l-3.463 3.376.817 4.767c.059.343-.301.606-.607.444L12 15.356l-4.279 2.251c-.306.162-.666-.101-.607-.444l.818-4.766L4.47 9.447c-.247-.244-.11-.666.232-.716l4.787-.696 2.139-4.337z"
          />
        </svg>
      ),
    },
    {
      title: "Free Learning Resources",
      description: "Access premium courses and certifications at no cost.",
      // Book/Education Icon
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
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
    {
      title: "Startup Support",
      description: "Launch your own startup with mentorship and resources.",
      // Rocket/Growth Icon
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
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.922 14.922 0 01-5.96 5.96m0 0A14.923 14.923 0 013.71 14.37a14.98 14.98 0 0112.12-6.16m-5.96 5.96L3.75 20.25"
          />
        </svg>
      ),
    },
    {
      title: "Global Networking",
      description: "Connect with 300+ ambassadors and industry professionals.",
      // Globe/Network Icon
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
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a14.964 14.964 0 003.5-9 14.964 14.964 0 00-3.5-9m0 18a14.964 14.964 0 01-3.5-9 14.964 14.964 0 013.5-9M3.75 9h16.5m-16.5 6h16.5"
          />
        </svg>
      ),
    },
    {
      title: "Career Opportunities",
      description: "Direct pathway to internships and full-time positions.",
      // Ribbon Badge Icon
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
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CENTER ALIGNED HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Ambassador Benefits & Perks
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">
            Get exclusive rewards, recognition, and opportunities as a Student
            Ambassador.
          </p>
        </div>

        {/* 3x2 MODERN FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/80 rounded-3xl hover:shadow-lg dark:hover:border-zinc-700/60 transition-all duration-250 text-left flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon Wrapper Badge */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center transition-all group-hover:bg-emerald-500 dark:group-hover:bg-emerald-600">
                  <div className="group-hover:text-white transition-colors duration-200">
                    {perk.icon}
                  </div>
                </div>

                {/* Text Description */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {perk.description}
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
