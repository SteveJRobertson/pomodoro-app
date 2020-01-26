import React from 'react';
import { render } from '@testing-library/react';
import { TimerDigits } from './TimerDigits';

describe('TimerDigits component', () => {
  it('displays the correct text', () => {
    const { getByText } = render(<TimerDigits />);
    expect(getByText('Timer Digits')).toBeTruthy();
  });
});
