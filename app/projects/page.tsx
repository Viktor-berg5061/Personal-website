import { featuredProjects } from '@/lib/site-content';

export default function ProjectsPage() {
  return (
    <main className="page-shell pb-24 pt-32">
      <section className="section-shell">
        <div className="glass-panel rounded-[2.4rem] p-8 md:p-12">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Projects</div>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
            A sharper way to present code, systems and visual work.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            These project cards are structured to feel more like case studies in progress than empty
            placeholders. You can keep expanding them with screenshots, links and deeper writeups.
          </p>
        </div>
      </section>

      <section className="section-shell mt-16 grid gap-6 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.slug} className="glass-panel rounded-[2rem] p-6">
            <div className="flex items-center justify-between">
              <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-zinc-300">
                {project.category}
              </div>
              <div className="text-sm text-zinc-500">{project.year}</div>
            </div>
            <h2 className="mt-8 text-3xl font-semibold tracking-[-0.05em] text-white">{project.title}</h2>
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
            <div
              className="mt-8 rounded-[1.5rem] border border-white/8 p-5"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              }}
            >
              <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Case study frame</div>
              <div className="mt-3 text-sm leading-6 text-zinc-400">
                Add outcome, process, screenshots and links here to turn each project into a full
                presentation page later.
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
