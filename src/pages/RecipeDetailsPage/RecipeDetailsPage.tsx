import { FC } from 'react'
// styles
import styles from "./index.module.css"
// layouts
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
// components
import RecipeSingle from './components/RecipeSingle/RecipeSingle';

const RecipeDetailPage: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <RecipeSingle />
            <Footer />
        </div>
    );
};

export default RecipeDetailPage;