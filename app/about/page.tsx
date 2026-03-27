import { currentWork, futureProjects, focusAreas, timeline } from '@/lib/site-content';

export default function AboutPage() {
  return (
    <main className="page-shell pb-24 pt-32">
      <section className="section-shell">
        <div className="glass-panel rounded-[2.4rem] p-8 md:p-12">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">About</div>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
            Technical execution, product thinking and private systems that turn into public work.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            I build websites, automation and AI systems, then package the useful parts into public
            projects that explain what I am doing. The site is meant to show the difference between
            what is live, what is private and what is coming next.
          </p>
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[1fr_1fr]">
        {focusAreas.map((area) => (
          <article key={area.title} className="glass-panel rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.05em] text-white">{area.title}</h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">{area.body}</p>
          </article>
        ))}
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">What I care about</div>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Strong hierarchy, clean systems, public presentation and work that has a clear reason
            to exist. I prefer building fewer things with more intent and more room to grow.
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <div className="grid gap-4">
            {timeline.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{item.year}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-[2rem] p-8">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Now</div>
          <div className="mt-4 grid gap-4">
            {currentWork.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-8">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Next</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
            {futureProjects[0].title}
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">{futureProjects[0].summary}</p>
        </div>
      </section>
    </main>
  );
}
