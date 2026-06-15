import React from "react";

export default function AmbassadorBenefits() {
  const benefits = [
    {
      title: "Learn and Grow",
      description:
        "Access exclusive learning resources and certifications to build your technical skills.",
      // Academic Cap SVG
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
            d="M4.26 10.174L10.72 14.175a3.745 3.745 0 003.56 0l6.46-4.001m-16.48 0A3.73 3.73 0 003 12.75v4.347c0 .907.492 1.742 1.28 2.18l6.47 3.6c.77.428 1.69.428 2.46 0l6.47-3.6c.788-.438 1.28-1.273 1.28-2.18v-4.347a3.73 3.73 0 00-1.28-2.576m-16.47 0l6.47-4.001a3.745 3.745 0 013.56 0l6.47 4.001M12 21.75V12"
          />
        </svg>
      ),
    },
    {
      title: "Build Community",
      description:
        "Connect with fellow students and mentors from around the world.",
      // Users Group SVG
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
      title: "Create Solutions",
      description:
        "Work on real projects using cutting-edge Internee's technologies.",
      // Code Brackets SVG
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
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP HEADER BLOCK */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Why you should join
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Build skills, grow your network, and create real impact on campus.
          </p>
        </div>

        {/* 3-COLUMN RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md dark:hover:border-zinc-700/60 transition-all duration-250 flex flex-col justify-between text-left"
            >
              <div className="space-y-5">
                {/* Visual Icon Outer Box */}
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center transition-colors group-hover:bg-emerald-500 dark:group-hover:bg-emerald-600">
                  <div className="group-hover:text-white transition-colors duration-200">
                    {benefit.icon}
                  </div>
                </div>

                {/* Typography Block */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {benefit.description}
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
