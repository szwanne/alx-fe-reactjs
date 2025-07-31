import React, { useState } from "react";
import { fetchUserData, fetchUserRepos } from "../services/githubService";

function Search() {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData(null);
    setRepos([]);
    setError("");
    setLoading(true);

    try {
      const data = await fetchUserData(input);
      const repoData = await fetchUserRepos(input);
      setUserData(data);
      setRepos(repoData);
    } catch (err) {
      setError("Looks like we can't find the user or their repos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="result-container">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {userData && (
          <div className="user-card">
            <img src={userData.avatar_url} alt="User avatar" width={100} />
            <h2>{userData.name || userData.login}</h2>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </div>
        )}

        {repos.length > 0 && (
          <div className="repo-list">
            <h3>Public Repositories:</h3>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
