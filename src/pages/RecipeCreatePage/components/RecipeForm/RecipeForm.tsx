import { FC, useState, ChangeEvent } from 'react'
// styles
import styles from "./index.module.css"
// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { postRecipe } from '../../../../store/features/recipeSlice';
import { Dispatch } from "redux";

const RecipeForm: FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [cookTime, setCookTime] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(postRecipe({ img: image, name, description, ingredients, cook_time: cookTime }))
    };

    const isLoading: boolean = useSelector((state: any) => state.recipe.isLoading);

    return (
        <div>
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
                    <label className={styles.label}>Image URL:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Cook Time:</label>
                    <input type="text" value={cookTime} onChange={(e) => setCookTime(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Ingredients (separated by comma):</label>
                    <input placeholder='salt, water, ...' type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className={styles.input} />
                </div>

                {isLoading ?
                    <button className={styles.button}>Sending data...</button>
                    :
                    <button type="submit" className={styles.button}>Create Recipe</button>
                }

            </form>
        </div>
    )
}

export default RecipeForm