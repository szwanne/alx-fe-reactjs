import React, { useEffect, useState } from "react";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch data.json from public folder
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error loading the JSON file:", err));
  }, []);

  return (
    <div>
      <h1 className="my-8 font-bold text-center">Recipe Sharing Platform</h1>
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-20 gap-10">
          {users.map((user) => (
            <li
              className="w-80 bg-white rounded-xl shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
              key={user.id}
            >
              <p className="text-center font-bold md:w-1/2 md:text-center md:font-bold md:text-xl py-4">
                {user.title}
              </p>
              <img
                className="w-80 h-60 rounded-md md:w-1/2 md:h-1/2"
                src={user.image}
                alt={user.title}
              />
              <p className="text-center w-auto my-4 md:text-sm md:w-1/2">
                {user.summary}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
