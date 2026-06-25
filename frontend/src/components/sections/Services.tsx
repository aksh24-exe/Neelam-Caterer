import type { ComponentType } from "react"
import {
  Briefcase,
  Cake,
  Gift,
  Heart,
  Home,
  Sparkles,
  Star,
  Users,
} from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { services } from "@/data/siteData"

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  heart: Heart,
  briefcase: Briefcase,
  home: Home,
  gift: Gift,
  cake: Cake,
  sparkles: Sparkles,
  users: Users,
  star: Star,
}

export function Services() {
  return (
    <section id="services" className="section-shell bg-ivory">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="What We Offer"
          title="Celebrations Worthy of Royalty"
          subtitle="From grand weddings to intimate home parties — we cater every occasion with excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Star
            return (
              <article
                key={service.title}
                className="group card-elevated overflow-hidden flex flex-col sm:flex-row hover:shadow-[0_20px_50px_-20px_rgba(92,35,51,0.25)] transition-shadow duration-500"
              >
                <div className="relative sm:w-2/5 h-52 sm:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover image-zoom"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/images/gallery/rajasthani.jpg"
                    }}
                  />
                </div>
                <div className="flex-1 p-7 flex flex-col justify-center">
                  <div className="w-10 h-10 mb-4 rounded-full bg-sand flex items-center justify-center">
                    <Icon className="h-5 w-5 text-wine" />
                  </div>
                  <h3 className="text-2xl font-semibold text-ink mb-2">{service.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
