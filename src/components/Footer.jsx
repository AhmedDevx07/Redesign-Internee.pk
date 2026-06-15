import React from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowRight, HiOutlineGlobeAlt } from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "About Us", href: "#" },
      { name: "Internships", href: "#" },
      { name: "AI Coach", href: "#" },
      { name: "Become Instructor", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Support", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-white font-black text-xl tracking-tight">
                Internee.pk
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Pakistan's leading virtual internship platform. Bridging the gap
              between theory and industry expertise through hands-on learning.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-zinc-900 border border-zinc-800/60 rounded-lg hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 border border-zinc-800/60 rounded-lg hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-zinc-900 border border-zinc-800/60 rounded-lg hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wide uppercase">
              Platform
            </h4>
            <ul className="space-y-4 text-sm">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wide uppercase">
              Resources
            </h4>
            <ul className="space-y-4 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Stay Updated
            </h4>
            <p className="text-xs leading-relaxed">
              Get the latest internship alerts and tech trends directly in your
              inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-600 transition"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-emerald-600 rounded-md text-white hover:bg-emerald-500 transition">
                <HiOutlineArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">
            © {currentYear} Internee.pk. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs hover:text-white cursor-pointer transition">
            <HiOutlineGlobeAlt className="h-4 w-4" /> English (PK)
          </div>
        </div>
      </div>
    </footer>
  );
}
