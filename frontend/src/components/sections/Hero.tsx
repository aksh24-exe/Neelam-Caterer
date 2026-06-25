import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/siteData"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/gallery/rajasthani.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-wine-dark/75 to-ink/90" />

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 text-center">
        <p className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.35em] mb-6 animate-in fade-in">
          {siteConfig.tagline}
        </p>

        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] max-w-4xl mx-auto mb-6">
          {siteConfig.hero.title}
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {siteConfig.hero.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link to="/quote">Request Quote</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-wine"
            asChild
          >
            <Link to="/menu">Explore Menu</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
