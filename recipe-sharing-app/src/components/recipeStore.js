import { create } from "zustand";
import { persist } from "zustand/middleware";

// recommendations

export const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      searchTerm: "",
      setSearchTerm: (term) => set({ searchTerm: term }),
      filteredRecipes: [],
      filterRecipes: () =>
        set((state) => ({
          filteredRecipes: state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
        })),
      favorites: [],
      addFavorite: (recipeId) =>
        set((state) => ({ favorites: [...state.favorites, recipeId] })),
      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== recipeId),
        })),
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),
      updateRecipe: (id, updatedData) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === id ? { ...recipe, ...updatedData } : recipe
          ),
        })),
      setRecipes: (recipes) => set({ recipes }),
    }),
    {
      name: "recipe-storage", // key used in localStorage
    }
  )
);
