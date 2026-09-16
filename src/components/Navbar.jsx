import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#03091d]/75 backdrop-blur-xl">
      <div className="container-width flex h-16 items-center justify-between">
        <a href="#home" className="text-lg font-black tracking-tight">
          Musakalim <span className="text-cyan-400">Selaab</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-medium text-slate-400 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-[11px] 
          font-bold shadow-lg shadow-violet-900/30 transition hover:-translate-y-0.5 md:block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#050b22] md:hidden"
          >
            <div className="container-width flex flex-col gap-1 py-4">
              {links.map((link) => (
                <a
                  onClick={() => setOpen(false)}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 hover:bg-white/5"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}