import React from "react";
import styles from "./Footer.module.scss";
import Nav from "@/components/UI/Nav/Nav";
import Link from "next/link";

const Footer = () => (
  <footer className={styles.footer} role="contentinfo">
    <div className={styles.container}>
      <Link
        href="/"
        className={styles.title}
        aria-label="Back to homepage"
      >
        emanuelezaccaria
      </Link>
      <nav aria-label="Footer Navigation">
        <Nav showThemeToggle={false} />
      </nav>
    </div>
  </footer>
);

export default Footer;