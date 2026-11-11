'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Copy, Check, Download } from 'lucide-react';
import HeroCodeCard from './HeroCodeCard';

const pill =
  'flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface border border-line text-ink-2 text-[13px] font-medium transition-colors';

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
    <section id="hero" className="relative overflow-x-clip pt-28 sm:pt-32 pb-12 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
        {/* Left: intro */}
        <div className="lg:col-span-7">
      {/* Status Badge */}
      <div className="rise rise-1 section-label mb-5">
        <span>Open for MERN & Full-Stack Roles</span>
      </div>

      {/* Headline */}
      <h1 className="rise rise-2 font-display font-extrabold text-6xl sm:text-8xl lg:text-8xl xl:text-9xl tracking-[-0.045em] leading-[0.92] text-ink">
        Mashroof <br className="hidden sm:inline" />
        <span className="text-accent">PP</span>
        <span className="text-amber">.</span>
      </h1>

      {/* Subtitle */}
      <p className="rise rise-3 mt-6 text-xs font-bold uppercase tracking-[0.2em] text-ink">
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
      <div className="rise rise-5 mt-6 flex flex-wrap items-center gap-3">
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

        </div>

        {/* Right: code card */}
        <div className="lg:col-span-5 rise rise-4 pb-6 max-w-xl lg:max-w-none">
          <HeroCodeCard />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="rise rise-6 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
        {stats.map((s) => (
          <div key={s.label} className="bg-surface px-5 py-4">
            <div className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${s.accent ? 'text-accent' : 'text-ink'}`}>
              {s.value}
            </div>
            <div className="text-[10px] font-bold text-muted uppercase tracking-[0.18em] mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
