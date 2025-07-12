import React from "react";
import styles from "./Wall.module.scss";

const Wall = () => {
    return (
        <section className={styles.wall}>
            <div className={styles.container}>
                <div className={styles.box} >
                    <h2 className={styles.title}>
                        HTML
                    </h2>
                    <p className={styles.description}>
                        4 years of experience
                    </p>
                </div>
                <div className={styles.box} >
                    <h2 className={styles.title}>
                        HTML
                    </h2>
                    <p className={styles.description}>
                        4 years of experience
                    </p>
                </div>
                <div className={styles.box} >
                    <h2 className={styles.title}>
                        HTML
                    </h2>
                    <p className={styles.description}>
                        4 years of experience
                    </p>
                </div>
                <div className={styles.box} >
                    <h2 className={styles.title}>
                        HTML
                    </h2>
                    <p className={styles.description}>
                        4 years of experience
                    </p>
                </div>
                <div className={styles.box} >
                    <h2 className={styles.title}>
                        Accessibility
                    </h2>
                    <p className={styles.description}>
                        4 years of experience
                    </p>
                </div>
                <div className={styles.box} >
                    <h2 className={styles.title}>
                        Accessibility
                    </h2>
                    <p className={styles.description}>
                        4 years of experience
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Wall;
