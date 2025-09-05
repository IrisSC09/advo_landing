import { Brain, MessageSquare, Zap } from "lucide-react";
import featuresBackground from "@/assets/features-background.jpg";

const FeaturesSection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${featuresBackground})`
      }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 neon-glow">
            POWERFUL FEATURES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Cutting-edge technology meets grassroots activism to create unprecedented change.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-card p-8 text-center hover-lift fade-in-up animate stagger-1 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              AI Summarization
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Advanced AI breaks down complex legislation into digestible, actionable insights that anyone can understand and act upon.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center hover-lift fade-in-up animate stagger-2 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              Creative Threads
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Transform policy insights into engaging social media content that sparks conversations and drives viral advocacy campaigns.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center hover-lift fade-in-up animate stagger-3 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 neon-glow">
              Direct Impact
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Connect directly with representatives, track policy progress, and measure your advocacy impact in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
