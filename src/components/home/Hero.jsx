import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserCheck,
  Briefcase,
  CheckCircle,
  GraduationCap,
  Percent,
} from "lucide-react";
import img1 from "/123.jpg";
import { Link } from "react-router-dom";
export default function Hero() {
  // Stagger wrapper for textual content animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Soft floating effect for the cards
  const floatAnimation = (delay) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  return (
    <section className="relative min-h-screen pt-25 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/20 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/10">
      {/* Structural Decorative Background Dots */}

      <div className="absolute top-32 right-12 opacity-30 dark:opacity-20 pointer-events-none w-72 h-72 bg-emerald-400/10 dark:bg-emerald-500/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* LEFT COLUMN: Strategic Copy & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-6 text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
          >
            Build Skills.
            <br />
            Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
              Experience.
            </span>
            <br />
            Land{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Your Job.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed"
          >
            Stop waiting for opportunities. Start building real skills with
            Pakistan's largest virtual internship platform. Your dream tech
            career begins here.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            {/* Job Portal Route Link */}
            <Link
              to="/job-portal"
              className="flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-semibold shadow-lg shadow-emerald-500/20 active:scale-95 transition group"
            >
              Our Job Portal{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Dashboard Route Link */}
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800/60 active:scale-95 transition"
            >
              Dashboard <UserCheck className="h-4 w-4 text-zinc-400" />
            </Link>
          </motion.div>

          {/* Social Proof Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 text-sm font-medium text-zinc-500 dark:text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" /> No Experience
              Required
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-emerald-500" /> Industry-Ready
              Projects
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Premium Visual Glassmorphism Showcase */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          {/* Base Image Wrapper Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-zinc-900 dark:bg-zinc-800 border border-zinc-200/20 shadow-2xl max-w-md aspect-[4/5] w-full"
          >
            {/* Yahan aap student asset placeholder set karein */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
            <img
              src={img1}
              alt="Internee Student Dashboard"
              className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[105%]"
            />
          </motion.div>

          {/* FLOATING CARD 1: 200K+ Students (Top Left) */}
          <motion.div
            {...floatAnimation(0)}
            className="absolute top-36 -left-6 md:-left-10 backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 border border-white/40 dark:border-zinc-800 rounded-2xl p-4 shadow-xl shadow-black/5 flex items-center gap-3 max-w-[200px] z-20"
          >
            <div className="p-2.5 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                200K+
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Students Joined
              </p>
            </div>
          </motion.div>

          {/* FLOATING CARD 2: 92.6% Placement Rate (Top Right) */}
          <motion.div
            {...floatAnimation(1.5)}
            className="absolute top-12 -right-6 md:-right-10 backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 border border-white/40 dark:border-zinc-800 rounded-2xl p-4 shadow-xl shadow-black/5 text-center min-w-[120px] z-20"
          >
            <div className="relative inline-flex items-center justify-center mb-1">
              <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                92.6%
              </span>
            </div>
            <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 leading-tight">
              Internship Success Rate
            </p>
          </motion.div>

          {/* FLOATING CARD 3: 12,000+ Completed Courses (Bottom Right) */}
          <motion.div
            {...floatAnimation(0.7)}
            className="absolute bottom-12 -right-4 backdrop-blur-xl bg-white/80 dark:bg-zinc-900/80 border border-white/40 dark:border-zinc-800 rounded-2xl p-4 shadow-xl shadow-black/5 flex items-center gap-3 z-20"
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                12,000+
              </h4>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Courses Completed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
