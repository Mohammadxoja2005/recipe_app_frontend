import { FC } from 'react'
// styles
import styles from "./index.module.css";
// layouts
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
// components
import ReciperFIlter from './components/ReciperFilter/ReciperFIlter';
import RecipeCard from './components/RecipeCard/RecipeCard';

const RecipeAppMainPage: FC = () => {

    // Sample recipe data
    return (
        <div className={styles.container}>
            <Header />

            <ReciperFIlter />

            <RecipeCard />

            <Footer />
        </div>
    );
};

export default RecipeAppMainPage;