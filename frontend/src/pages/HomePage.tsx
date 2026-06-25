import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { MenuPreview } from "@/components/sections/MenuPreview"
import { Stats } from "@/components/sections/Stats"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { Team } from "@/components/sections/Team"
import { GalleryPreview } from "@/components/sections/GalleryPreview"
import { Testimonials } from "@/components/sections/Testimonials"
import { ContactForm } from "@/components/sections/ContactForm"

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <MenuPreview />
      <Stats />
      <WhyChooseUs />
      <Team />
      <GalleryPreview />
      <Testimonials />
      <ContactForm />
    </>
  )
}
