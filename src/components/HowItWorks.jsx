import React from "react";
import { motion } from "framer-motion";
import { FiUserPlus, FiTerminal, FiAward } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Choose Your Track",
      desc: "Select from our range of tech tracks like MERN Stack, Frontend, or AI and click Apply Now.",
      icon: FiUserPlus,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "02",
      title: "Receive Tasks Portal",
      desc: "Get dashboard access to real-world task scenarios designed by industrial experts.",
      icon: FiTerminal,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "03",
      title: "Build & Submit",
      desc: "Develop projects following professional workflows and push your updates directly.",
      icon: HiOutlineAcademicCap,
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      id: "04",
      title: "Get Certified",
      desc: "Receive industry-recognized digital credentials and verify your skills.",
      icon: FiAward,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-zinc-50 relative overflow-hidden">
      {/* Background radial soft light for SaaS look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Workflow Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Four simple steps to fast-track your tech career and gain verified
            hands-on industry experience.
          </p>
        </div>

        {/* TIMELINE STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {/* Desktop Central Connecting Timeline Line - Tuned to match icon middle point */}
          <div className="hidden lg:block absolute top-[28px] left-12 right-12 h-[1px] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 space-y-5 group"
            >
              {/* Icon Container Block */}
              <div className="relative flex items-center justify-between">
                {/* Icon wrapper badge */}
                <div
                  className={`p-4 rounded-2xl border ${step.color} bg-zinc-950 transition-all duration-300 group-hover:scale-105 group-hover:border-zinc-700 shadow-md relative z-10`}
                >
                  <step.icon className="h-6 w-6" />
                </div>

                {/* Absolute Positioning for the big subtle step counter number */}
                <span className="absolute right-2 text-4xl font-black text-zinc-900 select-none tracking-tight group-hover:text-zinc-850/60 transition-colors duration-300">
                  {step.id}
                </span>
              </div>

              {/* Text Description Content Block */}
              <div className="space-y-2 pt-2">
                <h3 className="text-base font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
