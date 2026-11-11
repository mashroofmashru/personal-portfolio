'use client';

import { useState } from 'react';
import { Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('mashroofvlk@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="section-label center"><b>05</b> // Get in Touch</div>

      <div className="text-center max-w-4xl mx-auto mt-8">
        {/* Display Heading */}
        <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.045em] leading-[0.9] text-ink">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <p className="mt-4 text-ink-2 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          I am currently open to full-time entry-level backend and full-stack developer roles. Feel free to send an email or connect.
        </p>

        {/* Email + copy */}
        <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 panel px-4 py-3 sm:pl-6">
          <a
            href="mailto:mashroofvlk@gmail.com"
            className="font-display text-xl sm:text-3xl font-bold tracking-tight text-ink hover:text-accent transition-colors underline decoration-line-strong decoration-1 underline-offset-[6px] hover:decoration-accent"
          >
            mashroofvlk@gmail.com
          </a>
          <button onClick={copyEmail} className="btn btn-primary py-2" title="Copy Email Address">
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
            className="btn group hover:text-accent hover:border-accent"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent" />
          </a>

          <a
            href="https://www.linkedin.com/in/mashroof-mashru/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn group hover:text-accent hover:border-accent"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent" />
          </a>

          <a href="tel:+918078861815" className="btn hover:text-accent hover:border-accent">
            <Phone className="w-4 h-4" />
            <span>+91 8078861815</span>
          </a>
        </div>
      </div>
    </section>
  );
}
