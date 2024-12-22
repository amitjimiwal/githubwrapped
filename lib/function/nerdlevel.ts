export function getNerdLevel(totalCommits: number): [string, string] {
     if (totalCommits < 100) {
          return [
               "🐣 Code Chick",
               "Still cracking the shell, but hey, every egg’s gotta start somewhere!",
          ];
     } else if (totalCommits < 500) {
          return [
               "🌱 Syntax Sprout",
               "You’ve planted the seed, now watch your commits grow. Don’t forget to hydrate with caffeine!",
          ];
     } else if (totalCommits < 1000) {
          return [
               "🚀 Push Prodigy",
               "You’re pushing more than just code — you’re pushing boundaries. Keep the streak alive!",
          ];
     } else if (totalCommits < 2500) {
          return [
               "🔥 Merge Maverick",
               "Pull requests? More like pulling the squad together. You’re living that commit life.",
          ];
     } else {
          return [
               "🌌 Commit Deity",
               "You’re basically the GitHub Universe’s main character. Forks bow to your power.",
          ];
     }
}