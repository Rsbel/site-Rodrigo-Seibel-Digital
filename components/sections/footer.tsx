"use client"

import Image from "next/image"
import type { Lang } from "@/components/language-toggle"

interface FooterProps {
  lang: Lang
}

const copy = {
  pt: {
    tagline: "Automatize. Escale. Venda.",
    rights: "Todos os direitos reservados.",
    links: ["WhatsApp", "Instagram", "Início"],
  },
  es: {
    tagline: "Automatizá. Escalá. Vendé.",
    rights: "Todos los derechos reservados.",
    links: ["WhatsApp", "Instagram", "Inicio"],
  },
}

export function Footer({ lang }: FooterProps) {
  const t = copy[lang]

  return (
    <footer className="bg-[#060e1c] border-t border-[#1e3660] py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Novo%20logo%20sem%20fundo%20%281%29-aW6zSBEY8vTvXxrh1VCLyH4CZGho1A.png"
          alt="AngiruIA"
          width={140}
          height={45}
          className="h-10 w-auto object-contain opacity-80"
        />
        <p className="text-[#8da4c8] text-sm">{t.tagline}</p>
        <div className="flex gap-6">
          {t.links.map((link) => (
            <a key={link} href="#" className="text-[#8da4c8] hover:text-[#e85d04] text-sm transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-[#1e3660] text-xs">
          © {new Date().getFullYear()} AngiruIA. {t.rights}
        </p>
      </div>
    </footer>
  )
}
