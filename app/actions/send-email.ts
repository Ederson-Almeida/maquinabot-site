"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define the form schema for validation
const formSchema = z.object({
  firstName: z.string().min(1, { message: "Nome é obrigatório" }),
  lastName: z.string().min(1, { message: "Sobrenome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(1, { message: "Assunto é obrigatório" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
})

export type FormData = z.infer<typeof formSchema>

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASSWORD || "",
      },
    })

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_FROM || "noreply@maquinabot.com.br",
      to: "contato@maquinabot.com.br",
      replyTo: validatedData.email,
      subject: `Formulário de Contato: ${validatedData.subject}`,
      text: `
        Nome: ${validatedData.firstName} ${validatedData.lastName}
        Email: ${validatedData.email}
        Assunto: ${validatedData.subject}
        
        Mensagem:
        ${validatedData.message}
      `,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Assunto:</strong> ${validatedData.subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Mensagem enviada com sucesso!" }
  } catch (error) {
    console.error("Erro ao enviar email:", error)

    if (error instanceof z.ZodError) {
      const fieldErrors = error.errors.reduce(
        (acc, curr) => {
          const field = curr.path[0] as string
          acc[field] = curr.message
          return acc
        },
        {} as Record<string, string>,
      )

      return {
        success: false,
        message: "Erro de validação",
        fieldErrors,
      }
    }

    return {
      success: false,
      message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
    }
  }
}
