import BeforeNavbar from "../components/BeforeNavbar/BeforeNavbar"
import Hero from "../components/Hero/Hero"
import SecondHero from "../components/Hero/SecondHero"
import ThirdHero from "../components/Hero/ThirdHero"
import NavBar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


const Homepage = () => {
  return (
    <>
        <BeforeNavbar />
        <NavBar />
        <Hero />
        <SecondHero />
        <ThirdHero />
        <Footer />
    </>
  )
}

export default Homepage