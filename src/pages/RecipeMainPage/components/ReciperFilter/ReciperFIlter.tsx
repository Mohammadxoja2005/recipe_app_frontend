import { FC, useState, ChangeEvent } from 'react'
// styles
import styles from "./index.module.css";
// react-router-dom
import { useNavigate } from 'react-router-dom';
// react-redux
import { useDispatch } from 'react-redux';
import { changeSortOrder } from '../../../../store/features/recipeSlice';
import { Dispatch } from 'redux';

const ReciperFIlter: FC = () => {
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    // const [sortOption, setSortOption] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // useEffect(() => {
    //     navigate('/increasing')
    // }, [navigate])

    // const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setSortOption(event.target.value);
    // };

    return (

        <div className={`flex flex-wrap justify-between items-center mb-4`}>
            <div className={`w-full sm:w-auto mb-4 sm:mb-0`}>
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div>
                <button onClick={() => navigate(`/create`)} className={styles.viewRecipeButton}>Create Recipe</button>

                <select
                    className={styles.selectInput}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(changeSortOrder(e.target.value))}
                >
                    {/* <option value="">Sort by</option> */}
                    <option value="increase">increasing order</option>
                    <option value="decrease">descending order</option>
                </select>
            </div>
        </div>
    )
}

export default ReciperFIlter