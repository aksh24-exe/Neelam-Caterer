import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PageHero } from "@/components/ui/page-hero"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cuisines } from "@/data/siteData"

export function QuotePage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        title="Request a Quote"
        subtitle="Tell us about your event and we'll craft the perfect menu and experience."
      />

      <section className="section-shell">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto card-elevated p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald/10 flex items-center justify-center text-emerald text-2xl">
                  ✓
                </div>
                <h2 className="text-2xl font-semibold text-ink mb-2">Quote Request Submitted!</h2>
                <p className="text-ink-muted">
                  Thank you for your interest. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-ink mb-2 text-center">Get Your Catering Quote</h2>
                <p className="text-ink-muted text-center text-sm mb-8">Fill in the details below</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="menu">Select Menu Type</Label>
                    <Select required>
                      <SelectTrigger id="menu">
                        <SelectValue placeholder="Choose cuisine" />
                      </SelectTrigger>
                      <SelectContent>
                        {cuisines.map((c) => (
                          <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                        ))}
                        <SelectItem value="mixed">Mixed / Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Input id="guests" type="number" placeholder="Expected guest count" min={1} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full" size="lg">
                    Submit Request
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
