"use client"

import { useState, useEffect } from "react"
import type { Lang } from "@/components/language-toggle"

interface DemoProps {
  lang: Lang
}

const StepIcons = [
  // Message bubble
  <svg key="msg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  // Zap
  <svg key="zap" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>,
  // Send / Smartphone
  <svg key="send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>,
  // Dollar / Sale
  <svg key="dollar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[#e85d04]">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
]

const copy = {
  pt: {
    tag: "Demonstração ao vivo",
    title: "Veja como funciona na prática",
    subtitle: "Um cliente comenta no seu post do Instagram e em segundos recebe uma mensagem automática personalizada.",
    comment: "Eu quero! Como funciona?",
    commentAuthor: "@cliente_real",
    steps: [
      { text: "Cliente comenta no post" },
      { text: "IA detecta o interesse" },
      { text: "Mensagem automática enviada" },
      { text: "Venda realizada" },
    ],
    msgTitle: "Rodrigo Seibel",
    msg: "Olá! Vi que você se interessou. Posso te apresentar nossa solução em 2 minutos? Clique aqui",
    msgTime: "agora",
    cta: "Quero isso no meu negócio",
    online: "online",
  },
  es: {
    tag: "Demostración en vivo",
    title: "Mirá cómo funciona en la práctica",
    subtitle: "Un cliente comenta en tu post de Instagram y en segundos recibe un mensaje automático personalizado.",
    comment: "¡Yo quiero! ¿Cómo funciona?",
    commentAuthor: "@cliente_real",
    steps: [
      { text: "Cliente comenta en el post" },
      { text: "IA detecta el interés" },
      { text: "Mensaje automático enviado" },
      { text: "Venta realizada" },
    ],
    msgTitle: "Rodrigo Seibel",
    msg: "¡Hola! Vi que te interesó. ¿Puedo presentarte nuestra solución en 2 minutos? Hacé clic aquí",
    msgTime: "ahora",
    cta: "Quiero esto en mi negocio",
    online: "en línea",
  },
}

export function Demo({ lang }: DemoProps) {
  const t = copy[lang]
  const [step, setStep] = useState(0)
  const WHATSAPP = "https://wa.link/9ho1h0"

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s < t.steps.length - 1 ? s + 1 : 0))
    }, 1800)
    return () => clearInterval(interval)
  }, [t.steps.length])

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e85d04]/30 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#e85d04] text-sm font-semibold uppercase tracking-widest">{t.tag}</span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white mt-3 mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-[#8da4c8] text-lg max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Steps */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            {t.steps.map((s, i) => (
              <div
                key={s.text}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 ${
                  i === step
                    ? "bg-[#e85d04]/10 border-[#e85d04]/50 shadow-lg shadow-[#e85d04]/10"
                    : i < step
                    ? "bg-[#0f1f3d] border-[#1e3660] opacity-70"
                    : "bg-[#0f1f3d] border-[#1e3660] opacity-40"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                    i <= step ? "bg-[#e85d04]/20" : "bg-[#1a2f55]"
                  }`}
                >
                  {StepIcons[i]}
                </div>
                <div className="flex-1">
                  <span className="text-white font-semibold text-base">{s.text}</span>
                </div>
                {i < step && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-400 shrink-0">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {i === step && (
                  <div className="w-5 h-5 rounded-full border-2 border-[#e85d04] border-t-transparent animate-spin shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="flex-1 flex justify-center w-full max-w-xs">
            <div className="w-72 bg-[#111b27] rounded-3xl border border-[#1e3660] overflow-hidden shadow-2xl">
              {/* WhatsApp header */}
              <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e85d04] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M20 21a8 8 0 1 0-16 0" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.msgTitle}</div>
                  <div className="text-green-300 text-xs">{t.online}</div>
                </div>
              </div>

              {/* Chat area */}
              <div className="p-4 bg-[#0a1628] min-h-[200px] flex flex-col gap-3">
                {/* Instagram comment bubble */}
                <div className="bg-[#1a2f55] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#e85d04] to-[#ff7b2e]" />
                    <span className="text-[#8da4c8] text-xs font-semibold">{t.commentAuthor}</span>
                    <span className="ml-auto">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#e85d04]">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-white text-sm">{t.comment}</p>
                </div>

                {/* Auto-reply message */}
                <div
                  className={`transition-all duration-700 ${
                    step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="bg-[#005c4b] rounded-xl rounded-bl-none p-3 max-w-[85%]">
                    <p className="text-white text-sm leading-relaxed">{t.msg} {step >= 2 ? "👇" : ""}</p>
                    <div className="flex justify-end mt-1">
                      <span className="text-[#8da4c8] text-xs">{t.msgTime} ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e85d04] hover:bg-[#ff7b2e] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 glow-orange-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
