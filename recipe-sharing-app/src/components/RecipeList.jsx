// src/components/RecipeList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const { filteredRecipes, recipes, searchTerm } = useRecipeStore();

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
