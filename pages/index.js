// pages/index.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'; // Import your Hero component
import styles from '../styles/Home.module.css'; // Adjust this according to your styles

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection /> {/* Render your Hero component */}
      <Footer />
    </div>
  );
};

export default Home;
