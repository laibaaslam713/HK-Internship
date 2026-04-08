import React from 'react'

const Portfolio = () => {
  return (
    <section id='portfolio' className="bg-[#0b1220] px-6 md:px-16 py-20 text-white">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-12">
        Our Projects
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] transition duration-300">
          <h3 className="text-xl font-bold mb-3">Detecting Biased Reviews</h3>
          <p className="text-gray-400 mb-6">
            A machine learning system that classifies e-commerce reviews as biased or unbiased for better decision-making.
          </p>
          <a href="https://github.com/laibaaslam713/FYP_Biasness_Detection">
            <button className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Learn More →
            </button>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] transition duration-300">
          <h3 className="text-xl font-bold mb-3">AI Recipe Generator</h3>
          <p className="text-gray-400 mb-6">
            An AI-powered recipe generator built with Next.js, Supabase and n8n, deployed on Vercel.
          </p>
          <a href="https://nexium-laiba-aslam-internship-zj2e.vercel.app/">
            <button className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Learn More →
            </button>
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] transition duration-300">
          <h3 className="text-xl font-bold mb-3">Quote Generator Web App</h3>
          <p className="text-gray-400 mb-6">
            A clean and simple web app that displays motivational quotes based on user-entered topics.
          </p>
          <a href="https://nexium-laiba-aslam-assign1.vercel.app/">
            <button className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Learn More →
            </button>
          </a>
        </div>

        {/* Card 4 */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] transition duration-300">
          <h3 className="text-xl font-bold mb-3">Food Express</h3>
          <p className="text-gray-400 mb-6">
            Food Express lets users order food directly through WhatsApp with one click, making the process easy.
          </p>
          <a href="https://foodexpress-um4q.vercel.app/">
            <button className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Learn More →
            </button>
          </a>
        </div>

        {/* Card 5 */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] transition duration-300">
          <h3 className="text-xl font-bold mb-3">To-Do List</h3>
          <p className="text-gray-400 mb-6">
            A clean task management app with create, delete, and completion tracking in a smooth, responsive interface.
          </p>
          <a href="https://github.com/laibaaslam713/To-Do-List">
            <button className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Learn More →
            </button>
          </a>
        </div>

        {/* Card 6 */}
        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee] transition duration-300">
          <h3 className="text-xl font-bold mb-3">Note App</h3>
          <p className="text-gray-400 mb-6">
            A minimalist note-taking app built with React.js and Tailwind CSS to create, edit, organize, and store notes easily.
          </p>
          <a href="https://note-app-omega-swart.vercel.app/">
            <button className="text-cyan-400 border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Learn More →
            </button>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Portfolio