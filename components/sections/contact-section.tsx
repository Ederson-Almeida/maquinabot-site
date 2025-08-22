"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { sendEmail } from "@/app/actions/send-email"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

// Manual validation function
const validateForm = (data: FormData) => {
  const errors: Partial<Record<keyof FormData, string>> = {}

  if (!data.firstName.trim()) {
    errors.firstName = "Nome é obrigatório"
  }

  if (!data.lastName.trim()) {
    errors.lastName = "Sobrenome é obrigatório"
  }

  if (!data.email.trim()) {
    errors.email = "Email é obrigatório"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Email inválido"
  }

  if (!data.subject.trim()) {
    errors.subject = "Assunto é obrigatório"
  }

  if (!data.message.trim()) {
    errors.message = "Mensagem é obrigatória"
  } else if (data.message.trim().length < 10) {
    errors.message = "Mensagem deve ter pelo menos 10 caracteres"
  }

  return errors
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const { register, handleSubmit, reset, getValues } = useForm<FormData>()

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const onSubmit = async (data: FormData) => {
    // Manual validation
    const errors = validateForm(data)
    setValidationErrors(errors)

    if (Object.keys(errors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await sendEmail(data)

      setSubmitResult({
        success: result.success,
        message: result.message,
      })

      if (result.success) {
        reset() // Reset form on success
        setValidationErrors({}) // Clear validation errors
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.15),transparent_70%)]"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem um projeto em mente? Vamos discutir como podemos ajudar você a alcançar seus objetivos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="bg-background/50 border border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
              <CardDescription>Entre em contato conosco através de qualquer um destes canais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  icon: <Mail className="h-5 w-5 text-primary" />,
                  label: "Email",
                  value: "contato@maquinabot.com.br",
                },
                {
                  icon: (
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
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: "Telefone",
                  value: "(11) 91781-9133",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <h4 className="font-medium mb-4">Siga-nos</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: (
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
                          className="h-5 w-5"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      ),
                      label: "Instagram",
                    },
                    {
                      icon: (
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
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      ),
                      label: "LinkedIn",
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/50 border border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve</CardDescription>
            </CardHeader>
            <CardContent>
              {submitResult && (
                <Alert
                  className={`mb-6 ${submitResult.success ? "bg-green-500/10 text-green-500" : "bg-destructive/10 text-destructive"}`}
                >
                  {submitResult.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <AlertTitle>{submitResult.success ? "Sucesso!" : "Erro"}</AlertTitle>
                  <AlertDescription>{submitResult.message}</AlertDescription>
                </Alert>
              )}

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="firstName"
                      {...register("firstName")}
                      className={`flex h-10 w-full rounded-md border ${validationErrors.firstName ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      placeholder="Digite seu nome"
                    />
                    {validationErrors.firstName && (
                      <p className="text-sm text-destructive mt-1">{validationErrors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Sobrenome
                    </label>
                    <input
                      id="lastName"
                      {...register("lastName")}
                      className={`flex h-10 w-full rounded-md border ${validationErrors.lastName ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      placeholder="Digite seu sobrenome"
                    />
                    {validationErrors.lastName && (
                      <p className="text-sm text-destructive mt-1">{validationErrors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`flex h-10 w-full rounded-md border ${validationErrors.email ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    placeholder="Digite seu email"
                  />
                  {validationErrors.email && <p className="text-sm text-destructive mt-1">{validationErrors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    {...register("subject")}
                    className={`flex h-10 w-full rounded-md border ${validationErrors.subject ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    placeholder="Digite o assunto"
                  />
                  {validationErrors.subject && (
                    <p className="text-sm text-destructive mt-1">{validationErrors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    className={`flex min-h-[120px] w-full rounded-md border ${validationErrors.message ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    placeholder="Digite sua mensagem"
                  />
                  {validationErrors.message && (
                    <p className="text-sm text-destructive mt-1">{validationErrors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
