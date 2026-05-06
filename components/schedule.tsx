import { Clock } from "lucide-react"

const schedule = [
  { day: "Domingo", hours: "Cerrado", closed: true },
  { day: "Lunes", hours: "10:00 - 14:00 / 16:00 - 19:30", closed: false },
  { day: "Martes", hours: "10:00 - 14:00 / 16:00 - 19:30", closed: false },
  { day: "Miércoles", hours: "10:00 - 14:00 / 16:00 - 19:30", closed: false },
  { day: "Jueves", hours: "10:00 - 14:00 / 16:00 - 19:30", closed: false },
  { day: "Viernes", hours: "10:00 - 14:00 / 16:00 - 19:30", closed: false },
  { day: "Sábado", hours: "10:00 - 14:00 / 16:00 - 19:30", closed: false },
]

export function Schedule() {
  return (
    <section id="horarios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Horarios
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Horarios de Atención
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Visitanos en nuestro local durante nuestros horarios de atención. También podés contactarnos por WhatsApp para consultas fuera de horario.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Atención personalizada</p>
                <p className="text-sm text-muted-foreground">
                  Sin turnos, orden de llegada
                </p>
              </div>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="space-y-1">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 transition-colors ${item.closed
                      ? "bg-destructive/5"
                      : index % 2 === 1
                        ? "bg-secondary/50"
                        : ""
                    }`}
                >
                  <span
                    className={`font-medium ${item.closed ? "text-muted-foreground" : "text-foreground"
                      }`}
                  >
                    {item.day}
                  </span>
                  <span
                    className={`text-right ${item.closed
                        ? "font-medium text-destructive"
                        : "text-primary"
                      }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
