// src/components/SearchBar.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
