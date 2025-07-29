// src/components/SearchBar.jsx
import React, { useState } from "react";
import { fetchGitHubUser } from "../services/github";
import UserCard from "./UserCard";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    const data = await fetchGitHubUser(username);
    setUser(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {user && <UserCard user={user} />}
    </div>
  );
}

export default SearchBar;
