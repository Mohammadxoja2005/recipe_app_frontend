import { FC, useState, ChangeEvent, useEffect } from 'react'
// styles
import styles from './index.module.css';
// react-router-dom
import { useParams } from 'react-router-dom';
// react-redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneRecipe, editRecipe } from '../../../store/features/recipeSlice';
import { Dispatch } from 'redux';
// types
import { editRecipeType } from '../../../types/Recipe';

const RecipeForm: FC = () => {
    const { id } = useParams();
    const dispatch: Dispatch<any> = useDispatch();

    const [idEdit, setIdEdit] = useState<number>(0)
    const [name, setName] = useState<string>('...');
    const [description, setDescription] = useState<string>('...');
    const [image, setImage] = useState<string>('...');
    const [cookTime, setCookTime] = useState<string>('...');
    const [ingredients, setIngredients] = useState<string>('...');

    useEffect(() => {
        if (!id) return;
        dispatch(fetchOneRecipe(id))
    }, [])

    const recipeSingleData: Array<editRecipeType> = useSelector((state: any) => state.recipe.singleRecipe);
    const isLoading: boolean = useSelector((state: any) => state.recipe.isLoading);

    useEffect(() => {
        if (!recipeSingleData && !id) return;

        recipeSingleData.forEach((recipe) => {
            setIdEdit(recipe.id)
            setName(recipe.name)
            setDescription(recipe.description)
            setImage(recipe.img)
            setCookTime(recipe.cook_time)
            setIngredients(recipe.ingredients.join(","))
        })

    }, [recipeSingleData])

    console.log(ingredients)

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editRecipe({ id: idEdit, img: image, name, description, ingredients, cook_time: cookTime }));
    };

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
                    <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className={styles.input} />
                </div>

                {isLoading
                    ?
                    <button className={styles.button}>Changing Recipe...</button>
                    :
                    <button type="submit" className={styles.button}>Edit Recipe</button>
                }
            </form>
        </div>
    )
}

export default RecipeForm