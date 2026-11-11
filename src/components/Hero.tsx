'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Copy, Check, Download } from 'lucide-react';

const pill =
  'flex items-center gap-2 px-3 py-2 rounded-[3px] bg-surface border border-line text-ink-2 text-xs font-mono transition-colors';

const stats = [
  { value: 'MERN', label: 'Core Tech Stack', accent: true },
  { value: '5+', label: 'Completed Projects' },
  { value: 'BCA', label: 'Kannur Univ. CS' },
  { value: 'REST', label: 'APIs & Database', accent: true },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mashroofvlk@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-32 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      {/* Status Badge */}
      <div className="rise rise-1 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted mb-5">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span>Open for MERN & Full-Stack Roles</span>
      </div>

      {/* Headline */}
      <h1 className="rise rise-2 font-display font-extrabold text-6xl sm:text-8xl lg:text-9xl xl:text-[10rem] tracking-[-0.045em] leading-[0.86] text-ink">
        Mashroof <br className="hidden sm:inline" />
        <span className="text-accent">PP</span>
      </h1>

      {/* Subtitle */}
      <p className="rise rise-3 mt-6 font-mono text-sm uppercase tracking-[0.14em] text-ink">
        Full Stack Developer · React & Node.js
      </p>

      {/* Grounded Bio */}
      <p className="rise rise-3 mt-3 text-base sm:text-lg text-ink-2 max-w-2xl leading-relaxed">
        I build full-stack web applications using React, Node.js, Express, and MongoDB.
        I focus on clean REST API design, user authentication, database integration, and responsive user interfaces.
      </p>

      {/* Quick Contact Pills */}
      <div className="rise rise-4 mt-6 flex flex-wrap items-center gap-2">
        <button
          onClick={copyEmail}
          className={`group ${pill} hover:border-accent hover:text-accent`}
          title="Click to copy email address"
        >
          <Mail className="w-3.5 h-3.5 text-accent" />
          <span>mashroofvlk@gmail.com</span>
          {copied ? (
            <Check className="w-3.5 h-3.5 text-accent" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-colors" />
          )}
        </button>

        <a href="tel:+918078861815" className={`${pill} hover:border-accent hover:text-accent`}>
          <Phone className="w-3.5 h-3.5 text-accent" />
          <span>+91 8078861815</span>
        </a>

        <div className={pill}>
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>Kannur, Kerala</span>
        </div>
      </div>

      {/* Hero Buttons */}
      <div className="rise rise-5 mt-4 flex flex-wrap items-center gap-2">
        <Link href="#projects" className="btn btn-primary group">
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <a
          href="/Mashroof%20Full%20Stack%20Developer%20(MERN).pdf"
          download="Mashroof_Full_Stack_Developer_MERN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <Download className="w-4 h-4 text-accent" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Stats Grid — hairline ledger */}
      <div className="rise rise-6 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-[4px] overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg px-4 py-4">
            <div className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${s.accent ? 'text-accent' : 'text-ink'}`}>
              {s.value}
            </div>
            <div className="font-mono text-[11px] text-muted uppercase tracking-[0.12em] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
