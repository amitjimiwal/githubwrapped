import SearchInput from "@/components/UserRecapCard";
import Image from "next/image";
import Link from "next/link";
const featured = [
  {
    name: "torvalds",
    bio: "creator of linux",
  },
  {
    name: "hkirat",
    bio: "100xDev",
  },
  {
    name: "getify",
    bio: "creator of you don't know js",
  },
];
export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 animate-gradient"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 animate-slide-down">
            2024 <span className="text-purple-400">Code Wrapped</span> 
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
            Discover your{" "}
            <span className="font-bold italic text-purple-500">
              2024 season of code
            </span>{" "}
            with a year-in-review experience
          </p>
          <SearchInput />
          <Link
            href="https://x.com/notamit_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 mb-4 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl mt-10"
          >
            Built with ❤️ by @notamit_dev
          </Link>
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

          <h1 className="text-xl md:text-3xl font-bold font-heading mb-8 animate-slide-down mt-20">
            <span className="text-purple-400">Featured</span> Profiles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full animate-slide-u">
            {featured.map((person) => (
              <FeatureComponent
                key={person.name}
                name={person.name}
                bio={person.bio}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

interface FeatureComponentProps {
  name: string;
  bio: string;
}

function FeatureComponent({ name, bio }: FeatureComponentProps) {
  return (
    <div className="w-full">
      <div className="max-w-2xl">
        <div className="rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] bg-transparent">
          {/* Header & Bio Section */}
          <div className="text-left bg-purple-500 p-2">
            <h2 className="text-lg font-bold text-white">@{name}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{bio}</p>
          </div>

          {/* 16:9 Image Section */}
          <div className="aspect-auto">
            <Image
              src={`/featured/${name}.png`}
              alt="Featured Project"
              width={900}
              height={1600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
