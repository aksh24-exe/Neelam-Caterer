import { Quote } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { testimonials } from "@/data/siteData"

export function Testimonials() {
  return (
    <section className="section-shell bg-sand/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Kind Words"
          title="What Our Clients Say"
          subtitle="Trusted by families and businesses across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="card-elevated p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/30" />
              <p className="text-ink-muted italic leading-relaxed mb-6 text-lg">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="font-semibold text-ink">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
