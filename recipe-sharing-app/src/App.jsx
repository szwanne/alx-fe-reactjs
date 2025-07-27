import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Your main recipe list page
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
