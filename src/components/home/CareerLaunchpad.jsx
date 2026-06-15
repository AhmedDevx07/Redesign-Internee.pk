import React from "react";
// import { motion } from "react-redux"; // Agar Redux hooks integration chahye bad me
import { motion as framerMotion } from "framer-motion";
import {
  Target,
  Users2,
  Award,
  Briefcase,
  CheckCircle2,
  FileText,
  BarChart,
  Crosshair,
  MessageSquare,
  BookOpen,
  UserCheck,
} from "lucide-react";

export default function CareerLaunchpad() {
  // Animation presets for consistency
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Top numeric milestone counters
  const milestones = [
    { value: "1000+", label: "Active Internships" },
    { value: "500+", label: "Partner Companies" },
    { value: "10,000+", label: "Success Stories" },
    { value: "50+", label: "Industry Sectors" },
  ];

  // Middle Core Pillars grid metrics
  const pillars = [
    {
      title: "Targeted Learning",
      desc: "Industry-specific virtual internships designed to build practical skills and experience.",
      icon: Target,
      points: ["Web Development", "Digital Marketing", "UI/UX Design"],
    },
    {
      title: "Mentorship Program",
      desc: "Learn directly from industry experts at Internee.pk with guided weekly sessions.",
      icon: Users2,
      points: ["One-on-One Guidance", "Project Reviews", "Career Planning"],
    },
    {
      title: "Certification Track",
      desc: "Earn recognized certifications and build a portfolio that employers trust.",
      icon: Award,
      points: [
        "Skill Verification",
        "Performance Badges",
        "Digital Certificates",
      ],
    },
  ];

  // Bottom left tracking phase logs
  const learningPhases = [
    { name: "Phase 1: Foundation", progress: 75 },
    { name: "Phase 2: Practical Skills", progress: 60 },
    { name: "Phase 3: Industry Projects", progress: 85 },
  ];

  // Bottom right premium career tool items
  const resources = [
    { name: "Resume Templates", icon: FileText },
    { name: "Mock Interviews", icon: MessageSquare },
    { name: "Skill Analysis", icon: BarChart },
    { name: "Learning Paths", icon: BookOpen },
    { name: "Goal Tracking", icon: Crosshair },
    { name: "Peer Feedback", icon: UserCheck },
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <Briefcase className="h-3.5 w-3.5" /> Professional Development
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Launch Your Career with Internee.pk
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Pakistan's innovative platform for career growth and professional
            development. Join our{" "}
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">
              virtual internships
            </span>{" "}
            to gain practical experience.
          </p>
        </div>

        {/* BLOCK 1: MILESTONE COUNTERS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/60 rounded-2xl text-center"
            >
              <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* BLOCK 2: THREE CORE PILLARS GRID */}
        <framerMotion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
        >
          {pillars.map((item, idx) => (
            <framerMotion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg dark:hover:shadow-black/20 transition-shadow"
            >
              <div className="space-y-4">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <ul className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 space-y-2 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />{" "}
                    {point}
                  </li>
                ))}
              </ul>
            </framerMotion.div>
          ))}
        </framerMotion.div>

        {/* BLOCK 3: UTILITY LABS (LEARNING JOURNEY PROGRESS VS TOOLS GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Panel: Learning Journey Progress Tracking Container */}
          <div className="lg:col-span-5 bg-white dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
              Your Learning Journey
            </h3>
            <div className="space-y-5">
              {learningPhases.map((phase, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {phase.name}
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">
                      {phase.progress}%
                    </span>
                  </div>
                  {/* Outer bar track */}
                  <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <framerMotion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${phase.progress}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: idx * 0.1,
                      }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Interactive Resource Grid Box */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
              Career Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/40 dark:border-zinc-800/40 rounded-xl hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 cursor-pointer transition group"
                >
                  <div className="p-2 bg-white dark:bg-zinc-800 group-hover:bg-emerald-500/10 border border-zinc-200/50 dark:border-zinc-700/50 group-hover:border-emerald-500/20 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 rounded-lg transition-colors">
                    <res.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    {res.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
