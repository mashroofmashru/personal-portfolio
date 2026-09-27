'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Copy, Check, Download } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mashroofvlk@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[88vh] pt-32 pb-16 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      {/* Background Subtle Glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-mono text-xs uppercase tracking-widest w-fit mb-6 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Open for MERN & Full-Stack Roles</span>
      </div>

      {/* Headline */}
      <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[1.05] text-slate-900 dark:text-slate-100">
        Mashroof <br className="hidden sm:inline" />
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">PP</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 font-mono text-sm sm:text-base uppercase tracking-widest text-slate-600 dark:text-slate-400 font-semibold">
        Full Stack Developer · React & Node.js
      </p>

      {/* Grounded Bio */}
      <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 max-w-3xl font-light leading-relaxed">
        I build full-stack web applications using React, Node.js, Express, and MongoDB. 
        I focus on clean REST API design, user authentication, database integration, and responsive user interfaces.
      </p>

      {/* Quick Contact Pills */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          onClick={copyEmail}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
          title="Click to copy email address"
        >
          <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>mashroofvlk@gmail.com</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
          )}
        </button>

        <a
          href="tel:+918078861815"
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>+91 8078861815</span>
        </a>

        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Kannur, Kerala</span>
        </div>
      </div>

      {/* Hero Buttons: Single Project Button + Download Resume PDF Button */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md transition-all duration-200"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <a
          href="/Mashroof%20Full%20Stack%20Developer%20(MERN).pdf"
          download="Mashroof_Full_Stack_Developer_MERN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-emerald-500 transition-all duration-200 shadow-sm font-semibold"
        >
          <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Divider */}
      <div className="my-12 border-t border-slate-200 dark:border-slate-800" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="font-display text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 font-bold">MERN</div>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest mt-1">Core Tech Stack</div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 font-bold">5+</div>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest mt-1">Completed Projects</div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="font-display text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 font-bold">BCA</div>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest mt-1">Kannur Univ. CS</div>
        </div>

        <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="font-display text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 font-bold">REST</div>
          <div className="font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest mt-1">APIs & Database</div>
        </div>
      </div>
    </section>
  );
}
