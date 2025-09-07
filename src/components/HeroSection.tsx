import { Button } from "@/components/ui/button";
import protestHero from "@/assets/protest-hero.jpg";
import mouseIcon from "@/assets/mouse-icon.jpg";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  const scrollToMission = () => {
    const missionElement = document.querySelector('[data-section="mission"]');
    if (missionElement) {
      missionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${protestHero})`
      }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="floating-element absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-6 text-center text-white z-10 relative">
        {/* Hero glass panel */}
        <div className="hero-glass rounded-3xl p-8 md:p-12 mb-8">
          <h1 className="text-7xl md:text-9xl font-black mb-8 animate-gradient leading-tight fade-in text-glow-strong">
            ADVOLINE
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 neon-glow fade-in-delay-1">
            YOUR PIPELINE TO ADVOCACY
          </h2>
        </div>
        
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 font-light leading-relaxed fade-in-delay-2">
          Combat polarization. Amplify youth voices. Transform complex legislation into
          accessible, actionable content that drives real change.
        </p>
        
        <div className="fade-in-delay-3">
          <Button 
            onClick={onJoinWaitlist}
            className="neon-button btn-professional text-white font-semibold py-6 px-16 text-xl rounded-full shadow-2xl"
          >
            Join the Movement
          </Button>
          <p className="text-gray-300 mt-4 text-sm font-light">
            Be part of the next generation of changemakers
          </p>
        </div>
      </div>
      
      {/* Mouse scroll indicator */}
      <div 
        className="scroll-indicator text-white/80 hover:text-white"
        onClick={scrollToMission}
      >
        <div className="flex flex-col items-center">
          <img 
            src={mouseIcon} 
            alt="Scroll down" 
            className="w-8 h-8 mb-2 opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-lg"
          />
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;