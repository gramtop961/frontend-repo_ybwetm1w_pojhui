import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#060914] via-[#070d1a] to-[#0a1224]">      
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft glow overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(0,204,255,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_20%,rgba(0,110,255,0.10),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 text-center sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-cyan-200/90 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Elaris Digital Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-gradient-to-b from-white to-cyan-100 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Innovating the Digital Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-5 max-w-3xl text-base leading-relaxed text-cyan-100/80 sm:text-lg"
        >
          Enterprise Logic & AI Research Integrated Systems. Creamos soluciones de software
          empresariales, orquestamos automatización inteligente y diseñamos experiencias
          digitales de alto rendimiento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(0,0,0,0)] transition-all hover:shadow-[0_10px_50px_-10px_rgba(0,200,255,0.6)]"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Discover our Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100 hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* subtle moving grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
    </section>
  );
};

export default Hero;
