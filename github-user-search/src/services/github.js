// src/services/github.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
