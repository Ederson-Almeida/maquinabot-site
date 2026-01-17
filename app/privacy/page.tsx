"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Voltar ao início
      </Link>
      
      <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
        <p className="mb-4">Última atualização: 17 de janeiro de 2026</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introdução</h2>
        <p className="mb-4">
          A MaquinaBot ("nós", "nosso") opera o site maquinabot.com.br. Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço e sobre as escolhas que você tem associadas a esses dados.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Publicidade e Google AdSense</h2>
        <p className="mb-4">
          Nós utilizamos o Google AdSense para exibir anúncios em nosso site. O Google, como fornecedor terceirizado, utiliza cookies para exibir anúncios no nosso site.
        </p>
        <p className="mb-4">
          <strong>Cookie DART:</strong> O uso do cookie DART pelo Google permite que ele e seus parceiros exibam anúncios para nossos usuários com base em sua visita ao nosso site e/ou a outros sites na Internet.
        </p>
        <p className="mb-4">
          Os usuários podem optar por não usar o cookie DART visitando a Política de Privacidade da rede de conteúdo e anúncios do Google em <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/technologies/ads</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Coleta e Uso de Dados</h2>
        <p className="mb-4">
          Coletamos vários tipos diferentes de informações para diversas finalidades, a fim de fornecer e melhorar nosso Serviço para você.
        </p>
        
        <h3 className="text-xl font-medium mt-6 mb-3">Cookies e Dados de Rastreamento</h3>
        <p className="mb-4">
          Usamos cookies e tecnologias de rastreamento semelhantes para rastrear a atividade em nosso Serviço e manter certas informações.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. LGPD (Lei Geral de Proteção de Dados)</h2>
        <p className="mb-4">
          Se você reside no Brasil, tem direitos garantidos pela LGPD, incluindo o direito de acessar, corrigir e excluir seus dados pessoais. Para exercer esses direitos, entre em contato conosco.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contato</h2>
        <p className="mb-4">
          Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail: contato@maquinabot.com.br
        </p>
      </article>
    </div>
  )
}
