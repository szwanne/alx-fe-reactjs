function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto ny-20 rounded-lg shadow-lg">
      <img
        class="rounded-full w-36 h-auto mx-auto"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
        alt="User"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
