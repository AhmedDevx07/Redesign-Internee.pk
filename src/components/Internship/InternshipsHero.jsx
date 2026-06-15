import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowLongRight, HiOutlineCheckCircle } from "react-icons/hi2";
import {
  BsLightningCharge,
  BsClockHistory,
  BsShieldCheck,
  BsBriefcase,
} from "react-icons/bs";

export default function InternshipsHero() {
  // Right asymmetric floating feature card definitions
  const dynamicCards = [
    {
      title: "Skill Growth",
      desc: "Systematic track design for maximum career impact.",
      icon: BsLightningCharge,
      style:
        "bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-100 shadow-md",
      iconStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Flexible Pace",
      desc: "Learn on your schedule, anywhere in the world.",
      icon: BsClockHistory,
      style:
        "bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 text-white shadow-xl lg:translate-y-8",
      iconStyle: "bg-emerald-500/20 text-emerald-400",
    },
    {
      title: "Verified track",
      desc: "Trusted by top recruiters and tech partners.",
      icon: BsShieldCheck,
      style:
        "bg-emerald-600 dark:bg-emerald-600/90 text-white shadow-lg lg:-translate-y-4 shadow-emerald-600/10",
      iconStyle: "bg-white/20 text-white",
    },
    {
      title: "Job Support",
      desc: "Direct referrals for top performing internees.",
      icon: BsBriefcase,
      style:
        "bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-900 dark:text-zinc-100 shadow-md lg:translate-y-4",
      iconStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      {/* Background soft ambient mesh elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT SIDE: HERO TYPOGRAPHY & CTA LAYOUT */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Upper Trending Pill badge layout */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-full text-xs font-semibold text-zinc-600 dark:text-zinc-400 w-fit">
              <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                Trending
              </span>
              Explore Internship Opportunities
            </div>

            {/* Giant Title Frame with highlighted accent lines */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Build Skills.
              <br />
              Get Experience.
              <br />
              <span className="text-emerald-600 dark:text-emerald-500">
                Land Your Job.
              </span>
            </h1>

            {/* Explanatory subtitle paragraph copy */}
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-normal">
              Stop waiting for opportunities. Start building real skills with
              Pakistan's largest virtual internship platform. Your dream tech
              career begins here.
            </p>

            {/* Button Component Triggers */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
                Browse Tracks{" "}
                <HiOutlineArrowLongRight className="h-4 w-4 stroke-[2.5]" />
              </button>
              <button className="px-7 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold rounded-full text-sm transition-all shadow-sm">
                How It Works
              </button>
            </div>

            {/* Footer trust items checkmarks parameters */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />{" "}
                No Experience Required
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />{" "}
                Industry-Ready Projects
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ASYMMETRIC FLOATING FEATURE CASCADING CARDS GRID */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative pt-4 lg:pt-0">
            {dynamicCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className={`p-6 sm:p-7 rounded-[28px] flex flex-col gap-4 justify-between transition-transform duration-300 hover:-translate-y-1 ${card.style}`}
              >
                <div className={`p-3 rounded-2xl w-fit ${card.iconStyle}`}>
                  <card.icon className="h-5 w-5" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-extrabold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs opacity-70 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
