import missionBackground from "@/assets/mission-background.jpg";

import { useEffect, useRef, useState } from "react";

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      data-section="mission"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${missionBackground})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          OUR <span className="neon-glow">MISSION</span>
        </h2>
        <p className={`text-xl max-w-5xl mx-auto mb-16 font-light leading-relaxed transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Guarding freedom of political knowledge and expression through youth voices. No
          more misinformation, echo chambers, and bias.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className={`stagger-item ${isVisible ? 'animate' : ''} bg-black/80 p-8 rounded-2xl border border-gray-700 card-hover group`}>
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Democratizing Information</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Making complex political information accessible to everyone, regardless of
              background or education level.
            </p>
          </div>
          
          <div className={`stagger-item ${isVisible ? 'animate' : ''} bg-black/80 p-8 rounded-2xl border border-gray-700 card-hover group`}>
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Combating Polarization</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Fostering understanding through creative expression and fact-based discussions that bridge
              divides.
            </p>
          </div>
          
          <div className={`stagger-item ${isVisible ? 'animate' : ''} bg-black/80 p-8 rounded-2xl border border-gray-700 card-hover group`}>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Amplifying Youth Voices</h3>
            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
              Empowering the next generation to participate meaningfully in
              democracy and drive policy change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;