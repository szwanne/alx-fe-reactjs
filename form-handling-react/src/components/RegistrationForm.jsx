import { useState } from "react";
import { registerUser } from "../api";

export default function RegistrationForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    // Clear field-specific error as user types
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const validate = () => {
    const newErrors = {};
    if (!values.username.trim()) newErrors.username = "Username is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.password.trim()) newErrors.password = "Password is required";
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
      const res = await registerUser(values);
      setStatus({
        type: "success",
        message: `Registered! New user id: ${res.id}`,
      });
      setValues({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={card}>
      <h2 style={title}>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit} style={form}>
        <label style={label}>
          Username
          <input
            style={input(errors.username)}
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="jane_doe"
          />
          {errors.username && <span style={errorText}>{errors.username}</span>}
        </label>

        <label style={label}>
          Email
          <input
            style={input(errors.email)}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="jane@example.com"
          />
          {errors.email && <span style={errorText}>{errors.email}</span>}
        </label>

        <label style={label}>
          Password
          <input
            style={input(errors.password)}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="••••••••"
          />
          {errors.password && <span style={errorText}>{errors.password}</span>}
        </label>

        <button type="submit" style={button} disabled={loading}>
          {loading ? "Submitting…" : "Register"}
        </button>

        {status && (
          <p style={status.type === "success" ? successText : errorTextStrong}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}

// inline styles (tiny, just for demo)
const card = {
  maxWidth: 420,
  margin: "0 auto",
  padding: 20,
  border: "1px solid #eee",
  borderRadius: 12,
};
const title = { marginBottom: 12 };
const form = { display: "grid", gap: 12 };
const label = { display: "grid", gap: 6, fontSize: 14, fontWeight: 500 };
const input = (hasError) => ({
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e74c3c" : "#ddd"}`,
  outline: "none",
});
const button = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "none",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};
const errorText = { color: "#e74c3c", fontSize: 12 };
const errorTextStrong = { color: "#e74c3c", fontWeight: 600, marginTop: 8 };
const successText = { color: "#059669", fontWeight: 600, marginTop: 8 };
