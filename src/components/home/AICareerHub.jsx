import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileUser,
  ScrollText,
  UserCheck,
  Lightbulb,
  Compass,
  ArrowRight,
} from "lucide-react";

export default function AICareerHub() {
  // Right top micro-grid mini pillars
  const miniPills = [
    { label: "AI Resume Building", icon: FileUser },
    { label: "Cover Letter Creation", icon: ScrollText },
    { label: "Interview Preparation", icon: UserCheck },
    { label: "Industry Insights", icon: Lightbulb },
  ];

  // Bottom 4 Grid Detailed Features
  const aiFeatures = [
    {
      title: "AI Resume Building",
      desc: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
      icon: FileUser,
    },
    {
      title: "Cover Letter Creation",
      desc: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
      icon: ScrollText,
    },
    {
      title: "Interview Preparation",
      desc: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
      icon: UserCheck,
    },
    {
      title: "Industry Insights",
      desc: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ROW 1: Heading Layout + Dark Interactive Progress Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column Content Controls */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" /> Your AI Career Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-tight">
              Master the AI Career Path
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              Looking to kickstart your career in the AI industry? Our AI Career
              Coach platform offers expert guidance in resume building, cover
              letter creation, interview preparation, quizzes, and industry
              insights—all designed to help you land your dream job in
              Artificial Intelligence.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm shadow-md shadow-emerald-500/10 active:scale-95 transition">
                Try AI Coach <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl text-sm transition">
                Explore Tools
              </button>
            </div>
          </div>

          {/* Right Column Grid & Personalized Track Visualizer */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 rounded-3xl space-y-6">
            {/* Top Micro Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {miniPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 bg-white dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/60 rounded-xl"
                >
                  <pill.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Premium Dark SaaS Mode Progress Plate */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-2xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block mb-0.5">
                    Career Growth
                  </span>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Personalized Path{" "}
                    <Compass className="h-3.5 w-3.5 text-emerald-400 animate-spin-slow" />
                  </h4>
                </div>
                <Sparkles className="h-4 w-4 text-emerald-400 opacity-80" />
              </div>
              {/* Animated Inner Line Gauge */}
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 4 Reusable Core Pillar Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {aiFeatures.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  {feat.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
