import React from "react";
import styles from "./Projects.module.scss";
import Cta from "@/components/UI/Cta";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            name: "DESIGN PORTFOLIO",
            technologies: ["HTML", "CSS"],
            image: "/progetto.png",
            github: "https://github.com/tuo-utente/design-portfolio"
        },
        {
            name: "APP LANDING PAGE",
            technologies: ["Next.js", "SCSS"],
            image: "/progetto.png",
            github: "https://github.com/tuo-utente/app-landing-page"
        },
        {
            name: "E-COMMERCE UI",
            technologies: ["React", "Tailwind"],
            image: "/progetto.png",
            github: "https://github.com/tuo-utente/ecommerce-ui"
        },
        {
            name: "BLOG TEMPLATE",
            technologies: ["TypeScript", "Next.js"],
            image: "/progetto.png",
            github: "https://github.com/tuo-utente/blog-template"
        },
        {
            name: "PORTFOLIO V1",
            technologies: ["HTML", "CSS", "JS"],
            image: "/progetto.png",
            github: "https://github.com/tuo-utente/portfolio-v1"
        },
        {
            name: "DASHBOARD UI",
            technologies: ["React", "SCSS"],
            image: "/progetto.png",
            github: "https://github.com/tuo-utente/dashboard-ui"
        }
    ];

    return (
        <section className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.introduction}>
                    <h2 className={styles.title}>Projects</h2>
                    <Cta />
                </div>
                <ul className={styles.list}>
                    {projects.map((project, index) => (
                        <li className={styles.item} key={index}>
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={546}
                                    height={400}
                                    className={styles.image}
                                />
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
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
