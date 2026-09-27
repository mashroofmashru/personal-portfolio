'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav border-b ${
        scrolled
          ? 'border-slate-200/80 dark:border-slate-800/80 py-3 shadow-md'
          : 'border-slate-200/40 dark:border-slate-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 text-decoration-none">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Mashroof<span className="font-sans font-light text-emerald-500">.</span>
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            Full Stack
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors flex items-center gap-1"
          >
            Projects
            <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded font-bold">ALL</span>
          </Link>
          <Link
            href="/#education"
            className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
          >
            Education
          </Link>
          <Link
            href="/#contact"
            className="font-mono text-xs uppercase tracking-widest text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA & Theme Switcher */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-600 hover:text-white transition-all duration-200 font-semibold shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 flex flex-col gap-4">
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-emerald-600 py-2 border-b border-slate-200 dark:border-slate-800"
          >
            About
          </Link>
          <Link
            href="/#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-emerald-600 py-2 border-b border-slate-200 dark:border-slate-800"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-emerald-600 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between"
          >
            <span>Projects Catalog</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">View All</span>
          </Link>
          <Link
            href="/#education"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-emerald-600 py-2 border-b border-slate-200 dark:border-slate-800"
          >
            Education
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold py-2 flex items-center gap-2"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
