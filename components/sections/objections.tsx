"use client"

import type { Lang } from "@/components/language-toggle"

interface ObjectionsProps {
  lang: Lang
}

const ObjectionIcons = [
  // Lightbulb
  <svg key="bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" />
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
  </svg>,
  // Zap / Fast
  <svg key="zap" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // Shield
  <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  // Dollar
  <svg key="dollar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
]

const copy = {
  pt: {
    tag: "Suas dúvidas",
    title: "Sem desculpas para não começar",
    items: [
      {
        objection: "Não sei usar tecnologia",
        answer: "Nosso time configura tudo para você. Você não precisa saber nada de tecnologia.",
      },
      {
        objection: "Demora muito para implementar?",
        answer: "Implementação em 48h. Você começa a ver resultados em dias, não meses.",
      },
      {
        objection: "E se eu precisar de suporte?",
        answer: "Suporte completo via WhatsApp. Nossa equipe está disponível para te ajudar.",
      },
      {
        objection: "É caro demais para minha empresa",
        answer: "Temos planos para todo tamanho de negócio. Fale conosco e encontramos a solução ideal.",
      },
    ],
    benefits: [
      "Mais vendas em menos tempo",
      "Menos esforço operacional",
      "Crescimento previsível e escalável",
      "Equipe focada no que importa",
    ],
    benefitsTitle: "O resultado:",
  },
  es: {
    tag: "Tus dudas",
    title: "Sin excusas para no empezar",
    items: [
      {
        objection: "No sé usar tecnología",
        answer: "Nuestro equipo configura todo para vos. No necesitás saber nada de tecnología.",
      },
      {
        objection: "¿Tarda mucho en implementarse?",
        answer: "Implementación en 48h. Empezás a ver resultados en días, no meses.",
      },
      {
        objection: "¿Y si necesito soporte?",
        answer: "Soporte completo vía WhatsApp. Nuestro equipo está disponible para ayudarte.",
      },
      {
        objection: "Es muy caro para mi empresa",
        answer: "Tenemos planes para todo tamaño de negocio. Hablá con nosotros y encontramos la solución ideal.",
      },
    ],
    benefits: [
      "Más ventas en menos tiempo",
      "Menos esfuerzo operacional",
      "Crecimiento predecible y escalable",
      "Equipo enfocado en lo que importa",
    ],
    benefitsTitle: "El resultado:",
  },
}

export function Objections({ lang }: ObjectionsProps) {
  const t = copy[lang]

  return (
    <section className="py-20 px-4 bg-[#0f1f3d]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{t.tag}</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 text-balance">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {t.items.map((item, i) => (
            <div key={item.objection} className="bg-[#0a1628] border border-[#1e3660] rounded-2xl p-5 card-hover">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a2f55] flex items-center justify-center shrink-0">
                  {ObjectionIcons[i]}
                </div>
                <div>
                  <h3 className="text-[#e85d04] font-semibold text-base mb-1">{`"${item.objection}"`}</h3>
                  <p className="text-[#8da4c8] text-sm leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-[#0a1628] border border-[#e85d04]/20 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-[#e85d04] text-xl mb-6 uppercase tracking-widest text-center">
            {t.benefitsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#e85d04] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-white">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-[#f0f4ff] font-semibold text-base">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
