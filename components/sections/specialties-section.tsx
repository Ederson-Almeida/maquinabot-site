"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function SpecialtiesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="specialties" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_60%)]"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Nosso <span className="text-primary">Diferencial</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especializados em soluções tecnológicas para o mercado financeiro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold">Especialistas em Mercado Financeiro</h3>
            <p className="text-lg text-muted-foreground">
              Diferente de outras empresas de software, a MaquinaBot é especializada no desenvolvimento de soluções para
              o mercado financeiro, com foco em automação de trading e integração com plataformas financeiras.
            </p>

            <ul className="space-y-4">
              {[
                "Desenvolvimento de robôs traders para MetaTrader 5",
                "Dashboards personalizados conectados ao MetaTrader 5",
                "Automação de estratégias de trading",
                "Integração com sistemas de pagamento",
                "Análise de dados financeiros em tempo real",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
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
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Conheça Nossas Soluções Financeiras
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-75 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-background/30">
                <div className="p-4 flex flex-col items-center">
                  <div className="mb-6 rounded-full bg-primary/10 p-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mt5-tohR8EZXR13kHkhJD6h47b8krWFmdC.png"
                      alt="MetaTrader 5 Logo"
                      width={48}
                      height={48}
                      className="h-48 w-48"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-4">MetaTrader 5 Experts</h4>
                  <p className="text-center text-muted-foreground mb-6">
                    Desenvolvemos robôs traders (Expert Advisors) personalizados que automatizam suas estratégias de
                    trading 24 horas por dia, 7 dias por semana.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-background/50 p-4 rounded-lg border border-primary/10 text-center">
                      <h5 className="font-medium mb-1">Backtesting</h5>
                      <p className="text-sm text-muted-foreground">Teste suas estratégias com dados históricos</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-primary/10 text-center">
                      <h5 className="font-medium mb-1">Otimização</h5>
                      <p className="text-sm text-muted-foreground">Ajuste fino para maximizar resultados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

