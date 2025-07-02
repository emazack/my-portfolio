import React from "react";
import styles from "./Cta.module.scss";

const Cta = () => {
    return (
        <div className={styles.cta}>
            <a href="#contact" className={styles.button}>
                CONTACT ME
            </a>
        </div>
    )
};

export default Cta;
