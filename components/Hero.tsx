'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import AgeDisplay from './AgeDisplay';
import GlowingBackground from './GlowingBackground';
import { currentWork, metrics } from '@/lib/site-content';

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pb-20 pt-32">
      <GlowingBackground />

      <div className="section-shell relative z-10 grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc-300">
            <Sparkles size={14} className="text-[var(--warm)]" />
            Web, AI, automation and product work
          </div>

          <h1 className="section-title max-w-4xl text-white">
            Building public products, private systems and automation that actually ships.
          </h1>

          <p className="section-copy mt-8 max-w-2xl">
            Viktor Berg, <AgeDisplay birthDate="2009-01-19" />. I build websites, AI systems,
            automation and research-heavy tools with a focus on speed, clarity and a strong visual
            presentation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_30px_rgba(255,153,92,0.32)]"
            >
              Explore projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10"
            >
              Start a conversation
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-3xl p-5">
                <div className="text-3xl font-semibold tracking-[-0.06em] text-white">{metric.value}</div>
                <div className="mt-2 text-sm text-zinc-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass-panel glow-ring relative overflow-hidden rounded-[2rem] p-5">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 40%), linear-gradient(135deg, transparent, rgba(105,126,255,0.08))',
              }}
            />

            <div className="relative z-10 rounded-[1.5rem] border border-white/8 bg-[#0c1018]/85 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Live focus</div>
                  <div className="mt-2 text-xl font-semibold text-white">What I am building now</div>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Available
                </div>
              </div>

              <div className="grid gap-4">
                {currentWork.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="rounded-full bg-[var(--accent-strong)]/15 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
                        Active
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="absolute -bottom-10 -left-6 rounded-[1.6rem] border border-white/10 bg-[#10131b]/90 p-4 shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-xs uppercase tracking-[0.28em] text-zinc-500">Edge</div>
              <div className="mt-2 text-sm text-white">Private systems, public products and a future roadmap.</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
