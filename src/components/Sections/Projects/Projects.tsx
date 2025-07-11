import React from "react";
import styles from "./Projects.module.scss";
import Cta from "@/components/UI/Cta";
import Image from "next/image";
import { projects } from "@/data/projects";

const Projects = () => {

    return (
        <section className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.introduction}>
                    <h2 className={styles.title}>Projects</h2>
                    <Cta
                        name="CONTACT ME"
                        href="#contact"
                    />
                </div>
                <ul className={styles.list}>
                    {projects.map((project, index) => (
                        <li className={styles.item} key={index}>
                            <div className={styles.imageContainer}>
                                <div className={styles.overlay}>
                                    <Cta
                                        name="VIEW PROJECT"
                                        href={project.live}
                                    />
                                    <Cta
                                        name="VIEW CODE"
                                        href={project.code}
                                    />
                                </div>
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    className={styles.image}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className={styles.name}>
                                {project.name}
                            </div>
                            <ul className={styles.technologies}>
                                {project.technologies.map((tech, i) => (
                                    <li className={styles.technology} key={i}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.links}>
                                <Cta
                                    name="VIEW PROJECT"
                                    href={project.live}
                                />
                                <Cta
                                    name="VIEW CODE"
                                    href={project.code}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
