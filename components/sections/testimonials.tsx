"use client"

import type { Lang } from "@/components/language-toggle"

interface TestimonialsProps {
  lang: Lang
}

const copy = {
  pt: {
    tag: "O que nossos clientes dizem",
    title: "Resultados reais",
    items: [
      {
        name: "Ana Ferreira",
        role: "Dona de Clínica Estética",
        stars: 5,
        text: "O Rodrigo estruturou todo meu funil e automação. Hoje recebo clientes no automático, sem precisar ficar no celular o dia todo.",
        result: "+320% de agendamentos em 60 dias",
      },
      {
        name: "Carlos Mendes",
        role: "Dono de E-commerce",
        stars: 5,
        text: "Antes eu perdia clientes no direct. Agora com o CRM e automação, cada lead é acompanhado até fechar a venda.",
        result: "De 50 para 400 vendas/mês",
      },
      {
        name: "Luciana Santos",
        role: "Consultora de Negócios",
        stars: 5,
        text: "O sistema que o Rodrigo montou mudou meu negócio. Tráfego + automação = máquina de vendas.",
        result: "+150 leads qualificados por semana",
      },
    ],
  },
  es: {
    tag: "Lo que dicen nuestros clientes",
    title: "Resultados reales",
    items: [
      {
        name: "Ana Ferreira",
        role: "Dueña de Clínica Estética",
        stars: 5,
        text: "Rodrigo estructuró todo mi embudo y automatización. Hoy recibo clientes en automático, sin tener que estar en el celular todo el día.",
        result: "+320% de turnos en 60 días",
      },
      {
        name: "Carlos Mendes",
        role: "Dueño de E-commerce",
        stars: 5,
        text: "Antes perdía clientes en el direct. Ahora con el CRM y automatización, cada lead es seguido hasta cerrar la venta.",
        result: "De 50 a 400 ventas/mes",
      },
      {
        name: "Luciana Santos",
        role: "Consultora de Negocios",
        stars: 5,
        text: "El sistema que Rodrigo armó cambió mi negocio. Tráfico + automatización = máquina de ventas.",
        result: "+150 leads calificados por semana",
      },
    ],
  },
}

export function Testimonials({ lang }: TestimonialsProps) {
  const t = copy[lang]

  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{t.tag}</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 text-balance">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.items.map((item) => (
            <div
              key={item.name}
              className="bg-[#0f1f3d] border border-[#1e3660] rounded-2xl p-6 card-hover flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#e85d04]">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#f0f4ff] text-sm leading-relaxed flex-1">{`"${item.text}"`}</p>

              {item.result && (
                <div className="bg-[#e85d04]/10 border border-[#e85d04]/30 rounded-lg px-3 py-2">
                  <span className="text-[#e85d04] text-xs font-bold">{item.result}</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e85d04] to-[#1a2f55] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{item.name}</div>
                  <div className="text-[#8da4c8] text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
