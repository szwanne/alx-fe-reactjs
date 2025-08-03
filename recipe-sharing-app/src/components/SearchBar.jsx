import { useRecipeStore } from "./recipeStore";
import { useEffect } from "react";

export default function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const searchBarStyle = {
    width: "688px",
    padding: "16px",
    border: "1px solid hsla(0, 0%, 100%, 0.45)",
    borderRadius: "10px",
    outline: "none",
    fontSize: "1rem",
    boxSizing: "border-box",
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <input
      style={searchBarStyle}
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
    />
  );
}
