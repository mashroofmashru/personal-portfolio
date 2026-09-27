'use client';

import { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mashroofvlk@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-4xl mx-auto space-y-6">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
          <span className="w-6 h-[1.5px] bg-emerald-500 inline-block" />
          <span>05 // Get in Touch</span>
          <span className="w-6 h-[1.5px] bg-emerald-500 inline-block" />
        </div>

        {/* Display Heading */}
        <h2 className="font-display font-bold text-4xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-slate-100">
          Get In <span className="text-emerald-600 dark:text-emerald-400">Touch</span>
        </h2>

        <p className="text-slate-700 dark:text-slate-300 font-normal text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
          I am currently open to full-time entry-level backend and full-stack developer roles. Feel free to send an email or connect.
        </p>

        {/* Copy Email Button Card */}
        <div className="pt-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 sm:px-8 sm:py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
            <a
              href="mailto:mashroofvlk@gmail.com"
              className="font-display text-xl sm:text-3xl text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-bold"
            >
              mashroofvlk@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-1.5 font-semibold"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/mashroofmashru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm font-semibold"
          >
            <GithubIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://www.linkedin.com/in/mashroof-mashru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm font-semibold"
          >
            <LinkedinIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="tel:+918078861815"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs uppercase tracking-wider hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm font-semibold"
          >
            <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>+91 8078861815</span>
          </a>
        </div>
      </div>
    </section>
  );
}
