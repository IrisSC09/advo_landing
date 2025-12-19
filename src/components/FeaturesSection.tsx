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
          <div className="feature-card bg-gray-800/90 p-8 rounded-2xl border border-gray-600">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left">AI Summarization</h3>
            <p className="text-gray-300 leading-relaxed text-left mb-4">
              Complex legislation broken down into digestible summaries with key
              points and implications.
            </p>
            <div className="flex items-center text-pink-400 text-sm font-medium">
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="feature-card bg-gray-800/90 p-8 rounded-2xl border border-gray-600">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left">Creative Threads</h3>
            <p className="text-gray-300 leading-relaxed text-left mb-4">
              Share zines, protest art, music, and blogs to make legislation
              accessible and engaging.
            </p>
            <div className="flex items-center text-orange-400 text-sm font-medium">
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="feature-card bg-gray-800/90 p-8 rounded-2xl border border-gray-600">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-left">Direct Impact</h3>
            <p className="text-gray-300 leading-relaxed text-left mb-4">
              Connect directly with representatives and track real
              policy changes driven by community action.
            </p>
<<<<<<< HEAD
            <div className="flex items-center text-green-400 text-sm font-medium">

              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
=======
>>>>>>> 52f5d45a20aa10efad577507b826d5a1364e5fd0
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
