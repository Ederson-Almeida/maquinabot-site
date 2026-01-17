import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lock, BookOpen, PenLine, Shield } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meu Diário Online - MaquinaBot",
  description: "Uma plataforma segura e privada para registrar seus pensamentos, memórias e momentos importantes.",
}

export default function MeuDiarioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            MaquinaBot
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Voltar ao Site
            </Link>
          </nav>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 text-center relative z-10">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Lançamento
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Meu Diário Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Um espaço seguro, privado e sempre acessível para guardar suas memórias, pensamentos e reflexões diárias.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://meudiario.maquinabot.com.br" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 text-lg">
                  Acessar Aplicativo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/">
                <Button variant="outline" size="lg" className="h-12 border-primary/20 hover:bg-primary/5">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0" />
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-muted/30 border-y border-border/40">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Por que usar o Meu Diário?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/40 p-6 rounded-2xl hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Totalmente Privado</h3>
                <p className="text-muted-foreground">
                  Seus registros são apenas seus. Nossa plataforma prioriza sua privacidade acima de tudo.
                </p>
              </div>

              <div className="bg-background border border-border/40 p-6 rounded-2xl hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Organização Simples</h3>
                <p className="text-muted-foreground">
                  Visualize suas entradas por data, encontre memórias antigas facilmente e mantenha tudo organizado.
                </p>
              </div>

              <div className="bg-background border border-border/40 p-6 rounded-2xl hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <PenLine className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Editor Rico</h3>
                <p className="text-muted-foreground">
                  Escreva com liberdade usando nosso editor de texto completo com formatação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto space-y-8 p-12 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl border border-primary/20">
              <h2 className="text-3xl md:text-4xl font-bold">Comece a escrever sua história hoje</h2>
              <p className="text-lg text-muted-foreground">
                Junte-se a milhares de usuários que já utilizam o Meu Diário para organizar seus pensamentos.
              </p>
              <a href="https://meudiario.maquinabot.com.br/register" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full">
                  Criar minha conta grátis
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 MaquinaBot. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
