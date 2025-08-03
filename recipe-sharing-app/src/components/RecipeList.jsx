import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AddToFavoritesButton from "./AddToFavoritesButton";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  const recipeContainer = {
    border: "1px solid hsla(0, 0%, 100%, 0.45)",
    borderRadius: "10px",
    padding: "1rem",
    marginTop: "1rem",
    width: "650px",
    fontSize: "1rem",
  };

  return (
    <div>
      <SearchBar />
      {recipesToDisplay.length > 0 ? (
        recipesToDisplay.map((recipe) => (
          <div style={recipeContainer} key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <DeleteRecipeButton recipeId={recipe.id} />
            &nbsp;&nbsp;
            <Link to={`/edit/${recipe.id}`}>
              <button>Edit recipe</button>
            </Link>
            &nbsp;&nbsp;
            <Link to={`/recipe/${recipe.id}`}>
              <button>View details</button>
            </Link>
            <br />
            <br />
            <AddToFavoritesButton recipeId={recipe.id} />
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}
