import React, { useEffect, useState } from "react";
import data from "../data.json"; // adjust the path if data.json is in src/
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setUsers] = useState([]);

  useEffect(() => {
    // Load data directly from imported JSON
    setUsers(data);
  }, []);

  return (
    <div>
      <h1 className="my-8 font-bold text-center text-2xl">
        Recipe Sharing Platform
      </h1>
      {recipes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-20 gap-10 justify-items-center">
          {recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <li className="w-80 bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                <p className="text-center font-bold text-lg md:text-xl py-4">
                  {recipe.title}
                </p>
                <img
                  className="w-80 h-60 object-cover rounded-md"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <p className="text-center my-4 text-gray-600 text-sm">
                  {recipe.summary}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
