import { Button } from "@/components/ui/button";
import protestHero from "@/assets/protest-hero.jpg";

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
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${protestHero})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white z-10">
        <h1 className="text-7xl md:text-9xl font-black mb-8 animate-gradient leading-tight fade-in">
          ADVOLINE
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 neon-glow fade-in-delay-1">
          YOUR PIPELINE TO ADVOCACY
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 font-light leading-relaxed fade-in-delay-2">
          Combat polarization. Amplify youth voices. Transform complex legislation into
          accessible, actionable content that drives real change.
        </p>
        <Button 
          onClick={onJoinWaitlist}
          className="neon-button btn-professional text-white font-semibold py-4 px-12 text-lg rounded-full fade-in-delay-3"
        >
          Join the waitlist
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="scroll-indicator text-white/70 hover:text-white"
        onClick={scrollToMission}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-light">Discover our mission</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;