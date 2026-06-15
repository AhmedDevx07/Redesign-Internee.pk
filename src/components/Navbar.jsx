import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  Briefcase,
  Globe,
  Award,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  // Helper to check active tab
  const isActive = (path) => location.pathname === path;

  // Modern Dropdown Resources items - FIXED: Added absolute route links mapping parameter
  const resourceItems = [
    {
      name: "Blogs",
      desc: "Latest tech updates & insights",
      icon: Globe,
      path: "/blogs",
    },
    {
      name: "Certifications",
      desc: "Verify your digital badges",
      icon: Award,
      path: "/certifications",
    },
    {
      name: "Bootcamps",
      desc: "Live developer crash courses",
      icon: Sparkles,
      path: "/bootcamps",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/75 dark:bg-zinc-950/75 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Internee
              <span className="text-emerald-600 dark:text-emerald-400">
                .pk
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <li>
              <Link
                to="/"
                className={`px-3 py-2 rounded-xl transition-all ${isActive("/") ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" : "hover:text-emerald-600 dark:hover:text-emerald-400"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/internships"
                className={`px-3 py-2 rounded-xl transition-all ${isActive("/internships") ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" : "hover:text-emerald-600 dark:hover:text-emerald-400"}`}
              >
                Internship
              </Link>
            </li>
            <li>
              <Link
                to="/graduate-program"
                className={`px-3 py-2 rounded-xl transition-all ${isActive("/graduate-program") ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" : "hover:text-emerald-600 dark:hover:text-emerald-400"}`}
              >
                Graduate Program
              </Link>
            </li>
            <li>
              <Link
                to="/ambassador"
                className={`px-3 py-2 rounded-xl transition-all ${isActive("/ambassador") ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" : "hover:text-emerald-600 dark:hover:text-emerald-400"}`}
              >
                Student Ambassador
              </Link>
            </li>
            <li>
              <Link
                to="/startup-journey"
                className={`px-3 py-2 rounded-xl transition-all ${isActive("/startup-journey") ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" : "hover:text-emerald-600 dark:hover:text-emerald-400"}`}
              >
                Startup Journey
              </Link>
            </li>

            {/* Resources Flyout Menu */}
            <li className="relative">
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center gap-1 px-3 py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                Resources{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="absolute left-0 mt-2 w-64 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-2xl shadow-xl p-3 grid gap-1 z-50"
                  >
                    {/* FIXED: Changed to router Link wrapper elements map config */}
                    {resourceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        onClick={() => setIsResourcesOpen(false)}
                        className={`flex gap-3 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl cursor-pointer transition group ${isActive(item.path) ? "bg-emerald-50/60 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" : ""}`}
                      >
                        <item.icon
                          className={`h-5 w-5 mt-0.5 transition ${isActive(item.path) ? "text-emerald-500" : "text-zinc-400 group-hover:text-emerald-500"}`}
                        />
                        <div>
                          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {item.name}
                          </p>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-xl transition ${isActive("/dashboard") ? "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"}`}
            >
              <LayoutDashboard className="h-4 w-4" /> Dashboard
            </Link>
            <Link
              to="/job-portal"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 active:scale-95 transition"
            >
              <Briefcase className="h-4 w-4" /> Job Portal
            </Link>
          </div>

          {/* Mobile Menu Burger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl transition"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-3 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {[
                "Home",
                "Internship",
                "Graduate Program",
                "Student Ambassador",
                "Startup Journey",
              ].map((text, i) => {
                const endpoints = [
                  "/",
                  "/internships",
                  "/graduate-program",
                  "/ambassador",
                  "/startup-journey",
                ];
                return (
                  <Link
                    key={i}
                    to={endpoints[i]}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-xl transition ${isActive(endpoints[i]) ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "hover:bg-zinc-50 dark:hover:bg-zinc-900"}`}
                  >
                    {text}
                  </Link>
                );
              })}

              {/* Mobile Mobile Resources Accordion Links */}
              <div className="px-4 pt-2 pb-1 text-xs font-black uppercase tracking-wider text-zinc-400">
                Resources Section
              </div>
              {resourceItems.map((item, idx) => (
                <Link
                  key={`mob-${idx}`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-6 py-2.5 text-sm font-medium rounded-xl transition ${isActive(item.path) ? "bg-emerald-50/60 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" : "hover:bg-zinc-50 dark:hover:bg-zinc-900"}`}
                >
                  <item.icon className="h-4 w-4 text-zinc-400" />
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />

            {/* Mobile CTAs */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
              >
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </Link>
              <Link
                to="/job-portal"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl text-sm font-medium shadow-md"
              >
                <Briefcase className="h-4 w-4" /> Job Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
