import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders the minutes', () => {
  const { getByLabelText } = render(<App />);
  const minsRemainingElement = getByLabelText(/Minutes remaining/i);
  expect(minsRemainingElement).toHaveTextContent('25');
});

it('renders the seconds', () => {
  const { getByLabelText } = render(<App />);
  const secsRemainingElement = getByLabelText(/Seconds remaining/i);
  expect(secsRemainingElement).toHaveTextContent('00');
});
