import React from "react";
import styles from "./Header.module.scss";
import Nav from "@/components/UI/Nav/Nav";
import Link from "next/link";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link href="/" aria-label="Back to homepage">
        emanuelezaccaria
      </Link>
    </h1>
    <Nav showThemeToggle />
  </header>
);

export default Header;