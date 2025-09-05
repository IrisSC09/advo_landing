import featuresBackground from "@/assets/features-background.jpg";

const FeaturesSection = () => {
  return (
    <section 
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${featuresBackground})`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          POWERFUL <span className="text-orange-500">FEATURES</span>
        </h2>
        <p className="text-xl max-w-5xl mx-auto mb-16 font-light leading-relaxed">
          Everything you need to understand, engage with, and influence the political
          process.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-gray-800/90 p-8 rounded-2xl border border-gray-600">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left">AI Summarization</h3>
            <p className="text-gray-300 leading-relaxed text-left">
              Complex legislation broken down into digestible summaries with key
              points and implications.
            </p>
          </div>
          
          <div className="bg-gray-800/90 p-8 rounded-2xl border border-gray-600">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left">Creative Threads</h3>
            <p className="text-gray-300 leading-relaxed text-left">
              Share zines, protest art, music, and blogs to make legislation
              accessible and engaging.
            </p>
          </div>
          
          <div className="bg-gray-800/90 p-8 rounded-2xl border border-gray-600">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left">Direct Impact</h3>
            <p className="text-gray-300 leading-relaxed text-left">
              Connect directly with representatives and track real
              policy changes driven by community action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;