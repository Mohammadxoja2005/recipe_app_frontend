import { FC } from 'react';
// styles
import styles from './index.module.css';
// layouts
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
// components
import RecipeForm from './components/RecipeForm/RecipeForm';

const RecipeCreatePage: FC = () => {

    return (
        <div className={styles.container}>
            <Header />
            <RecipeForm />
            <Footer />
        </div>
    );
};

export default RecipeCreatePage;