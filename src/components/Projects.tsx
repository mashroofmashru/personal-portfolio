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
      <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 border-t border-slate-200 dark:border-slate-800">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold mb-3">
          <span className="w-6 h-[1.5px] bg-emerald-500 inline-block" />
          <span>03 // Projects & Code</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-slate-100">
              Featured <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal mt-2 max-w-2xl">
              Web applications, REST backends, and frontend interfaces built with React, Node.js, and MongoDB.
            </p>
          </div>

          {/* Filter Matrix Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm font-semibold'
                    : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">
                    0{index + 1} — {project.category}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 uppercase tracking-wider font-semibold">
                    {project.typeBadge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                  {project.subtitle}
                </p>

                <p className="text-slate-700 dark:text-slate-300 font-normal text-sm sm:text-base leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all font-semibold shadow-sm"
                  >
                    <span>Full Details Page</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors"
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
                      className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                      title="Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Architecture Bullets */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100 font-semibold pb-2 border-b border-slate-200 dark:border-slate-800">
                  <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Key Implementation Details
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-normal">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Button */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shadow-sm font-semibold"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>View All Projects Catalog Page</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
