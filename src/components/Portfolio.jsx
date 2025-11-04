import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Plataforma de Analítica con IA',
    tag: 'AI • Data • Enterprise',
    color: 'from-cyan-500/30 to-blue-600/30',
  },
  {
    title: 'Suite de Automatización Operativa',
    tag: 'Automation • Cloud',
    color: 'from-cyan-400/30 to-emerald-500/30',
  },
  {
    title: 'Portal B2B de Alto Rendimiento',
    tag: 'Web • Performance',
    color: 'from-blue-500/30 to-indigo-600/30',
  },
  {
    title: 'Integración MLOps en Producción',
    tag: 'MLOps • Infra',
    color: 'from-fuchsia-500/30 to-cyan-500/30',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#070e1d] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_80%_0%,rgba(0,110,255,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Proyectos</h2>
            <p className="mt-2 max-w-2xl text-cyan-100/80">
              Una muestra de soluciones creadas para impulsar la eficiencia y la innovación.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <div className={`h-36 w-full rounded-xl bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_40%)]" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-80" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">{p.title}</h3>
                  <p className="text-xs text-cyan-100/70">{p.tag}</p>
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs text-cyan-100/90">Case</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
