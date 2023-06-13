import { FC } from 'react'
// styles 
import styles from "./index.module.css";

const RecipeCard: FC = () => {

    const recipes = [
        { id: 1, name: 'Recipe 1', cookTime: 30 },
        { id: 2, name: 'Recipe 2', cookTime: 45 },
        { id: 3, name: 'Recipe 3', cookTime: 60 },
    ];

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
            {recipes.map((recipe) => (
                <div key={recipe.id} className={styles.recipeCard}>
                    <img
                        src="recipe-image.jpg"
                        alt={recipe.name}
                        className={styles.recipeImage}
                    />
                    <h2 className={styles.recipeName}>{recipe.name}</h2>
                    <p className={styles.recipeDetails}>
                        Time: {recipe.cookTime} minutes
                    </p>
                    <button className={styles.viewRecipeButton}>View Recipe</button>
                </div>
            ))}
        </div>
    )
}

export default RecipeCard