import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Portfolio from "./components/Portfolio"
import Process from "./components/Process"
import Commitments from "./components/Commitments"
import Faq from "./components/Faq"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-[13px] focus:font-medium focus:text-white"
      >
        Langsung ke konten
      </a>
      <Navbar />
      <main id="konten">
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <Process />
        <Commitments />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
