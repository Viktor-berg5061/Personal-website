import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import { featuredProjects, focusAreas, timeline } from '@/lib/site-content';

export default function Page() {
  return (
    <main className="page-shell pb-24">
      <Hero />

      <section className="section-shell grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Approach</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
            A personal site should feel like a real product, not a placeholder.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            This version leans into stronger hierarchy, more controlled contrast, and motion that
            supports the layout instead of fighting it.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Selected work</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
              Featured projects with clearer storytelling.
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
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className={`glass-panel rounded-[2rem] p-6 ${index === 1 ? 'lg:-translate-y-4' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                  {project.category}
                </div>
                <div className="text-sm text-zinc-500">{project.year}</div>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.05em] text-white">{project.title}</h3>
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
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Direction</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
            The site now has real depth and room to grow.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-400">
            Home sets the tone, About explains the thinking, Projects shows the work, and Contact
            turns the portfolio into something actionable.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <div className="grid gap-4">
            {timeline.map((item) => (
              <div key={item.title} className="rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{item.year}</div>
                <div className="mt-2 text-xl font-semibold text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
