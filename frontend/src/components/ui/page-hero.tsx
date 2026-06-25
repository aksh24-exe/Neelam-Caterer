interface PageHeroProps {
  title: string
  subtitle: string
  showLogo?: boolean
}

export function PageHero({ title, subtitle, showLogo }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-28 bg-wine-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/gallery/rajasthani.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine-dark/90 to-wine/80" />
      <div className="container mx-auto px-4 relative text-center">
        {showLogo && (
          <img
            src="/images/front_page/neelam-logo.png"
            alt="Neelam Caterer"
            className="w-28 h-28 mx-auto mb-6 object-contain opacity-90"
          />
        )}
        <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Neelam Caterer</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5">{title}</h1>
        <p className="text-white/75 max-w-xl mx-auto text-lg">{subtitle}</p>
      </div>
    </section>
  )
}
