"use client"

import type { Lang } from "@/components/language-toggle"

interface TestimonialsProps {
  lang: Lang
}

const copy = {
  pt: {
    tag: "Resultados reais",
    title: "Quem já usa a AngiruIA",
    items: [
      {
        name: "Marcos Oliveira",
        role: "Clínica Odontológica",
        stars: 5,
        text: "Aumentamos nossas vendas em 40% no primeiro mês. O WhatsApp com IA atende os pacientes automaticamente e nossa equipe só fecha os agendamentos.",
      },
      {
        name: "Ana González",
        role: "Loja de Moda Online",
        stars: 5,
        text: "O Instagram automático foi um divisor de águas. Agora cada comentário no meu post vira um lead qualificado no WhatsApp. Incrível!",
      },
      {
        name: "Ricardo Fernandes",
        role: "Imobiliária",
        stars: 5,
        text: "Reduzimos o tempo de atendimento pela metade e triplicamos o número de leads. O CRM integrado nos dá controle total do funil.",
      },
    ],
  },
  es: {
    tag: "Resultados reales",
    title: "Quienes ya usan AngiruIA",
    items: [
      {
        name: "Marcos Oliveira",
        role: "Clínica Odontológica",
        stars: 5,
        text: "Aumentamos nuestras ventas un 40% en el primer mes. El WhatsApp con IA atiende a los pacientes automáticamente y nuestro equipo solo cierra los turnos.",
      },
      {
        name: "Ana González",
        role: "Tienda de Moda Online",
        stars: 5,
        text: "El Instagram automático fue un divisor de aguas. Ahora cada comentario en mi post se convierte en un lead calificado en WhatsApp. ¡Increíble!",
      },
      {
        name: "Ricardo Fernandes",
        role: "Inmobiliaria",
        stars: 5,
        text: "Reducimos el tiempo de atención a la mitad y triplicamos la cantidad de leads. El CRM integrado nos da control total del embudo.",
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
