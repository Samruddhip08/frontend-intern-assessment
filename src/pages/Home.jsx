import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Process from "../components/Process"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home