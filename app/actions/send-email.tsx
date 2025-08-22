"use server"

import nodemailer from "nodemailer"

export interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

// Manual validation function
const validateFormData = (formData: FormData) => {
  const errors: Partial<Record<keyof FormData, string>> = {}

  if (!formData.firstName.trim()) {
    errors.firstName = "Nome é obrigatório"
  }

  if (!formData.lastName.trim()) {
    errors.lastName = "Sobrenome é obrigatório"
  }

  if (!formData.email.trim()) {
    errors.email = "Email é obrigatório"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Email inválido"
  }

  if (!formData.subject.trim()) {
    errors.subject = "Assunto é obrigatório"
  }

  if (!formData.message.trim()) {
    errors.message = "Mensagem é obrigatória"
  } else if (formData.message.trim().length < 10) {
    errors.message = "Mensagem deve ter pelo menos 10 caracteres"
  }

  return errors
}

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const errors = validateFormData(formData)

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Erro de validação",
        fieldErrors: errors,
      }
    }

    // Configure email transporter
    const transporter = nodemailer.createTransporter({
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
      replyTo: formData.email,
      subject: `Formulário de Contato: ${formData.subject}`,
      text: `
        Nome: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Assunto: ${formData.subject}
        
        Mensagem:
        ${formData.message}
      `,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Assunto:</strong> ${formData.subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Mensagem enviada com sucesso!" }
  } catch (error) {
    console.error("Erro ao enviar email:", error)

    return {
      success: false,
      message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
    }
  }
}
