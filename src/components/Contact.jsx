import React, { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";



const links = [
  {
    id: 1,
    name: "GH",
    url: "https://github.com/selaabjan123tuy-afk",
  },
  {
    id: 2,
    name: "Ln",
    url: "https://www.linkedin.com/in/musakalim-selaab-717306374",
  },
  {
    id: 3,
    name: "Fb",
    url: "https://facebook.com/profile.php?id=100083688034566",
  }
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  }

  return (
    <section id="contact" className="section-space">
      <div className="container-width">
        <SectionTitle
          eyebrow="Get in touch"
          title="Let's Work Together"
          text="Have a project, idea or question? Send me a message and I'll get back to you."
        />

        <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-3">
            {[
              ["✉", "Email", "selaabjan123tuy@gmail.com"],
              ["☎", "Phone", "+93 700851480"],
              ["⌖", "Location", "Kabul, Afghanistan"],
            ].map(([icon, label, value]) => (
              <div key={label} className="glass rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">{icon}</div>
                  <div>
                    <p className="text-[10px] text-slate-500">{label}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-200">{value}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-4">
              <p className="text-xs font-bold">Follow Me</p>
              <div className="mt-3 flex gap-2">
                {links.map((link) => (
                  <a key={link.id} href={link.url} target="_blank" rel="Musakalim selaab" className="grid h-9 w-9 place-items-center
                   rounded-lg border border-white/10 text-xs text-slate-400 hover:text-cyan-300">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/5 p-4">
              <p className="text-xs font-bold text-emerald-300">● Available for Work</p>
              <p className="mt-1 text-[10px] text-slate-500">Open to freelance and development opportunities.</p>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5 sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-[10px] text-slate-500">
                Your Name
                <input required className="mt-2 w-full rounded-lg border border-white/10 bg-[#080f28] px-4 py-3 text-xs text-white" placeholder="Your name" />
              </label>
              <label className="text-[10px] text-slate-500">
                Your Email
                <input required type="email" className="mt-2 w-full rounded-lg border border-white/10 bg-[#080f28] px-4 py-3 text-xs text-white" placeholder="you@example.com" />
              </label>
            </div>

            <label className="mt-4 block text-[10px] text-slate-500">
              Subject
              <input required className="mt-2 w-full rounded-lg border border-white/10 bg-[#080f28] px-4 py-3 text-xs text-white" placeholder="Project subject" />
            </label>

            <label className="mt-4 block text-[10px] text-slate-500">
              Message
              <textarea required rows="6" className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#080f28] px-4 py-3 text-xs text-white" placeholder="Tell me about your project..." />
            </label>

            <button className="mt-5 w-full rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 py-3 text-xs font-bold shadow-lg shadow-violet-900/20 transition hover:-translate-y-0.5">
              {sent ? "Message Sent ✓" : "Send Message ↗"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}