import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import styles from '../components/Card.module.css';

const Page3 = ({ urls }) => {
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

export async function getStaticProps() {
  // Fetch data from database.json
  const database = require('../db/database.json');
  const urls = database['Säkerhetsskyddsplanering'];

  return {
    props: {
      urls,
    },
  };
}

export default Page3;
