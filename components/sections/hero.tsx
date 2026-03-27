"use client"

import type { Lang } from "@/components/language-toggle"

interface HeroProps {
  lang: Lang
}

const copy = {
  pt: {
    badge: "Automação com Inteligência Artificial",
    line1: "Você está perdendo",
    line2: "clientes todos os dias…",
    line3: "E nem percebe.",
    sub: "Automatize seu atendimento e transforme mensagens em vendas com IA — 24 horas por dia, 7 dias por semana.",
    cta: "Falar no WhatsApp agora",
    stats: [
      { value: "+300%", label: "Aumento médio em vendas" },
      { value: "24/7", label: "Atendimento automático" },
      { value: "-70%", label: "Menos esforço operacional" },
    ],
  },
  es: {
    badge: "Automatización con Inteligencia Artificial",
    line1: "Estás perdiendo",
    line2: "clientes todos los días…",
    line3: "Y ni te das cuenta.",
    sub: "Automatiza tu atención y convierte mensajes en ventas con IA — 24 horas al día, 7 días a la semana.",
    cta: "Hablar por WhatsApp ahora",
    stats: [
      { value: "+300%", label: "Aumento promedio en ventas" },
      { value: "24/7", label: "Atención automática" },
      { value: "-70%", label: "Menos esfuerzo operacional" },
    ],
  },
}

export function Hero({ lang }: HeroProps) {
  const t = copy[lang]
  const WHATSAPP = "https://wa.me/595991000000"

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,93,4,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,93,4,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#e85d04]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#1a2f55]/60 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-[#1a2f55] border border-[#e85d04]/30 text-[#ff7b2e] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#e85d04] pulse-dot" />
          {t.badge}
        </span>

        {/* Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl leading-tight text-balance text-white">
          {t.line1}{" "}
          <span className="text-[#e85d04] text-glow-orange">{t.line2}</span>
          <br />
          <span className="text-[#8da4c8]">{t.line3}</span>
        </h1>

        <p className="text-[#8da4c8] text-lg sm:text-xl max-w-2xl leading-relaxed text-balance">
          {t.sub}
        </p>

        {/* CTA */}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#e85d04] hover:bg-[#ff7b2e] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 glow-orange mt-2 group"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t.cta}
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-6 w-full max-w-xl">
          {t.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-black text-2xl sm:text-3xl text-[#e85d04] text-glow-orange">
                {s.value}
              </div>
              <div className="text-[#8da4c8] text-xs sm:text-sm mt-1 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8da4c8]">
        <span className="text-xs tracking-widest uppercase opacity-60">scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 arrow-bounce">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
