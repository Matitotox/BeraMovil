"use client"

import { MapPin, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5491138918810", "_blank")
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/bera.movil", "_blank")
  }

  return (
    <section id="contacto" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contacto
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Encontranos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Estamos ubicados en Berazategui centro. Acercate a nuestro local o contactanos por WhatsApp o Instagram.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Location Card */}
          <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Dirección</h3>
            <p className="text-muted-foreground">
              Calle 150 E13 y 14
            </p>
            <p className="text-muted-foreground">
              N° 1361
            </p>
            <p className="font-medium text-primary">
              Berazategui
            </p>
          </div>

          {/* WhatsApp Card */}
          <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">WhatsApp</h3>
            <p className="mb-4 text-muted-foreground">
              +54 9 11 3891-8810
            </p>
            <Button
              onClick={handleWhatsApp}
              className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar mensaje
            </Button>
          </div>

          {/* Instagram Card */}
          <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Instagram className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Instagram</h3>
            <p className="mb-4 text-muted-foreground">
              @bera.movil
            </p>
            <Button
              onClick={handleInstagram}
              variant="outline"
              className="w-full gap-2 border-border text-foreground hover:bg-secondary"
            >
              <Instagram className="h-4 w-4" />
              Seguinos
            </Button>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.982902879598!2d-58.206000!3d-34.787000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f0f00000000%3A0x0000000000000000!2sCalle%20150%201361%2C%20Ranelagh%2C%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1711900000000!5m2!1ses!2sar"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            //className="grayscale"
            title="Ubicación Bera Movil"
          />
        </div>
      </div>
    </section>
  )
}
