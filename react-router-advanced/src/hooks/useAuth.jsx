import { useState, useEffect } from "react";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("authenticated") === "true";
    setAuthenticated(isAuth);
  }, []);

  return authenticated;
}
