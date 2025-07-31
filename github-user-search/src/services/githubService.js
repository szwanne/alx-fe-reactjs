// src/services/githubService.js
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_GITHUB_BASE_URL || "https://api.github.com";

// ✅ Search users with optional location and minimum repos
export const searchUsers = async ({ query, location = "", minRepos = 0 }) => {
  try {
    let q = query;

    if (location) {
      q += `+location:${location}`;
    }

    if (minRepos) {
      q += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?q=${q}`);
    return response.data.items; // list of user objects
  } catch (error) {
    console.error("API Error (search users):", error);
    return [];
  }
};

// Still keep this if needed
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("API Error (user data):", error);
    return null;
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("API Error (repos):", error);
    return [];
  }
};
