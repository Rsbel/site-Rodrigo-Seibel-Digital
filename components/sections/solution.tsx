"use client"

import type { Lang } from "@/components/language-toggle"

interface SolutionProps {
  lang: Lang
}

const copy = {
  pt: {
    tag: "A solução",
    title: "A AngiruIA automatiza tudo para você.",
    desc: "Uma plataforma completa de automação que trabalha por você enquanto você dorme, viaja ou foca no que realmente importa.",
    points: [
      "Respostas instantâneas no WhatsApp e Instagram",
      "Captação de leads 24 horas por dia",
      "Follow-up automático sem esforço",
      "Integração com CRM e gestão completa",
    ],
  },
  es: {
    tag: "La solución",
    title: "AngiruIA automatiza todo para vos.",
    desc: "Una plataforma completa de automatización que trabaja por vos mientras dormís, viajás o te enfocás en lo que realmente importa.",
    points: [
      "Respuestas instantáneas en WhatsApp e Instagram",
      "Captación de leads 24 horas al día",
      "Follow-up automático sin esfuerzo",
      "Integración con CRM y gestión completa",
    ],
  },
}

export function Solution({ lang }: SolutionProps) {
  const t = copy[lang]

  return (
    <section className="py-20 px-4 bg-[#0f1f3d]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1">
            <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{t.tag}</span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 mb-5 text-balance">
              {t.title}
            </h2>
            <p className="text-[#8da4c8] text-lg leading-relaxed mb-8">{t.desc}</p>
            <ul className="flex flex-col gap-3">
              {t.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#e85d04] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-white">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-[#f0f4ff] text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — visual card */}
          <div className="flex-1 w-full max-w-sm">
            <div className="bg-[#0a1628] border border-[#e85d04]/20 rounded-2xl p-6 glow-orange">
              {/* Simulated dashboard */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#e85d04]" />
                <div className="w-3 h-3 rounded-full bg-[#1a2f55]" />
                <div className="w-3 h-3 rounded-full bg-[#1a2f55]" />
                <span className="text-xs text-[#8da4c8] ml-2 font-mono">AngiruIA · Dashboard</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: lang === "pt" ? "Leads hoje" : "Leads hoy", value: "47", up: true },
                  { label: lang === "pt" ? "Mensagens enviadas" : "Mensajes enviados", value: "312", up: true },
                  { label: lang === "pt" ? "Conversões" : "Conversiones", value: "23", up: true },
                  { label: lang === "pt" ? "Tempo de resposta" : "Tiempo de respuesta", value: "2s", up: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-[#1a2f55] rounded-xl px-4 py-3">
                    <span className="text-[#8da4c8] text-sm">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-white text-lg">{item.value}</span>
                      <span className={`text-xs font-semibold ${item.up ? "text-green-400" : "text-[#e85d04]"}`}>
                        {item.up ? "↑" : "↓"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-[#e85d04] text-xs font-semibold uppercase tracking-widest pulse-dot inline-block">
                  {lang === "pt" ? "● Operando agora" : "● Operando ahora"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
