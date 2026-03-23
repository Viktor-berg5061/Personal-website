'use client';

import { motion } from 'motion/react';

export default function GlowingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top, rgba(84,106,255,0.12), transparent 24%), linear-gradient(120deg, #040507 0%, #060913 55%, #040507 100%)',
        }}
      />
      <div className="ambient-orb left-[-10%] top-[12%] h-[360px] w-[360px] bg-blue-500/20" />
      <div className="ambient-orb bottom-[-10%] right-[6%] h-[420px] w-[420px] bg-indigo-500/20" />

      <motion.div
        className="absolute left-[58%] top-0 h-full w-[3px] -translate-x-1/2 bg-white/90"
        animate={{ opacity: [0.8, 1, 0.78] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          boxShadow:
            '0 0 18px rgba(255,255,255,0.9), 0 0 48px rgba(139,162,255,0.8), 0 0 140px rgba(91,118,255,0.4)',
        }}
      />

      <motion.div
        className="absolute bottom-[-6%] left-[58%] h-[48vh] w-[70vw] -translate-x-1/2 rounded-full"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [0.96, 1.03, 0.96] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at center, rgba(180,196,255,0.9) 0%, rgba(119,144,255,0.48) 30%, rgba(28,41,92,0) 68%)',
          filter: 'blur(22px)',
        }}
      />

      <div className="absolute inset-x-[8%] bottom-[12%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-[18%] top-[26%] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-[18%] left-[36%] h-[180px] w-[180px] rounded-[2rem] border border-white/6 bg-white/[0.02]" />
      <div className="absolute right-[18%] top-[22%] h-[220px] w-[220px] rounded-[2rem] border border-white/6 bg-white/[0.015]" />
    </div>
  );
}
