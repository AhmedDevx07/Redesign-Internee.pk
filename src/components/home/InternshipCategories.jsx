import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Database,
  Smartphone,
  Shield,
  BarChart3,
  ArrowUpRight,
  Users,
} from "lucide-react";

export default function InternshipCategories() {
  // Hardcoded SaaS data layout structure for internships tracks
  const categories = [
    {
      title: "Frontend Development",
      desc: "Master React.js, Tailwind CSS, and Next.js to build pixel-perfect premium user interfaces.",
      icon: Layout,
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-500/10",
      openPositions: 42,
      duration: "2 Months",
    },
    {
      title: "Full Stack MERN",
      desc: "Build scalable web applications handling end-to-end database, server, and client-side logic.",
      icon: Code,
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-500/10",
      openPositions: 28,
      duration: "3 Months",
    },
    {
      title: "UI/UX Architecture",
      desc: "Design premium dashboards, user personas, wireframes, and design systems using Figma.",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-500/10",
      openPositions: 15,
      duration: "1 Month",
    },
    {
      title: "Backend Engineering",
      desc: "Architect fast APIs, microservices, and structural algorithms with Node.js and SQL/NoSQL databases.",
      icon: Database,
      color: "from-orange-500 to-amber-500",
      bgLight: "bg-orange-500/10",
      openPositions: 19,
      duration: "2 Months",
    },
    {
      title: "Mobile App Domain",
      desc: "Craft high-performance native cross-platform experiences using React Native frameworks.",
      icon: Smartphone,
      color: "from-indigo-500 to-violet-500",
      bgLight: "bg-indigo-500/10",
      openPositions: 12,
      duration: "3 Months",
    },
    {
      title: "Cyber Security Ops",
      desc: "Understand secure protocols, network vulnerability scanners, and encryption pipelines.",
      icon: Shield,
      color: "from-red-500 to-rose-500",
      bgLight: "bg-red-500/10",
      openPositions: 8,
      duration: "2 Months",
    },
  ];

  // Framer Motion layout transition orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-zinc-900/20 relative overflow-hidden">
      {/* Decorative Blur Ambient Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-20 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Content Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full">
            Explore Tracks
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Choose Your Technical Domain
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Get hands-on experience by building industry-grade apps under the
            guidance of tech experts.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {categories.map((track, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Glow Gradient Overlay Effect */}
              <div
                className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
              />

              <div>
                {/* Upper Meta Info Bar */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${track.color} text-white shadow-md shadow-black/5`}
                  >
                    <track.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 border border-zinc-200/60 dark:border-zinc-800/80 px-2.5 py-1 rounded-lg">
                    {track.duration}
                  </span>
                </div>

                {/* Core Text Copy */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  {track.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                  {track.desc}
                </p>
              </div>

              {/* Lower Active Tracking Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/60 mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                  <Users className="h-4 w-4 text-emerald-500" />
                  <span>{track.openPositions} Slots Open</span>
                </div>

                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                  Apply Track <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
