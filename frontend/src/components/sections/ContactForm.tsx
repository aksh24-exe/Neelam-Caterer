import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionHeader } from "@/components/ui/section-header"
import { siteConfig } from "@/data/siteData"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-shell bg-wine-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/gallery/rajasthani.jpg')] bg-cover bg-center" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <div>
            <SectionHeader
              align="left"
              light
              eyebrow="Contact"
              title="Let's Create Something Memorable"
              subtitle="Tell us about your event and we'll craft the perfect menu and experience."
            />
            <div className="space-y-4 -mt-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block text-gold text-lg font-medium hover:text-gold-light transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-white/70 hover:text-white transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="card-elevated p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald/10 flex items-center justify-center text-emerald text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-2">Message Sent!</h3>
                <p className="text-ink-muted">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guest Count</Label>
                    <Input id="guests" type="number" placeholder="Number of guests" min={1} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your event..." rows={4} />
                </div>
                <Button type="submit" variant="secondary" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
