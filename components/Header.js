// components/Header.js

import React from 'react';
import Navbar from './Navbar';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
        <Navbar />
        <hr />
    </header>
  );
};

export default Header;
