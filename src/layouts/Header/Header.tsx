import { FC } from 'react'
// styles
import styles from "./index.module.css"

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.textHeading}>Recipe App</h1>
        </header>
    )
}

export default Header
