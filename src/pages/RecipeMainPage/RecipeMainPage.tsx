import { FC, useState, ChangeEvent } from 'react'
// styles
import styles from "./index.module.css";

const RecipeAppMainPage: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    // Sample recipe data
    const recipes = [
        { id: 1, name: 'Recipe 1', cookTime: 30 },
        { id: 2, name: 'Recipe 2', cookTime: 45 },
        { id: 3, name: 'Recipe 3', cookTime: 60 },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.textHeading}>Recipe App</h1>
            </header>

            <div className={`flex flex-wrap justify-between items-center mb-4`}>
                <div className={`w-full sm:w-auto mb-4 sm:mb-0`}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    <select
                        className={styles.selectInput}
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">Sort by</option>
                        <option value="name">Name</option>
                        <option value="cookTime">Cooking Time</option>
                    </select>
                </div>
            </div>

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

            <footer className={styles.footer}>
                <p className={styles.footerText}>&copy; 2023 Recipe App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RecipeAppMainPage;