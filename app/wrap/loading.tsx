import React from "react";
const LoadingAnimation = () => {
  return (
    <section className="fixed inset-0 bg-violet-900 z-50 flex flex-col items-center justify-center">
      {/* Loading Animation Container */}
      <div className="text-center">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <i className="fas fa-code-branch text-6xl text-white animate-bounce-slow"></i>
          <div className="absolute -top-2 -right-2">
            <i className="fas fa-code text-2xl text-violet-300 animate-spin-slow"></i>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Analyzing Your GitHub Journey{" "}
          <span className="animate-ping text-3xl">...</span>
        </h2>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <i className="fas fa-star text-violet-400 opacity-50 animate-pulse-slow text-xl"></i>
          </div>
          <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <i className="fas fa-code text-violet-400 opacity-50 animate-float text-xl"></i>
          </div>
          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
            <i className="fas fa-git-alt text-violet-400 opacity-50 animate-spin-slow text-xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingAnimation;
