"use client"

import { useState } from "react"

export type Lang = "pt" | "es"

interface LanguageToggleProps {
  lang: Lang
  setLang: (lang: Lang) => void
}

export function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-1 bg-[#0f1f3d] border border-[#1e3660] rounded-full p-1">
      <button
        onClick={() => setLang("pt")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
          lang === "pt"
            ? "bg-[#e85d04] text-white shadow-sm"
            : "text-[#8da4c8] hover:text-white"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
          lang === "es"
            ? "bg-[#e85d04] text-white shadow-sm"
            : "text-[#8da4c8] hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  )
}
