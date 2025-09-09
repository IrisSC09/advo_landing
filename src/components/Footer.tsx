import { 
  FeaturesModal, 
  HowItWorksModal, 
  PrivacyPolicyModal, 
  TermsOfServiceModal, 
  HelpCenterModal, 
  CommunityModal, 
  ContactUsModal 
} from "@/components/InfoModals"

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-orange-900/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-orange-500 font-bold text-2xl animate-gradient">ADVOLINE</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Empowering youth voices to drive meaningful political change through accessible technology and creative expression.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Platform</h4>
            <div className="space-y-2">
              <FeaturesModal trigger={
                <button className="block text-gray-400 hover:text-orange-500 transition-colors text-left">Features</button>
              } />
              <HowItWorksModal trigger={
                <button className="block text-gray-400 hover:text-orange-500 transition-colors text-left">How it Works</button>
              } />
              <PrivacyPolicyModal trigger={
                <button className="block text-gray-400 hover:text-orange-500 transition-colors text-left">Privacy Policy</button>
              } />
              <TermsOfServiceModal trigger={
                <button className="block text-gray-400 hover:text-orange-500 transition-colors text-left">Terms of Service</button>
              } />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Support</h4>
            <div className="space-y-2">
              <HelpCenterModal trigger={
                <button className="block text-gray-400 hover:text-pink-500 transition-colors text-left">Help Center</button>
              } />
              <CommunityModal trigger={
                <button className="block text-gray-400 hover:text-pink-500 transition-colors text-left">Community</button>
              } />
              <ContactUsModal trigger={
                <button className="glass-panel px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300">
                  Contact Us
                </button>
              } />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Advoline. All rights reserved. Built for changemakers.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;