import { useRecipeStore } from "./recipeStore";

export default function AddToFavoritesButton({ recipeId }) {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  return favorites.includes(recipeId) ? (
    <button onClick={() => removeFavorite(recipeId)}>
      Remove from Favorites
    </button>
  ) : (
    <button onClick={() => addFavorite(recipeId)}>Add to Favorites</button>
  );
}
