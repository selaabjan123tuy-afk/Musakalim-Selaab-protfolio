import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const groups = [
  {
    title: "Frontend Development",
    skills: [["HTML/CSS", 95], ["JavaScript", 90], ["React", 88], ["Tailwind CSS", 92], ["Responsive UI", 94]],
  },
  {
    title: "Backend Development",
    skills: [["Node.js", 82], ["Express", 80], ["C# / .NET", 78], ["REST API", 82], ["MySQL / SQL", 80]],
  },
  {
    title: "Tools & Others",
    skills: [["Git / GitHub", 90], ["VS Code", 96], ["Figma", 72], ["Vite", 90], ["Motion", 84]],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-space relative">
      <div className="container-width">
        <SectionTitle
          eyebrow="My skill set"
          title="Technologies I Work With"
          text="A growing toolkit for creating complete, modern web experiences."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * .1 }}
              className="glass rounded-2xl p-5"
            >
              <h3 className="mb-6 font-bold">{group.title}</h3>
              <div className="space-y-5">
                {group.skills.map(([name, value]) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-[10px]">
                      <span className="text-slate-300">{name}</span>
                      <span className="text-cyan-400">{value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: .8, delay: .1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <p className="text-[9px] uppercase tracking-[.3em] text-slate-600">Also experienced with</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Angular", "PHP", "Git", "Figma", "Vercel", "REST"].map((x) => (
              <span key={x} className="rounded-full border border-white/10 bg-white/[.02] px-3 py-1.5 text-[10px] text-slate-400">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}