import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the duration of these virtual internships?",
      answer:
        "Typically, our internship tracks last between 1 to 2 months. However, since it is a self-paced learning portal, you can complete your assigned tasks ahead of schedule depending on your velocity.",
    },
    {
      question: "Are these internships paid or free?",
      answer:
        "Our core virtual internship tracks are completely free of cost, designed to help students across Pakistan build verifiable portfolio skills without financial barriers.",
    },
    {
      question: "How will my performance and tasks be evaluated?",
      answer:
        "Once you submit your project files and links via the internee.pk Task Portal, our automated evaluation pipeline and industry mentors review the code workflow, quality, and responsiveness before granting a passing score.",
    },
    {
      question: "Will I get an industry-recognized certificate?",
      answer:
        "Yes! Upon successful completion and verification of all required milestones in your selected track, you will be issued a verifiable digital certificate with a unique ID.",
    },
    {
      question: "Can I apply for multiple internship tracks at the same time?",
      answer:
        "To ensure maximum focus and high-quality task submissions, we highly recommend enrolling in and completing one internship track at a time.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full">
            Help Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
            Got questions? We have got answers. Find everything you need to know
            about our virtual tracks.
          </p>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-sm sm:text-base text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none"
                >
                  <span className="pr-4 leading-snug">{faq.question}</span>
                  <div
                    className={`p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-850 border border-zinc-200/40 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    {isOpen ? (
                      <HiOutlineMinus className="h-4 w-4" />
                    ) : (
                      <HiOutlinePlus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                {/* Animated Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-850">
                        <div className="pt-4">{faq.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
