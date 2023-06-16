import { FC, ChangeEvent } from 'react'
// styles
import styles from "./index.module.css";
// react-router-dom
import { useNavigate } from 'react-router-dom';
// react-redux
import { useDispatch } from 'react-redux';
import { changeSortOrder, setRecipeSearch } from '../../../../store/features/recipeSlice';
import { Dispatch } from 'redux';
// lodash
import { debounce } from 'lodash';

const ReciperFIlter: FC = () => {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();

    const debouncedSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRecipeSearch(e.target.value));
    }, 500);

    return (

        <div className={`flex flex-wrap justify-between items-center mb-4`}>
            <div className={`w-full sm:w-auto mb-4 sm:mb-0`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    onChange={debouncedSearch}
                />
            </div>
            <div>
                <button onClick={() => navigate(`/create`)} className={styles.viewRecipeButton}>Create Recipe</button>

                <select
                    className={styles.selectInput}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(changeSortOrder(e.target.value))}
                >
                    <option value="increase">increasing order</option>
                    <option value="decrease">descending order</option>
                </select>
            </div>
        </div>
    )
}

export default ReciperFIlter