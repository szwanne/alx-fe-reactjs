import "../App.css";
import { useRecipeStore } from "./recipeStore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function EditRecipeForm() {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const navigate = useNavigate();

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
  const saveBtn = {
    backgroundColor: "hsl(157, 88%, 29%)",
  };

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    /* Populate the field with the existing recipe if it exists */
    if (recipe) {
      setFormData({ title: recipe.title, description: recipe.description });
    }
  }, [recipe]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipeId, formData);
    alert("Saved!");
    navigate("/list");
  };

  const { title, description } = formData;

  return (
    <div>
      <form onSubmit={handleSubmit} key={recipeId}>
        <input
          style={titleInput}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          style={DescInput}
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <br />
        <br />
        <button style={saveBtn} type="submit">
          Save
        </button>
        <br />
        <br />
      </form>
      <DeleteRecipeButton recipeId={recipeId} />
      &nbsp;&nbsp;
      <button onClick={() => navigate("/list")}>Cancel</button>
    </div>
  );
}
