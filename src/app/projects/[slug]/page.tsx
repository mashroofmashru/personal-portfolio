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

const blockHeading =
  'font-mono text-xs sm:text-sm uppercase tracking-[0.12em] text-ink font-medium flex items-center gap-2';

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col text-ink">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-14">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-accent uppercase tracking-[0.12em] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Projects Catalog
          </Link>

          <span className="chip uppercase tracking-wider text-accent">{project.category}</span>
        </div>

        {/* Title Header */}
        <div className="pb-8 border-b border-line">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[-0.045em] leading-[0.9] text-ink">
            {project.title}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-accent">{project.subtitle}</p>
          <p className="mt-4 text-ink-2 text-base sm:text-lg leading-relaxed max-w-3xl">{project.description}</p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
                <GithubIcon className="w-4 h-4" /> View GitHub Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink className="w-4 h-4" /> Visit Live Site
              </a>
            )}
          </div>
        </div>

        {/* Content Blocks */}
        <div className="py-8 space-y-8">
          {/* Architecture */}
          <div className="panel p-5 sm:p-6">
            <h2 className={blockHeading}>
              <Cpu className="w-4 h-4 text-accent" /> Architecture & Implementation Details
            </h2>
            <ul className="mt-4 space-y-2.5 text-ink-2 text-sm sm:text-base">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-accent pt-1 shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Challenges */}
          {project.keyChallenges && project.keyChallenges.length > 0 && (
            <div className="panel p-5 sm:p-6">
              <h2 className={blockHeading}>
                <AlertTriangle className="w-4 h-4 text-accent" /> Technical Challenges & Solutions
              </h2>
              <ul className="mt-4 space-y-2.5 text-ink-2 text-sm sm:text-base">
                {project.keyChallenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-accent pt-1 shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h2 className={`${blockHeading} mb-3`}>
              <Layers className="w-4 h-4 text-accent" /> Detailed Technology Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-[4px] overflow-hidden">
              {project.techStackDetailed.map((group, idx) => (
                <div key={idx} className="bg-surface p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{group.category}</span>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {group.items.map((item) => (
                      <span key={item} className="chip text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className={`${blockHeading} mb-3`}>Features List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-[4px] overflow-hidden">
              {project.features.map((feature, idx) => (
                <div key={idx} className="bg-surface p-4 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-ink">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prev / Next Navigation */}
        <div className="pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="btn w-full sm:w-auto justify-center normal-case">
              <ChevronLeft className="w-4 h-4 text-accent" />
              <span>Prev: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="btn w-full sm:w-auto justify-center normal-case">
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-4 h-4 text-accent" />
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
