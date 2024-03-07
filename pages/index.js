// pages/index.js

import React from 'react';
import HeroSection from '../components/HeroSection'; // Import the HeroSection component
import styles from '../styles/Home.module.css'; // Adjust this according to your styles

const Home = () => {
  return (
    <div>
      <HeroSection 
        imageUrl="/e-learning-hero.jpeg" 
        title="Welcome to the e-learning platform!" 
        subtitle="Learn anytime, anywhere."
      /> {/* Render the HeroSection component with props */}
    </div>
  );
};

export default Home;
