// pages/index.js

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection'; // Import the HeroSection component
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Adjust this according to your styles
import NewsSection from '../components/NewsSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection 
        imageUrl="/e-learning-hero.jpeg" 
        title="Welcome to the e-learning platform!" 
        subtitle="Learn anytime, anywhere."
      />
      <NewsSection style={{ marginBottom: '120px' }} />
      <Footer />
    </div>
  );
};

export default Home;
