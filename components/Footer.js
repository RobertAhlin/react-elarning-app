// components/Footer.js

import React from 'react';
import QuoteList from '../components/QuoteList';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <hr />
        <div>
            <QuoteList />
        </div>
    </footer>
  );
};

export default Footer;
