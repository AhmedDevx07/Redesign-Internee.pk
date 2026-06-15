import React, { useState } from "react";

export default function CertificationsDashboard() {
  const [selectedTrack, setSelectedTrack] = useState("All");

  const tracks = ["All", "Frontend", "Backend", "Design", "Mobile Apps"];

  // Mock datasets for issued student certifications
  const certificationsFeed = [
    {
      title: "Advanced React & Next.js Architecture",
      track: "Frontend",
      issueDate: "May 2026",
      credentialId: "INT-REC-2026-8942",
      issuer: "Internee.pk Official Tech Board",
      status: "Verified",
      grade: "Grade A+",
      skills: ["React 19", "Next.js 15", "Tailwind CSS", "State Management"],
    },
    {
      title: "Responsive Web UI/UX Essentials",
      track: "Design",
      issueDate: "March 2026",
      credentialId: "INT-UIUX-2026-1102",
      issuer: "Internee.pk Design Wing",
      status: "Verified",
      grade: "Grade A",
      skills: [
        "Figma",
        "Apple Aesthetics",
        "Glassmorphic Grids",
        "Wireframing",
      ],
    },
    {
      title: "Full-Stack Deployment & CI/CD Pipelines",
      track: "Backend",
      issueDate: "April 2026",
      credentialId: "INT-DEVOPS-2026-4471",
      issuer: "Internee.pk DevOps Core",
      status: "Verified",
      grade: "Grade A+",
      skills: ["GitHub Actions", "Node.js Matrix Testing", "Vercel", "Docker"],
    },
  ];

  // Filtering computational logic
  const filteredCerts =
    selectedTrack === "All"
      ? certificationsFeed
      : certificationsFeed.filter((cert) => cert.track === selectedTrack);

  return (
    <section className="pt-24 pb-12 p-4 sm:p-6 lg:p-8 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50 space-y-10">
      {/* 1. TOP HERO ANNOUNCEMENT LAYER */}
      <br />
      <br />
      <br />
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 mx-auto w-fit">
          🔒 Secure Cryptographic Verification
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
          Verified Student Certifications
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
          Validate credentials, technical skills tracks, and official internship
          completion records issued by our platform board.
        </p>
      </div>

      {/* 2. SUMMARY METRICS MINI DECK */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-xl text-center shadow-sm">
          <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">
            100%
          </div>
          <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mt-0.5">
            Recruiter Trusted
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-xl text-center shadow-sm">
          <div className="text-xl font-black text-zinc-900 dark:text-white">
            Instant
          </div>
          <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mt-0.5">
            ID Status Check
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 rounded-xl text-center shadow-sm">
          <div className="text-xl font-black text-zinc-900 dark:text-white">
            Secure
          </div>
          <div className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider mt-0.5">
            Tamper Proof
          </div>
        </div>
      </div>

      {/* 3. TRACK FILTERS CONTROL PILLS */}
      <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto border-b border-zinc-200/60 dark:border-zinc-800/80 pb-4">
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => setSelectedTrack(track)}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedTrack === track
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/60 dark:border-zinc-800/80"
            }`}
          >
            {track}
          </button>
        ))}
      </div>

      {/* 4. CERTIFICATION MATRIC GRID LOGIC */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredCerts.map((cert, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative group overflow-hidden"
          >
            {/* Top Container info section */}
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-2">
                <span className="px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[9px] font-black tracking-wider rounded uppercase">
                  {cert.track} Track
                </span>
                <span className="flex items-center gap-1 text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  🛡️ {cert.status}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-black text-zinc-900 dark:text-white tracking-tight leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {cert.title}
                </h3>
                <span className="block text-[11px] font-bold text-zinc-400 dark:text-zinc-500">
                  Issued by: {cert.issuer}
                </span>
              </div>

              {/* Verified skills tags array wrapper */}
              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-medium px-2 py-0.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Meta Deck area */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60 space-y-3.5">
              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-400 font-medium">
                <div>
                  <span className="block text-[9px] uppercase tracking-wide text-zinc-400 font-bold">
                    Issue Date
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold">
                    {cert.issueDate}
                  </span>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] uppercase tracking-wide text-zinc-400 font-bold">
                    Evaluation
                  </span>
                  <span className="text-emerald-500 font-black">
                    {cert.grade}
                  </span>
                </div>
              </div>

              <div className="p-2.5 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-800/60 flex flex-col space-y-0.5">
                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-400">
                  CREDENTIAL ID
                </span>
                <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 select-all tracking-tight">
                  {cert.credentialId}
                </span>
              </div>

              <button className="w-full py-2.5 bg-zinc-950 hover:bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-black text-xs rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5">
                Verify Credential ↗
              </button>
            </div>
          </div>
        ))}

        {filteredCerts.length === 0 && (
          <div className="col-span-full text-center py-12 text-xs text-zinc-400 font-medium italic">
            No certifications found under this specific track selection.
          </div>
        )}
      </div>
    </section>
  );
}
