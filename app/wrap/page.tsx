import { GrowthChart } from "@/components/chart/GrowthChart";
import Image from "next/image";
import React from "react";

const page = async () => {
  //default timeout to mock api delay
  const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await timeout(2000);
  return (
    <div className="min-h-screen w-full bg-gray-900 relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient z-0"></div>
      <div className="relative z-10">
        <p className="z-50 text-white font-extrabold pt-10 text-center text-5xl">
          your <span className="text-3xl italic">2024</span> season recap 📈
        </p>
        <section id="user_stats_card" className="h-auto py-12 px-4 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Card container with glassmorphism effect */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl animate-slide-up">
              {/* User Profile Header */}
              <div className="flex items-center mb-8">
                <Image
                  src="https://avatar.iran.liara.run/public/4"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg animate-bounce-slow"
                  width={96}
                  height={96}
                />
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    electroo096
                  </h2>
                  <p className="text-purple-300">
                    suffering from development disorder
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Key Stats */}
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-purple-400 text-lg font-semibold mb-2">
                      <i className="fas fa-code-commit mr-2"></i>Total
                      Contributions
                    </h3>
                    <p className="text-4xl font-bold text-white">2,547</p>
                    <p className="text-gray-400 text-sm mt-2">
                      <i className="fas fa-arrow-up text-green-400 mr-1"></i>
                      +23% from last year
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-purple-400 text-lg font-semibold mb-2">
                      <i className="fas fa-users mr-2"></i>Followers
                    </h3>
                    <p className="text-4xl font-bold text-white">1,234</p>
                  </div>
                </div>

                {/* Language Stats */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="text-purple-400 text-lg font-semibold mb-4">
                    <i className="fas fa-code mr-2"></i>Top Languages
                  </h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="flex justify-between text-sm text-white mb-1">
                        <span>JavaScript</span>
                        <span>45%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="flex justify-between text-sm text-white mb-1">
                        <span>Python</span>
                        <span>30%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="flex justify-between text-sm text-white mb-1">
                        <span>TypeScript</span>
                        <span>25%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Growth Journey Stats */}
              <div className="max-w-4xl mx-auto">
                {/* Card container */}
                <div className="p-8 shadow-xl">
                  <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                    <i className="fas fa-chart-line text-green-400 mr-3"></i>
                    Your GitHub Journey
                  </h2>

                  {/* Growth Stats */}
                  <div className=" rounded-xl p-6 border border-white/10 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-green-400">5</p>
                        <p className="text-gray-400 mt-2">Years on GitHub</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-purple-400">
                          10,234
                        </p>
                        <p className="text-gray-400 mt-2">Total Commits</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-blue-400">452%</p>
                        <p className="text-gray-400 mt-2">Overall Growth</p>
                      </div>
                    </div>
                  </div>

                  {/* Growth Chart */}
                  <div className="rounded-xl p-6 mb-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Contribution Growth
                      </h3>
                      <div id="growth-chart" className="w-full h-auto">
                        <GrowthChart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
