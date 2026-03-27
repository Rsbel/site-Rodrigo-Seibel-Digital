"use client"

import type { Lang } from "@/components/language-toggle"

interface SalesMachineProps {
  lang: Lang
}

const MachineIcons = [
  // Gear / Settings
  <svg key="gear" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#e85d04]">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>,
  // Target
  <svg key="target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#e85d04]">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>,
  // Trending up
  <svg key="trend" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#e85d04]">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
  // Lock
  <svg key="lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[#e85d04]">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>,
]

const copy = {
  pt: {
    tag: "O diferencial",
    title: "Você não contrata um serviço.",
    titleHighlight: "Você instala um sistema que gera vendas todos os dias.",
    desc: "Mais de 5.000 leads gerados para empresas.",
    items: [
      { label: "Mais clientes" },
      { label: "Menos esforço" },
      { label: "Mais controle" },
      { label: "Crescimento previsível" },
    ],
  },
  es: {
    tag: "El diferencial",
    title: "No contratás un servicio.",
    titleHighlight: "Instalás un sistema que vende todos los días.",
    desc: "Más de 5.000 leads generados para empresas.",
    items: [
      { label: "Más clientes" },
      { label: "Menos esfuerzo" },
      { label: "Más control" },
      { label: "Crecimiento predecible" },
    ],
  },
}

export function SalesMachine({ lang }: SalesMachineProps) {
  const t = copy[lang]

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(232,93,4,0.05)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{t.tag}</span>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 mb-4 text-balance">
          {t.title}{" "}
          <span className="text-[#e85d04] text-glow-orange">{t.titleHighlight}</span>
        </h2>
        <p className="text-[#8da4c8] text-lg leading-relaxed max-w-2xl mx-auto mb-12">{t.desc}</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {t.items.map((item, i) => (
            <div
              key={item.label}
              className="bg-[#0f1f3d] border border-[#1e3660] rounded-2xl p-6 card-hover flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#1a2f55] flex items-center justify-center group-hover:bg-[#e85d04]/20 transition-colors">
                {MachineIcons[i]}
              </div>
              <span className="text-white font-semibold text-sm text-center leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
