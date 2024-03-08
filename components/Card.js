import React from 'react';
import styles from './Card.module.css';

const Card = ({ url, label }) => {
  return (
    <div className={styles.card}>
      <div>
        {/* Embed YouTube video */}
        <div className={styles.videoWrapper}>
          <iframe
            width="400"
            height="225"
            src={`https://www.youtube.com/embed/${getVideoId(url)}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded video"
          ></iframe>
        </div>
        {/* Add other content of the card here if needed */}
      </div>
    </div>
  );
};

// Function to extract video ID from YouTube URL
const getVideoId = (url) => {
  const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})$/;
  const match = url.match(regExp);
  return match && match[1];
};

export default Card;
