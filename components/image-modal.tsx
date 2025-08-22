"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  const [mounted, setMounted] = useState(false)

  // Handle escape key press to close modal
  useEffect(() => {
    setMounted(true)

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col">
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 -top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar</span>
        </Button>

        <div className="relative flex-1 overflow-hidden rounded-lg bg-background/10 backdrop-blur-sm">
          <div className="h-full w-full flex items-center justify-center">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
