"use client"

import type { Lang } from "@/components/language-toggle"

interface PainProps {
  lang: Lang
}

const PainItems = {
  pt: [
    {
      title: "Demora pra responder",
      desc: "Enquanto você pensa em responder, o cliente já foi para o concorrente.",
    },
    {
      title: "Perde clientes no direct",
      desc: "Mensagens sem resposta = dinheiro indo embora todo dia.",
    },
    {
      title: "Não tem controle do comercial",
      desc: "Sem saber quantos leads entraram, quantos foram atendidos e quantos fecharam.",
    },
  ],
  es: [
    {
      title: "Tardás en responder",
      desc: "Mientras pensás en responder, el cliente ya fue a la competencia.",
    },
    {
      title: "Perdés clientes en el direct",
      desc: "Mensajes sin respuesta = dinero yéndose todos los días.",
    },
    {
      title: "No tenés control comercial",
      desc: "Sin saber cuántos leads entraron, cuántos fueron atendidos y cuántos cerraron.",
    },
  ],
}

const icons = [
  // Clock
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>,
  // Trending down
  <svg key="trend" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
  </svg>,
  // Block / no control
  <svg key="block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>,
]

export function Pain({ lang }: PainProps) {
  const items = PainItems[lang]
  const tag = lang === "pt" ? "Se você" : "Si vos"
  const title = lang === "pt" ? "Seu negócio está travado." : "Tu negocio está frenado."

  return (
    <section className="py-20 px-4 bg-[#0a1628]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{tag}</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 text-balance">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="bg-[#0f1f3d] border border-[#1e3660] rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a2f55] flex items-center justify-center shrink-0 group-hover:bg-[#e85d04]/20 transition-colors">
                  {icons[i]}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-[#8da4c8] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
