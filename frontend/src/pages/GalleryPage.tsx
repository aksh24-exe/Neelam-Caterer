import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { PageHero } from "@/components/ui/page-hero"
import { galleryImages } from "@/data/siteData"

export function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const navigate = (dir: number) => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + dir + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        title="Photo Gallery"
        subtitle="Explore our culinary creations and royal event setups."
      />

      <section className="section-shell bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-sm hover:shadow-lg transition-shadow"
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/25 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => !open && setLightboxIndex(null)}>
        <DialogContent className="p-0 bg-ink border-none max-w-5xl rounded-2xl overflow-hidden">
          {lightboxIndex !== null && (
            <div className="relative">
              <img
                src={galleryImages[lightboxIndex]}
                alt="Gallery full view"
                className="w-full max-h-[85vh] object-contain"
              />
              <button
                onClick={() => navigate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 text-white w-10 h-10 rounded-full hover:bg-gold hover:text-ink transition-colors text-xl"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-14 top-1/2 -translate-y-1/2 bg-white/10 text-white w-10 h-10 rounded-full hover:bg-gold hover:text-ink transition-colors text-xl"
                aria-label="Next"
              >
                ›
              </button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
