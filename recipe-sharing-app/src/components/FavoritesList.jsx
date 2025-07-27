import React from "react";
import { useRecipeStore } from "../store/recipeStore";

const FavoritesList = () => {
  const { favorites, recipes, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    recipes: state.recipes,
    removeFavorite: state.removeFavorite,
  }));

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove Favorite
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
