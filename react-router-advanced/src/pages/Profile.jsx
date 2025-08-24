import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
}
