import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * TRANSLATE3D LANDING PAGE
 * 
 * Design Philosophy:
 * - Dark theme (black background) for maximum impact in expos/bazaars
 * - Purple accent (#7c3aed) for CTAs and highlights
 * - Minimalist, geometric design reflecting the brand identity
 * - Mobile-first approach with large, tactile buttons
 * - Psychological triggers: big numbers, gamification, clear action
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const libraries = [
    {
      name: "Thingiverse",
      url: "https://www.thingiverse.com",
      icon: "🎨",
      description: "Millones de modelos 3D gratuitos",
    },
    {
      name: "Printables",
      url: "https://www.printables.com",
      icon: "🖨️",
      description: "Modelos listos para imprimir",
    },
    {
      name: "MakerWorld",
      url: "https://makerworld.com",
      icon: "🌍",
      description: "Comunidad global de makers",
    },
    {
      name: "Thangs",
      url: "https://thangs.com",
      icon: "⚙️",
      description: "Modelos y diseños profesionales",
    },
    {
      name: "Cults3D",
      url: "https://cults3d.com/en/search?type=free",
      icon: "🎯",
      description: "Modelos gratuitos curados",
    },
  ];

  const categories = [
    { name: "Juguetes", emoji: "🎮", color: "from-purple-600 to-purple-500" },
    { name: "Gadgets", emoji: "⚡", color: "from-purple-600 to-purple-500" },
    { name: "Cosas Útiles", emoji: "🛠️", color: "from-purple-600 to-purple-500" },
    { name: "Arte", emoji: "🎨", color: "from-purple-600 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T3D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-base font-bold text-white">Translate3D</h1>
              <p className="text-xs text-purple-400">Realidades Impresas</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/translate3d.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-purple-400 hover:text-purple-300" />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="container max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="display-text text-white mb-4 animate-fade-in">
              Traslada tus ideas
            </h1>
            <h2 className="display-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-6 animate-fade-in">
              Crea realidades impresas
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Explora miles de modelos 3D increíbles que puedes imprimir hoy mismo.
              Desde juguetes hasta gadgets, desde arte hasta herramientas útiles.
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center mb-12 md:mb-16 animate-fade-in">
            <div className="relative w-full max-w-sm aspect-square">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663309602259/T8gHftbEhRsMojAp35Jw2N/hero-3d-object-RqAjWpaXuHehn5oEhnSzm5.webp"
                alt="3D Geometric Object"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Big Number Trigger */}
          <div className="text-center mb-12 md:mb-16 p-6 md:p-8 bg-gradient-to-r from-purple-900/30 to-purple-700/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <p className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
              +2,000,000
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              de modelos 3D listos para explorar
            </p>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              Seguro encuentras algo increíble que imprimir
            </p>
          </div>

          {/* Primary CTA */}
          <div className="flex justify-center mb-12 md:mb-16">
            <button className="translate-button group">
              <span className="flex items-center gap-2 justify-center">
                Explorar modelos increíbles
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="section-divider bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Elige algo increíble
          </h2>
          <p className="text-center text-gray-400 mb-12 md:mb-16">
            Explora por categorías y descubre qué te inspira
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className="group relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-700/10 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <p className="text-sm md:text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {category.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARIES SECTION */}
      <section className="section-divider">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Bibliotecas de modelos 3D
          </h2>
          <p className="text-center text-gray-400 mb-12 md:mb-16">
            Accede a las mejores plataformas de modelos 3D gratuitos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {libraries.map((lib, index) => (
              <a
                key={index}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-700/10 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl md:text-5xl">{lib.icon}</div>
                  <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {lib.name}
                </h3>
                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                  {lib.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-divider bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Encontraste algo que te guste?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Síguenos en Instagram y comparte tus creaciones impresas en 3D
          </p>

          <a
            href="https://www.instagram.com/translate3d.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block translate-button group"
          >
            <span className="flex items-center gap-3 justify-center">
              <Instagram className="w-6 h-6" />
              Síguenos en Instagram
            </span>
          </a>

          <p className="text-sm text-gray-500 mt-8">
            O envíanos un mensaje con el modelo que te gustó
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-500/20 py-8 md:py-12 px-4 bg-black/50">
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Translate3D</h3>
              <p className="text-sm text-gray-400">
                Traslada tus ideas, crea realidades impresas
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://www.instagram.com/translate3d.tech/" className="hover:text-purple-400 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.thingiverse.com" className="hover:text-purple-400 transition-colors">
                    Thingiverse
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Ubicación</h4>
              <p className="text-sm text-gray-400">Salamanca, México</p>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Translate3D. Todos los derechos reservados.</p>
            <p className="mt-2">Transformando ideas en realidades impresas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
