import React, { useEffect } from "react";
import { useRecipeStore } from "../store/recipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(
    (state) => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
    })
  );

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add favorites to get started!</p>
      ) : (
        recommendations.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px dashed #aaa",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
