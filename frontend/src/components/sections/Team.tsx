import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { teamMembers } from "@/data/siteData"
import { cn } from "@/lib/utils"

export function Team() {
  const [current, setCurrent] = useState(0)
  const member = teamMembers[current]

  const prev = () => setCurrent((c) => (c === 0 ? teamMembers.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === teamMembers.length - 1 ? 0 : c + 1))

  return (
    <section className="section-shell bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet Our Team"
          subtitle="The people behind Neelam Caterer's success across India and the world."
        />

        <div className="max-w-5xl mx-auto">
          <div className="card-elevated overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-auto min-h-[320px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-wine text-white">
                <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
                  {member.role}
                </p>
                <h3 className="text-3xl font-semibold mb-5">{member.name}</h3>
                <p className="text-white/80 leading-relaxed">{member.description}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {teamMembers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === current ? "w-8 bg-wine" : "w-2 bg-border hover:bg-gold"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
