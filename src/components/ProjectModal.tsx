'use client';

import { Project } from '@/data/projects';
import { X, ExternalLink, ArrowRight, Layers, Cpu, AlertTriangle, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import Link from 'next/link';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const heading = 'font-mono text-xs uppercase tracking-[0.12em] font-medium flex items-center gap-2';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto panel text-ink p-5 sm:p-7 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close modal" className="absolute top-4 right-4 icon-btn p-1.5">
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-muted mb-2">
            <span className="text-accent">{project.category}</span>
            <span>·</span>
            <span>{project.typeBadge}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em] text-ink">{project.title}</h2>
          <p className="font-mono text-xs text-accent uppercase tracking-wider mt-1">{project.subtitle}</p>
        </div>

        {/* Summary & Description */}
        <div className="space-y-3 text-ink-2 text-sm sm:text-base leading-relaxed border-t border-line pt-4">
          <p className="font-medium text-ink">{project.summary}</p>
          <p>{project.description}</p>
        </div>

        {/* Architecture Highlights */}
        <div className="p-4 rounded-xl bg-surface-2 border border-line space-y-2">
          <h3 className={`${heading} text-ink`}>
            <Cpu className="w-4 h-4 text-accent" /> Architecture Highlights
          </h3>
          <ul className="space-y-1.5 text-sm text-ink-2">
            {project.architectureHighlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-accent">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Challenges */}
        {project.keyChallenges && project.keyChallenges.length > 0 && (
          <div className="p-4 rounded-xl bg-surface-2 border border-line space-y-2">
            <h3 className={`${heading} text-ink`}>
              <AlertTriangle className="w-4 h-4 text-accent" /> Technical Challenges & Solutions
            </h3>
            <ul className="space-y-1.5 text-sm text-ink-2">
              {project.keyChallenges.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h3 className={`${heading} text-ink mb-3`}>
            <Layers className="w-4 h-4 text-accent" /> Tech Stack Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.techStackDetailed.map((group, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-line">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{group.category}</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className={`${heading} text-ink mb-3`}>Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 mt-1 text-accent shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn py-2">
                <GithubIcon className="w-4 h-4" /> GitHub Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2">
                <ExternalLink className="w-4 h-4" /> Live Site
              </a>
            )}
          </div>

          <Link href={`/projects/${project.slug}`} onClick={onClose} className="link-arrow">
            <span>Full Detail Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
