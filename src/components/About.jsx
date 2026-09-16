import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const cards = [
  ["Clean Code", "Readable, maintainable and reusable code."],
  ["UI/UX Design", "Interfaces focused on clarity and usability."],
  ["Performance", "Fast, responsive experiences across devices."],
  ["Quality First", "Careful testing and attention to detail."],
];

const stats = [
  ["2+", "Years learning"],
  ["12+", "Projects completed"],
  ["20+", "Tools & skills"],
  ["15+", "Happy clients"],
];

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container-width">
        <SectionTitle
          eyebrow="About me"
          title="Building Digital Experiences"
          text="A short introduction to my approach, skills and the way I solve problems."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.article
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <p className="text-lg font-extrabold text-white">
              Creative Mind Behind Clean &amp; Functional Code
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I&apos;m a web developer who enjoys building responsive websites and
              applications. My focus is creating interfaces that look modern while
              remaining practical, accessible and easy to maintain.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I continuously improve my skills in frontend and backend development,
              explore new technologies and turn real ideas into working products.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind", "Node.js", "C#", "SQL"].map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[10px] text-cyan-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>

          <div className="grid grid-cols-2 gap-4">
            {cards.map(([title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className="glass rounded-2xl p-5"
              >
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-violet-500/10 text-violet-300">
                  ✦
                </div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map(([number, label]) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-5 text-center"
            >
              <div className="text-2xl font-black text-white">{number}</div>
              <div className="mt-1 text-[10px] text-slate-500">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}