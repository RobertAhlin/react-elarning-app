// components/Footer.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer component without crashing', () => {
  render(<Footer />);
});
