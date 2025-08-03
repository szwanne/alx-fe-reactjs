import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Layout() {
  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    backgroundColor: "hsl(0, 0%, 20%)",
    padding: "1.5rem",
    borderRadius: "10px",
    justifyContent: "space-around",
  };

  const linkStyle = {
    color: "white",
  };

  return (
    <div>
      <nav>
        <ul style={ulStyle}>
          <li>
            <Link style={linkStyle} to={"/list"}>
              Recipe list
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to={""}>
              Add a recipe
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to={"/favorites"}>
              My Favorites
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
