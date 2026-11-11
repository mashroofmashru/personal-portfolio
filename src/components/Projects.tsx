'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projectsData, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { ArrowUpRight, ExternalLink, Code2, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Marketplace', 'Company Website', 'Mini Project'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="py-14 sm:py-16 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-label"><b>03</b> // Projects & Code</div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[0.98] text-ink">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
              Web applications, REST backends, and frontend interfaces built with React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-active={activeCategory === cat}
                className="tab"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="panel p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-colors hover:border-line-strong"
            >
              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-[0.12em]">
                    <span className="text-accent">0{index + 1}</span> — {project.category}
                  </span>
                  <span className="chip uppercase tracking-wider">{project.typeBadge}</span>
                </div>

                <h3 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-[-0.02em] text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-accent uppercase tracking-wider">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-ink-2 text-sm sm:text-base leading-relaxed">{project.summary}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-5">
                  <Link href={`/projects/${project.slug}`} className="btn btn-primary py-2.5">
                    <span>Full Details Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      title="Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Architecture Bullets */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-surface-2 border border-line">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink font-medium pb-2.5 mb-3 border-b border-line">
                  <Code2 className="w-4 h-4 text-accent" /> Key Implementation Details
                </div>
                <ul className="space-y-2 text-sm text-ink-2 leading-snug">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-[11px] text-accent pt-0.5 shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Catalog Button */}
        <div className="mt-6 text-center">
          <Link href="/projects" className="btn">
            <FolderGit2 className="w-4 h-4 text-accent" />
            <span>View All Projects Catalog Page</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
