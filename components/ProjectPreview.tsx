type ProjectPreviewProps = {
  headline: string;
  blurb: string;
  stats: Array<{ label: string; value: string }>;
  mode?: 'portfolio' | 'agency' | 'search' | 'automation' | 'study' | 'default';
};

function PreviewChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      <div className="ml-3 rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-zinc-400">
        {title}
      </div>
    </div>
  );
}

export default function ProjectPreview({ headline, blurb, stats, mode = 'default' }: ProjectPreviewProps) {
  const palette =
    mode === 'agency'
      ? 'from-orange-500/35 via-white/10 to-transparent'
      : mode === 'search'
        ? 'from-blue-500/35 via-white/10 to-transparent'
        : mode === 'study'
          ? 'from-emerald-500/35 via-white/10 to-transparent'
          : mode === 'automation'
            ? 'from-indigo-500/35 via-white/10 to-transparent'
            : 'from-cyan-500/35 via-white/10 to-transparent';

  return (
    <div className="glass-panel overflow-hidden rounded-[2rem] border-white/10">
      <PreviewChrome title="Start page preview" />
      <div className="relative p-4 sm:p-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${palette}`} />
        <div className="relative grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.6rem] border border-white/8 bg-[#0b0f17]/90 p-5">
            <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Homepage</div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
              {headline}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">{blurb}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                Browse project
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                Read more
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white">
                Contact
              </span>
            </div>
          </div>

          <div className="grid gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">{stat.label}</div>
                <div className="mt-2 text-xl font-semibold tracking-[-0.04em] text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Structure</div>
            <div className="mt-2 text-sm text-white">Clear entry point</div>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Motion</div>
            <div className="mt-2 text-sm text-white">Smooth and controlled</div>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Purpose</div>
            <div className="mt-2 text-sm text-white">Show value fast</div>
          </div>
        </div>
      </div>
    </div>
  );
}
