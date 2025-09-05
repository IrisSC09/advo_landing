const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-10 left-20 w-1 h-1 bg-purple-500 rounded-full floating opacity-40"></div>
        <div className="absolute bottom-5 right-32 w-2 h-2 bg-pink-500 rounded-full floating-delayed opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 fade-in-up animate">
            <span className="text-2xl font-bold animate-gradient">ADVOLINE</span>
            <span className="text-gray-400 font-light">Your Pipeline to Advocacy</span>
          </div>
          <div className="flex items-center space-x-4 fade-in-up animate stagger-1">
            <span className="text-gray-400 font-light">Questions? We're here to help.</span>
            <button className="glass-card px-6 py-3 text-white font-medium hover-lift transition-all hover:text-purple-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;