// pages/page3.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import database from '../db/database';
import styles from '../components/Card.module.css';

const Page3 = () => {
  const urls = database['Säkerhetsskyddsplanering'];

  return (
    <div>
      <Header />
      <main className={styles.mainWithMargin}>
        <h1>Säkerhetsskyddsplanering</h1>
        <div className={styles['card-container']}>
          {/* Render the cards */}
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
export default Page3;
