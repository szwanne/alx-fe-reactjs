// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/github";

function Search() {
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData(null);
    setError("");
    setLoading(true);

    try {
      const data = await fetchUserData(input);
      if (data) {
        setUserData(data);
      } else {
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      setError("Looks like we can't find the user.");
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
      </div>
    </div>
  );
}

export default Search;
