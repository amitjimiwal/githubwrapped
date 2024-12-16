export default function Home() {
  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 animate-slide-down">
          GitHub <span className="text-purple-400">Wrapped</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
          Discover your GitHub journey in a beautiful, Spotify-like
          year-in-review experience
        </p>

        {/* Search Box */}
        <div className="w-full max-w-md mx-auto relative animate-fade-in">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter GitHub username"
              className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
              Search
            </button>
          </div>
        </div>
        {/* Recent Searches */}
        {/* <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            Recent Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-200">
              <i className="fas fa-history mr-2"></i>torvalds
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-200">
              <i className="fas fa-history mr-2"></i>gaearon
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition-colors duration-200">
              <i className="fas fa-history mr-2"></i>yyx990803
            </button>
          </div>
        </div> */}
        {/* Stats Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl mx-auto animate-slide-up">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <i className="fas fa-code-commit text-3xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Commits</h3>
            <p className="text-gray-400">Track your yearly contributions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <i className="fas fa-star text-3xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Top Repos</h3>
            <p className="text-gray-400">Your most impactful work</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <i className="fas fa-chart-line text-3xl text-purple-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-gray-400">Your coding evolution</p>
          </div>
        </div>
      </div>
    </section>
  );
}
