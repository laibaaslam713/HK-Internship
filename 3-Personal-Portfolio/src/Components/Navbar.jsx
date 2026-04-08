import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className='bg-[#0b1220] text-white sticky top-0 z-50'>
        <div className='flex justify-around p-5'>
            <a href="#">
                <span className='bg-cyan-300 p-2 rounded-lg font-bold text-black'>HK</span>
                <span className='ml-2 font-bold'>HK Solutions</span>
            </a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                ☰
            </button>

            <nav className={`flex flex-col md:flex-row gap-5 ${
                menuOpen ? 'block' : 'hidden'
                } md:flex`}
            >
                <a href="#hero" className='hover:text-cyan-300 '>Home</a>
                <a href="#services" className='hover:text-cyan-300 '>Services</a>
                <a href="#about" className='hover:text-cyan-300 '>About</a>
                <a href="#portfolio" className='hover:text-cyan-300 '>Work</a>
                <a href="#contact" className='hover:text-cyan-300 '>Let's Talk</a>
            </nav>
        </div>
    </header>
  )
}

export default Navbar