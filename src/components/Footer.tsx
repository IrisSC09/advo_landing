const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 font-bold text-xl">ADVOLINE</span>
            <span className="text-gray-400">Your Pipeline to Advocacy</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Questions? We're here to help.</span>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;