import { Button } from "@/components/ui/button";
import protestHero from "@/assets/protest-hero.jpg";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${protestHero})`
      }}
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white z-10">
        <div className="fade-in-up animate">
          <h1 className="text-7xl md:text-9xl font-black mb-8 animate-gradient leading-tight">
            ADVOLINE
          </h1>
        </div>
        <div className="fade-in-up animate stagger-1">
          <h2 className="text-2xl md:text-3xl font-light mb-8 neon-glow">
            YOUR PIPELINE TO ADVOCACY
          </h2>
        </div>
        <div className="fade-in-up animate stagger-2">
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            Combat polarization. Amplify youth voices. Transform complex legislation into
            accessible, actionable content that drives real change.
          </p>
        </div>
        <div className="fade-in-up animate stagger-3">
          <Button 
            onClick={onJoinWaitlist}
            className="modern-button text-white font-semibold py-4 px-12 text-lg rounded-full hover-lift"
          >
            Join the waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
