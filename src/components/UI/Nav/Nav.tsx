import React from "react";
import styles from "./Nav.module.scss";
import { handleNightModeToggle } from "@/utils/utils";

interface NavProps {
    showThemeToggle?: boolean;
}

const Nav: React.FC<NavProps> = ({ showThemeToggle = true }) => (
    <nav className={styles.nav} aria-label="Social media">
        <ul className={styles.navLinks}>
            <li>
                <a
                    href="https://github.com/emazack"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 20 22"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051-.799-.227-1.655-.341-2.505-.345-.85.004-1.705.118-2.503.345-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.64.718-1.031 1.632-1.031 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.862 18.624 0 14.782 0 10.253 0 4.59 4.478 0 10 0z" />
                    </svg>
                </a>
            </li>

            <li>
                <a
                    href="https://www.linkedin.com/in/emazack"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M22 3.47V20.53c0 .39-.15.76-.43 1.04a1.47 1.47 0 0 1-1.04.43H3.47a1.47 1.47 0 0 1-1.04-.43A1.47 1.47 0 0 1 2 20.53V3.47c0-.39.15-.76.43-1.04A1.47 1.47 0 0 1 3.47 2h17.06c.39 0 .76.15 1.04.43.28.28.43.65.43 1.04ZM7.88 9.65H4.94v9.41h2.94V9.65Zm.26-3.24a1.41 1.41 0 1 0-2.82 0 1.41 1.41 0 0 0 2.82 0ZM19.06 13.34c0-2.83-1.8-3.93-3.59-3.93a4.03 4.03 0 0 0-3.05 1.52h-.08V9.65H9.65v9.41h2.94v-5c-.04-.51.13-1.02.45-1.41.32-.4.8-.65 1.31-.7h.11c.94 0 1.64.59 1.64 2.07v5.04h2.94v-5.62Z" />
                    </svg>
                </a>
            </li>

            {showThemeToggle && (
                <li>
                    <button onClick={handleNightModeToggle} aria-label="Toggle theme" type="button">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2V4c4.418 0 8 3.582 8 8s-3.582 8-8 8z" />
                        </svg>
                    </button>
                </li>
            )}
        </ul>
    </nav>
);

export default Nav;
