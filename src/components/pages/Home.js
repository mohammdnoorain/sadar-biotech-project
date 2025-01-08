import React from 'react'
import Footer from '../Footer'
import '../../App.css';
import HeroSectionHome from '../HeroSectionHome'
import Cards from '../Cards'
import ContactSection from '../ContactSection';
const Home = () => {
  return (
    <div>

    <HeroSectionHome/>
    <Cards />
    <ContactSection/>
    <Footer />
    </div>
  )
}

export default Home
