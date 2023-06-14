import { FC, useState, ChangeEvent } from 'react'
// styles
import styles from "./index.module.css";

const ReciperFIlter: FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

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
                <select
                    className={styles.selectInput}
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="">Sort by</option>
                    <option value="name">Name</option>
                    <option value="cookTime">Cooking Time</option>
                </select>
            </div>
        </div>
    )
}

export default ReciperFIlter