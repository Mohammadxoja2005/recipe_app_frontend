import { createBrowserRouter } from "react-router-dom";
// pages
import RecipeMainPage from "../pages/RecipeMainPage/RecipeMainPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RecipeMainPage />

    }, 
    {
        path: "/detail",
        element: <RecipeDetailsPage />

    }
]) 