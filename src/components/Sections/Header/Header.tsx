import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>emanuelezaccaria</h1>

            <nav className={styles.nav} aria-label="Social media">
                <ul>
                    <li>
                        <a href="#github">GitHub</a>
                    </li>
                    <li>
                        <a href="#linkedin">LinkedIn</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;
