'use client';

import { motion } from 'motion/react';

export default function GlowingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 59% 6%, rgba(224,230,255,0.12), transparent 8%), radial-gradient(circle at 70% 24%, rgba(82,109,255,0.2), transparent 16%), radial-gradient(circle at 78% 32%, rgba(120,92,255,0.16), transparent 14%), radial-gradient(circle at 74% 62%, rgba(92,110,255,0.12), transparent 24%), radial-gradient(circle at 58% 82%, rgba(115,98,255,0.08), transparent 16%), linear-gradient(120deg, #020305 0%, #050713 46%, #020305 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(177,189,255,0.9) 0.7px, transparent 0.8px)',
          backgroundSize: '4px 4px',
          maskImage:
            'linear-gradient(90deg, transparent 30%, rgba(0,0,0,0.1) 45%, black 56%, rgba(0,0,0,0.32) 68%, transparent 82%)',
        }}
      />
      <motion.div
        className="ambient-orb left-[-8%] top-[10%] h-[420px] w-[420px] bg-blue-500/18"
        animate={{ y: [0, -16, 0], opacity: [0.24, 0.42, 0.24] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambient-orb right-[4%] top-[14%] h-[560px] w-[560px] bg-indigo-500/18"
        animate={{ y: [0, 22, 0], opacity: [0.22, 0.52, 0.22] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambient-orb bottom-[-20%] left-[18%] h-[760px] w-[760px] bg-cyan-500/14"
        animate={{ scale: [1, 1.06, 1], opacity: [0.18, 0.38, 0.18] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="ambient-orb right-[12%] bottom-[-18%] h-[720px] w-[720px] bg-violet-500/18"
        animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.2, 0.46, 0.2] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[16%] top-[18%] h-[260px] w-[260px] rounded-full bg-blue-500/14"
        animate={{ x: [0, 14, 0], y: [0, -12, 0], opacity: [0.12, 0.34, 0.12] }}
        transition={{ duration: 9.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'blur(42px)' }}
      />
      <motion.div
        className="absolute right-[24%] top-[16%] h-[180px] w-[240px]"
        animate={{ opacity: [0.12, 0.34, 0.12], x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at center, rgba(84,112,255,0.7) 0%, rgba(84,112,255,0.34) 34%, rgba(84,112,255,0) 74%)',
          filter: 'blur(22px)',
        }}
      />
      <motion.div
        className="absolute left-[59.3%] top-[2%] h-[84px] w-[24px] -translate-x-1/2 rounded-full"
        animate={{ opacity: [0.72, 1, 0.8], scaleY: [0.94, 1.12, 0.98] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,1) 28%, rgba(210,221,255,0.9) 58%, rgba(120,138,255,0.08) 100%)',
          boxShadow:
            '0 0 24px rgba(255,255,255,0.9), 0 0 56px rgba(151,169,255,0.72), 0 0 92px rgba(101,124,255,0.38)',
          filter: 'blur(2px)',
        }}
      />
      <motion.div
        className="absolute left-[55.8%] top-[-4%] h-[180px] w-[180px] -translate-x-1/2 rounded-full"
        animate={{ opacity: [0.36, 0.68, 0.42], scale: [0.94, 1.06, 0.98] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.98) 0%, rgba(194,207,255,0.86) 18%, rgba(108,126,255,0.26) 42%, rgba(108,126,255,0) 72%)',
          filter: 'blur(22px)',
        }}
      />
      <motion.div
        className="absolute right-[17%] top-[18%] h-[240px] w-[320px]"
        animate={{ opacity: [0.18, 0.38, 0.2], x: [0, 16, 0], y: [0, -18, 0] }}
        transition={{ duration: 8.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(72,104,255,0.68) 0%, rgba(88,118,255,0.28) 28%, rgba(104,82,255,0.18) 48%, rgba(72,104,255,0) 76%)',
          filter: 'blur(34px)',
        }}
      />
      <motion.div
        className="absolute right-[15%] top-[18%] h-[210px] w-[290px]"
        animate={{ opacity: [0.08, 0.2, 0.1], x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 11.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 22% 48%, rgba(126,96,255,0.48) 0%, rgba(126,96,255,0.18) 30%, rgba(126,96,255,0) 72%)',
          filter: 'blur(30px)',
        }}
      />
      <motion.div
        className="absolute left-[48%] top-[38%] h-[180px] w-[200px]"
        animate={{ opacity: [0.08, 0.22, 0.1], x: [0, -10, 0], y: [0, 12, 0] }}
        transition={{ duration: 9.4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 60% 50%, rgba(128,148,255,0.34) 0%, rgba(128,148,255,0.14) 40%, rgba(128,148,255,0) 74%)',
          filter: 'blur(28px)',
        }}
      />
      <motion.div
        className="absolute left-[63%] top-[48%] h-[280px] w-[260px]"
        animate={{ opacity: [0.08, 0.18, 0.1], x: [0, 10, 0], y: [0, 12, 0] }}
        transition={{ duration: 9.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 0% 48%, rgba(98,122,255,0.26) 0%, rgba(98,122,255,0.12) 26%, rgba(98,122,255,0) 74%)',
          filter: 'blur(30px)',
        }}
      />

      <div
        className="absolute left-[59.3%] top-0 h-full w-[11vw] min-w-[108px] -translate-x-1/2 overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(180deg, transparent 0%, black 4%, black 88%, transparent 100%)',
        }}
      >
        <motion.div
          className="absolute left-1/2 top-0 h-full w-[72px] -translate-x-1/2"
          animate={{ opacity: [0.14, 0.28, 0.14] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(160,181,255,0.06) 12%, rgba(170,188,255,0.18) 46%, rgba(140,118,255,0.1) 68%, rgba(255,255,255,0.02) 100%)',
            filter: 'blur(18px)',
          }}
        />

        <motion.div
          className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 rounded-full"
          animate={{ opacity: [0.82, 1, 0.88], scaleX: [0.96, 1.02, 0.98] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow:
              '0 0 10px rgba(255,255,255,0.98), 0 0 26px rgba(173,189,255,0.88), 0 0 64px rgba(101,122,255,0.58)',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.98) 18%, rgba(214,224,255,1) 48%, rgba(234,222,255,0.84) 72%, rgba(255,255,255,0.12) 100%)',
          }}
        />
        <motion.div
          className="absolute left-[calc(50%-12px)] top-0 h-full w-[7px] rounded-full"
          animate={{ opacity: [0.14, 0.34, 0.16], scaleY: [0.98, 1.03, 0.98] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'linear-gradient(180deg, rgba(90,116,255,0) 0%, rgba(105,132,255,0.34) 22%, rgba(126,146,255,0.56) 56%, rgba(92,114,255,0.12) 100%)',
            filter: 'blur(5px)',
          }}
        />
        <motion.div
          className="absolute left-[calc(50%+8px)] top-0 h-full w-[9px] rounded-full"
          animate={{ opacity: [0.12, 0.32, 0.14], scaleY: [0.99, 1.04, 0.99] }}
          transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'linear-gradient(180deg, rgba(122,88,255,0) 0%, rgba(145,108,255,0.28) 22%, rgba(182,152,255,0.4) 54%, rgba(122,88,255,0.08) 100%)',
            filter: 'blur(6px)',
          }}
        />

        <motion.div
          className="absolute left-1/2 top-[-8%] h-[126%] w-[24px] -translate-x-1/2"
          animate={{ backgroundPositionY: ['0%', '160%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'repeating-linear-gradient(180deg, rgba(255,255,255,0) 0 10px, rgba(255,255,255,0.18) 10px 18px, rgba(186,202,255,0.05) 18px 28px)',
            filter: 'blur(4px)',
            mixBlendMode: 'screen',
            opacity: 0.3,
          }}
        />
        <motion.div
          className="absolute left-[calc(50%+10px)] top-[-10%] h-[128%] w-[20px]"
          animate={{ backgroundPositionY: ['0%', '170%'], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'repeating-linear-gradient(180deg, rgba(139,102,255,0) 0 12px, rgba(154,118,255,0.22) 12px 20px, rgba(139,102,255,0) 20px 32px)',
            filter: 'blur(5px)',
            mixBlendMode: 'screen',
          }}
        />
        <motion.div
          className="absolute left-[calc(50%-22px)] top-[-10%] h-[128%] w-[18px]"
          animate={{ backgroundPositionY: ['0%', '155%'], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'repeating-linear-gradient(180deg, rgba(102,132,255,0) 0 10px, rgba(122,152,255,0.2) 10px 18px, rgba(102,132,255,0) 18px 30px)',
            filter: 'blur(5px)',
            mixBlendMode: 'screen',
          }}
        />

        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-[-42%] h-[185%] -translate-x-1/2 rounded-full"
            animate={{ y: ['-26%', '24%'], opacity: [0.05, 0.28, 0.05] }}
            transition={{
              duration: 3 + index * 0.48,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.18,
            }}
            style={{
              width: `${10 + index * 7}px`,
              background:
                index % 2 === 0
                  ? 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(180,196,255,0.02) 16%, rgba(255,255,255,0.7) 42%, rgba(118,138,255,0.24) 70%, rgba(255,255,255,0) 100%)'
                  : 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(167,132,255,0.02) 16%, rgba(233,224,255,0.6) 42%, rgba(144,102,255,0.2) 70%, rgba(255,255,255,0) 100%)',
              filter: 'blur(4px)',
              mixBlendMode: 'screen',
            }}
          />
        ))}

        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={`mist-${index}`}
            className="absolute left-1/2 top-[-20%] h-[145%] -translate-x-1/2 rounded-full"
            animate={{ y: ['-14%', '18%'], opacity: [0.08, 0.24, 0.08] }}
            transition={{
              duration: 6.4 + index * 0.82,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.32,
            }}
            style={{
              width: `${62 + index * 18}px`,
              background:
                index % 2 === 0
                  ? 'linear-gradient(180deg, rgba(88,108,255,0) 0%, rgba(106,128,255,0.06) 24%, rgba(172,188,255,0.16) 48%, rgba(98,121,255,0.08) 72%, rgba(88,108,255,0) 100%)'
                  : 'linear-gradient(180deg, rgba(106,78,255,0) 0%, rgba(136,102,255,0.06) 24%, rgba(196,176,255,0.14) 48%, rgba(136,102,255,0.08) 72%, rgba(106,78,255,0) 100%)',
              filter: 'blur(16px)',
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-x-[4%] top-[14%] h-px bg-gradient-to-r from-transparent via-white/14 to-transparent"
        animate={{ opacity: [0.18, 0.4, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[30%] bottom-[15%] h-[12vh] w-[54vw]"
        animate={{ opacity: [0.12, 0.28, 0.14], scaleX: [0.98, 1.03, 0.99] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.14) 0%, rgba(170,188,255,0.1) 24%, rgba(122,102,255,0.08) 42%, rgba(255,255,255,0) 74%)',
          filter: 'blur(18px)',
        }}
      />
      <motion.div
        className="absolute right-[10%] top-[48%] h-[360px] w-[420px]"
        animate={{ opacity: [0.12, 0.28, 0.14], x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 10.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 0% 40%, rgba(107,128,255,0.24) 0%, rgba(107,128,255,0.12) 26%, rgba(107,128,255,0) 72%)',
          filter: 'blur(36px)',
        }}
      />
      <motion.div
        className="absolute right-[9%] top-[44%] h-[420px] w-[520px]"
        animate={{ opacity: [0.06, 0.18, 0.08], x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 12.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at 0% 40%, rgba(118,94,255,0.18) 0%, rgba(118,94,255,0.08) 24%, rgba(118,94,255,0) 70%)',
          filter: 'blur(46px)',
        }}
      />

      <motion.div
      className="absolute bottom-[-12%] left-[60%] h-[48vh] w-[76vw] -translate-x-1/2 rounded-full"
        animate={{ opacity: [0.48, 0.86, 0.48], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.98) 0%, rgba(182,198,255,0.84) 10%, rgba(151,112,255,0.28) 18%, rgba(132,154,255,0.36) 30%, rgba(81,99,184,0.12) 50%, rgba(28,41,92,0) 72%)',
          filter: 'blur(18px)',
        }}
      />

      <motion.div
        className="absolute bottom-[16%] left-[47%] h-[18vh] w-[24vw] rounded-full"
        animate={{ opacity: [0.16, 0.32, 0.16], scale: [0.94, 1.02, 0.94] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle at center, rgba(148,164,255,0.28) 0%, rgba(103,123,255,0.12) 46%, rgba(28,41,92,0) 78%)',
          filter: 'blur(26px)',
        }}
      />
    </div>
  );
}
