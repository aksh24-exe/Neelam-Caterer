import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"
import { siteConfig, navLinks, services } from "@/data/siteData"

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/front_page/logo.webp" alt="Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
                <p className="text-xs text-gold uppercase tracking-widest">{siteConfig.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Authentic flavours and royal hospitality — from intimate gatherings to grand weddings across India and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-5">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link to="/#services" className="text-sm text-white/60 hover:text-gold transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors break-all">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                Serving events across India & worldwide
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto px-4 text-center text-xs text-white/40 tracking-wide">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
