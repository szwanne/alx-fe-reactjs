import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>This resource does not exist</h1>
      <Link to={"/"}>
        <button>Go back home</button>
      </Link>
    </div>
  );
}
