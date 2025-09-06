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
      <MissionSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;