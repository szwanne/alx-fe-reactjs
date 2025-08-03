import { useRecipeStore } from "../store/recipeStore";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>🎯 Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
