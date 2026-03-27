"use client"

import type { Lang } from "@/components/language-toggle"

interface ServicesProps {
  lang: Lang
}

// SVG icons for each service
const ServiceIcons = [
  // Rocket / Traffic
  <svg key="rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>,
  // Bot / WhatsApp AI
  <svg key="bot" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <rect width="18" height="10" x="3" y="11" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>,
  // Instagram / Camera
  <svg key="camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>,
  // CRM / Database
  <svg key="db" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>,
  // Globe / Website
  <svg key="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  // Smartphone / App
  <svg key="phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>,
]

const copy = {
  pt: {
    tag: "O que eu faço por você",
    title: "Estrutura completa para vender mais",
    services: [
      {
        title: "Tráfego Pago",
        platforms: "Google · Meta · TikTok",
        desc: "Mais clientes todos os dias com campanhas otimizadas.",
        highlight: "Mais clientes todos os dias",
        featured: false,
      },
      {
        title: "Automação",
        platforms: "Respostas automáticas",
        desc: "Sistema que responde e qualifica seus clientes automaticamente.",
        highlight: "Respostas automáticas",
        featured: false,
      },
      {
        title: "Instagram Automático",
        platforms: "Comentários viram leads",
        desc: "Cliente comenta no seu post e recebe automaticamente uma mensagem personalizada.",
        highlight: "Comentários viram leads",
        featured: true,
      },
      {
        title: "CRM",
        platforms: "Controle total do seu funil",
        desc: "Gerencie todos os leads e tenha visão completa do seu comercial.",
        highlight: "Controle total do seu funil",
        featured: false,
      },
      {
        title: "Páginas de Conversão",
        platforms: "Landing pages",
        desc: "Páginas criadas para converter visitantes em clientes.",
        highlight: "Mais vendas",
        featured: false,
      },
      {
        title: "Estrutura Completa",
        platforms: "Sistema integrado",
        desc: "Tudo conectado para gerar crescimento previsível.",
        highlight: "Crescimento previsível",
        featured: false,
      },
    ],
    featuredBadge: "Destaque",
  },
  es: {
    tag: "Lo que hago por vos",
    title: "Estructura completa para vender más",
    services: [
      {
        title: "Tráfico Pago",
        platforms: "Google · Meta · TikTok",
        desc: "Más clientes todos los días con campañas optimizadas.",
        highlight: "Más clientes",
        featured: false,
      },
      {
        title: "Automatización",
        platforms: "Respuestas automáticas",
        desc: "Sistema que responde y califica tus clientes automáticamente.",
        highlight: "Respuestas automáticas",
        featured: false,
      },
      {
        title: "Instagram Automático",
        platforms: "Comentarios generan leads",
        desc: "Cliente comenta en tu post y recibe automáticamente un mensaje personalizado.",
        highlight: "Comentarios generan leads",
        featured: true,
      },
      {
        title: "CRM",
        platforms: "Control total",
        desc: "Manejá todos los leads y tené visión completa de tu comercial.",
        highlight: "Control total",
        featured: false,
      },
      {
        title: "Páginas de Conversión",
        platforms: "Landing pages",
        desc: "Páginas creadas para convertir visitantes en clientes.",
        highlight: "Más conversión",
        featured: false,
      },
      {
        title: "Sistema Completo",
        platforms: "Sistema integrado",
        desc: "Todo conectado para generar crecimiento predecible.",
        highlight: "Crecimiento predecible",
        featured: false,
      },
    ],
    featuredBadge: "Destacado",
  },
}

export function Services({ lang }: ServicesProps) {
  const t = copy[lang]

  return (
    <section className="py-20 px-4 bg-[#0f1f3d]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{t.tag}</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 text-balance">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.map((service, i) => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-6 border card-hover group cursor-default ${
                service.featured
                  ? "bg-[#e85d04]/10 border-[#e85d04]/50 glow-orange"
                  : "bg-[#0a1628] border-[#1e3660]"
              }`}
            >
              {service.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e85d04] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                  {t.featuredBadge}
                </span>
              )}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shrink-0 transition-colors ${
                  service.featured ? "bg-[#e85d04]/20 text-[#ff7b2e]" : "bg-[#1a2f55] text-[#e85d04] group-hover:bg-[#e85d04]/20"
                }`}
              >
                {ServiceIcons[i]}
              </div>
              <div className="mb-1">
                <h3 className="font-heading font-bold text-white text-xl">{service.title}</h3>
                <span className="text-[#e85d04] text-xs font-semibold uppercase tracking-wider">{service.platforms}</span>
              </div>
              <p className="text-[#8da4c8] text-sm leading-relaxed mt-2 mb-4">{service.desc}</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e85d04]" />
                <span className="text-[#f0f4ff] text-sm font-semibold">{service.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
