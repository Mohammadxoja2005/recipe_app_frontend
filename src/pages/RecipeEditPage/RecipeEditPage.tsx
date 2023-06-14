import { FC } from 'react'
// layouts
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
// components
import RecipeForm from './RecipeForm/RecipeForm'
// styles
import styles from "./index.module.css"

const RecipeEditPage: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <RecipeForm />
            <Footer />
        </div>
    )
}

export default RecipeEditPage