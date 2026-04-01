'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import AgeDisplay from './AgeDisplay';
import GlowingBackground from './GlowingBackground';
import { currentWork, metrics } from '@/lib/site-content';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pb-10 pt-26 md:pt-28">
      <GlowingBackground />

      <div className="section-shell relative z-10 grid gap-6 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1.16fr_0.84fr] lg:items-center lg:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[46rem]"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-300">
            <Sparkles size={14} className="text-[var(--warm)]" />
            Design, code, AI and 3D
          </div>

          <h1 className="max-w-[54rem] text-[clamp(3.8rem,7.2vw,6.4rem)] leading-[0.92] tracking-[-0.075em] text-white">
            Building digital work that feels deliberate, modern and worth remembering.
          </h1>

          <p className="section-copy mt-6 max-w-[42rem]">
            Viktor Berg, <AgeDisplay birthDate="2009-01-19" />. I build websites, AI systems,
            automation and research-heavy tools with a sharper eye for motion, structure and
            presentation.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex h-18 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_30px_rgba(255,153,92,0.32)]"
            >
              Explore projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-18 items-center justify-center rounded-full border border-white/12 bg-white/6 px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10"
            >
              Start a conversation
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-[1.8rem] p-4">
                <div className="text-[2.3rem] font-semibold tracking-[-0.065em] text-white">{metric.value}</div>
                <div className="mt-1 text-sm text-zinc-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="absolute right-[16%] top-[4%] h-[230px] w-[230px] rounded-[2rem] border border-white/6 bg-white/[0.015]" />

          <div className="glass-panel glow-ring relative ml-auto max-w-[33rem] overflow-hidden rounded-[2rem] p-4">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 36%), linear-gradient(135deg, transparent, rgba(105,126,255,0.08))',
              }}
            />

            <div className="relative z-10 rounded-[1.45rem] border border-white/8 bg-[#0c1018]/86 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Live focus</div>
                  <div className="mt-2 text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
                    Recent activity
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                  Available
                </div>
              </div>

              <div className="grid gap-3">
                {currentWork.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-base font-medium text-white">{item.title}</div>
                      <div className="rounded-full bg-[var(--accent-strong)]/15 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                        Active
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
