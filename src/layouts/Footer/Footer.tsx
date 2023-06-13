import { FC } from 'react'
// styles
import styles from "./index.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>&copy; 2023 Recipe App. All rights reserved.</p>
        </footer>
    )
}

export default Footer
