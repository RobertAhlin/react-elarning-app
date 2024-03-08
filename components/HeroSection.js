import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ imageUrl, title, subtitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <img className={styles.image} src={imageUrl} alt="Hero Image" />
    </div>
  );
};

export default HeroSection;
