import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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
  
      <div className="text-center bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-orange-900/60 py-2 md:py-3 border-y border-gray-700 overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          JOIN OUR <span className="text-orange-500">COMMUNITY</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="bg-black/80 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">
                Youth Advocacy Survey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Complete this survey to help us understand current barriers in civic engagement for youth! 
              </p>
              <a href="https://forms.gle/JVmVcz7vwtYYptSc8" target="_blank" rel="noopener noreferrer">
                <Button className="neon-button shimmer text-white font-semibold py-3 md:py-4 px-8 md:px-12 text-base md:text-lg rounded-full">
                  Take the survey here!
                </Button>
              </a>
          
          </div>
          <div className="bg-black/80 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">
                Pilot Program Application
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                Apply for our pilot program to receive early access, contribute to advocacy support, and gain priority for ambassador programs!
              </p>
              <a href="https://forms.gle/bwMwvFWd3aRvXPXu7" target="_blank" rel="noopener noreferrer">
                <Button className="neon-button shimmer text-white font-semibold py-3 md:py-4 px-8 md:px-12 text-base md:text-lg rounded-full">
                  Apply here!
                </Button>
              </a>
            </div>
        </div>
        
      </div>
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;