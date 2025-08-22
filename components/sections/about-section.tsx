"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_70%)]"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-75 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden border border-primary/20">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg-OLtHiNlNbtzZKZhvvsQHBDtTN1CAWY.jpeg"
                  alt="Desenvolvedor trabalhando em código"
                  className="w-full h-auto object-cover rounded-2xl"
                  width={1200}
                  height={800}
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Sobre a <span className="text-primary">MaquinaBot</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A Maquinabot é uma software house especializada no desenvolvimento de plataformas para diversos segmentos, com destaque para o mercado financeiro e inteligência artificial. Criamos soluções inovadoras e automatizadas, desde sistemas personalizados até robôs para MetaTrader, sempre focados em tecnologia de ponta, eficiência e inovação. Nosso compromisso é transformar ideias em softwares de alto desempenho para impulsionar negócios.
            </p>
            <ul className="space-y-4">
              {[
                "Fundada em 2018 com a missão de democratizar a tecnologia",
                "Especialistas em automação para o mercado financeiro",
                "Mais de 200 projetos entregues com sucesso",
                "99% de satisfação dos clientes",
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
