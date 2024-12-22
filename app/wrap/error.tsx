"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Error Icon */}
        <div className="mb-8 animate-bounce">
          <svg
            className="w-24 h-24 text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Title */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 animate-slide-down">
          Oops! <span className="text-purple-400">Error</span>
        </h1>

        {/* Error Message */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
          We couldn&apos;t find what you&apos;re looking for. Let&apos;s get you
          back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link href="/">
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-white border border-white/20 transition-colors duration-200 backdrop-blur-sm">
              Go Home
            </button>
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto animate-slide-up">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Common Issues</h3>
            <ul className="text-gray-400 text-left space-y-2">
              <li>• Check your internet connection</li>
              <li>• Verify the GitHub username</li>
              <li>• Try refreshing the page</li>
            </ul>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-400 text-left">
              If the problem persists, please contact our support team or check
              our documentation for troubleshooting guides.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
