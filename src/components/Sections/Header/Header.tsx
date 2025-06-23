import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>emanuelezaccaria</h1>

            <nav className={styles.nav} aria-label="Social media">
                <ul>
                    <li>
                        <a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer">
                            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/tuo-username" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedin.svg" alt="Linkedin" width={24} height={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;
