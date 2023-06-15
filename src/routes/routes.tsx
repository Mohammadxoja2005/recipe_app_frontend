import { createBrowserRouter } from "react-router-dom";
// pages
import RecipeMainPage from "../pages/RecipeMainPage/RecipeMainPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage";
import RecipeCreatePage from "../pages/RecipeCreatePage/RecipeCreatePage";
import RecipeEditPage from "../pages/RecipeEditPage/RecipeEditPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RecipeMainPage />

    },
    {
        path: "/detail/:id",
        element: <RecipeDetailsPage />
    },
    {
        path: "/create",
        element: <RecipeCreatePage />
    },
    {
        path: "/edit",
        element: <RecipeEditPage />
    }
]) 