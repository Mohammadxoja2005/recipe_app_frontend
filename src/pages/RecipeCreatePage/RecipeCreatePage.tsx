import { FC, useState, ChangeEvent } from 'react';
// styles
import styles from './index.module.css';

const RecipeCreatePage: FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [image, setImage] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Send the form data to the backend API
        // const formData = {
        //     name,
        //     description,
        //     image,
        //     cookTime,
        //     ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
        // };

        // Your API request logic here to send the formData to the backend
        // Example: axios.post('/api/recipes', formData)
    };

    return (
        <div className={styles.container}>
            <h2>Create Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label}>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.input}></textarea>
                </div>
                <div>
                    <label className={styles.label}>Image Upload:</label>
                    <input type="file" className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Cook Time:</label>
                    <input type="text" value={cookTime} onChange={(e) => setCookTime(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Ingredients (separated by comma):</label>
                    <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className={styles.input} />
                </div>
                <button type="submit" className={styles.button}>Create Recipe</button>
            </form>
        </div>
    );
};

export default RecipeCreatePage;