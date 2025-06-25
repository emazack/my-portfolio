import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.title}>
                        Nice to meet you! I'm 
                        <span className={styles.highlight}>
                            Emanuele
                        </span>
                        .
                    </h1>
                    <p className={styles.description}>
                        Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.
                    </p>
                    <div className={styles.cta}>
                        <a>
                            CONTACT ME
                        </a>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image
                        src="/foto.png"
                        alt="Hero Image"
                        width={445}
                        height={720}
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
