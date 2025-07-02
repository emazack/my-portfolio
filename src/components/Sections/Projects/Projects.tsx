import React from "react";
import styles from "./Projects.module.scss";
import Cta from "@/components/UI/Cta";

const Projects = () => {
    return (
        <section className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Projects
                </h2>
                <Cta />
                <ul className={styles.list}>
                    <li className={styles.item}>
                        
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.projectTitle}>Project 2</h3>
                        <p className={styles.projectDescription}>Description of project 2.</p>
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.projectTitle}>Project 3</h3>
                        <p className={styles.projectDescription}>Description of project 3.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Projects;
