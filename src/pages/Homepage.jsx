import BeforeNavbar from "../components/BeforeNavbar/BeforeNavbar"
import AfterNavbar from "../components/AfterNavbar/AfterNavbar"
import Hero from "../components/Hero/Hero"
import SecondHero from "../components/Hero/SecondHero"
import ThirdHero from "../components/Hero/ThirdHero"
import Footer from "../components/Footer/Footer"


const Homepage = () => {
  return (
    <header>
        <BeforeNavbar />
        <AfterNavbar />
        <Hero />
        <SecondHero />
        <ThirdHero />
        <Footer />
    </header>
  )
}

export default Homepage