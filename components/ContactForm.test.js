// components/ContactForm.test.js

import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('renders without errors', () => {
    render(<ContactForm />);
  });
});
