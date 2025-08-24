// src/api.js
export async function registerUser({ username, email, password }) {
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `Request failed: ${response.status}`);
  }

  // Returns { username, email, password, id, createdAt }
  return response.json();
}
