import { Button } from "@/components/ui/button";
import protestHero from "@/assets/protest-hero.jpg";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${protestHero})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white z-10">
        <h1 className="text-7xl md:text-9xl font-black mb-8 animate-gradient leading-tight">
          ADVOLINE
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 neon-glow">
          YOUR PIPELINE TO ADVOCACY
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 font-light leading-relaxed">
          Combat polarization. Amplify youth voices. Transform complex legislation into
          accessible, actionable content that drives real change.
        </p>
        <Button 
          onClick={onJoinWaitlist}
          className="neon-button text-white font-semibold py-4 px-12 text-lg rounded-full"
        >
          Join the waitlist
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;