import { useEffect, useState } from "react";
import "./GitHubProjects.css";

const GitHubProjects = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/SaraEmiliaJohnsson/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((repo: any) => !repo.fork && !repo.private);
        setRepos(filtered);
      });
  }, []);

  return (
    <section className="projects-section">
      <h2>Mina GitHub-projekt</h2>
      <div className="projects-grid">
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "-"}</p>
            <span>{repo.language}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;
