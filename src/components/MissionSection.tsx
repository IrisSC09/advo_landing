import missionBackground from "@/assets/mission-background.jpg";

const MissionSection = () => {
  return (
    <section 
      id="mission"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${missionBackground})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          OUR <span className="neon-glow">MISSION</span>
        </h2>
        <p className="text-xl max-w-5xl mx-auto mb-16 font-light leading-relaxed">
          Guarding freedom of political knowledge and expression through youth voices. No
          more misinformation, echo chambers, and bias.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-black/80 p-8 rounded-2xl border border-gray-700 hover-lift">
            <div className="relative w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="pulse-ring"></div>
              <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Democratizing Information</h3>
            <p className="text-gray-300 leading-relaxed">
              Making complex political information accessible to everyone, regardless of
              background or education level.
            </p>
          </div>
          
          <div className="bg-black/80 p-8 rounded-2xl border border-gray-700 hover-lift">
            <div className="relative w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="pulse-ring"></div>
              <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Combating Polarization</h3>
            <p className="text-gray-300 leading-relaxed">
              Fostering understanding through creative expression and fact-based discussions that bridge
              divides.
            </p>
          </div>
          
          <div className="bg-black/80 p-8 rounded-2xl border border-gray-700 hover-lift">
            <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="pulse-ring"></div>
              <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Amplifying Youth Voices</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering the next generation to participate meaningfully in
              democracy and drive policy change.
            </p>
          </div>
        </div>

        {/* Impact metrics */}
        <div className="mt-20 glass-panel rounded-2xl p-8">
          <h3 className="text-3xl font-bold mb-8 neon-glow">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">2M+</div>
              <div className="text-gray-300">Bills Simplified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-glow mb-2">150K</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
              <div className="text-gray-300">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold neon-glow mb-2">200+</div>
              <div className="text-gray-300">Policy Wins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;