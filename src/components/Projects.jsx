import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-stack commerce interface with product discovery, authentication, cart flows and responsive UI.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Modern Agency",
    desc: "A polished agency landing page with animated sections, service cards and responsive layouts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    tags: ["React", "Motion", "Tailwind", "Vite"],
  },
  {
    title: "Course Platform",
    desc: "A clean learning dashboard concept for browsing courses, categories and learning progress.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
    tags: ["JavaScript", "React", "UI/UX"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-width">
        <SectionTitle
          eyebrow="My work"
          title="Featured Projects"
          text="A selection of projects that demonstrate frontend, backend and interaction skills."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ delay: i * .1 }}
              whileHover={{ y: -8 }}
              className="glass group overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d25] via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white">{project.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-violet-500/10 px-2.5 py-1 text-[9px] text-violet-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a href="#" className="text-[10px] font-bold text-cyan-300 hover:text-white">Live Demo ↗</a>
                  <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-white">Source Code ↗</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-flex rounded-lg bg-white px-5 py-3 text-[10px] font-bold text-slate-900 transition hover:-translate-y-1">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}