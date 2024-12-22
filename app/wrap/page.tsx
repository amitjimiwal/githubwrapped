import { GrowthChart } from "@/components/chart/GrowthChart";
import { getUserData } from "@/lib/actions/getUserData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorPage from "./error";
import DownloadButton from "@/components/DownloadButton";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ name: string }>;
}) => {
  const { name } = await searchParams;
  if (!name) return <ErrorPage />;
  //default timeout to mock api delay
  const timeout = await getUserData(name);
  if (!timeout) return <ErrorPage />;
  return (
    <div className="min-h-screen w-full relative bg-purple-900">
      <audio autoPlay className="absolute -top-0.5 -left-0.5 z-10">
        <source
          src={
            timeout?.percentFromPrevYear[0] == "-"
              ? "audio/nocode.mp3"
              : "audio/meme.mp3"
          }
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient z-0 w-screen h-screen"></div>
      <div className="relative z-10">
        <p className="z-50 text-white font-bold pt-4 text-center text-lg">
          your <span className="italic">2024</span> season recap 📈
        </p>
        <section className="min-h-screen py-4 px-2 w-full">
          <div className="max-w-lg mx-auto bg-purple-900" id="wrap">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 animate-slide-up">
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
              <div className="text-gray-400 text-underline text-center text-base">
                {" "}
                wrappedcode.vercel.app
              </div>
            </div>
          </div>
        </section>
        <div className="mb-20 flex justify-center items-center gap-3">
          <DownloadButton targetId="wrap" name={name} />
          <div>
            <Link
              href="https://x.com/intent/tweet?text=I%20generated%20my%202024%20wrapped.%20Generate%20your%27s%20now%20!&url=https%3A%2F%2Fwrappedcode.vercel.app%2F&hashtags=githubwrapped"
              className="inline-flex items-center sm:px-4 sm:py-2 p-1 bg-blue-400 hover:bg-blue-500 text-white text-sm transition-colors duration-300 shadow-lg hover:shadow-xl rounded font-bold"
              target="_blank"
            >
              Share on X
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
