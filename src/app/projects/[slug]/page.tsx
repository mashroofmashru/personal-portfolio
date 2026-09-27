import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';
import { GithubIcon } from '@/components/SocialIcons';
import { ChevronLeft, ExternalLink, Cpu, Layers, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 uppercase tracking-widest transition-colors font-medium"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Projects Catalog
          </Link>

          <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Title Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-slate-100 tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-sm sm:text-base text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-semibold">
            {project.subtitle}
          </p>
          <p className="text-slate-700 dark:text-slate-300 font-normal text-base sm:text-xl leading-relaxed pt-2 max-w-4xl">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-slate-800 font-mono text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-sm font-semibold"
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-mono text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" /> Visit Live Site
              </a>
            )}
          </div>
        </div>

        {/* Content Section Blocks */}
        <div className="py-10 space-y-10">
          {/* Architecture Highlights */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Architecture & Implementation Details
            </h2>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300 font-normal text-sm sm:text-base pl-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">—</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Challenges */}
          {project.keyChallenges && project.keyChallenges.length > 0 && (
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h2 className="font-mono text-sm uppercase tracking-widest text-amber-700 dark:text-amber-400 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" /> Technical Challenges & Solutions
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300 font-normal text-sm sm:text-base pl-2">
                {project.keyChallenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">—</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Detailed Tech Stack */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100 font-semibold flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> Detailed Technology Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.techStackDetailed.map((group, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h2 className="font-mono text-sm uppercase tracking-widest text-slate-900 dark:text-slate-100 font-semibold">
              Features List
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 p-3.5 px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 transition-all w-full sm:w-auto justify-center font-semibold shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Prev: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 p-3.5 px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-slate-800 dark:text-slate-200 transition-all w-full sm:w-auto justify-center font-semibold shadow-sm"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
