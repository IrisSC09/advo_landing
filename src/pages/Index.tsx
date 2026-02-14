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
      <div className="bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-orange-900/60 py-3 md:py-4 text-center border-y border-gray-700">
        <p className="text-white text-sm md:text-base font-medium tracking-wide px-4">
          🏆 <span className="font-semibold">Diamond Challenge Semifinalist</span>
        </p>
      </div>
      <MissionSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;