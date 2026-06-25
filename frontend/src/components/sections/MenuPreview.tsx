import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { menuCategories } from "@/data/siteData"
import { cn } from "@/lib/utils"

export function MenuPreview() {
  return (
    <section id="menu" className="section-shell bg-sand/40">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Culinary Excellence"
          title="Sample Menu"
          subtitle="From breakfast spreads to grand dinner feasts — explore our diverse menu categories."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {menuCategories.map((item, i) => (
            <Link
              key={item.name}
              to="/menu"
              className={cn(
                "group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md",
                i === 0 && "lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:min-h-[420px]"
              )}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover image-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold">{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
