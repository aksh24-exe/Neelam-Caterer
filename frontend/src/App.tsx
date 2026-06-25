import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollToHash } from "@/components/layout/ScrollToHash"
import { HomePage } from "@/pages/HomePage"
import { MenuPage } from "@/pages/MenuPage"
import { QuotePage } from "@/pages/QuotePage"
import { GalleryPage } from "@/pages/GalleryPage"

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
