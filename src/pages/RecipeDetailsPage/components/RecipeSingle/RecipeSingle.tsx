import { FC } from 'react'
// styles
import styles from "./index.module.css"; 

const RecipeSingle: FC = () => {
    return (
        <div>
            <img src={'recipe.img'} alt={'recipe.name'} className={styles.image} />
            <h2 className={styles.name}>{'recipe.name'}</h2>
            <p className={styles.description}>{'recipe.description'}</p>
            <div className={styles.ingredients}>
                <h3>Ingredients:</h3>
                <ul>
                    {/* {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))} */}
                </ul>
            </div>
            <p className={styles.cookTime}>Cook Time: {'recipe.cook_time'}</p>
        </div>
    )
}

export default RecipeSingle