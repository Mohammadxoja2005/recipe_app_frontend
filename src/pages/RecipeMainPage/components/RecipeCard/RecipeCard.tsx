import { FC, useEffect } from 'react'
// styles 
import styles from "./index.module.css";
// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipes } from '../../../../store/features/recipeSlice';
// types
import { Recipe } from '../../../../types/Recipe';
import { Dispatch } from 'redux';
// react-router-dom
import { useNavigate } from 'react-router-dom';

const RecipeCard: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllRecipes())
    }, [])

    const allRecipes: Array<Recipe> = useSelector((state: any) => state.recipe.allRecipes);
    const isLoading: boolean = useSelector((state: any) => state.recipe.isLoading);

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
                    </div>
                )) : <div>Loading...</div>}
        </div>
    )
}

export default RecipeCard