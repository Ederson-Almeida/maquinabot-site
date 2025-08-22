"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Codificando algo novo | Programando o Futuro"
  const typingSpeed = 100
  const cursorRef = useRef<HTMLSpanElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    const cursorBlinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0 "
      }
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorBlinkInterval)
    }
  }, [])

  // Animação de fundo financeiro
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o tamanho do canvas para preencher a seção
    const resizeCanvas = () => {
      const heroSection = canvas.parentElement
      if (heroSection) {
        canvas.width = heroSection.offsetWidth
        canvas.height = heroSection.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Elementos para a animação
    const symbols = ["$", "€", "¥", "£", "%", "+", "-", "=", "/", "*", "0", "1"]
    const chartLines = []
    const dataPoints = []
    const connections = []

    // Criar linhas de gráfico
    for (let i = 0; i < 5; i++) {
      const points = []
      const baseY = canvas.height * (0.3 + Math.random() * 0.4)
      const amplitude = canvas.height * 0.05
      const speed = 0.2 + Math.random() * 0.3

      chartLines.push({
        points,
        baseY,
        amplitude,
        speed,
        color: `rgba(${38}, ${192}, ${86}, ${0.15 + Math.random() * 0.2})`,
        width: 1 + Math.random() * 2,
      })
    }

    // Criar pontos de dados
    for (let i = 0; i < 50; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 3,
        speed: 0.2 + Math.random() * 0.5,
        color: `rgba(${38}, ${192}, ${86}, ${0.1 + Math.random() * 0.3})`,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      })
    }

    // Criar conexões entre pontos
    for (let i = 0; i < 30; i++) {
      const startPoint = Math.floor(Math.random() * dataPoints.length)
      const endPoint = Math.floor(Math.random() * dataPoints.length)

      if (startPoint !== endPoint) {
        connections.push({
          start: startPoint,
          end: endPoint,
          width: 0.5 + Math.random() * 1,
          color: `rgba(${38}, ${192}, ${86}, ${0.05 + Math.random() * 0.1})`,
        })
      }
    }

    // Função de animação
    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar linhas de gráfico
      chartLines.forEach((line) => {
        ctx.beginPath()
        ctx.strokeStyle = line.color
        ctx.lineWidth = line.width

        for (let x = 0; x < canvas.width; x += 5) {
          const y = line.baseY + Math.sin(x * 0.01 + time * line.speed) * line.amplitude

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      })

      // Desenhar pontos de dados e símbolos
      dataPoints.forEach((point) => {
        point.x += point.speed
        if (point.x > canvas.width) {
          point.x = 0
          point.y = Math.random() * canvas.height
        }

        ctx.fillStyle = point.color
        ctx.font = `${point.size * 5}px monospace`
        ctx.fillText(point.symbol, point.x, point.y)
      })

      // Desenhar conexões
      connections.forEach((conn) => {
        const start = dataPoints[conn.start]
        const end = dataPoints[conn.end]

        ctx.beginPath()
        ctx.strokeStyle = conn.color
        ctx.lineWidth = conn.width
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.stroke()
      })

      // Desenhar gráfico de candlestick simplificado
      const candleWidth = 8
      const candleGap = 4
      const candleCount = Math.floor(canvas.width / (candleWidth + candleGap))
      const startX = (canvas.width - candleCount * (candleWidth + candleGap)) / 2

      for (let i = 0; i < candleCount; i++) {
        const x = startX + i * (candleWidth + candleGap)
        const candleHeight = 20 + Math.sin(i * 0.2 + time) * 15
        const isUp = Math.sin(i * 0.5 + time * 2) > 0

        ctx.fillStyle = isUp ? "rgba(38, 192, 86, 0.5)" : "rgba(239, 68, 68, 0.5)"

        const y = canvas.height * 0.7 - (isUp ? candleHeight : 0)
        ctx.fillRect(x, y, candleWidth, candleHeight)

        // Desenhar sombras
        ctx.beginPath()
        ctx.strokeStyle = isUp ? "rgba(38, 192, 86, 0.5)" : "rgba(239, 68, 68, 0.5)"
        ctx.lineWidth = 1
        ctx.moveTo(x + candleWidth / 2, y - 10 - Math.random() * 10)
        ctx.lineTo(x + candleWidth / 2, y + candleHeight + 10 + Math.random() * 10)
        ctx.stroke()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Dados das tecnologias para o ticker
  const technologiesRow1 = [
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/javascript-BjtR0gBdQyzirq5C8fOrphw8qNQt6P.webp"
          alt="JavaScript"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "JavaScript",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/typescript-ewcEbmBiiDYJweViEncj1R7KPA8REY.webp"
          alt="TypeScript"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "TypeScript",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/html5-ePlQVxmPnURhv7CEpFNN3bOGT0Ho2K.webp"
          alt="HTML5"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "HTML5",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/css3-Fr2JhaI94YiVindbas1U8IILSnO0D9.webp"
          alt="CSS3"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "CSS3",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-akTPHAbnHCvy8KcY6vlo8I3LxRRjG1.webp"
          alt="React"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "React",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextjs-euN1wDCUavBKpignQ9mFXLlNOZVxbv.webp"
          alt="Next.js"
          width={20}
          height={20}
          className="h-5 w-5 dark:invert"
        />
      ),
      label: "Next.js",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tailwindcss-svlcwTI47kbaQ6x6jk6uaZzHROyeWM.webp"
          alt="Tailwind CSS"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "Tailwind",
    },
  ]

  const technologiesRow2 = [
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs-wvmRAhf0OixpdyyvaMW74dUB4hbpTK.webp"
          alt="Node.js"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "Node.js",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postgresql-cP1ue8LISJDj5BSfYYA0uve1zQzIw5.webp"
          alt="PostgreSQL"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "PostgreSQL",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-gJbd0mqRy8ReyCNhNwCavSTqFuLozh.webp"
          alt="Git"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "Git",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firebase-Qr4atfnuDO3Uoz0ttLJLNuZMlUwW2t.webp"
          alt="Firebase"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "Firebase",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MetaTrader_5-mugEJJyHw0doTsuQiHJvEihZuboURQ.png"
          alt="MetaTrader 5"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "MetaTrader 5",
    },
    {
      icon: (
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT-Logo-PNG-1-OOyqWypZTd44LnzJNU8z9fNiRisXkQ.png"
          alt="ChatGPT"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
      label: "AI/ML",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Canvas para animação de fundo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
        style={{ mixBlendMode: "lighten" }}
      />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.12),transparent_65%)]"></div>

      <div className="container relative z-10">
        <motion.div className="mx-auto max-w-4xl text-center" initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            <span className="block sm:text-4xl md:text-5xl lg:text-6xl">Desenvolvendo Softwares com</span>
            <span className="block mt-1 text-primary">Tecnologias Inovadoras</span>
          </h1>

          {/* Selo de especialização */}
          <div className="mt-6 inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-sm opacity-75"></div>
              <div className="relative bg-background border border-primary/50 text-primary font-medium px-4 py-1.5 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m14.5 9-5 5" />
                  <path d="m9.5 9 5 5" />
                </svg>
                Especialista em Mercado Financeiro e Inteligência Artificial
              </div>
            </div>
          </div>

          <div className="mt-6 h-8 sm:h-12">
            <p className="text-xl sm:text-2xl md:text-3xl font-mono">
              {typedText}
              <span ref={cursorRef} className="opacity-100">
                |
              </span>
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Entre em contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
              Ver Projetos
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Ticker - NOVO (duas linhas) */}
      <div className="mt-16">
        <p className="text-sm text-muted-foreground text-center mb-4">TECNOLOGIAS QUE UTILIZAMOS</p>

        {/* Primeira linha - deslizando para a esquerda */}
        <div className="ticker-container ticker-container-top">
          <div className="ticker-wrapper-left">
            {/* Primeira cópia das tecnologias */}
            {technologiesRow1.map((tech, index) => (
              <div key={`tech-1-${index}`} className="ticker-item">
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm hover:border-primary/50 transition-colors">
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.label}</span>
                </div>
              </div>
            ))}
            {/* Segunda cópia para criar o efeito de loop infinito */}
            {technologiesRow1.map((tech, index) => (
              <div key={`tech-2-${index}`} className="ticker-item">
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm hover:border-primary/50 transition-colors">
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda linha - deslizando para a direita */}
        <div className="ticker-container ticker-container-bottom">
          <div className="ticker-wrapper-right">
            {/* Primeira cópia das tecnologias */}
            {technologiesRow2.map((tech, index) => (
              <div key={`tech-3-${index}`} className="ticker-item">
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm hover:border-primary/50 transition-colors">
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.label}</span>
                </div>
              </div>
            ))}
            {/* Segunda cópia para criar o efeito de loop infinito */}
            {technologiesRow2.map((tech, index) => (
              <div key={`tech-4-${index}`} className="ticker-item">
                <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 text-sm hover:border-primary/50 transition-colors">
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  )
}
