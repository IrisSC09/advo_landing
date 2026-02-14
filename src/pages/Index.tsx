import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistElement = document.getElementById('waitlist');
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set dark theme by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection onJoinWaitlist={scrollToWaitlist} />
      <div className="bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-orange-900/60 py-2 md:py-3 border-y border-gray-700 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="text-white text-xs md:text-sm font-semibold tracking-[0.25em] uppercase inline-block">
              🏆 DIAMOND CHALLENGE SEMIFINALIST
            </span>
          ))}
        </div>
      </div>
      <MissionSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;