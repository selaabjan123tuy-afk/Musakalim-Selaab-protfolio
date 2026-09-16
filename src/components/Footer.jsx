import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020719]">
      <div className="container-width grid gap-8 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h3 className="font-black">Musakalim <span className="text-cyan-400">Selaab</span></h3>
          <p className="mt-3 max-w-sm text-xs leading-6 text-slate-500">
            Full Stack Web Developer focused on modern, responsive and user-friendly digital experiences.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold">Quick Links</h4>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-slate-500">
            {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((x) => (
              <a key={x} href={`#${x.toLowerCase()}`} className="hover:text-white">{x}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold">Stay Updated</h4>
          <p className="mt-3 text-[10px] leading-5 text-slate-500">Subscribe for occasional updates and project news.</p>
          <div className="mt-3 flex">
            <input className="min-w-0 flex-1 rounded-l-lg border border-white/10 bg-white/[.03] px-3 py-2 text-[10px]" placeholder="Your email" />
            <button className="rounded-r-lg bg-violet-600 px-3 text-[10px] font-bold">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="container-width flex flex-col gap-2 border-t border-white/5 py-5 text-[9px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Musakalim Selaab. Made with React &amp; Tailwind CSS.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}