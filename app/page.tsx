"use client"

import { useState } from "react"
import { type Lang } from "@/components/language-toggle"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Pain } from "@/components/sections/pain"
import { Solution } from "@/components/sections/solution"
import { Demo } from "@/components/sections/demo"
import { Services } from "@/components/sections/services"
import { SalesMachine } from "@/components/sections/sales-machine"
import { Testimonials } from "@/components/sections/testimonials"
import { Objections } from "@/components/sections/objections"
import { Cta } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("pt")

  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Navbar lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <hr className="section-divider" />

      <Pain lang={lang} />

      <hr className="section-divider" />

      <Solution lang={lang} />

      <hr className="section-divider" />

      <Demo lang={lang} />

      <hr className="section-divider" />

      <Services lang={lang} />

      <hr className="section-divider" />

      <SalesMachine lang={lang} />

      <hr className="section-divider" />

      <Testimonials lang={lang} />

      <hr className="section-divider" />

      <Objections lang={lang} />

      <hr className="section-divider" />

      <Cta lang={lang} />

      <Footer lang={lang} />

      <WhatsAppFloat lang={lang} />
    </main>
  )
}
