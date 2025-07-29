// src/services/githubService.js
import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_GITHUB_BASE_URL || "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
