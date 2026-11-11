'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-5 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="font-mono text-[11px] uppercase tracking-wider text-muted">
          © {new Date().getFullYear()} Mashroof PP · All Rights Reserved
        </div>

        <div className="font-mono text-[11px] text-muted flex items-center gap-1.5">
          <span>Crafted with</span>
          <span className="text-ink">Next.js 14 & Tailwind CSS</span>
        </div>

        <button onClick={scrollToTop} className="icon-btn p-2" title="Scroll to Top" aria-label="Scroll to Top">
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
