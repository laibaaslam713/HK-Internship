import React from 'react'

const About = () => {
  return (
    <section className="bg-[#0b1220] px-6 md:px-16 py-20 text-white" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE (Images) */}
        <div className="relative">
          
          {/* Main Image */}
          <div className="w-[80%] h-[320px] md:h-[400px] bg-gray-700 rounded-2xl"></div>

          {/* Accent Image */}
          <div className="absolute bottom-[-20px] right-0 w-[55%] h-[200px] bg-gray-600 rounded-2xl border border-gray-800"></div>

          {/* Stat Chip */}
          <div className="absolute top-4 left-4 bg-[#111827] border border-gray-800 px-4 py-3 rounded-xl shadow-lg">
            <h3 className="text-cyan-400 font-bold text-lg">150+</h3>
            <p className="text-gray-400 text-sm">Projects Shipped</p>
          </div>

        </div>

        {/* RIGHT SIDE (Content) */}
        <div>
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            A Studio That <br /> Gives a Damn
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Nexus is a small, focused team of designers and developers obsessed
            with craft. We work closely with founders, product teams, and agencies
            to create work that matters — not work that fills a brief.
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Every project starts with listening. Every deliverable ends with intent.
            We don't ship pixels. We ship outcomes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-cyan-400 font-bold text-xl">8 yrs</h3>
              <p className="text-gray-500 text-sm">In the Industry</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold text-xl">40+</h3>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold text-xl">12</h3>
              <p className="text-gray-500 text-sm">Awards Won</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Work With Us
          </a>
        </div>

      </div>
    </section>
  )
}

export default About