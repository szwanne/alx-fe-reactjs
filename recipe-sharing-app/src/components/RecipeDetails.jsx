import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToFavoritesButton from "./AddToFavoritesButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  return (
    <div key={recipe.id}>
      <em>{recipe.id}</em>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipe.id} />
      &nbsp;&nbsp;
      <Link to={`/edit/${recipe.id}`}>
        <button>Edit recipe</button>
      </Link>
      &nbsp;&nbsp;
      <AddToFavoritesButton recipeId={recipe.id} />
    </div>
  );
}
