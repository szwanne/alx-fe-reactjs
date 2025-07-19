import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { UserContext } from "./UserContext";
function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };
  return (
    <UserContext.Provider value={userData}>
      <Router>
        <ProfilePage />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
