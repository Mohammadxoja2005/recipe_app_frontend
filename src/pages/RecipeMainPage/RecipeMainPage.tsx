import { FC } from 'react'
// styles
// import styles from "./index.module.scss";

const RecipeAppMainPage = () => {
    const recipes = [
        {
            id: 1,
            image: 'https://example.com/recipe1.jpg',
            name: 'Recipe 1',
            cookTime: 30,
        },
        {
            id: 2,
            image: 'https://example.com/recipe2.jpg',
            name: 'Recipe 2',
            cookTime: 45,
        },
        // Add more recipes
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="py-6 bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-semibold text-gray-800">Recipe App</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1,2,3,4,5,6,7].map((recipe) => (
                        <div
                            // key={recipe.id}
                            className="bg-white shadow-md rounded-lg p-6"
                        >
                            <img
                                className="w-full h-48 object-cover rounded-t-lg mb-4"
                                // src={recipe.image}
                                // alt={recipe.name}
                            />
                            <h3 className="text-xl font-semibold text-gray-800">
                                {/* {recipe.name} */}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                {/* Cooking Time: {recipe.cookTime} minutes */}
                            </p>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                View Recipe
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="py-4 bg-white text-center">
                <p className="text-gray-600">© 2023 Recipe App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RecipeAppMainPage;