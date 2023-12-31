import { FC, useState, ChangeEvent } from 'react'
// styles
import styles from "./index.module.css"
// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { postRecipe } from '../../../../store/features/recipeSlice';
import { Dispatch } from "redux";
// react-router-dom
import { useNavigate } from 'react-router-dom';

const RecipeForm: FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const navigate = useNavigate(); 

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [cookTime, setCookTime] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(postRecipe({ img: image, name, description, ingredients, cook_time: cookTime }))

        if (!isLoading) {
            setName('')
            setImage('')
            setDescription('')
            setCookTime('')
            setIngredients('')
        }
    };

    const isLoading: boolean = useSelector((state: any) => state.recipe.isLoading);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.label}>Name:</label>
                    <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Description:</label>
                    <textarea required value={description} onChange={(e) => setDescription(e.target.value)} className={styles.input}></textarea>
                </div>
                <div>
                    <label className={styles.label}>Image URL:</label>
                    <input required type="text" value={image} onChange={(e) => setImage(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Cook Time:</label>
                    <input required type="text" value={cookTime} onChange={(e) => setCookTime(e.target.value)} className={styles.input} />
                </div>
                <div>
                    <label className={styles.label}>Ingredients (separated by comma):</label>
                    <input required placeholder='salt, water, ...' type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className={styles.input} />
                </div>

                {isLoading ?
                    <button className={styles.button}>Sending data...</button>
                    :
                    <>
                        <button type="submit" className={styles.button}>Create Recipe</button>
                        <button onClick={() => navigate('/')}  className={styles.button}>Go to Main Page</button>
                    </>

                }

            </form>
        </div>
    )
}

export default RecipeForm