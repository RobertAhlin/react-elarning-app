// pages/page2.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import styles from '../components/Card.module.css';

const Page2 = ({ urls }) => {
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

export async function getStaticProps() {
  // Fetch data from database.json
  const database = require('../db/database.json');
  const urls = database['Personalsäkerhet'];

  return {
    props: {
      urls,
    },
  };
}

export default Page2;
