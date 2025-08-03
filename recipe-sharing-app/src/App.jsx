import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";

export const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <AddRecipeForm /> },
      { path: "list", element: <RecipeList /> },
      { path: "edit/:id", element: <EditRecipeForm /> },
      { path: "recipe/:id", element: <RecipeDetails /> },
      { path: "favorites", element: <FavoritesList /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(Routes);
export default router;
