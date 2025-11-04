import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#060914] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#060914]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(0,200,255,0.6)]" />
            <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-sm font-semibold tracking-wider text-transparent sm:text-base">
              Elaris Digital Solutions
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-cyan-100/80 sm:flex">
            <a className="hover:text-white" href="#services">Servicios</a>
            <a className="hover:text-white" href="#portfolio">Proyectos</a>
            <a className="hover:text-white" href="#contact">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        {/* About inline block */}
        <section id="about" className="relative w-full bg-[#070e1d] py-16">
          <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_0%,rgba(0,204,255,0.10),transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-6">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">Sobre Nosotros</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-cyan-100/80">
              Somos un equipo de ingeniería que combina ciencia de datos, desarrollo full‑stack y diseño de producto
              para construir plataformas empresariales con IA integrada. Priorizamos arquitectura sólida, seguridad,
              mantenibilidad y un acabado estético pulido.
            </p>
          </div>
        </section>
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-[#060914] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-xs text-cyan-100/70">© {new Date().getFullYear()} Elaris Digital Solutions. All rights reserved.</p>
          <div className="text-xs text-cyan-100/60">Enterprise Logic & AI Research Integrated Systems</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
