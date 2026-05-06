import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Schedule } from "@/components/schedule"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Schedule />
      <Contact />
      <Footer />
    </main>
  )
}
