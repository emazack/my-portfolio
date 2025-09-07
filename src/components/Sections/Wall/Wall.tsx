'use client';

import React from "react";
import { motion } from "motion/react";
import styles from "./Wall.module.scss";
import { skills, Skill } from "@/data/skills";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Wall = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <section className={styles.wall}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ 
                    once: true,
                    amount: 0.6
                }}
            >
                {skills.map(({ name, startYear }: Skill) => (
                    <motion.div
                        key={name}
                        className={styles.box}
                        variants={itemVariants}
                        whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 220 } }}
                    >
                        <h3 className={styles.title}>{name}</h3>
                        <p className={styles.description}>{currentYear - startYear} years of experience</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
};

export default Wall;
