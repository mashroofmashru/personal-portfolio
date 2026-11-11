'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

const navLink =
  'text-[13px] font-medium text-ink-2 hover:text-accent transition-colors';
const mobileLink =
  'text-[15px] font-medium text-ink hover:text-accent py-3 border-b border-line';

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
        scrolled ? 'border-line py-2.5' : 'border-transparent py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-ink text-bg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-ink transition-colors">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-display font-extrabold text-lg tracking-tight text-ink">
              Mashroof<span className="text-accent">.</span>
            </span>
            <span className="hidden sm:block text-[9px] font-semibold tracking-[0.22em] uppercase text-muted mt-1">
              Full Stack
            </span>
          </span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/#about" className={navLink}>About</Link>
          <Link href="/#skills" className={navLink}>Skills</Link>
          <Link href="/projects" className={`${navLink} flex items-center gap-1.5`}>
            Projects
            <span className="text-[9px] px-1.5 leading-4 bg-amber text-amber-ink rounded-full font-bold">ALL</span>
          </Link>
          <Link href="/#education" className={navLink}>Education</Link>
          <Link href="/#contact" className={navLink}>Contact</Link>
        </nav>

        {/* CTA & Theme Switcher */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/#contact" className="hidden sm:inline-flex btn btn-amber py-2 px-4">
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-1 pb-4 mt-3 bg-bg border-y border-line flex flex-col">
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className={mobileLink}>
            About
          </Link>
          <Link href="/#skills" onClick={() => setMobileMenuOpen(false)} className={mobileLink}>
            Skills
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className={`${mobileLink} flex items-center justify-between`}
          >
            <span>Projects Catalog</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber text-amber-ink font-bold">View All</span>
          </Link>
          <Link href="/#education" onClick={() => setMobileMenuOpen(false)} className={mobileLink}>
            Education
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[15px] text-accent font-semibold pt-3 flex items-center gap-2"
          >
            Get in Touch <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
