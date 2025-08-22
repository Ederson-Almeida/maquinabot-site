"use client"

import { Lock, LineChart, Globe, Database, Layers, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Recursos <span className="text-primary">Avançados</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções tecnológicas de ponta projetadas para transformar seu negócio
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              icon: <Lock className="h-10 w-10 text-primary" />,
              title: "Segurança Avançada",
              description: "Aplicação e banco de dados hospedados em plataformas de alta seguraça para protejer seu projeto contra ataques maliciosos.",
            },
            {
              icon: <LineChart className="h-10 w-10 text-primary" />,
              title: "Trading Automatizado",
              description: "Robôs traders personalizados para MetaTrader 5 que operam 24/7 seguindo suas estratégias.",
            },
            {
              icon: <Globe className="h-10 w-10 text-primary" />,
              title: "Infraestrutura Global",
              description:
                "Arquitetura de sistemas distribuídos com acesso de baixa latência em qualquer lugar do mundo.",
            },
            {
              icon: <Database className="h-10 w-10 text-primary" />,
              title: "Análise de Dados",
              description: "Transforme dados brutos em insights acionáveis com inteligencia artificial.",
            },
            {
              icon: <Layers className="h-10 w-10 text-primary" />,
              title: "Arquitetura Escalável",
              description: "Construído para escalar com seu negócio, de startup a empresa, sem tempo de inatividade.",
            },
            {
              icon: <Wallet className="h-10 w-10 text-primary" />,
              title: "Integração de Pagamentos",
              description:
                "Conectamos com os principais sistemas de pagamentos nacionais e internacionais: Mercado Pago, PagBank, PayPal, Stripe, Eduzz, Hotmart, Kiwify, entre outras.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-background/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
