import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App