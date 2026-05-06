"use client"

import Image from "next/image"
import { Smartphone, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5491138918810", "_blank")
  }

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/fondo.png"
        alt="background"
        fill
        priority
        className="object-cover opacity-10 pointer-events-none z-10" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute left-0 top-1/4 h-96 w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute left-8 top-1/3 h-64 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <div className="absolute right-0 top-1/2 h-80 w-1 bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute right-8 bottom-1/4 h-48 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Diagonal Pattern */}
      <div className="absolute left-4 bottom-1/4 opacity-20 md:left-16">
        <svg width="60" height="200" viewBox="0 0 60 200" fill="none">
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 16}
              x2="50"
              y2={i * 16 + 30}
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
          ))}
        </svg>
      </div>

      <div className="container relative mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:max-w-2xl">
            {/* Logo */}
            <div className="flex items-center gap-3">

              <span className="text-3xl font-bold tracking-tight">
                Bera<span className="text-primary">.</span>Movil
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Reparación <span className="text-primary">profesional</span> de celulares
            </h1>

            {/* Description */}
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Expertos en reparación de smartphones y tablets. Servicio rápido, repuestos de calidad y garantía en todos nuestros trabajos.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contactar por WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-border text-foreground hover:bg-secondary"
                onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Wrench className="h-5 w-5" />
                Ver Servicios
              </Button>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
