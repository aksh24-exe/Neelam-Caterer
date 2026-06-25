import { Link } from "react-router-dom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/ui/page-hero"
import { SectionHeader } from "@/components/ui/section-header"
import { cuisines, menuCategories } from "@/data/siteData"

export function MenuPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        showLogo
        title="Our Menus"
        subtitle="Explore diverse cuisines and menu categories crafted with authentic Indian flavours."
      />

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            eyebrow="Categories"
            title="Sample Menu"
            subtitle="Breakfast to sweets — every course crafted with care."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-20">
            {menuCategories.map((item) => (
              <div key={item.name} className="group relative overflow-hidden rounded-2xl aspect-square shadow-md">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">{item.name}</h3>
              </div>
            ))}
          </div>

          <SectionHeader
            eyebrow="Regional Specialties"
            title="Our Cuisines"
            subtitle="Select a cuisine to view the full menu."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cuisines.map((cuisine) => (
              <div key={cuisine.id} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
                <img src={cuisine.image} alt={cuisine.name} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/95 via-wine/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">{cuisine.name}</h3>
                  <p className="text-white/75 text-sm mb-4">{cuisine.description}</p>
                  <a href={`#${cuisine.id}-menu`}>
                    <Button variant="secondary" size="sm">View Menu</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto card-elevated p-2">
            <Accordion type="single" collapsible>
              {cuisines.map((cuisine) => (
                <AccordionItem key={cuisine.id} value={cuisine.id} id={`${cuisine.id}-menu`}>
                  <AccordionTrigger className="text-lg px-5">{cuisine.name} Menu</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-5 pb-2">
                      {cuisine.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-ink-muted text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-14">
            <Button variant="default" size="lg" asChild>
              <Link to="/quote">Plan Your Menu — Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
