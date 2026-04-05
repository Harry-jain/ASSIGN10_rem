import { NextResponse } from "next/server";

type GithubApiRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
};

const GITHUB_USERNAME = "Harry-jain";
const PROJECT_SHOWCASE_LIMIT = 6;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers,
        next: { revalidate: 1800 },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to load GitHub repositories." },
        { status: response.status || 500 },
      );
    }

    const repos = (await response.json()) as GithubApiRepo[];

    if (!Array.isArray(repos)) {
      return NextResponse.json(
        { message: "Unexpected GitHub API response." },
        { status: 502 },
      );
    }

    const sorted = [...repos]
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, PROJECT_SHOWCASE_LIMIT)
      .map((repo) => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description ?? "",
        language: repo.language ?? "",
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        homepage: repo.homepage ?? "",
      }));

    return NextResponse.json(sorted, {
      headers: {
        "Cache-Control": "s-maxage=1800, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to fetch GitHub repositories." },
      { status: 500 },
    );
  }
}