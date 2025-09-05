import { Users, Target, Megaphone } from "lucide-react";
import missionBackground from "@/assets/mission-background.jpg";

const MissionSection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${missionBackground})`
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 neon-glow">
            OUR MISSION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Bridging the gap between complex policy and actionable change through innovative technology and youth empowerment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-card p-8 text-center hover-lift fade-in-up animate stagger-1">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center floating">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              Democratizing Information
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Making complex legislation accessible to everyone, breaking down barriers to civic engagement and political understanding.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center hover-lift fade-in-up animate stagger-2">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center floating-delayed">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              Combating Polarization
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Creating bridges across divides through factual, unbiased information that promotes understanding and constructive dialogue.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center hover-lift fade-in-up animate stagger-3">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center floating">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              Amplifying Youth Voices
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering the next generation of changemakers with tools and knowledge to drive meaningful policy change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;