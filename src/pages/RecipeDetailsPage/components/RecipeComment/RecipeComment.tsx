import { FC, useEffect, useState } from 'react';
// styles
import styles from "./index.module.css"

const RecipeComment: FC = () => {
    // const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    // const handleCommentSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (comment.trim() !== '') {
    //         dispatch(postComment({ recipeId, comment }));
    //         setComment('');
    //     }
    // };

    return (
        <form className={styles.commentForm}>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className={styles.commentInput}
            />
            <button type="submit" className={styles.commentSubmitBtn}>
                Submit
            </button>
        </form>
    );
};

export default RecipeComment