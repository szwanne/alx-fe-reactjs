import React, { useEffect } from "react";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import { useRecipeStore } from "./store/recipeStore";

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Sample data to simulate loading
  useEffect(() => {
    setRecipes([
      {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Creamy pasta with bacon and cheese.",
      },
      {
        id: 2,
        title: "Chicken Tikka Masala",
        description: "Spicy and creamy Indian chicken dish.",
      },
      {
        id: 3,
        title: "Avocado Toast",
        description: "Simple and delicious breakfast.",
      },
      {
        id: 4,
        title: "Beef Stew",
        description: "Hearty stew with beef and vegetables.",
      },
    ]);
  }, [setRecipes]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing App</h1>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
