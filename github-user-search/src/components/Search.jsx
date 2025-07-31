// src/components/Search.jsx
import React, { useState } from "react";
import {
  fetchUserData,
  fetchUserRepos,
  searchUsers,
} from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);
    setRepos([]);
    setSearchResults([]);

    try {
      if (username) {
        const user = await fetchUserData(username);
        const userRepos = await fetchUserRepos(username);
        if (user) {
          setUserData(user);
          setRepos(userRepos);
        } else {
          setError("User not found.");
        }
      } else {
        const results = await searchUsers({
          query: "type:user",
          location,
          minRepos,
        });
        setSearchResults(results);
      }
    } catch (err) {
      setError("An error occurred during search.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="space-y-3">
        <input
          type="text"
          placeholder="GitHub username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., South Africa)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (e.g., 5)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="result-container mt-6 space-y-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {userData && (
          <div className="user-card p-4 border rounded shadow">
            <img
              src={userData.avatar_url}
              alt="Avatar"
              className="w-24 h-24 rounded-full"
            />
            <h2 className="text-xl font-bold mt-2">
              {userData.name || userData.login}
            </h2>
            <p>{userData.location}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              View GitHub Profile
            </a>
            <h3 className="mt-4 font-semibold">Repositories:</h3>
            <ul className="list-disc ml-5">
              {repos.slice(0, 5).map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="results-list">
            <h3 className="font-semibold">Search Results:</h3>
            <ul className="space-y-2">
              {searchResults.map((user) => (
                <li key={user.id} className="p-2 border rounded">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    {user.login}
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
