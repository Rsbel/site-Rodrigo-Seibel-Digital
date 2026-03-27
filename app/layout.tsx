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
  title: 'Rodrigo Seibel – Tráfego, CRM e Automação',
  description: 'Transforme mensagens em vendas no automático com tráfego, CRM e automação. Estruture seu negócio digital para vender todos os dias.',
  generator: 'v0.app',
  keywords: ['tráfego pago', 'CRM', 'automação', 'marketing digital', 'WhatsApp', 'vendas'],
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
