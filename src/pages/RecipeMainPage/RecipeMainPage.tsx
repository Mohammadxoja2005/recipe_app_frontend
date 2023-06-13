import { FC, useState, ChangeEvent } from 'react'
// styles
// import styles from "./index.module.scss";


const RecipeAppMainPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    // Sample recipe data
    // const recipes = [
    //   { id: 1, name: 'Recipe 1', cookTime: 30 },
    //   { id: 2, name: 'Recipe 2', cookTime: 45 },
    //   { id: 3, name: 'Recipe 3', cookTime: 60 },
    // ];

    return (
        <div className="container mx-auto px-4">
            <header className="py-4">
                <h1 className="text-2xl font-bold">Recipe App</h1>
            </header>

            <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-400 rounded px-4 py-2 w-full sm:w-auto"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    <select
                        className="border border-gray-400 rounded px-4 py-2"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="">Sort by</option>
                        <option value="name">Name</option>
                        <option value="cookTime">Cooking Time</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7].map((recipe) => (
                    <div
                        //   key={recipe.id}
                        className="border border-gray-400 rounded p-4"
                    >
                        <img
                            src="recipe-image.jpg"
                            // alt={recipe.name}
                            className="w-full h-48 object-cover mb-4"
                        />
                        {/* <h2 className="text-xl font-bold mb-2">{recipe.name}</h2> */}
                        <p className="text-gray-600 mt-2">
                            {/* Cooking Time: {recipe.cookTime} minutes */}
                        </p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            View Recipe
                        </button>
                    </div>
                ))}
            </div>

            <footer className="py-4 bg-white text-center">
                <p className="text-gray-600">© 2023 Recipe App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RecipeAppMainPage;