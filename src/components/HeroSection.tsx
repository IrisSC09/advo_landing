import { Button } from "@/components/ui/button";
import protestHero from "@/assets/protest-hero.jpg";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  const scrollToMission = () => {
    const missionSection = document.querySelector('#mission');
    missionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${protestHero})`
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 z-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white z-10 relative">
        <div className="glass-panel rounded-3xl p-12 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black mb-8 animate-gradient leading-tight fade-in">
            ADVOLINE
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 neon-glow fade-in fade-in-delay-1">
            YOUR PIPELINE TO ADVOCACY
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 font-light leading-relaxed fade-in fade-in-delay-2">
            Combat polarization. Amplify youth voices. Transform complex legislation into
            accessible, actionable content that drives real change.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 fade-in fade-in-delay-3">
            <div className="stats-counter text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-sm text-gray-300">Youth Activists</div>
            </div>
            <div className="stats-counter text-center">
              <div className="text-3xl font-bold neon-glow mb-2">500+</div>
              <div className="text-sm text-gray-300">Bills Analyzed</div>
            </div>
            <div className="stats-counter text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-sm text-gray-300">Policy Changes</div>
            </div>
          </div>
          
          <Button 
            onClick={onJoinWaitlist}
            className="neon-button shimmer text-white font-semibold py-4 px-12 text-lg rounded-full fade-in fade-in-delay-3"
          >
            Join the waitlist
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" onClick={scrollToMission}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
        <div className="text-white text-sm mt-2 font-light">Discover Our Mission</div>
      </div>
    </section>
  );
};

export default HeroSection;