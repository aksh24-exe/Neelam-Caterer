import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { SectionHeader } from "@/components/ui/section-header"
import { galleryImages } from "@/data/siteData"

export function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const previewImages = galleryImages.slice(0, 5)

  const navigate = (dir: number) => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + dir + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="section-shell bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Portfolio"
          title="Moments We Crafted"
          subtitle="A glimpse into our culinary artistry and royal event setups."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {previewImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover image-zoom" />
              <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/30 transition-colors duration-300" />
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

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
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 text-white w-10 h-10 rounded-full hover:bg-gold hover:text-ink transition-colors"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-14 top-1/2 -translate-y-1/2 bg-white/10 text-white w-10 h-10 rounded-full hover:bg-gold hover:text-ink transition-colors"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
