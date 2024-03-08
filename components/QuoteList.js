import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          headers: {
            'X-Api-Key': 'IFSEE3vpWjwQEzMtP7USfw==oJxXOmr8zmG2fdUV',
          },
        });
        setQuotes(response.data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []); // Empty dependency array to run effect only once

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

export default QuoteList;
