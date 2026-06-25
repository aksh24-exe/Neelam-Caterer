import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace("#", "")
    const timer = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const offset = 96
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: "smooth" })
      }
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
