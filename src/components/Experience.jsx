import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    side: "left",
    title: "Full Stack Developer",
    company: "Freelance / Personal Practice",
    date: "2024 — Present",
    text: "Building responsive web applications, reusable UI components and practical full-stack projects while continuously improving frontend and backend skills.",
    icon: "⌂",
  },
  {
    side: "right",
    title: "Computer Science Student",
    company: "Kabul Polytechnic University",
    date: "2023 — Present",
    text: "Studying computer science with a focus on software development, databases, algorithms, web technologies and programming fundamentals.",
    icon: "⌘",
  },
  {
    side: "left",
    title: "Personal & Practice Projects",
    company: "Self-directed",
    date: "Ongoing",
    text: "Creating portfolio sites, dashboards, CRUD applications and UI experiments to turn theoretical knowledge into real development experience.",
    icon: "◇",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container-width">
        <SectionTitle eyebrow="My journey" title="Experience & Education" />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: item.side === "left" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .6 }}
                className={`relative md:grid md:grid-cols-2 ${item.side === "right" ? "md:text-left" : ""}`}
              >
                <div className={item.side === "left" ? "md:pr-10" : "md:col-start-2 md:pl-10"}>
                  <article className="glass ml-10 rounded-xl p-5 md:ml-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-extrabold">{item.title}</h3>
                        <p className="mt-1 text-[10px] text-cyan-300">{item.company}</p>
                      </div>
                      <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[9px] text-violet-300">{item.date}</span>
                    </div>
                    <p className="mt-4 text-xs leading-6 text-slate-500">{item.text}</p>
                  </article>
                </div>

                <span className="absolute left-[10px] top-5 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/30 bg-[#07102d] text-xs text-cyan-300 md:left-1/2 md:-translate-x-1/2">
                  {item.icon}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="mb-5 text-center text-sm font-bold">Certifications &amp; Awards</h3>
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-3">
            {["Web Development Certificate", "JavaScript Course Certificate", "UI / Frontend Certificate"].map((x) => (
              <div key={x} className="glass rounded-xl p-4 text-center text-[10px] text-slate-400">
                🏆 <span className="ml-1">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}