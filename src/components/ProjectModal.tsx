'use client';

import { Project } from '@/data/projects';
import { X, ExternalLink, ArrowRight, Layers, Cpu, AlertTriangle, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import Link from 'next/link';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-2 font-semibold">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              {project.category}
            </span>
            <span>·</span>
            <span>{project.typeBadge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 dark:text-slate-100">{project.title}</h2>
          <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mt-1 font-semibold">
            {project.subtitle}
          </p>
        </div>

        {/* Summary & Description */}
        <div className="space-y-3 text-slate-700 dark:text-slate-300 font-normal text-sm sm:text-base leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
          <p className="font-semibold text-slate-900 dark:text-slate-100">{project.summary}</p>
          <p>{project.description}</p>
        </div>

        {/* Architecture Highlights */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Architecture Highlights
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-normal pl-2">
            {project.architectureHighlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Challenges */}
        {project.keyChallenges && project.keyChallenges.length > 0 && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Technical Challenges & Solutions
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-normal pl-2">
              {project.keyChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Detailed Tech Stack */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-900 dark:text-slate-100 font-semibold mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Tech Stack Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.techStackDetailed.map((group, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-900 dark:text-slate-100 font-semibold mb-3">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-800 text-xs font-mono transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4" /> GitHub Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-mono hover:bg-emerald-700 transition-colors font-medium shadow-sm"
              >
                <ExternalLink className="w-4 h-4" /> Live Site
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:underline font-bold"
          >
            <span>Full Detail Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
