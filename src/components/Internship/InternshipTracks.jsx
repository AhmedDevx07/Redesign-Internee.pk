import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import {
  BsPalette,
  BsRobot,
  BsCodeSlash,
  BsPhone,
  BsDatabase,
  BsGrid,
} from "react-icons/bs";

export default function InternshipTracks() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Development", "Design", "AI"];

  const tracks = [
    {
      id: 1,
      title: "Graphic Design",
      desc: "Master UI/UX, branding, and visual communication.",
      tag: "LEARN DESIGN THAT STANDS OUT",
      subTag: "BUILD REAL CREATIVE SKILLS",
      category: "Design",
      icon: BsPalette,
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      id: 2,
      title: "Chatbot Development",
      desc: "Build AI-powered conversational experiences.",
      tag: "SMART AI BOTS THAT CONVERSE",
      subTag: "HANDS-ON AI EXPERIENCE",
      category: "AI",
      icon: BsRobot,
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      id: 3,
      title: "Frontend Internship",
      desc: "Create stunning, responsive web interfaces.",
      tag: "BUILD REAL APPS FROM SCRATCH",
      subTag: "REAL-WORLD APP PROJECTS",
      category: "Development",
      icon: BsCodeSlash,
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      id: 4,
      title: "App Development",
      desc: "Design and develop mobile applications.",
      tag: "BUILD REAL APPS FROM SCRATCH",
      subTag: "REAL-WORLD APP PROJECTS",
      category: "Development",
      icon: BsPhone,
      gradient: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      title: "Backend Development",
      desc: "Build scalable APIs and server infrastructure.",
      tag: "LEARN THE TECH BEHIND BIG APPS",
      subTag: "REAL-WORLD BACKEND EXPERIENCE",
      category: "Development",
      icon: BsDatabase,
      gradient: "from-rose-600 to-red-600",
    },
    {
      id: 6,
      title: "Other Internships",
      desc: "Explore diverse tech career opportunities.",
      tag: "SKILLS THAT LAST FOR EVERY ROLE",
      subTag: "TRY SOMETHING NEW GROW WITH TECH",
      category: "All",
      icon: BsGrid,
      gradient: "from-zinc-700 to-zinc-900",
    },
  ];

  const filteredTracks =
    activeFilter === "All"
      ? tracks
      : tracks.filter((track) => track.category === activeFilter);

  return (
    <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/20 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Explore Our{" "}
            <span className="text-emerald-600 dark:text-emerald-500">
              Internship Tracks
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
            Choose from 10+ in-demand tech tracks and start building real-world
            skills today.
          </p>
        </div>

        {/* CONTROLS / FILTER PILLES */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === cat
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TRACKS INTERACTIVE GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTracks.map((track) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={track.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300"
              >
                {/* Visual Top Decorative Banner mimicking image_104581.png structure logically */}
                <div
                  className={`p-6 bg-gradient-to-br ${track.gradient} text-white relative overflow-hidden h-40 flex flex-col justify-between`}
                >
                  {/* Abstract Background Shapes */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                  <div className="space-y-1 relative z-10">
                    <span className="inline-block px-2.5 py-0.5 bg-black/20 backdrop-blur-md rounded-md text-[9px] font-black tracking-wider uppercase">
                      {track.subTag}
                    </span>
                    <h4 className="text-sm font-black tracking-wide leading-snug max-w-[80%] uppercase opacity-90">
                      {track.tag}
                    </h4>
                  </div>

                  <div className="flex justify-between items-center relative z-10 mt-auto">
                    <div className="p-2.5 bg-white/10 backdrop-blur-md rounded-xl text-white">
                      <track.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Content Core Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {track.desc}
                    </p>
                  </div>

                  {/* Submit Trigger Action Button Layout */}
                  <button className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors shadow-sm shadow-emerald-500/5 group-hover:scale-[1.01] active:scale-95 duration-200">
                    Apply Now{" "}
                    <HiOutlineArrowUpRight className="h-4 w-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
