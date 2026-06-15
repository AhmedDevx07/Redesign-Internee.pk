import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquare, Quote } from "lucide-react";

export default function Testimonials() {
  // Production-grade mock review data structure for MERN & Tech students
  const reviews = [
    {
      name: "Muhammad Ali",
      role: "Frontend Engineer Intern",
      text: "Internee.pk ke tasks se mujhe real-world development workflows ka pata chala. React.js aur Framer Motion par meri grip kafi strong ho gayi hai.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120",
    },
    {
      name: "Ayesha Khan",
      role: "Full Stack Developer",
      text: "MERN stack course ke sath jab maine yahan tasks complete kiye, toh portfolio automatic taiyar ho gaya. Submitting feedback loop was awesome.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120",
    },
    {
      name: "Zainab Raza",
      role: "UI/UX Designer",
      text: "Figma design systems ko real interfaces me transform karne ka maza hi alag tha. Highly recommend for passionate tech students!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=120",
    },
    {
      name: "Hamza Sheikh",
      role: "Backend Engineer",
      text: "Node.js API architecture aur state management par scalable levels par kaam karne ka maza aya. Complete workflow standard tha.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120",
    },
    {
      name: "Sana Fatima",
      role: "MERN Track Graduate",
      text: "Mujhe tasks completion ke baad industrial grade certificates mile jo digital footprint verify karte hain. Best remote platform in Pakistan.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120",
    },
    {
      name: "Bilal Ahmed",
      role: "Software Engineer",
      text: "Client-side validation errors handle karna aur structural tasks optimization seekhne ko mila. Onboarding design top tier hai.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120",
    },
  ];

  // Helper arrays for infinite continuous masonry scroll tracks
  const column1 = [
    ...reviews.slice(0, 2),
    ...reviews.slice(0, 2),
    ...reviews.slice(0, 2),
  ];
  const column2 = [
    ...reviews.slice(2, 4),
    ...reviews.slice(2, 4),
    ...reviews.slice(2, 4),
  ];
  const column3 = [
    ...reviews.slice(4, 6),
    ...reviews.slice(4, 6),
    ...reviews.slice(4, 6),
  ];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-zinc-900/10 relative overflow-hidden">
      {/* Decorative ambient gradient backdrop element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block Copy */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <MessageSquare className="h-3.5 w-3.5" /> Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            Loved by Thousands of Learners
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            See how tech enthusiasts across Pakistan are accelerating their
            development careers through virtual internships.
          </p>
        </div>

        {/* 3-Column Infinite Animated Mesh Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[640px] overflow-hidden relative before:absolute before:top-0 before:left-0 before:z-20 before:w-full before:h-24 before:bg-gradient-to-b before:from-slate-50 before:to-transparent dark:before:from-zinc-950 after:absolute after:bottom-0 after:left-0 after:z-20 after:w-full after:h-24 after:bg-gradient-to-t after:from-slate-50 after:to-transparent dark:after:from-zinc-950">
          {/* TRACK COLUMN 1 */}
          <motion.div
            animate={{ y: [0, -1200] }}
            transition={{ ease: "linear", duration: 22, repeat: Infinity }}
            className="space-y-6 will-change-transform"
          >
            {column1.map((rev, i) => (
              <ReviewCard key={i} review={rev} />
            ))}
          </motion.div>

          {/* TRACK COLUMN 2 (Reverse Scroll Direction for SaaS Aesthetics) */}
          <motion.div
            animate={{ y: [-1200, 0] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="space-y-6 hidden md:block will-change-transform"
          >
            {column2.map((rev, i) => (
              <ReviewCard key={i} review={rev} />
            ))}
          </motion.div>

          {/* TRACK COLUMN 3 */}
          <motion.div
            animate={{ y: [0, -1200] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="space-y-6 hidden lg:block will-change-transform"
          >
            {column3.map((rev, i) => (
              <ReviewCard key={i} review={rev} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reusable Inner Premium Card Layout Module
function ReviewCard({ review }) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 p-6 rounded-2xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors relative group">
      {/* Decorative clean sleek absolute quote sign layout wrapper */}
      <Quote className="absolute right-4 top-4 h-8 w-8 text-zinc-100 dark:text-zinc-800/40 group-hover:text-emerald-500/10 transition-colors pointer-events-none" />

      {/* Star Indicators metrics log */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
        "{review.text}"
      </p>

      {/* User Branding Avatar Row */}
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="h-10 w-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-800"
        />
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
            {review.name}
          </h4>
          <p className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}
