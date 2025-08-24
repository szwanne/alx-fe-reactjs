import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      {/* Navigation for nested routes */}
      <nav style={{ display: "flex", gap: 10, marginBottom: 10 }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="" element={<div>Select a section above</div>} />
      </Routes>
    </div>
  );
}
