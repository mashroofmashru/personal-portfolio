'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';
import { GithubIcon } from '@/components/SocialIcons';
import { Search, FolderGit2, ArrowRight, ExternalLink, ChevronLeft } from 'lucide-react';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Marketplace', 'Company Website', 'Mini Project'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-14">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-accent uppercase tracking-[0.12em] mb-5 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>Projects Directory</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.04em] leading-[0.92] text-ink">
            Projects <span className="text-accent">Catalog</span>
          </h1>

          <p className="mt-3 text-ink-2 text-base sm:text-lg max-w-3xl">
            A full list of web applications, backend APIs, marketplaces, and frontend tools I have built.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="panel p-3 sm:p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search projects by name or technology (e.g. React, MongoDB, Express)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-[3px] bg-bg border border-line text-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-line">
            <span className="font-mono text-xs text-muted uppercase tracking-wider">Categories:</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  data-active={selectedCategory === cat}
                  className="tab"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 px-6 rounded-[4px] border border-dashed border-line-strong">
            <p className="font-mono text-sm text-muted">No projects match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 link-arrow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredProjects.map((project) => (
              <article
                key={project.slug}
                className="panel p-5 flex flex-col transition-colors hover:border-line-strong"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-muted">{project.typeBadge}</span>
                </div>

                <h2 className="mt-3 font-display font-bold text-2xl sm:text-[1.7rem] tracking-[-0.02em] text-ink">
                  {project.title}
                </h2>
                <p className="mt-0.5 font-mono text-xs text-muted uppercase tracking-wider">{project.subtitle}</p>

                <p className="mt-3 text-ink-2 text-sm leading-relaxed line-clamp-3">{project.summary}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>

                <div className="pt-4 mt-auto">
                  <div className="pt-4 mt-1 border-t border-line flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn p-2"
                          title="GitHub Repo"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-btn p-2"
                          title="Live Site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <Link href={`/projects/${project.slug}`} className="link-arrow">
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
