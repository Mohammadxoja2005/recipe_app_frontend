import { FC, useState, ChangeEvent } from 'react';
// styles
import styles from "./index.module.css"
// react-router-dom
import { useParams } from 'react-router-dom';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { postCommment } from '../../../../store/features/recipeSlice';
import { Dispatch } from "redux"

const RecipeComment: FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { id } = useParams();
    const [comment, setComment] = useState('');

    const createComment = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!id) return;

        dispatch(postCommment({ id, commentToRecipe: comment }))
    }

    const isCommentLoading = useSelector((state: any) => state.recipe.isCommentLoading);

    return (
        <form className={styles.commentForm} onSubmit={createComment}>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className={styles.commentInput}
                required
            />
            {isCommentLoading ?
                <button className={styles.commentSubmitBtn}>
                    Posting...
                </button>
                :
                <button type="submit" className={styles.commentSubmitBtn}>
                    Post comment
                </button>
            }
        </form>
    );
};

export default RecipeComment