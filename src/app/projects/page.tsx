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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-24">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 uppercase tracking-widest mb-6 transition-colors font-medium"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>Projects Directory</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100 tracking-tight">
            Projects <span className="text-emerald-600 dark:text-emerald-400">Catalog</span>
          </h1>

          <p className="text-slate-700 dark:text-slate-300 font-normal text-base sm:text-lg max-w-3xl">
            A full list of web applications, backend APIs, marketplaces, and frontend tools I have built.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 mb-10 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects by name or technology (e.g. React, MongoDB, Express)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="font-mono text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-medium">
              Categories:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm font-semibold'
                      : 'bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid: 3 columns on widescreen */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            <p className="font-mono text-sm text-slate-600 dark:text-slate-400">No projects match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 font-mono text-xs text-emerald-600 dark:text-emerald-400 hover:underline uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      {project.typeBadge}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h2>
                  <p className="font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 font-normal text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors"
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
                        className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                        title="Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline uppercase tracking-wider"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
