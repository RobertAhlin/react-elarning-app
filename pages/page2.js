// pages/page2.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import database from '../db/database';
import styles from '../components/Card.module.css';

const Page2 = () => {
  const urls = database['Personalsäkerhet'];

  return (
    <div>
      <Header />
      <main className={styles.mainWithMargin}>
        <h1>Personalsäkerhet</h1>
        <div className={styles['card-container']}>
          {urls.map((item, index) => (
            <Card key={index} url={item.url} label={item.label} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page2;
