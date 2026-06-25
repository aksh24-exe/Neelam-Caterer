import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/data/siteData"
import { cn } from "@/lib/utils"

const SECTION_IDS = ["about", "services", "menu", "gallery", "contact"]

function getActiveSectionFromScroll(): string {
  if (window.scrollY < 80) return "home"

  const offset = 110
  let current = "home"

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top <= offset) {
      current = id
    }
  }

  return current
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("home")
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === "/"

  useEffect(() => {
    if (!onHome) {
      setActiveNav("")
      return
    }

    const update = () => setActiveNav(getActiveSectionFromScroll())
    update()

    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [onHome, location.pathname])

  useEffect(() => {
    if (!onHome || !location.hash) return
    const id = location.hash.replace("#", "")
    if (SECTION_IDS.includes(id)) setActiveNav(id)
  }, [location.hash, onHome])

  const isActive = (href: string) => {
    if (href === "/") return onHome && activeNav === "home"
    if (href.startsWith("/#")) {
      const section = href.slice(2)
      return onHome && activeNav === section
    }
    return location.pathname === href
  }

  const goHome = () => {
    setMobileOpen(false)
    setActiveNav("home")
    window.history.replaceState(null, "", "/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goToSection = (href: string) => {
    setMobileOpen(false)
    const section = href.split("#")[1]
    if (!section) return

    if (onHome) {
      const el = document.getElementById(section)
      if (el) {
        setActiveNav(section)
        const top = el.getBoundingClientRect().top + window.scrollY - 88
        window.scrollTo({ top, behavior: "smooth" })
        window.history.replaceState(null, "", `/#${section}`)
      }
    } else {
      navigate(`/#${section}`)
    }
  }

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === "/") {
      e.preventDefault()
      goHome()
      return
    }
    if (href.includes("#")) {
      e.preventDefault()
      goToSection(href)
    }
  }

  const navLinkClass = (href: string) =>
    cn(
      "relative py-2 text-sm font-medium tracking-wide transition-colors outline-none focus:outline-none focus-visible:outline-none",
      isActive(href) ? "text-wine" : "text-ink-muted hover:text-wine"
    )

  const NavUnderline = ({ active }: { active: boolean }) => (
    <span
      className={cn(
        "absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold rounded-full transition-all duration-300",
        active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
      )}
    />
  )

  return (
    <header className="sticky top-0 z-50 bg-ivory/90 backdrop-blur-lg border-b border-border/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault()
              goHome()
            }}
            className="flex items-center group outline-none focus:outline-none"
          >
            <img
              src="/images/front_page/logo.webp"
              alt="Neelam Caterer"
              className="h-14 w-14 md:h-16 md:w-16 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={navLinkClass(link.href)}
              >
                {link.label}
                <NavUnderline active={isActive(link.href)} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/menu">Menu</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link to="/quote">Get Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-ivory pb-5">
          <nav className="container mx-auto px-4 flex flex-col pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={cn(
                  "px-2 py-3 text-sm font-medium border-b border-border/50 last:border-0",
                  isActive(link.href) ? "text-wine border-l-2 border-l-gold pl-3" : "text-ink-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/menu" onClick={() => setMobileOpen(false)}>Menu</Link>
              </Button>
              <Button variant="secondary" className="flex-1" asChild>
                <Link to="/quote" onClick={() => setMobileOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
