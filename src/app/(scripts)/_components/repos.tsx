type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  license: {
    name: string;
  } | null;
};

async function fetchRepos(): Promise<GitHubRepo[]> {
    const res = await fetch("https://api.github.com/users/Torsumethkk123/repos", {
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
    });


    if (!res.ok) {
        throw new Error(`GitHub API error: ${res.statusText}`);
    }

    return res.json()
}

export default async function Repos() {
    const repos = await fetchRepos()

    return (
        <>
            <div className="max-h-[400px] flex flex-col mt-6 p-2 space-y-4 overflow-y-auto">
                {repos.map((repo) => {
                    if (!repo.private) {
                        return (
                            <div key={repo.html_url} className="w-full min-h-[100px] h-auto rounded-lg repo p-4">
                                <div className="w-full flex justify-between">
                                    <h2 className="text-[#4493f8]">{repo.name}</h2>
                                    <span className="text-[#9198a1] border-[2px] border-[#9198a1] px-2 rounded-2xl font-light">public</span>
                                </div>
                                <p className="mt-2 text-[#9198a1]">{repo.description ? repo.description : "No Description"}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}