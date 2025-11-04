import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#060b17] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_250px_at_20%_0%,rgba(0,204,255,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Contacto</h2>
          <p className="mt-2 max-w-2xl text-cyan-100/80">
            Cuéntanos sobre tu proyecto. Responderemos con una propuesta clara y accionable.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-cyan-100/80">Nombre</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-cyan-400/20 bg-[#0a1224] px-4 py-3 text-white outline-none ring-cyan-400/40 transition focus:ring"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-cyan-100/80">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-cyan-400/20 bg-[#0a1224] px-4 py-3 text-white outline-none ring-cyan-400/40 transition focus:ring"
                  placeholder="nombre@empresa.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-cyan-100/80">Mensaje</label>
              <textarea
                rows={5}
                required
                className="w-full rounded-xl border border-cyan-400/20 bg-[#0a1224] px-4 py-3 text-white outline-none ring-cyan-400/40 transition focus:ring"
                placeholder="Cuéntanos objetivos, alcance y tiempos..."
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-[0_10px_50px_-10px_rgba(0,200,255,0.6)]"
              >
                Enviar
              </button>
              {sent && (
                <span className="text-sm text-emerald-300">¡Gracias! Te contactaremos en breve.</span>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-[#0b142a] to-[#0b1832] p-6"
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="relative">
              <h3 className="text-lg font-semibold text-white">Hablemos</h3>
              <p className="mt-2 max-w-md text-sm text-cyan-100/80">
                Operamos con equipos distribuidos y metodologías ágiles, listos para colaborar internacionalmente.
              </p>
              <div className="mt-6 grid gap-4 text-cyan-100/90">
                <a href="mailto:hello@elaris.digital" className="inline-flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-white/5 px-4 py-3 hover:bg-white/10">
                  <Mail className="h-4 w-4 text-cyan-300" /> hello@elaris.digital
                </a>
                <a href="tel:+0000000000" className="inline-flex items-center gap-3 rounded-xl border border-cyan-400/10 bg-white/5 px-4 py-3 hover:bg-white/10">
                  <Phone className="h-4 w-4 text-cyan-300" /> +00 000 000 000
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
