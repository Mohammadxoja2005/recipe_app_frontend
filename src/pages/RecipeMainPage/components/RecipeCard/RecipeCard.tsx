import { FC, useEffect } from 'react'
// styles 
import styles from "./index.module.css";
// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipes, deleteRecipe } from '../../../../store/features/recipeSlice';
// types
import { Recipe } from '../../../../types/Recipe';
import { Dispatch } from 'redux';
// react-router-dom
import { useNavigate } from 'react-router-dom';

const RecipeCard: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();

    const sortOrder: string = useSelector((state: any) => state.recipe.recipeSortOrder);
    const searchInput: string = useSelector((state: any) => state.recipe.searchInput)

    useEffect(() => {
        dispatch(fetchAllRecipes({ sortOrder, searchInput }))
    }, [sortOrder, searchInput])

    const allRecipes: Array<Recipe> = useSelector((state: any) => state.recipe.allRecipes);
    const isLoading: boolean = useSelector((state: any) => state.recipe.isLoading);
    const isDeleteLoading: boolean = useSelector((state: any) => state.recipe.isDeleteLoading);

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
            {!isLoading ?
                allRecipes.map((recipe) => (
                    <div key={recipe.id} className={styles.recipeCard}>
                        <img
                            src={`${recipe.img}`}
                            alt={recipe.name}
                            className={styles.recipeImage}
                        />
                        <h2 className={styles.recipeName}>{recipe.name}</h2>
                        <p className={styles.recipeDetails}>
                            Time: {recipe.cook_time}

                        </p>
                        <button onClick={() => navigate(`/detail/${recipe.id}`)} className={styles.viewRecipeButton}>View Recipe</button>
                        <button onClick={() => navigate(`/edit/${recipe.id}`)} className={styles.viewRecipeButton}>Edit Recipe</button>
                        <button onClick={() => {
                            dispatch(deleteRecipe(recipe.id))
                        }} className={styles.deleteRecipeButton}>Delete Recipe</button>
                    </div>
                )) : <div>Loading...</div>}
        </div>
    )
}

export default RecipeCard