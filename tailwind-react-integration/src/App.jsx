import { useState } from "react";
import "./App.css";
import Userprofile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Userprofile />
    </>
  );
}

export default App;
