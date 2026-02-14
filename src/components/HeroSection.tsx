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

      <div className="container mx-auto px-4 md:px-6 text-center text-white z-10 relative">
        <div className="rounded-3xl p-6 md:p-12 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 md:mb-8 animate-gradient leading-tight fade-in">
            ADVOLINE
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 md:mb-8 neon-glow fade-in fade-in-delay-1">
            YOUR PIPELINE TO ADVOCACY
          </h2>
          <p className="text-base md:text-xl max-w-4xl mx-auto mb-8 md:mb-12 font-light leading-relaxed fade-in fade-in-delay-2">
            Combat polarization. Amplify youth voices. Transform complex legislation into
            accessible, actionable content that drives real change.
          </p>
          
          
          <Button 
            onClick={onJoinWaitlist}
            className="neon-button shimmer text-white font-semibold py-3 md:py-4 px-8 md:px-12 text-base md:text-lg rounded-full fade-in fade-in-delay-3"
          >
            Join the waitlist
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-300 hover:scale-110" onClick={scrollToMission}>
        <div className="flex flex-col items-center space-y-2">
          <svg 
            className="w-8 h-8 text-white animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
