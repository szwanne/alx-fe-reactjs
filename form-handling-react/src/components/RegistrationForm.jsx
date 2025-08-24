import { useState } from "react";
import { registerUser } from "../api";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    try {
      setLoading(true);
      const res = await registerUser({ username, email, password });
      setStatus({
        type: "success",
        message: `Registered! New user id: ${res.id}`,
      });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span>{errors.username}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting…" : "Register"}
        </button>

        {status && (
          <p style={{ color: status.type === "success" ? "green" : "red" }}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
