import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import { currentWork, futureProjects, publicProjects, timeline } from '@/lib/site-content';
import ProjectPreview from '@/components/ProjectPreview';

export default function Page() {
  return (
    <main className="page-shell pb-24">
      <Hero />

      <section className="section-shell mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Current work</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
              What I am working on now.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 md:inline-flex"
          >
            Open projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {currentWork.map((item) => (
            <div key={item.title} className="glass-panel rounded-[2rem] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">Now</div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Selected work</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
              Open projects you can click into.
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 md:inline-flex"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {publicProjects.map((project, index) => (
            <article
              key={project.slug}
              className="glass-panel flex h-full flex-col rounded-[2rem] p-6"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                  {project.category}
                </div>
                <div className="text-sm text-zinc-500">{project.year}</div>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.05em] text-white">{project.displayTitle}</h3>
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
              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Open project
                <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-56 pt-6 grid gap-12 lg:grid-cols-2 lg:items-stretch">
        <div className="glass-panel flex h-full min-h-[24rem] flex-col rounded-[2rem] p-6 lg:min-h-[26rem]">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Direction</div>
          <h2 className="mt-4 text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.06em] text-white">
            The public site is only the front layer.
          </h2>
          <p className="mt-5 max-w-[28rem] text-[0.96rem] leading-8 text-zinc-400">
            Behind the public work there is a bigger set of private systems, research projects and
            future work that I am still building. That is where PEGASUS and the trading systems fit
            in.
          </p>
        </div>

        <div className="glass-panel flex h-full min-h-[24rem] flex-col rounded-[2rem] p-5 lg:min-h-[26rem]">
          <div className="grid h-full gap-4">
            {timeline.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.45rem] border border-white/8 bg-white/[0.02] px-4 py-3.5"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{item.year}</div>
                <div className="mt-2 text-[1.7rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white">
                  {item.title}
                </div>
                <p className="mt-3 max-w-[34rem] text-[0.94rem] leading-7 text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-56 pt-6">
        <div className="glass-panel rounded-[2.4rem] p-7 md:p-10">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Future</div>
          <h2 className="mt-4 text-[3rem] font-semibold tracking-[-0.06em] text-white">
            {futureProjects[0].title}
          </h2>
          <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-zinc-400">{futureProjects[0].summary}</p>
        </div>
      </section>
    </main>
  );
}
