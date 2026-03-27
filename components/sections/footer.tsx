"use client"

import type { Lang } from "@/components/language-toggle"

interface FooterProps {
  lang: Lang
}

const copy = {
  pt: {
    tagline: "Tráfego | CRM | Automação",
    rights: "Todos os direitos reservados.",
    links: ["WhatsApp", "Instagram"],
    instagram: "https://www.instagram.com/rodrigoseibeldigital/",
    whatsapp: "https://wa.link/9ho1h0",
  },
  es: {
    tagline: "Tráfico | CRM | Automatización",
    rights: "Todos los derechos reservados.",
    links: ["WhatsApp", "Instagram"],
    instagram: "https://www.instagram.com/rodrigoseibeldigital/",
    whatsapp: "https://wa.link/9ho1h0",
  },
}

export function Footer({ lang }: FooterProps) {
  const t = copy[lang]

  return (
    <footer className="bg-[#060e1c] border-t border-[#1e3660] py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <div className="text-center">
          <h3 className="font-heading font-bold text-white text-xl">Rodrigo Seibel</h3>
          <p className="text-[#8da4c8] text-sm mt-1">{t.tagline}</p>
        </div>
        <div className="flex gap-6">
          <a 
            href={t.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8da4c8] hover:text-[#e85d04] text-sm transition-colors"
          >
            WhatsApp
          </a>
          <a 
            href={t.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#8da4c8] hover:text-[#e85d04] text-sm transition-colors flex items-center gap-1"
          >
            @rodrigoseibeldigital
          </a>
        </div>
        <p className="text-[#1e3660] text-xs">
          © {new Date().getFullYear()} Rodrigo Seibel. {t.rights}
        </p>
      </div>
    </footer>
  )
}
