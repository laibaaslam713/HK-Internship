import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] border-t border-gray-800 px-6 md:px-16 py-12 text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left - Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            HK Solutions
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A passionate web developer focused on building modern, responsive, and
            user-friendly web applications using React and Tailwind CSS.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#portfolio" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right - Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HK Solutions. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer