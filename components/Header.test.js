// components/Header.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header component without crashing', () => {
  render(<Header />);
});