// src/components/UserCard.jsx
import React from "react";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="User Avatar" width={100} />
      <h2>{user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
