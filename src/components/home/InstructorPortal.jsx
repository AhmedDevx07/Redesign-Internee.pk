import React from "react";
import { motion } from "framer-motion";
import {
  CloudUpload,
  DollarSign,
  UserCheck,
  Handshake,
  ArrowUpRight,
  Presentation,
} from "lucide-react";

export default function InstructorPortal() {
  // Upper top right grid features block metadata
  const quickHighlights = [
    { label: "Upload Content", main: "Tutorials & Projects" },
    { label: "Earn Income", main: "Transparent Payouts" },
    { label: "Grow Profile", main: "Verified Reviews" },
    { label: "Reach Learners", main: "Global Community" },
  ];

  // Lower grid structural features breakdown layout
  const instructorFeatures = [
    {
      title: "Upload Tutorials & Exercises",
      desc: "Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.",
      icon: CloudUpload,
    },
    {
      title: "Earn from Your Expertise",
      desc: "Internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge.",
      icon: DollarSign,
    },
    {
      title: "Build Your Instructor Profile",
      desc: "Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space.",
      icon: UserCheck,
    },
    {
      title: "Fair Revenue Sharing",
      desc: "We keep it transparent. Join internee.pk and benefit from a fair model that pays you well — all while gaining experience in virtual internships.",
      icon: Handshake,
    },
  ];

  // Animation layout variations for dynamic enter view
  const entryAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ROW 1: Heading Content + Right Quick Highlight Block Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column Text Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-5 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full">
              Instructor Portal
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
              Tech Instructor or <br />
              Content Creator?
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
              Create in your native language, reach more learners, and earn from
              your expertise with internee.pk.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm shadow-md shadow-emerald-500/10 active:scale-95 transition group">
                <Presentation className="h-4 w-4" /> Start Teaching Today
              </button>
            </div>
          </motion.div>

          {/* Right Column Glassmorphic / Clean Structural Grid Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickHighlights.map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/60 rounded-xl"
                >
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>
                  <span className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                    {item.main}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center sm:text-left font-medium">
              Join a growing community of instructors sharing practical,
              industry-ready content.
            </p>
          </motion.div>
        </div>

        {/* ROW 2: 4 Reusable Core Breakdown Cards Grid System */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {instructorFeatures.map((feat, index) => (
            <motion.div
              key={index}
              variants={entryAnimation}
              className="bg-white dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
            >
              <div className="space-y-4">
                {/* Clean Structural Responsive Dynamic Green Accent Icon Layout */}
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              {/* Animated Interactive Text Links Trigger */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/40">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 cursor-pointer select-none group-hover:underline">
                  Learn more{" "}
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
