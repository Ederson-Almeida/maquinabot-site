import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "MaquinaBot - Soluções Tecnológicas Inovadoras",
  description: "Transformando negócios através de soluções tecnológicas inovadoras",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marca%20Maquina-KatNHOtbB81xRjhrvhEjWJ2H3m5ni4.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marca%20Maquina-KatNHOtbB81xRjhrvhEjWJ2H3m5ni4.png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marca%20Maquina-KatNHOtbB81xRjhrvhEjWJ2H3m5ni4.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marca%20Maquina-KatNHOtbB81xRjhrvhEjWJ2H3m5ni4.png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marca%20Maquina-KatNHOtbB81xRjhrvhEjWJ2H3m5ni4.png",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marca%20Maquina-KatNHOtbB81xRjhrvhEjWJ2H3m5ni4.png",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${spaceGrotesk.variable} font-sans`}>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5749445498360529"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
