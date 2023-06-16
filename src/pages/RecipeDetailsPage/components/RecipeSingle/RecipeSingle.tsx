import { FC, useEffect } from 'react'
// styles
import styles from "./index.module.css";
// redux-toolkit
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneRecipe, fetchAllCommments } from '../../../../store/features/recipeSlice';
// types
import { Recipe } from '../../../../types/Recipe';
import { CommentsType } from '../../../../types/Comments';
import { Dispatch } from 'redux';
// react-router
import { useParams } from 'react-router-dom';
// components
import RecipeComment from '../RecipeComment/RecipeComment';

const RecipeSingle: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        dispatch(fetchOneRecipe(id))
    }, [])

    const isCommentLoading: boolean = useSelector((state: any) => state.recipe.isCommentLoading);
    const singleRecipe: Array<Recipe> = useSelector((state: any) => state.recipe.singleRecipe)
    const isLoading: boolean = useSelector((state: any) => state.recipe.isLoading);
    const comments: Array<CommentsType> = useSelector((state: any) => state.recipe.comments)

    useEffect(() => {
        if (!id) return;

        dispatch(fetchAllCommments(id))

    }, [isCommentLoading])


    return (
        <>
            {!isLoading ?
                singleRecipe.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <img src={`${recipe.img}`} alt={'recipe.name'} className={styles.image} />
                            <h2 className={styles.name}>{recipe.name}</h2>
                            <p className={styles.description}>{recipe.description}</p>
                            <div className={styles.ingredients}>
                                <h3>Ingredients:</h3>
                                <ul>
                                    {
                                        recipe.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <p className={styles.cookTime}>Cook Time: {recipe.cook_time}</p>
                            <RecipeComment />

                            <div className={styles.comments}>
                                <h3 className={`mb-4`}>Comments:</h3>
                                {comments.length > 0 ? (
                                    [...comments].reverse().map((comment) => (
                                        <div key={comment.id} className={styles.comment}>
                                            <p>{comment.comment}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No comments yet.</p>
                                )}
                            </div>
                        </div>

                    )
                })
                : <div>Loading...</div>}

        </>
    )
}

export default RecipeSingle