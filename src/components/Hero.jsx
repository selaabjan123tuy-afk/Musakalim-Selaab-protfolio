import React from "react";
import { motion } from "motion/react";
import Musakalim from "../Musakalim.png";


const links = [
  {
    id: 1,
    name: "Gethub",
    url: "https://github.com/selaabjan123tuy-afk",
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/musakalim-selaab-717306374",
  },
  {
    id: 3,
    name: "Facebook",
    url: "https://facebook.com/profile.php?id=100083688034566",
  }
];

export default function Hero() {
  return (
    <section id="home" className="grid-bg relative flex min-h-screen items-center pt-20">
      <div className="container-width grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <p className="mb-4 text-sm font-semibold text-cyan-400">Welcome to my portfolio</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[.95] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <br />
            <span className="bg-gradient-to-r from-white via-cyan-200 to-violet-400 bg-clip-text text-transparent">
              Musakalim
            </span>
            <br />
            Selaab
          </h1>

          <h2 className="mt-6 text-xl font-bold text-slate-200">Full Stack Web Developer</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            I design and develop high-quality digital experiences powered by modern technologies.
             My expertise includes React, Node.js, and cloud architecture, focusing on performance,
              scalability, and clean design. As a freelance developer on Upwork, Fiverr, and Freelancer,
             I collaborate with clients worldwide to bring their ideas to life.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-xs font-bold shadow-xl shadow-violet-900/30 transition hover:-translate-y-1">
              View My Work ↗
            </a>
            <a href="#contact" className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-5 py-3 text-xs font-bold text-cyan-300 transition hover:bg-cyan-400/10">
              Let&apos;s Talk
            </a>
          </div>

          <div className="mt-7 flex gap-3 text-xs text-slate-500">
            {links.map((link) => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-3 py-2 hover:border-cyan-400/40 hover:text-cyan-300">
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: .8, type: "spring" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -right-3 top-10 h-20 w-20 rounded-2xl bg-violet-600/20 blur-2xl" />
          <div className="absolute -left-4 bottom-8 h-24 w-24 rounded-2xl bg-cyan-500/20 blur-2xl" />

          <div className="relative rounded-full border border-violet-300/30 bg-gradient-to-br from-violet-600/40 via-blue-600/10 to-cyan-400/20 p-3 glow">
            <div className="overflow-hidden rounded-full border border-white/10 bg-slate-900">
              <img
                src={Musakalim}
                alt="Developer portrait"
                className="aspect-square w-full object-cover grayscale-[15%]"
              />
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -left-5 rounded-2xl border border-white/10 bg-[#0b1230]/90 px-4 py-3 shadow-2xl backdrop-blur"
          >
            <span className="text-xs font-bold text-cyan-300">● Available for work</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}