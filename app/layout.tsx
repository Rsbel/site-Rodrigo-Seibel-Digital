import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'AngiruIA – Automação, IA e Marketing Digital',
  description: 'Automatize seu atendimento e transforme mensagens em vendas com inteligência artificial. WhatsApp, Instagram, CRM e tráfego pago.',
  generator: 'v0.app',
  keywords: ['automação', 'inteligência artificial', 'marketing digital', 'WhatsApp', 'tráfego pago', 'CRM'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${barlow.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
