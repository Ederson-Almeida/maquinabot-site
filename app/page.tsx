"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SpecialtiesSection } from "@/components/sections/specialties-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CTASection } from "@/components/sections/cta-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-gradient-to-b from-background to-background/80">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maquinabot%20escuro%20SF-ezUTrbFVFItQUVdGSW9Y9M9cOyzw8T.png"
              alt="MaquinaBot Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#specialties"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Especialidades
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Ferramentas
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80">
                <DropdownMenuItem asChild>
                  <a
                    href="https://watermark.maquinabot.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-4 cursor-pointer"
                  >
                    <div className="font-medium">Watermark</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Aplique marca d'água em suas imagens de forma fácil e grátis
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://excalidraw.maquinabot.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start p-4 cursor-pointer"
                  >
                    <div className="font-medium">Excalidraw</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Quadro branco virtual para esboçar diagramas com aparência de desenhos à mão.
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/tools/meu-diario"
                    className="flex flex-col items-start p-4 cursor-pointer"
                  >
                    <div className="font-medium">Meu Diário</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Seu espaço pessoal e seguro para registrar memórias e pensamentos.
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <Button variant="default" className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            Comece Agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden border-primary/20 bg-transparent">
            <span className="sr-only">Abrir menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <ProjectsSection />
        <SpecialtiesSection />
        <ServicesSection />
        <CTASection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maquinabot%20escuro%20SF-ezUTrbFVFItQUVdGSW9Y9M9cOyzw8T.png"
                  alt="MaquinaBot Logo"
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-muted-foreground">
                Transformando negócios através de soluções tecnológicas inovadoras desde 2018.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Desenvolvimento de Software
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Robôs para MetaTrader 5
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Análise de Dados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Cibersegurança
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Termos de Serviço
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Conformidade LGPD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 MaquinaBot. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
