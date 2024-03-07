// components/NewsSection.js

import React from 'react';
import newsData from '../db/news.json';
import styles from './NewsSection.module.css';

const NewsSection = () => {
  const latestNews = newsData.Nyheter.slice(0, 3);

  return (
    <div className={styles.newsSection}>
      <h2>Latest News</h2>
      {latestNews.map((newsItem, index) => (
        <div key={index} className={styles.newsItem} data-testid="news-article">
          <h3>{newsItem.title}</h3>
          <p>{newsItem.date}</p>
          <p>{newsItem.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
