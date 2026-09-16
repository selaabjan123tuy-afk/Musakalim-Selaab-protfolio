import React from "react";
import { motion } from "motion/react";

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[.35em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>}
    </motion.div>
  );
}