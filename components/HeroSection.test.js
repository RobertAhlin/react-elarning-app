// components/HeroSection.test.js

import React from 'react';
import { render } from '@testing-library/react';
import HeroSection from './HeroSection';

test('renders hero section component without crashing', () => {
  render(
    <HeroSection
      imageUrl="/e-learning-hero.jpeg"
      title="Welcome to the e-learning platform!"
      subtitle="Learn anytime, anywhere."
    />
  );
});
