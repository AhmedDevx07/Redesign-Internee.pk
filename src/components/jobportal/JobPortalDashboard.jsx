import React, { useState } from "react";

export default function JobPortalDashboard() {
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  // Hardcoded Top Summary Metric Stack
  const metrics = [
    { title: "20+", sub: "Expert-Led Internships", icon: "🔖" },
    { title: "1,500+", sub: "Successful Graduates", icon: "👥" },
    { title: "120k+", sub: "LinkedIn Followers", icon: "🔗" },
  ];

  // Dynamic Array for Job Listings Card Feed
  const jobsFeed = [
    {
      title: "MERN Stack Developer",
      company: "MIT SOLUTIONS",
      location: "Lahore Johar Town, Pakistan",
      date: "Feb 24, 2026",
      type: "Full Time/Permanent",
      experience: "1 Years",
      salary: "40000 - 60000 PKR",
      desc: "Job Title: MERN Stack Developer (1 Year Experience) Salary: 40k to 60k Location: Johar Town / Onsite | Job Type: Full Time Job Description: We are looking for an experienced...",
    },
    {
      title: "Senior Python Developer",
      company: "E-Khareedari",
      location: "Pakistan, Pakistan",
      date: "Mar 6, 2026",
      type: "Full Time/Permanent",
      experience: "Senior Level",
      salary: "250000 - 450000 PKR",
      desc: "We are seeking a Senior Python Developer to lead the development of high-performance backend systems and integrate cutting-edge AI capabilities. You will be responsible for...",
    },
    {
      title: "Mid Backend Developer (Node.js)",
      company: "Azya Consulting FZ LLE",
      location: "Pakistan, Pakistan",
      date: "Feb 24, 2026",
      type: "Internship",
      experience: "Mid Level",
      salary: "Undisclosed",
      desc: "Job Type: Full-time Work Location: Remote (Pakistan / India) About the company: We operate multiple custom backend systems powering our platforms, serving real-time...",
    },
    {
      title: "Remote - PHP WordPress Developer",
      company: "The Ghani IT Solutions",
      location: "Pakistan, Pakistan",
      date: "Feb 28, 2026",
      type: "Full Time/Permanent",
      experience: "Entry Level",
      salary: "50000 - 80000 PKR",
      desc: "Key Responsibilities: Develop and customize WordPress and Shopify websites based on client requirements. Build and maintain custom websites...",
    },
    {
      title: "UI/UX Web Designer",
      company: "Cyngro",
      location: "Lahore, Pakistan",
      date: "Feb 28, 2026",
      type: "Full Time/Permanent",
      experience: "2 Years",
      salary: "50000 - 100000 PKR",
      desc: "Key Responsibilities: Design user-friendly and visually appealing web interfaces, landing pages, and dashboards. Translate user needs and business goals into effective wireframes...",
    },
    {
      title: "React JS Developer",
      company: "Hul Hub Pvt Ltd",
      location: "Karachi Shahra-e-Faisal, Pakistan",
      date: "Feb 23, 2026",
      type: "Full Time/Permanent",
      experience: "1 Years",
      salary: "Undisclosed",
      desc: "Hul Hub Pakistan is Hiring — React JS Developer Hul Hub Pakistan is looking for a passionate React JS Developer with 1 year of hands-on experience in...",
    },
  ];

  return (
    <section className="py-12 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* BREADCRUMB INDICATOR */}
        <nav className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
          <span>Home</span> / <span>Job Portal</span> /{" "}
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">
            Latest Job Updates
          </span>
        </nav>

        {/* 1. GREEN BANNER HERO */}
        <div className="w-full bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-800 dark:to-emerald-950 rounded-[2rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-wide uppercase">
              ✓ Verified Jobs Only
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
              Find Your Dream Tech Job in Pakistan
            </h1>
            <p className="text-sm sm:text-base text-emerald-100/90 font-normal max-w-2xl leading-relaxed">
              We've partnered with Pakistan's top IT companies to bring you
              exclusive, verified job opportunities — updated daily.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-emerald-500/30 border border-white/10 rounded-xl text-xs font-medium">
                ✨ New daily
              </span>
              <span className="px-3 py-1 bg-emerald-500/30 border border-white/10 rounded-xl text-xs font-medium">
                👥 Active listings
              </span>
            </div>
          </div>
        </div>

        {/* 2. THREE COLUMNS METRICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm text-center space-y-1"
            >
              <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                {m.title}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 3. INPUT FILTERS SEARCH BAR BAR */}
        <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Main Search */}
          <div className="md:col-span-6 relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search jobs, companies, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-zinc-900 dark:text-white"
            />
          </div>
          {/* Location Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-zinc-700 dark:text-zinc-300"
            >
              <option>All Locations</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Remote</option>
            </select>
          </div>
          {/* Sorting Filter */}
          <div className="md:col-span-2">
            <select className="w-full px-3 py-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-zinc-700 dark:text-zinc-300">
              <option>Latest First</option>
              <option>Oldest First</option>
            </select>
          </div>
          {/* Action Trigger Button */}
          <button className="md:col-span-1 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm">
            Search
          </button>
        </div>

        {/* 4. INTERACTIVE JOB CARDS MATRIX GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsFeed.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/80 rounded-2xl shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow relative group"
            >
              <div className="space-y-3.5">
                {/* Header Title with Bookmark Icon */}
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-base font-black text-zinc-900 dark:text-white tracking-tight leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="text-xs font-bold text-zinc-400 dark:text-zinc-500 mt-0.5">
                      🏢 {job.company}
                    </div>
                  </div>
                  <button className="text-zinc-300 hover:text-zinc-500 dark:hover:text-zinc-400 text-sm p-1">
                    🔖
                  </button>
                </div>

                {/* Meta Row Badges System */}
                <div className="flex flex-wrap gap-1.5 text-[11px] font-medium">
                  <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-md">
                    {job.type}
                  </span>
                  <span className="px-2 py-0.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md">
                    {job.experience}
                  </span>
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-md">
                    {job.salary}
                  </span>
                </div>

                {/* Informative Short Narrative Segment */}
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed font-normal">
                  {job.desc}
                </p>
              </div>

              {/* Action Buttons & Time Metadata Lower Deck */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span>📍 {job.location}</span>
                  <span>📅 {job.date}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 text-center text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200/70 dark:hover:bg-zinc-700/70 rounded-xl transition-colors">
                    View Details
                  </button>
                  <button className="py-2 text-center text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-sm">
                    Apply Now ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
