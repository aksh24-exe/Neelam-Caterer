import { Award, ChefHat, HeartHandshake, ShieldCheck } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { whyChooseUs } from "@/data/siteData"

const icons = [Award, ShieldCheck, HeartHandshake, ChefHat]

export function WhyChooseUs() {
  return (
    <section className="section-shell bg-sand/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Our Promise"
          title="Why Choose Neelam Caterer"
          subtitle="Occasions are the best times to meet new people and celebrate life's finest moments — we make every event unforgettable."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index]
            return (
              <article key={item.title} className="card-elevated p-8 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 mb-6 rounded-full bg-wine/8 flex items-center justify-center group-hover:bg-wine group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5 text-wine group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">{item.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
