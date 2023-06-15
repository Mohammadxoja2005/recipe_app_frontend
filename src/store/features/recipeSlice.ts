import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// axios
import axios, { AxiosResponse } from "axios";
// types
import { Recipe, createRecipeType } from "../../types/Recipe";

export const fetchAllRecipes = createAsyncThunk<Array<Recipe>>('/recipes/fetch',
    async () => {
        const response: AxiosResponse<Array<Recipe>> = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/recipe`)
        return response.data;
    })

export const fetchOneRecipe = createAsyncThunk<Array<Recipe>, string>('/recipes/detail/fetch',
    async (id) => {
        const response: AxiosResponse<Array<Recipe>> = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/recipe/${id}`)
        return response.data;
    })

export const postRecipe = createAsyncThunk('/recipes/create',
    (data: createRecipeType) => {
        return axios.post(`${import.meta.env.VITE_BACKEND_URL}/recipe/create`, data)
    })

const initialState: { isLoading: boolean, allRecipes: Array<Recipe>, singleRecipe: Array<Recipe> }
    = {
    isLoading: false,
    allRecipes: [],
    singleRecipe: []
}

const recipe = createSlice({
    name: "recipe",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllRecipes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllRecipes.fulfilled, (state, action: PayloadAction<Array<Recipe>>) => {
            state.isLoading = false;
            state.allRecipes = action.payload;
        });
        builder.addCase(fetchAllRecipes.rejected, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchOneRecipe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchOneRecipe.fulfilled, (state, action: PayloadAction<Array<Recipe>>) => {
            state.isLoading = false;
            state.singleRecipe = action.payload;
        });
        builder.addCase(fetchOneRecipe.rejected, (state) => {
            state.isLoading = true;
        });

        builder.addCase(postRecipe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postRecipe.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(postRecipe.rejected, (state) => {
            state.isLoading = false;
        });
    }
})

export const { } = recipe.actions;
export default recipe.reducer;