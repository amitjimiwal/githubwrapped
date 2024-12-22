"use server";
import { getMostStarredRepository, getTopLanguages } from "hubspy";
import GetRepositoriesData from "hubspy/dist/functions/getrepositories";
import fetchGithubUserMetadata from "hubspy/dist/functions/getusermetadata";
import GetYearWiseContributions from "hubspy/dist/functions/getyearwisecontributions";
import { getNerdLevel } from "../function/nerdlevel";

export async function getUserData(name: string) {
  try {
    const userData = await fetchGithubUserMetadata(name);
    const yearlyCommits = await GetYearWiseContributions(name);
    const totalCommits = yearlyCommits.reduce(
      (acc, year) => acc + year.contributions,
      0
    );
    const [tag, tagLine] = getNerdLevel(totalCommits);
    const currentYearCommit = yearlyCommits[0].contributions;
    const percentFromPrevYear =
      ((currentYearCommit - yearlyCommits[1].contributions) /
        yearlyCommits[1].contributions) *
      100;
    const repositoriesData = await GetRepositoriesData(name);
    const topLanguages = getTopLanguages(repositoriesData, 2024);
    const topStarredRepos = getMostStarredRepository(repositoriesData, 2024);
    return {
      success: true,
      username: userData?.login,
      bio: userData?.bio,
      tag,
      tagLine,
      avatar_url:
        userData?.avatar_url || "https://avatar.iran.liara.run/public/4",
      totalCommits,
      yearlyCommits,
      currentYearCommit,
      topStarredRepos,
      topLanguages,
      totalYearsOnGithub: yearlyCommits.length,
      percentFromPrevYear: percentFromPrevYear.toFixed().toString(),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
