import React from 'react'

const Services = () => {
  return (
    <section id='services' className="px-6 md:px-16 py-20 bg-[#0b1220]">
  
      <h2 className="text-4xl md:text-6xl font-bold text-cyan-300 mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">

        <article className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300 group relative">
          
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition">
              ➜
            </div>
            <span className="text-gray-500 text-sm">01</span>
          </div>

          <h3 className="text-xl font-bold mb-3">Brand Identity</h3>
          <p className="text-gray-400 mb-6">
            Logos, systems, and visual languages that tell your story instantly and stick in memory.
          </p>

          <a href="#contact" className="text-cyan-400 text-sm tracking-wider hover:underline">
            START A PROJECT →
          </a>
        </article>

        <article className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300 group relative">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-md border border-cyan-400 text-cyan-400">
              ▭
            </div>
            <span className="text-gray-500 text-sm">02</span>
          </div>

          <h3 className="text-xl font-bold mb-3">Web Design</h3>
          <p className="text-gray-400 mb-6">
            Pixel-perfect, responsive websites and landing pages engineered for conversion and delight.
          </p>

          <a href="#contact" className="text-cyan-400 text-sm tracking-wider hover:underline">
            START A PROJECT →
          </a>
        </article>

        <article className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300 group relative">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-md border border-cyan-400 text-cyan-400">
              📈
            </div>
            <span className="text-gray-500 text-sm">03</span>
          </div>

          <h3 className="text-xl font-bold mb-3">UI / UX Design</h3>
          <p className="text-gray-400 mb-6">
            Research-driven interfaces for apps and platforms. From wireframes to high-fidelity prototypes.
          </p>

          <a href="#contact" className="text-cyan-400 text-sm tracking-wider hover:underline">
            START A PROJECT →
          </a>
        </article>

        <article className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300 group relative">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-md border border-cyan-400 text-cyan-400">
              ↗
            </div>
            <span className="text-gray-500 text-sm">04</span>
          </div>

          <h3 className="text-xl font-bold mb-3">Motion & Animation</h3>
          <p className="text-gray-400 mb-6">
            Scroll reveals, micro-interactions, and cinematic sequences that breathe life into your product.
          </p>

          <a href="#contact" className="text-cyan-400 text-sm tracking-wider hover:underline">
            START A PROJECT →
          </a>
        </article>

        <article className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300 group relative">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-md border border-cyan-400 text-cyan-400">
              {"</>"}
            </div>
            <span className="text-gray-500 text-sm">05</span>
          </div>

          <h3 className="text-xl font-bold mb-3">Development</h3>
          <p className="text-gray-400 mb-6">
            Clean, semantic, performant front-end code. React, HTML/CSS, and Webflow integrations.
          </p>

          <a href="#contact" className="text-cyan-400 text-sm tracking-wider hover:underline">
            START A PROJECT →
          </a>
        </article>

        <article className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 transition duration-300 group relative">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400">
              ⏱
            </div>
            <span className="text-gray-500 text-sm">06</span>
          </div>

          <h3 className="text-xl font-bold mb-3">Strategy & Consulting</h3>
          <p className="text-gray-400 mb-6">
            Brand audits, positioning, and digital strategy sessions to align design with business goals.
          </p>

          <a href="#contact" className="text-cyan-400 text-sm tracking-wider hover:underline">
            START A PROJECT →
          </a>
        </article>

      </div>
    </section>
  )
}

export default Services