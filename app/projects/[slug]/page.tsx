import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { notFound } from 'next/navigation';
import ProjectPreview from '@/components/ProjectPreview';
import { publicProjects } from '@/lib/site-content';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publicProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = publicProjects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: `${project.displayTitle} | Viktor Berg`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = publicProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const mode =
    project.slug === 'webbtjanst-com'
      ? 'agency'
      : project.slug === 'perplexity-serch-v2'
        ? 'search'
        : 'portfolio';

  return (
    <main className="page-shell pb-24 pt-32">
      <section className="section-shell">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-panel rounded-[2.4rem] p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                {project.category}
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-emerald-300">
                {project.status}
              </span>
              <span className="text-sm text-zinc-500">{project.year}</span>
            </div>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              {project.displayTitle}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">{project.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.previewStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">{stat.label}</div>
                  <div className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2.4rem] p-6">
            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Role</div>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{project.role}</p>
              </div>
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Stack</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Links</div>
                <div className="mt-4 flex flex-col gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10"
                    >
                      <ExternalLink size={16} />
                      Live site
                    </a>
                  ) : null}
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10"
                    >
                      <Github size={16} />
                      Repository
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ProjectPreview
          headline={project.previewHeadline}
          blurb={project.previewBlurb}
          stats={project.previewStats}
          mode={mode}
        />

        <div className="grid gap-6">
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">What it does</div>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{project.summary}</p>
          </div>
          <div className="glass-panel rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">What changed</div>
            <div className="mt-4 grid gap-3">
              {project.outcomes.map((item) => (
                <div key={item} className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">What I learned</div>
          <div className="mt-4 grid gap-3">
            {project.learned.map((item) => (
              <div key={item} className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Why this matters</div>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            {project.note ??
              'This project is public because it explains part of your work clearly without exposing anything sensitive. The detail page gives enough context for someone to understand what you built and why it matters.'}
          </p>
        </div>
      </section>
    </main>
  );
}
