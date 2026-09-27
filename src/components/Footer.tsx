'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Mashroof PP · All Rights Reserved
        </div>

        <div className="font-mono text-[11px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <span>Crafted with</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Next.js 14 & Tailwind CSS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-900 border border-slate-300/60 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:border-emerald-500 transition-all"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
