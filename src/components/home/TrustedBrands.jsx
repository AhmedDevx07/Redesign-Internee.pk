import React from "react";
import { motion } from "framer-motion";

export default function TrustedBrands() {
  // Top industries/companies logos placeholders text (Aap real images/SVG elements bhi use kar sakte hain)
  const brands = [
    { name: "Systems Ltd", type: "Tech Powerhouse" },
    { name: "Contour Software", type: "Enterprise Dev" },
    { name: "10Pearls", type: "Digital Innovation" },
    { name: "Arbisoft", type: "Scale Engineering" },
    { name: "Folio3", type: "Enterprise Mobile" },
    { name: "NetSol", type: "Global Finance IT" },
  ];

  // Duplicate list to achieve infinite seamless loop effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-10 bg-white dark:bg-zinc-950 border-y border-zinc-200/50 dark:border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Minimalist Title */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
          Trusted by students from top tech ecosystems & companies across
          Pakistan
        </p>

        {/* Outer Wrapper with fade masks on left/right for luxury gradient feel */}
        <div className="relative w-full flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent dark:before:from-zinc-950 after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent dark:after:from-zinc-950">
          {/* Framer Motion Infinite Track */}
          <motion.div
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-center min-w-[140px] group cursor-pointer select-none"
              >
                {/* Brand Name Label - High Typography Styling */}
                <span className="text-lg md:text-xl font-bold text-zinc-400 dark:text-zinc-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 tracking-tight">
                  {brand.name}
                </span>

                {/* Brand Sub-niche Tag */}
                <span className="text-[10px] font-medium text-zinc-300 dark:text-zinc-700 tracking-wide mt-0.5">
                  {brand.type}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
