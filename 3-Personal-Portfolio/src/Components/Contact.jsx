import React from 'react'

const Contact = () => {
  return (
    <section className="relative bg-[#0b1220] px-6 md:px-16 py-24 text-white overflow-hidden" id="contact">

      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
          Let's Build Together
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Have a Project <br /> in Mind?
        </h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          We're selective about what we take on — which means you get our full
          attention. Drop us a line and let's see if we're a good fit.
        </p>

        <div className="mb-10">
          <a
            href="mailto:hello@nexusstudio.co"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-300 hover:scale-105 transition"
          >
            hello@HK_Solutions.co
          </a>
        </div>

        <div className="flex justify-center flex-wrap gap-3 text-gray-400 text-sm">
          <a href="#" className="hover:text-cyan-400 transition">Twitter</a>
          <span>·</span>
          <a href="#" className="hover:text-cyan-400 transition">Dribbble</a>
          <span>·</span>
          <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
          <span>·</span>
          <a href="#" className="hover:text-cyan-400 transition">Instagram</a>
        </div>

      </div>
    </section>
  )
}

export default Contact