"use client";
import { GrowthChart } from "@/components/chart/GrowthChart";
import React from "react";

const page = () => {
  return (
    <section
      id="growth_analytics_card"
      className="min-h-screen bg-gray-900 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Card container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <i className="fas fa-chart-line text-green-400 mr-3"></i>
            Your GitHub Journey
          </h2>

          {/* Growth Stats */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-400">5</p>
                <p className="text-gray-400 mt-2">Years on GitHub</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-400">10,234</p>
                <p className="text-gray-400 mt-2">Total Commits</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-400">452%</p>
                <p className="text-gray-400 mt-2">Overall Growth</p>
              </div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Contribution Growth
              </h3>
              <div id="growth-chart" className="w-full h-auto">
                <GrowthChart />
              </div>
            </div>
          </div>

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-rocket text-2xl text-purple-400 mr-3"></i>
                <h3 className="text-xl font-semibold text-white">
                  Key Milestone
                </h3>
              </div>
              <p className="text-gray-300">
                Reached 1000+ commits milestone in 2023!
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <i className="fas fa-star text-2xl text-yellow-400 mr-3"></i>
                <h3 className="text-xl font-semibold text-white">
                  Achievement Unlocked
                </h3>
              </div>
              <p className="text-gray-300">
                Most active year with 2,547 contributions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
