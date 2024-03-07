// components/QuoteList.js

import React from 'react';
import axios from 'axios';

const QuoteList = () => {
  const fetchQuotes = async () => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 'IFSEE3vpWjwQEzMtP7USfw==oJxXOmr8zmG2fdUV', //
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching quotes:', error);
      return [];
    }
  };

  const renderQuotes = async () => {
    const quotes = await fetchQuotes();
    return (
      <div>
        
          {quotes.map((quote, index) => (
            <div key={index}>
              <blockquote>{quote.quote}</blockquote>
              <p>- {quote.author}</p>
            </div>
          ))}
        
      </div>
    );
  };

  return renderQuotes();
};

export default QuoteList;
