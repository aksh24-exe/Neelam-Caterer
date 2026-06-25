import { SectionHeader } from "@/components/ui/section-header"
import { siteConfig } from "@/data/siteData"

export function About() {
  return (
    <section id="about" className="section-shell bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gold/15 rounded-3xl -rotate-2" />
            <div className="relative rounded-2xl shadow-2xl bg-sand/50 p-6 md:p-8 max-w-lg mx-auto">
              <img
                src="/images/front_page/image.png"
                alt="Neelam Caterer"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute -bottom-5 right-4 md:right-6 bg-wine text-white px-6 py-4 rounded-xl shadow-xl">
              <p className="text-3xl font-semibold text-gold leading-none">2010</p>
              <p className="text-xs uppercase tracking-widest mt-1 text-white/80">Est. Since</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="About Us"
              title={`Welcome to ${siteConfig.name}`}
              subtitle="A real gem in the catering industry — rooted in tradition, crafted with love."
            />

            <div className="space-y-4 text-ink-muted leading-relaxed -mt-6">
              <p>{siteConfig.about.description}</p>
              <p>{siteConfig.about.welcome}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Authentic Flavours", "Live Counters", "Global Events", "Custom Menus"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-sand text-ink text-sm rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
