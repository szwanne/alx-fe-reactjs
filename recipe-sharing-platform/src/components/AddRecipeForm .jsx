import React, { useState } from "react";

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate inputs
  const validate = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim())
      newErrors.steps = "Preparation steps are required";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      // reset form
      setFormData({ title: "", ingredients: "", steps: "" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Submit a New Recipe
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="4"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="List ingredients, one per line"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="6"
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Describe preparation steps"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transform hover:scale-105 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
