'use client';

import React from "react";
import { motion } from "motion/react";
import styles from "./Projects.module.scss";
import Cta from "@/components/UI/Cta/Cta";
import Image from "next/image";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <h2 className={styles.title}>Projects</h2>
          <Cta name="CONTACT ME" href="#contact" />
        </div>

        <motion.ul
          className={styles.list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {projects.map((project, i) => (
            <motion.li
              key={i}
              className={styles.item}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show:   { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={styles.imageContainer}>
                <div className={styles.overlay}>
                  <Cta name="VIEW PROJECT" href={project.live} />
                  <Cta name="VIEW CODE" href={project.code} />
                </div>
                <Image
                  src={project.image}
                  alt={project.name}
                  className={styles.image}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className={styles.name}>{project.name}</div>
              <ul className={styles.technologies}>
                {project.technologies.map((tech, j) => (
                  <li className={styles.technology} key={j}>{tech}</li>
                ))}
              </ul>

              <div className={styles.links}>
                <Cta name="VIEW PROJECT" href={project.live} />
                <Cta name="VIEW CODE" href={project.code} />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;