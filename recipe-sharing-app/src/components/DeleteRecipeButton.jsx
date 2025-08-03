import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();
  const btnStyle = {
    color: "white",
    backgroundColor: "orangered",
  };

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/list");
  };

  return (
    <button style={btnStyle} onClick={handleDelete}>
      Delete
    </button>
  );
}
