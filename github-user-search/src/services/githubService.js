// src/services/githubService.js
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_GITHUB_BASE_URL || "https://api.github.com";

// Fetch user profile data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("API Error (user data):", error);
    return null;
  }
};

// ✅ Fetch user repositories using Axios
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error("API Error (repos):", error);
    return [];
  }
};
