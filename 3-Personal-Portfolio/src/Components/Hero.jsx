import React from 'react'
import Image from '../assets/heroBackground.png'

const Hero = () => {
  return (
    <section id='hero' className="w-full h-screen bg-gray-900 flex items-center justify-center">
      
      <div className="relative w-full h-full">
        
        <img 
          src={Image} 
          alt="Hero" 
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 flex flex-col justify-center text-white px-4 ml-20">
          <p className='text-cyan-300 bg-cyan-300 border-cyan-300 bg-transparent border-2 w-40 rounded-2xl p-1'>🔵 Open To Work</p>
          <h1 className="text-6xl md:text-6xl font-bold mb-4 text-4xl md:text-6xl lg:text-8xl">
            <span>We Craft</span><br /> 
            <span className='text-cyan-300'>Digital</span> <br /> 
            <span>Experiences</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A full-spectrum creative studio building brands,<br /> products, and interfaces that people remember.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Hero