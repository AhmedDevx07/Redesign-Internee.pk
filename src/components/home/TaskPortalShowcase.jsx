import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  Cpu,
  BookOpen,
  ArrowRight,
  Activity,
} from "lucide-react";

export default function TaskPortalShowcase() {
  // Animation presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="py-24 bg-[#0a0a0c] text-zinc-100 relative overflow-hidden">
      {/* Subtle Glow Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Upper Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-medium text-emerald-400">
            <Activity className="h-3.5 w-3.5 animate-pulse" /> Task Management
            Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Turn Learning into Proof with <br className="hidden sm:inline" />
            the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              internee.pk Task Portal
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Complete real tasks, get structured feedback, and build a portfolio
            employers trust. Every milestone moves you closer to job-ready.
          </p>
        </div>

        {/* Core Features Grid Wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Row 1: Heavy Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Hands-on Industry Projects */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl w-fit">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Hands-on Industry Projects
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Practice with real-world projects that mirror industry
                  workflows. Each task sharpens your skills and strengthens your
                  portfolio.
                </p>
              </div>
              <ul className="mt-6 space-y-2.5 pt-4 border-t border-zinc-800/60 text-sm font-medium text-zinc-300">
                {[
                  "Project-based learning",
                  "Industry-standard practices",
                  "Portfolio building",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Skill Verification System */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl w-fit">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Skill Verification System
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Every completed task adds verified proof to your profile.
                  Track progress and showcase outcomes with confidence.
                </p>
              </div>
              <ul className="mt-6 space-y-2.5 pt-4 border-t border-zinc-800/60 text-sm font-medium text-zinc-300">
                {[
                  "Skill verification",
                  "Progress tracking",
                  "Achievement badges",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Row 2: Secondary Landscape Micro-cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 3: SDLC Implementation */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 flex items-start gap-4 hover:border-zinc-800 transition"
            >
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg flex-shrink-0 mt-0.5">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  SDLC Implementation via internee.pk
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                  Experience the complete Software Development Life Cycle
                  through structured tasks and milestones, part of our{" "}
                  <span className="text-zinc-200 font-medium">
                    virtual internship
                  </span>{" "}
                  offerings.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Guided Learning Path */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 flex items-start gap-4 hover:border-zinc-800 transition"
            >
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg flex-shrink-0 mt-0.5">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Guided Learning Path at internee.pk
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                  Follow a structured learning path designed for both beginners
                  and advanced learners as part of our{" "}
                  <span className="text-zinc-200 font-medium">
                    virtual internship
                  </span>{" "}
                  curriculum.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Call to Action (CTA) Panel Banner */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-b from-zinc-900/70 to-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center space-y-6 mt-4"
          >
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Ready to Build Your Professional Portfolio with internee.pk?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Join our{" "}
              <span className="text-emerald-400 font-medium">
                virtual internships
              </span>{" "}
              and get access to industry-standard tasks that will help you build
              a remarkable portfolio, only at{" "}
              <span className="text-zinc-200 font-medium">internee.pk</span>.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 transition group">
                Start Your Journey Now{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
