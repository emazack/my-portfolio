import React from "react";
import styles from "./Loader.module.scss";
import { motion } from "motion/react"

const Loader: React.FC = () => (
    <div className={styles.container} role="status" aria-live="polite">
        <motion.div
            className={styles.spinner}
            aria-hidden="true"
            tabIndex={-1}
            animate={{ rotate: 360 }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
            }}
        />
        <span style={{position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0}}>Loading...</span>
    </div>
)

export default Loader

