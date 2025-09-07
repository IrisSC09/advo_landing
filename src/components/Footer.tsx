const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <span className="text-orange-500 font-bold text-xl animate-gradient">ADVOLINE</span>
            <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Your Pipeline to Advocacy</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Questions? We're here to help.</span>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 transition-all duration-300 btn-professional hover:border-purple-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;