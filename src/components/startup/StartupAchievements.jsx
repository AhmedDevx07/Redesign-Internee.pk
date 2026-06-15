import React from "react";
import ach1 from "/ach-1.webp";
import ach2 from "/ach-2.webp";
import ach3 from "/ach-3.webp";
import ach4 from "/ach-4.webp";
export default function StartupAchievements() {
  // Array definition containing all 4 unique award datasets
  const awardsList = [
    {
      year: "2024",
      tag: "Runner-Up",
      tagColor:
        "bg-orange-50 dark:bg-orange-950/80 border-orange-200 dark:border-orange-900/50 text-orange-600 dark:text-orange-400",
      title: "Runner-Up Sindh Regional Zindigi Prize",
      description:
        "Recognized among top startups in Sindh for creating meaningful social and economic impact through technology.",
      image: ach1,
      lineColor: "bg-emerald-500",
    },
    {
      year: "2024",
      tag: "Winner",
      tagColor:
        "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400",
      title: "SEE PAKISTAN ED-Tech Winner 2024",
      description:
        "Selected as Pakistan's best ED-Tech initiative for transforming youth employability and skills development.",
      image: ach2,
      lineColor: "bg-emerald-500",
    },
    {
      year: "2024",
      tag: "Winner",
      tagColor:
        "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400",
      title: "Aptech Young Entrepreneurs Award 2024",
      description:
        "Honored as the most innovative startup in the education and skill development sector by Aptech Global.",
      image: ach3,
      lineColor: "bg-emerald-500",
    },
    {
      year: "2024",
      tag: "Winner",
      tagColor:
        "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400",
      title: "Google Cloud Startup Competition Winner",
      description:
        "Recognized by Google Cloud for innovative use of technology in education and entrepreneurship ecosystem development.",
      image: ach4,
      lineColor: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20 text-zinc-900 dark:text-zinc-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP BADGE & SECTION HEADERS */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mx-auto w-fit">
            🏆 Recognition & Awards
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Celebrating Our Achievements
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-normal">
            Industry recognition for our innovation, excellence, and commitment
          </p>
        </div>

        {/* ALTERNATING TIMELINE ARRAY GRID */}
        <div className="space-y-20 lg:space-y-28 max-w-6xl mx-auto">
          {awardsList.map((award, index) => {
            // Check if section layout direction requires reversal
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* PHOTO CONTAINER (FLIPS COLUMN POSITION BASED ON ARRAY INDEX) */}
                <div
                  className={`lg:col-span-6 relative group ${!isEven ? "lg:order-2" : ""}`}
                >
                  {/* Backdrop shadow panel effect */}
                  <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-3xl transform translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />

                  <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-3xl shadow-sm relative overflow-hidden">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="hidden absolute inset-0 items-center justify-center text-zinc-400 dark:text-zinc-600">
                        <svg
                          className="w-12 h-12 stroke-current"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>

                      {/* Pill Absolute Tag Badge overlay */}
                      <span
                        className={`absolute top-4 right-4 px-3 py-1.5 border text-[11px] font-black tracking-tight rounded-xl shadow-md ${award.tagColor}`}
                      >
                        {award.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXT CONTENT BLOCK */}
                <div
                  className={`lg:col-span-6 text-left space-y-4 lg:px-6 ${!isEven ? "lg:order-1" : ""}`}
                >
                  {/* Year Tag Indicator */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
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
                        d="M11.48 3.499c.151-.312.596-.312.748 0l2.14 4.337 4.786.696c.342.05.479.472.232.716l-3.463 3.376.817 4.767c.059.343-.301.606-.607.444L12 15.356l-4.279 2.251c-.306.162-.666-.101-.607-.444l.818-4.766L4.47 9.447c-.247-.244-.11-.666.232-.716l4.787-.696 2.139-4.337z"
                      />
                    </svg>
                    {award.year}
                  </div>

                  {/* Header title */}
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                    {award.title}
                  </h3>

                  {/* Narrative details description text */}
                  <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {award.description}
                  </p>

                  {/* Graphic highlight line at bottom */}
                  <div className="pt-2">
                    <div
                      className={`w-16 h-1 rounded-full ${award.lineColor}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
