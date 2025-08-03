import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleInput = {
    width: "650px",
    height: "56px",
    fontSize: "1.5rem",
  };
  const DescInput = {
    width: "650px",
    height: "400px",
    fontSize: "1.5rem",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={titleInput}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <br />
      <textarea
        style={DescInput}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />{" "}
      <br />
      <br />
      <button type="submit">Add Recipe</button>
      <br />
    </form>
  );
}
