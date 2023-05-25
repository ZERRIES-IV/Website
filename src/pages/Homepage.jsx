import BeforeNavbar from "../components/BeforeNavbar/BeforeNavbar"
import Hero from "../components/Hero/Hero"
import SecondHero from "../components/Hero/SecondHero"
import ThirdHero from "../components/Hero/ThirdHero"
import NavBar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


const Homepage = () => {
  return (
    <header>
        <BeforeNavbar />
        <NavBar />
        <Hero />
        <SecondHero />
        <ThirdHero />
        <Footer />
    </header>
  )
}

export default Homepage