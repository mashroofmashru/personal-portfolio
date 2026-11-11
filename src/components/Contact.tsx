'use client';

import { useState } from 'react';
import { Phone, Copy, Check, ArrowUpRight, Asterisk } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const bandBtn =
  'btn group bg-transparent text-band-ink border-band-line hover:border-band-accent hover:text-band-accent';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mashroofvlk@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative bg-band text-band-ink overflow-hidden">
      {/* Decorative asterisks */}
      <Asterisk aria-hidden strokeWidth={1.25} className="absolute -left-10 -bottom-10 w-48 h-48 text-band-accent/20" />
      <Asterisk aria-hidden strokeWidth={1.5} className="absolute right-6 top-8 w-14 h-14 text-amber/80" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="section-label center text-band-ink [&_b]:text-band-muted"><b>05</b> // Get in Touch</div>

        <div className="text-center max-w-4xl mx-auto mt-6">
          {/* Display Heading */}
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.045em] leading-[0.92]">
            Get In <span className="text-band-accent">Touch</span>
          </h2>

          <p className="mt-4 text-band-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I am currently open to full-time entry-level backend and full-stack developer roles. Feel free to send an email or connect.
          </p>

          {/* Email + copy */}
          <div className="mt-7 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 rounded-2xl border border-band-line bg-white/[0.04] px-4 py-3 sm:pl-6">
            <a
              href="mailto:mashroofvlk@gmail.com"
              className="font-display text-xl sm:text-3xl font-extrabold tracking-tight hover:text-band-accent transition-colors"
            >
              mashroofvlk@gmail.com
            </a>
            <button onClick={copyEmail} className="btn btn-amber py-2" title="Copy Email Address">
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
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

          {/* Social Links */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://github.com/mashroofmashru"
              target="_blank"
              rel="noopener noreferrer"
              className={bandBtn}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </a>

            <a
              href="https://www.linkedin.com/in/mashroof-mashru/"
              target="_blank"
              rel="noopener noreferrer"
              className={bandBtn}
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </a>

            <a href="tel:+918078861815" className={bandBtn}>
              <Phone className="w-4 h-4" />
              <span>+91 8078861815</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
