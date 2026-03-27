"use client"

import type { Lang } from "@/components/language-toggle"

interface CtaProps {
  lang: Lang
}

const copy = {
  pt: {
    urgency: "Atendo poucas empresas por semana",
    tag: "Diagnóstico estratégico gratuito",
    title: "Descubra exatamente o que está impedindo seu negócio de vender mais",
    desc: "Vou analisar seu negócio, identificar os maiores gargalos e mostrar exatamente como estruturar suas vendas.",
    includes: [
      "Diagnóstico completo do negócio",
      "Mapeamento de oportunidades",
      "Plano de ação personalizado",
      "Sem compromisso",
    ],
    cta: "Quero estruturar meu negócio agora",
    sub: "Atendo poucas empresas por semana. Garanta já a sua vaga.",
    differential: "Você não contrata um serviço. Você instala um sistema que gera vendas todos os dias.",
  },
  es: {
    urgency: "Atiendo pocas empresas por semana",
    tag: "Diagnóstico estratégico gratuito",
    title: "Descubrí exactamente qué está impidiendo que tu negocio venda más",
    desc: "Voy a analizar tu negocio, identificar los principales cuellos de botella y mostrar exactamente cómo estructurar tus ventas.",
    includes: [
      "Diagnóstico completo del negocio",
      "Mapeo de oportunidades",
      "Plan de acción personalizado",
      "Sin compromiso",
    ],
    cta: "Quiero estructurar mi negocio ahora",
    sub: "Atiendo pocas empresas por semana. Asegurá tu lugar ya.",
    differential: "No contratás un servicio. Instalás un sistema que vende todos los días.",
  },
}

export function Cta({ lang }: CtaProps) {
  const t = copy[lang]
  const WHATSAPP = "https://wa.link/9ho1h0"

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e85d04]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,93,4,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Urgency banner */}
        <div className="flex items-center justify-center gap-2 bg-[#e85d04]/15 border border-[#e85d04]/30 rounded-full px-4 py-2 w-fit mx-auto mb-8">
          <span className="w-2 h-2 rounded-full bg-[#e85d04] pulse-dot" />
          <span className="text-[#e85d04] font-bold text-sm uppercase tracking-wider">{t.urgency}</span>
        </div>

        {/* Differential quote */}
        <blockquote className="text-center text-[#8da4c8] text-lg sm:text-xl italic mb-8 border-l-4 border-[#e85d04] pl-5 text-left max-w-xl mx-auto">
          {t.differential}
        </blockquote>

        <div className="bg-[#0f1f3d] border border-[#e85d04]/30 rounded-3xl p-8 sm:p-10 glow-orange text-center">
          <span className="text-[#e85d04] text-xs font-bold uppercase tracking-widest">{t.tag}</span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mt-3 mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-[#8da4c8] text-base leading-relaxed mb-8">{t.desc}</p>

          {/* Includes */}
          <ul className="flex flex-col gap-3 mb-10 text-left max-w-sm mx-auto">
            {t.includes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-green-400">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-[#f0f4ff] text-sm">{item}</span>
              </li>
            ))}
          </ul>

          {/* Main CTA */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e85d04] hover:bg-[#ff7b2e] text-white font-black text-lg px-10 py-5 rounded-full transition-all duration-200 glow-orange w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.cta}
          </a>

          <p className="text-[#8da4c8] text-sm mt-4">{t.sub}</p>
        </div>
      </div>
    </section>
  )
}
