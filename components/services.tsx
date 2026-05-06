import { Monitor, Battery, Cpu, Droplets, Wifi, Smartphone, Icon, RefreshCcw, Package, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Monitor,
    title: "Cambio de Pantalla",
    description: "Reparación de pantallas rotas o con fallas. Pantallas originales y de alta calidad.",
  },
  {
    icon: Battery,
    title: "Cambio de Batería",
    description: "Baterías nuevas para mejorar la duración y rendimiento de tu dispositivo.",
  },
  {
    icon: Cpu,
    title: "Reparación de Placa",
    description: "Diagnóstico y reparación de fallas en la placa madre a nivel de componentes.",
  },
  {
    icon: RefreshCcw,
    title: "Flasheos de equipos",
    description: "Reinstalamos el sistema operativo para eliminar fallas, virus o bloqueos.",
  },
  {
    icon: Wrench,
    title: "Reparaciones",
    description: "Reparaciones con garantia y presupuesto sin costo.",
  },
  {
    icon: Package,
    title: "Celulares & Accesorios",
    description: "Venta de celulares nuevos y accesorios originales, fundas, cargadores y más.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Lo que hacemos
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Ofrecemos soluciones completas para todos los problemas de tu dispositivo móvil con garantía y profesionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
