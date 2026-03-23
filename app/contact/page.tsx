import { contactLinks } from '@/lib/site-content';

export default function ContactPage() {
  return (
    <main className="page-shell pb-24 pt-32">
      <section className="section-shell grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="glass-panel rounded-[2.4rem] p-8 md:p-12">
          <div className="text-xs uppercase tracking-[0.32em] text-zinc-500">Contact</div>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
            Ready for collaborations, interesting builds and better presentation work.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Use this page as your direct action point. Replace the placeholder contact details with
            your real links and this becomes the simplest way for people to reach you.
          </p>
        </div>

        <div className="glass-panel rounded-[2.4rem] p-6">
          <div className="grid gap-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5 hover:bg-white/[0.05]"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">{item.label}</div>
                <div className="mt-3 text-lg font-medium text-white">{item.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
