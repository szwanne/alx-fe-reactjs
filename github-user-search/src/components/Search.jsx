// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(""); //
  const [minRepos, setMinRepos] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    setError("");
    setLoading(true);

    try {
      const users = await searchUsers({ query, location, minRepos });
      if (users.length === 0) {
        setError("No users found.");
      } else {
        setResults(users);
      }
    } catch (err) {
      setError("Error searching for users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          required
        />

        {/* ✅ Location input */}
        <input
          type="text"
          placeholder="Filter by location (e.g. South Africa)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />

        {/* Optional: Minimum Repos input */}
        <input
          type="number"
          placeholder="Minimum number of public repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          min={0}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="result-container mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {results.length > 0 && (
          <div className="grid gap-4 mt-4">
            {results.map((user) => (
              <div
                key={user.id}
                className="border rounded p-4 flex items-center space-x-4"
              >
                <img
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
