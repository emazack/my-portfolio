import React from "react";
import styles from "./Header.module.scss";
import Nav from "@/components/UI/Nav/Nav";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>emanuelezaccaria</h1>
    <Nav showThemeToggle />
  </header>
);

export default Header;
