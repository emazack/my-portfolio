import React from "react";
import styles from "./Footer.module.scss";
import Nav from "@/components/UI/Nav/Nav";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
        <span className={styles.title}>emanuelezaccaria</span>
        <Nav showThemeToggle={false} />
    </div>
  </footer>
);

export default Footer;
