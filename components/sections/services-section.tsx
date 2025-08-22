"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
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
    <section id="services" className="py-20 relative overflow-hidden bg-background/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(var(--primary-rgb),0.15),transparent_70%)]"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções tecnológicas abrangentes adaptadas às necessidades do seu negócio
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            {
              title: "Desenvolvimento Web ou Desktop",
              description:
                "Soluções de software personalizadas projetadas para atender aos seus desafios e oportunidades específicos.",
              features: [
                "Plataformas Web acessíveis em qualuqer lugar do mundo",
                "Softwares locais instaláveis em seu computador",
                "Arquitetura escalável",
                "Suporte contínuo",
              ],
            },
            {
              title: "Soluções para Mercado Financeiro",
              description:
                "Desenvolvimento especializado para o mercado financeiro, com foco em automação e integração com plataformas de trading.",
              features: [
                "Robôs traders para MetaTrader 5",
                "Dashboards conectados ao MT5",
                "Integração com sistemas de pagamento",
                "Análise de dados financeiros",
              ],
            },
            {
              title: "Bots para Telegram e/ou Whatsapp",
              description:
                "Automatize atendimentos e envio de mensagens com inteligência artificial.",
              features: [
                "Bots conectados com chat GPT, Gemini, e outros.",
                "Conectados com sistema de pagamentos",
                "Geração de imagens",
                "Disparo de mensagens em massa",
              ],
            },
            {
              title: "Equipe multi-talento e multi-tecnologia",
              description:
                "Disponibilizamos para seu projeto uma equipe especializada de a cordo com a necessida.",
              features: [
                "Programadores especializados nas principais linguagens do mercado",
                "Web designers para deixar seu projeto moderno e elegante",
                "UX/UI designers para deidxar seu sistema mais intuitivo",
                "Gestor de projetos para manter a equipe organizada e entregar no prazo",
              ],
            },
          ].map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-background/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
