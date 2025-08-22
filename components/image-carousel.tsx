"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
  onImageClick?: (src: string, alt: string) => void
}

export function ImageCarousel({ images, className, onImageClick }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  if (!images.length) return null

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative aspect-video overflow-hidden bg-black/5">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onClick={() => onImageClick && onImageClick(image.src, image.alt)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Próximo</span>
      </Button>
    </div>
  )
}
