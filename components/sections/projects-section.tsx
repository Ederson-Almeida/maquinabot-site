"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Users, Calendar, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageCarousel } from "@/components/image-carousel"
import { useState } from "react"
import { ImageModal } from "@/components/image-modal"

export function ProjectsSection() {
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

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" })

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Dados dos projetos
  const projects = [
    {
      title: "Gênesis - Plataforma de IA",
      description:
        "Plataforma completa de inteligência artificial para criação de conteúdo digital, com recursos para geração de logos, textos e imagens para redes sociais, landing pages e Chat e muito mais.",
      client: "3R Digital",
      year: "2025",
      technologies: ["Next.js", "Fastfy", "OpenAI API", "MongoDB"],
      projectUrl: "#",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20214120.jpg-uaQAcBOME5SsdEsNeFzn7OoCPWBetH.jpeg",
          alt: "Tela de login da plataforma Gênesis",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20214544.jpg-vehhfgGvw7iV6M0HuAWl0v1FPTrp4e.jpeg",
          alt: "Interface de geração de logos para ChatFlow",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20214218.jpg-meRIBnp6QkltfPfBQBTg7JoE04kVAN.jpeg",
          alt: "Dashboard de projetos da plataforma Gênesis",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20214701.jpg-VIDdKxS7yVdsyPqXJGXDFKMKq59Z5F.jpeg",
          alt: "Interface de criação de conteúdo para redes sociais",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20214416.jpg-llsuRW5ox9Wa3skPduOuHnemSY8RDX.jpeg",
          alt: "Chatbot integrado à plataforma Gênesis",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20215017.jpg-NTBBNGsu1SOknkvi2YuzuYlna4ZFJx.jpeg",
          alt: "Editor de landing page para GameStudio",
        },
      ],
    },
    {
      title: "Cometta - Assistente de IA para WhatsApp",
      description:
        "Plataforma que integra ChatGPT e Gemini com WhatsApp para criar assistentes de IA personalizados. Permite automatizar atendimento ao cliente, oferecer suporte 24/7 e gerenciar múltiplas conexões de WhatsApp.",
      client: "Cometta IA",
      year: "2025",
      technologies: ["Next.js", "Node.js", "WhatsApp API", "OpenAI", "Google Gemini", "MongoDB"],
      projectUrl: "https://comettaia.com.br",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-En0h9h5tdd5IztgcfXDb2EFDphsLOP.jpeg",
          alt: "Página inicial da Cometta mostrando o assistente de IA para WhatsApp",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-daILWVnWZhfSMFlF7gUuRe2X6iOQzk.jpeg",
          alt: "Tela de login da plataforma Cometta",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-MtoigxNOP8aG1TtWvoMmOg285bJ7t1.jpeg",
          alt: "Interface de gerenciamento de conversas do WhatsApp",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Kq3C2gVDDvAX6NoWdzTa0gbadNTX9V.jpeg",
          alt: "Página de modelos de instruções para configurar o assistente",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-dmTKCvMi6a6c6B73P4l6AQ588Y3SU9.jpeg",
          alt: "Seção de tutoriais da plataforma Cometta",
        },
      ],
    },
    {
      title: "GYPPS - Dashboard para MetaTrader 5",
      description:
        "Dashboard conectado ao MetaTrader 5 para visualização do histórico de operações, evolução do lucro da conta, operações abertas em tempo real, gestão de acessos para administradores.",
      client: "Gypps tecnologia",
      year: "2024",
      technologies: ["Next.js", "Redis", "PostgreSQL", "WebSockets", "MQL5", "MetaTrader 5"],
      projectUrl: "https://gypps.com.br",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20221852.jpg-aV8laQP3ZcIfSgH7Yz7SZhjfGPymZn.jpeg",
          alt: "Tela de login da plataforma GYPPS",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20221350.jpg-LdqzxVwpK7GfSvu48pKd5huvKy6aPM.jpeg",
          alt: "Interface de cadastro de clientes",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20221815.jpg-xwv73QlwI5cKnQUplhSzMtTPv3vtyp.jpeg",
          alt: "Histórico de operações de trading",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20221722.jpg-Dp6wozFJ0KmRD28HzPBtczA5Aoa9Br.jpeg",
          alt: "Lista de clientes cadastrados",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-23%20221213.jpg-MKT8Lg4ycxFAE3f3YOl5z4v0ePNVFM.jpeg",
          alt: "Dashboard com gráfico de performance e histórico de transações",
        },
      ],
    },
    {
      title: "Watermark - Aplicador de Marca d'água",
      description:
        "Aplicação web para adicionar marcas d'água em imagens de forma rápida e fácil. Permite configurar opacidade, tamanho e posição da marca d'água, com visualização em tempo real e download imediato.",
      client: "MaquinaBot",
      year: "2025",
      technologies: ["Next.js", "Node.js"],
      projectUrl: "https://watermark.maquinabot.com.br",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/water.jpg-EDdOKBYJSCi7EptzwPI7Szdg0XPN5I.jpeg",
          alt: "Interface do aplicativo Watermark mostrando a adição de marca d'água em uma imagem",
        },
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e impactantes
          </p>
        </motion.div>

        <motion.div
          className="space-y-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative">
                  <ImageCarousel
                    images={project.images}
                    className="shadow-xl cursor-pointer"
                    onImageClick={(src, alt) => openModal(src, alt)}
                  />
                </div>
              </div>

              <div className={`space-y-6 order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-lg text-muted-foreground">{project.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Users size={18} />
                      <span className="font-medium">Cliente</span>
                    </div>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar size={18} />
                      <span className="font-medium">Ano</span>
                    </div>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Code size={18} />
                    <span className="font-medium">Tecnologias</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/20 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-4 border-primary/20 hover:bg-primary/10">
                    Ver Projeto
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
      <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage.src} imageAlt={selectedImage.alt} />
    </section>
  )
}
