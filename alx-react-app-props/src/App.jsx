import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";
import { userContext } from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "janedoe123@example.com" };

  return (
    <>
      <userContext.Provider value={userData}>
        <ProfilePage />
      </userContext.Provider>
    </>
  );
}

export default App;
