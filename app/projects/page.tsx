import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import ProjectPreview from '@/components/ProjectPreview';
import { futureProjects, privateProjects, publicProjects } from '@/lib/site-content';

export default function ProjectsPage() {
  return (
    <main className="page-shell pb-24 pt-32">
      <section className="section-shell">
        <div className="glass-panel rounded-[2.4rem] p-8 md:p-12">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Projects</div>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
            A project library that separates public work, private systems and future ideas.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Click into the public projects to see the detail pages. Private work stays summarized so
            the portfolio still gives context without exposing sensitive implementation details.
          </p>
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Open work</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
              Public projects with clickable detail pages.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {publicProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`glass-panel rounded-[2rem] p-6 ${index === 1 ? 'lg:-translate-y-3' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                  {project.category}
                </div>
                <div className="text-sm text-zinc-500">{project.year}</div>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.05em] text-white">
                {project.displayTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{project.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <ProjectPreview
                  headline={project.previewHeadline}
                  blurb={project.previewBlurb}
                  stats={project.previewStats}
                  mode={
                    project.slug === 'webbtjanst-com'
                      ? 'agency'
                      : project.slug === 'perplexity-serch-v2'
                        ? 'search'
                        : 'portfolio'
                  }
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
                >
                  Open project
                  <ArrowRight size={14} />
                </Link>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    Live site
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Private work</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
              Summaries only for private systems.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {privateProjects.map((project) => (
            <article key={project.slug} className="glass-panel rounded-[2rem] p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                  {project.category}
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                  <Lock size={12} />
                  Private
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.05em] text-white">{project.displayTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-zinc-500">{project.note ?? 'Public summary only.'}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="glass-panel rounded-[2.4rem] p-8 md:p-12">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Future</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
            {futureProjects[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">{futureProjects[0].summary}</p>
        </div>
      </section>
    </main>
  );
}
