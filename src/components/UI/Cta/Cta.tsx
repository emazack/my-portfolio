import React from "react";
import styles from "./Cta.module.scss";
import Link from "next/link";

interface CtaProps {
    name: string;
    href: string;
}

const Cta = ({ name, href }: CtaProps) => {
    const isInternalAnchor = href.startsWith("#");

    return (
        <div className={styles.cta}>
            {isInternalAnchor ? (
                <a href={href} className={styles.button}>
                    {name}
                </a>
            ) : (
                <Link href={href} className={styles.button}>
                    {name}
                </Link>
            )}
        </div>
    );
};

export default Cta;
