import { GrowthChart } from "@/components/chart/GrowthChart";
import { getUserData } from "@/lib/actions/getUserData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  //default timeout to mock api delay
  const timeout = await getUserData("torvalds");
  console.log(timeout);
  if (!timeout) return <div>error</div>;
  return (
    // <div className="min-h-screen w-full bg-gray-900 relative">
    //   <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient z-0"></div>
    //   <div className="relative z-10">
    //     <p className="z-50 text-white font-extrabold pt-10 text-center text-3xl">
    //       your <span className="text-3xl italic">2024</span> season recap 📈
    //     </p>
    //     <section id="user_stats_card" className="h-auto py-12 px-4 w-full">
    //       <div className="max-w-2xl mx-auto">
    //         {/* Card container with glassmorphism effect */}
    //         <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl animate-slide-up">
    //           {/* User Profile Header */}
    //           <div className="flex items-center mb-8">
    //             <Image
    //               src="https://avatar.iran.liara.run/public/4"
    //               alt="Profile"
    //               className="w-24 h-24 rounded-full border-4 border-purple-500 shadow-lg animate-bounce-slow"
    //               width={96}
    //               height={96}
    //             />
    //             <div className="ml-6">
    //               <h2 className="text-3xl font-bold text-white mb-2">
    //                 electroo096
    //               </h2>
    //               <p className="text-purple-300">
    //                 suffering from development disorder
    //               </p>
    //             </div>
    //           </div>

    //           {/* Stats Grid */}
    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    //             {/* Key Stats */}
    //             <div className="space-y-6">
    //               <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-transform duration-300">
    //                 <h3 className="text-purple-400 text-lg font-semibold mb-2">
    //                   {/* <i className="fas fa-code-commit mr-2"></i> */}
    //                   Total Contributions
    //                 </h3>
    //                 <p className="text-4xl font-bold text-white">2,547</p>
    //                 <p className="text-gray-400 text-sm mt-2">
    //                   {/* <i className="fas fa-arrow-up text-green-400 mr-1"></i> */}
    //                   +23% from last year
    //                 </p>
    //               </div>
    //               <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-transform duration-300">
    //                 <h3 className="text-purple-400 text-lg font-semibold mb-2">
    //                   {/* <i className="fas fa-code-commit mr-2"></i> */}
    //                   🐣 Code Chick
    //                 </h3>
    //                 <p className="text-white text-sm mt-2 italic">
    //                   “Still cracking the shell, but hey, every egg’s gotta
    //                   start somewhere!”
    //                 </p>
    //               </div>

    //               <div className="bg-white/5 rounded-xl p-6 border border-white/10 transform hover:scale-105 transition-transform duration-300">
    //                 <h3 className="text-purple-400 text-lg font-semibold mb-2">
    //                   {/* <i className="fas fa-users mr-2"></i> */}
    //                   Followers
    //                 </h3>
    //                 <p className="text-4xl font-bold text-white">1,234</p>
    //               </div>
    //             </div>

    //             {/* Language Stats */}
    //             <div className="bg-white/5 rounded-xl p-6 border border-white/10">
    //               <h3 className="text-purple-400 text-lg font-semibold mb-4">
    //                 {/* <i className="fas fa-code mr-2"></i> */}Top Languages
    //               </h3>
    //               <div className="space-y-4">
    //                 <div className="relative">
    //                   <div className="flex justify-between text-sm text-white mb-1">
    //                     <span>JavaScript</span>
    //                     <span>45%</span>
    //                   </div>
    //                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
    //                     <div
    //                       className="h-full bg-purple-500 rounded-full"
    //                       style={{ width: "45%" }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //                 <div className="relative">
    //                   <div className="flex justify-between text-sm text-white mb-1">
    //                     <span>Python</span>
    //                     <span>30%</span>
    //                   </div>
    //                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
    //                     <div
    //                       className="h-full bg-blue-500 rounded-full"
    //                       style={{ width: "30%" }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //                 <div className="relative">
    //                   <div className="flex justify-between text-sm text-white mb-1">
    //                     <span>TypeScript</span>
    //                     <span>25%</span>
    //                   </div>
    //                   <div className="h-2 bg-white/10 rounded-full overflow-hidden">
    //                     <div
    //                       className="h-full bg-green-500 rounded-full"
    //                       style={{ width: "25%" }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* Growth Journey Stats */}
    //           <div className="max-w-4xl mx-auto">
    //             {/* Card container */}
    //             <div className="p-8 shadow-xl">
    //               <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
    //                 {/* <i className="fas fa-chart-line text-green-400 mr-3"></i> */}
    //                 Your GitHub Journey
    //               </h2>

    //               {/* Growth Stats */}
    //               <div className=" rounded-xl p-6 border border-white/10 mb-8">
    //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //                   <div className="text-center">
    //                     <p className="text-4xl font-bold text-green-400">5</p>
    //                     <p className="text-gray-400 mt-2">Years on GitHub</p>
    //                   </div>
    //                   <div className="text-center">
    //                     <p className="text-4xl font-bold text-purple-400">
    //                       10,234
    //                     </p>
    //                     <p className="text-gray-400 mt-2">Total Commits</p>
    //                   </div>
    //                   <div className="text-center">
    //                     <p className="text-4xl font-bold text-blue-400">452%</p>
    //                     <p className="text-gray-400 mt-2">Overall Growth</p>
    //                   </div>
    //                 </div>
    //               </div>

    //               {/* Growth Chart */}
    //               <div className="rounded-xl p-6 mb-8">
    //                 <div className="mb-6">
    //                   <h3 className="text-xl font-semibold text-white mb-4">
    //                     Contribution Growth
    //                   </h3>
    //                   <div id="growth-chart" className="w-full h-auto">
    //                     <GrowthChart />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    <div className="min-h-screen w-full bg-gray-900 relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient z-0"></div>
      <div className="relative z-10">
        <p className="z-50 text-white font-bold pt-4 text-center text-lg">
          your <span className="italic">2024</span> season recap 📈
        </p>
        <section className="min-h-screen py-4 px-2 w-full">
          <div className="max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-xl animate-slide-up">
              {/* User Profile Header */}
              <div className="flex items-center mb-4">
                <Image
                  src={`${timeout?.avatar_url}`}
                  alt="Profile"
                  className="rounded-full border-4 border-purple-500 shadow-lg animate-bounce-slow"
                  width={48}
                  height={48}
                />
                <div className="ml-3">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white mb-1 hover:underline"
                    href={`https://github.com/${timeout.username}`}
                  >
                    {timeout?.username}
                  </Link>
                  <p className="text-purple-300 text-xs">{timeout?.bio}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Key Stats */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-purple-400 text-sm font-semibold mb-1">
                      Total Contributions
                    </h3>
                    <p className="text-2xl font-bold text-white">
                      {timeout?.currentYearCommit.toLocaleString()}
                    </p>
                    <p className="text-white italic text-xs mt-1">
                      {timeout?.percentFromPrevYear[0] == "-" ? (
                        <span className="text-red-600 font-bold">
                          {" "}
                          {timeout.percentFromPrevYear}% less
                        </span>
                      ) : (
                        <span className="text-green-500">
                          +{timeout.percentFromPrevYear}% more
                        </span>
                      )}
                      &nbsp;from last year
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-purple-400 text-sm font-semibold mb-1">
                      {timeout.tag}
                    </h3>
                    <p className="text-white text-xs mt-1 italic">
                      {timeout.tagLine}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10 transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-purple-400 text-sm font-semibold mb-1">
                      Top Starred Repository
                    </h3>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white w-full hover:underline"
                      href={`https://github.com/${timeout.username}/${timeout?.topStarredRepos[0].name}`}
                    >
                      {timeout?.topStarredRepos[0].name}
                    </Link>
                    <p className="text-white text-xs mt-1 italic">
                      {timeout?.topStarredRepos[0].description}
                    </p>
                    <p className="text-white text-xs mt-1 italic">
                      {timeout?.topStarredRepos[0].starred.toLocaleString()}{" "}
                      stars
                    </p>
                  </div>
                </div>

                {/* Language Stats */}
                <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <h3 className="text-purple-400 text-sm font-semibold mb-2">
                    Top Languages
                  </h3>
                  <div className="space-y-2">
                    {timeout.topLanguages.map((lang, index) => (
                      <div key={lang.language} className="relative">
                        <div className="flex justify-between text-xs text-white mb-1">
                          <span>{lang.language}</span>
                          <span>{lang.percentage}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              index === 0
                                ? "bg-purple-500"
                                : index === 1
                                ? "bg-blue-500"
                                : "bg-green-500"
                            }`}
                            style={{ width: `${lang.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Growth Journey Stats */}
              <div className="rounded-lg p-3 border border-white/10 mb-4">
                <h2 className="text-lg font-bold text-white mb-4">
                  Your GitHub Journey
                </h2>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-green-400">
                      {timeout.totalYearsOnGithub}
                    </p>
                    <p className="text-gray-400 text-xs">Years on GitHub</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-purple-400">
                      {timeout.totalCommits.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-xs">Total Commits</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-blue-400">
                      {timeout?.percentFromPrevYear[0] == "-" ? (
                        <span className="text-red-600 font-bold">
                          {" "}
                          {timeout.percentFromPrevYear}%
                        </span>
                      ) : (
                        <span className="text-green-500">
                          {timeout.percentFromPrevYear}%
                        </span>
                      )}
                    </p>
                    <p className="text-gray-400 text-xs">
                      Overall Growth this year
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  {/* <h3 className="text-sm font-semibold text-white mb-2">
                    Contribution Growth
                  </h3> */}
                  <div className="w-full h-auto">
                    <GrowthChart data={timeout.yearlyCommits} />
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
