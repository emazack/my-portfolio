import React from "react";
import styles from "./Loader.module.scss";
import { motion } from "motion/react"

const Loader: React.FC = () => (
    <div className={styles.container}>
        <motion.div
            className={styles.spinner}
            animate={{ rotate: 360 }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    </div>
)

export default Loader

