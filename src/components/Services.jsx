import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Brain, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-6 w-6 text-cyan-300" />,
    title: 'Desarrollo Web',
    desc: 'Aplicaciones web modernas, rápidas y seguras con arquitecturas escalables y experiencia UX premium.',
  },
  {
    icon: <Layers className="h-6 w-6 text-cyan-300" />,
    title: 'Software a Medida',
    desc: 'Soluciones diseñadas para procesos empresariales complejos, integraciones y flujos de negocio.',
  },
  {
    icon: <Brain className="h-6 w-6 text-cyan-300" />,
    title: 'Inteligencia Artificial',
    desc: 'De NLP a visión por computador y agentes, integramos IA en productos y operaciones.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-cyan-300" />,
    title: 'Consultoría Tecnológica',
    desc: 'Estrategia, auditorías, arquitectura cloud y modernización para maximizar impacto tecnológico.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#060b17] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_20%_0%,rgba(0,204,255,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Servicios</h2>
            <p className="mt-2 max-w-2xl text-cyan-100/80">
              Ingeniería digital con foco en rendimiento, seguridad y escalabilidad.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cyan-400/10 p-3 ring-1 ring-inset ring-cyan-400/20">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cyan-100/80">{s.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
