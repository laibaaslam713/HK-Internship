import Team from "../Components/Team"


const AboutPage = ({openAdmin}) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 
          rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all
           duration-300 transform">
            ABOUT US
          </button>

          <button
            onClick={openAdmin}
            className="bg-black text-white px-4 py-2 mt-5 rounded-lg text-sm hover:scale-105 transition"
          >
            Admin Panel
          </button>
        </div>

        <h1 className="text-center mb-16 text-5xl lg:text-6xl font-bold">
          HK Solutions
        </h1>

        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Connecting businesses to smarter digital futures — through strategy,
          software, and systems built for the real world.
        </p>

        <div className="border-t border-gray-300 my-20"></div>


        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          <div className="group bg-white/70  p-8 rounded-2xl shadow-xl border
           border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">OUR MISSION</h3>
            <p className="text-gray-700 leading-relaxed text-lg">To empower organizations with technology that simplifies complexity,
              accelerates growth, and creates lasting value for their people and clients.</p>
          </div>

          <div className="group bg-white/70  p-8 rounded-2xl shadow-xl border
           border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">OUR VISION</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              A world where every business — regardless of size — has access to
              enterprise-grade digital tools and the expertise to wield them confidently.
            </p>
          </div>

        </div>


        <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">WHAT WE DO</h3>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="group bg-blue-200 p-8 
          rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all
           duration-500 border border-blue-100 hover:border-blue-200">
            <div className="text-4xl group-hover:scale-110 transition-transform mb-4">💻</div>
            <h4 className="font-semibold mb-1">Software Development</h4>
            <p className="text-sm text-gray-600">
              Custom web and mobile applications tailored to your workflows and goals.
            </p>
          </div>

          <div className="group bg-yellow-200  p-8 
          rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all
           duration-500 border border-blue-100 hover:border-blue-200">
            <div className="text-4xl group-hover:scale-110 transition-transform mb-4">📊</div>
            <h4 className="font-semibold mb-1">Digital Strategy</h4>
            <p className="text-sm text-gray-600">
              Data-driven roadmaps that align technology decisions with business outcomes.
            </p>
          </div>

          <div className="group bg-purple-300  p-8 
          rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all
           duration-500 border border-blue-100 hover:border-blue-200">
            <div className="text-4xl group-hover:scale-110 transition-transform mb-4">⚙</div>
            <h4 className="font-semibold mb-1">Managed IT Support</h4>
            <p className="text-sm text-gray-600">
              Round-the-clock infrastructure monitoring, maintenance, and rapid incident response.
            </p>
          </div>

        </div>

        <hr className="my-6" />

        <Team/>

      </div>
    </div>
  )
}

export default AboutPage