import React from 'react';
import { render } from '@testing-library/react';
import { MAX_WORK_INTERVAL_COUNT } from '../../constants';
import { NumberOfSessionsDisplay } from './NumberOfSessionsDisplay';

describe('NumberOfSessionsDisplay component', () => {
  describe('4 sessions completed', () => {
    test('displays the correct number of remaining sessions', () => {
      const { getByText } = render(
        <NumberOfSessionsDisplay workIntervalCount={4} />,
      );
      expect(
        getByText(
          `${MAX_WORK_INTERVAL_COUNT} sessions remaining until your big break`,
        ),
      ).toBeTruthy();
    });
  });

  describe('3 sessions completed', () => {
    test('displays the big break message', () => {
      const { getByText } = render(
        <NumberOfSessionsDisplay workIntervalCount={3} />,
      );
      expect(getByText('Big break up next')).toBeTruthy();
    });
  });

  describe('less than 3 sessions completed', () => {
    test('displays the big break message', () => {
      const { getByText } = render(
        <NumberOfSessionsDisplay workIntervalCount={2} />,
      );
      expect(
        getByText(
          `${MAX_WORK_INTERVAL_COUNT -
            2} sessions remaining until your big break`,
        ),
      ).toBeTruthy();
    });
  });
});
