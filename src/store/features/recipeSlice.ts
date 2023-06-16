import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// axios
import axios, { AxiosResponse } from "axios";
// types
import { Recipe, createRecipeType, editRecipeType } from "../../types/Recipe";
import { CommentsType, CreateCommentsType } from "../../types/Comments";

export const fetchAllRecipes = createAsyncThunk<Array<Recipe>, { sortOrder: string, searchInput: string }>('/recipes/fetch',
    async ({ sortOrder, searchInput }) => {
        const response: AxiosResponse<Array<Recipe>> = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/recipe/search?q=${searchInput}&&order=${sortOrder}`)
        return response.data;
    })

export const fetchAllCommments = createAsyncThunk('/comments/fetch',
    async (id: string) => {
        const response: AxiosResponse<Array<CommentsType>> = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/comment/${id}`)
        return response.data;
    })

export const postCommment = createAsyncThunk('/comments/create',
    async (data: CreateCommentsType) => {
        return axios.post(`${import.meta.env.VITE_BACKEND_URL}/comment/create/${data.id}`, data)
    })

export const fetchOneRecipe = createAsyncThunk<Array<Recipe>, string>('/recipes/detail/fetch',
    async (id) => {
        console.log(id)
        const response: AxiosResponse<Array<Recipe>> = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/recipe/${id}`)
        console.log('response', response)
        return response.data;
    })

export const postRecipe = createAsyncThunk('/recipes/create',
    (data: createRecipeType) => {
        return axios.post(`${import.meta.env.VITE_BACKEND_URL}/recipe/create`, data)
    })

export const editRecipe = createAsyncThunk('/recipes/edit',
    (data: editRecipeType) => {
        return axios.put(`${import.meta.env.VITE_BACKEND_URL}/recipe/edit/${data.id}`, data)
    })

export const deleteRecipe = createAsyncThunk('/recipes/delete',
    (id: number) => {
        console.log(id);
        return axios.delete(`${import.meta.env.VITE_BACKEND_URL}/recipe/delete/${id}`).then((response) => {
            console.log(response)
        })
    })

const initialState: {
    isLoading: boolean,
    isLoadingEditData: boolean,
    isCommentLoading: boolean,
    recipeSortOrder: string,
    searchInput: string,
    allRecipes: Array<Recipe>,
    singleRecipe: Array<Recipe>,
    comments: Array<CommentsType>
}
    = {
    isLoading: false,
    isLoadingEditData: false,
    isCommentLoading: false,
    recipeSortOrder: "increase",
    searchInput: "",
    allRecipes: [],
    singleRecipe: [],
    comments: []
}

const recipe = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        changeSortOrder(state, action) {
            state.recipeSortOrder = action.payload
        },

        setRecipeSearch(state, action) {
            state.searchInput = action.payload
        }
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

        builder.addCase(editRecipe.pending, (state) => {
            state.isLoadingEditData = true;
        });
        builder.addCase(editRecipe.fulfilled, (state) => {
            state.isLoadingEditData = false;
        });
        builder.addCase(editRecipe.rejected, (state) => {
            state.isLoadingEditData = false;
        });


        builder.addCase(deleteRecipe.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteRecipe.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(deleteRecipe.rejected, (state) => {
            state.isLoading = false;
        });


        builder.addCase(fetchAllCommments.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllCommments.fulfilled, (state, action: PayloadAction<Array<CommentsType>>) => {
            state.isLoading = false;
            state.comments = action.payload
        });
        builder.addCase(fetchAllCommments.rejected, (state) => {
            state.isLoading = false;
        });


        builder.addCase(postCommment.pending, (state) => {
            state.isCommentLoading = true;
        });
        builder.addCase(postCommment.fulfilled, (state) => {
            state.isCommentLoading = false;
        });
        builder.addCase(postCommment.rejected, (state) => {
            state.isCommentLoading = false;
        });

    }
})

export const { changeSortOrder, setRecipeSearch } = recipe.actions;
export default recipe.reducer;