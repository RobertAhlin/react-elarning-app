// components/NewsSection.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSection from './NewsSection';

describe('NewsSection', () => {
  test('renders no more than 3 news articles', () => {
    render(<NewsSection />);
    const newsArticles = screen.getAllByTestId('news-article');
    expect(newsArticles.length).toBeLessThanOrEqual(3);
  });
});
