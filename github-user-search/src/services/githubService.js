// src/services/githubService.js
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_GITHUB_BASE_URL || "https://api.github.com";

// Fetch user profile data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("API Error (fetchUserData):", error);
    return null;
  }
};

// Fetch user repositories
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("API Error (fetchUserRepos):", error);
    return [];
  }
};

// Search users by keyword, location, and minimum repos
export const searchUsers = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = `q=${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>=${minRepos}`;
    const response = await axios.get(`${BASE_URL}/search/users?${searchQuery}`);
    return response.data.items;
  } catch (error) {
    console.error("API Error (searchUsers):", error);
    return [];
  }
};
