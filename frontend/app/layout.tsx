import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Focus Seguros - Proteja a sua vida e a daqueles que o rodeiam",
  description:
    "Focus Seguros oferece soluções personalizadas em seguros automóvel, habitação, saúde, vida e empresariais. Encontramos a solução mais adequada para todos os seus seguros.",
  keywords: "seguros, seguro automóvel, seguro habitação, seguro saúde, seguro vida, seguros empresas, Portugal",
  authors: [{ name: "Focus Seguros" }],
  creator: "Focus Seguros",
  publisher: "Focus Seguros",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://focusseguros.pt",
    title: "Focus Seguros - Proteja a sua vida e a daqueles que o rodeiam",
    description:
      "Focus Seguros oferece soluções personalizadas em seguros automóvel, habitação, saúde, vida e empresariais.",
    siteName: "Focus Seguros",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Seguros - Proteja a sua vida e a daqueles que o rodeiam",
    description:
      "Focus Seguros oferece soluções personalizadas em seguros automóvel, habitação, saúde, vida e empresariais.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
