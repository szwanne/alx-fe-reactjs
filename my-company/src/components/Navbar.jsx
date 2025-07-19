import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link to="" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ padding: "10px" }}>
        About
      </Link>
      <Link to="/services" style={{ padding: "10px" }}>
        {" "}
        Services
      </Link>
      <Link to="contacts" style={{ padding: "10px" }}>
        Contacts
      </Link>
    </nav>
  );
}

export default Navbar;
