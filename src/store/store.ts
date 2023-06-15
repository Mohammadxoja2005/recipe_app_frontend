import { configureStore } from "@reduxjs/toolkit";
// slices
import recipeSlice from "./features/recipeSlice";

export const store = configureStore({
    reducer: {
        recipe: recipeSlice
    }
})

export default store;