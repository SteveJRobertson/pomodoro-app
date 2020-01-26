import React from 'react';
import { render } from '@testing-library/react';
import { TimerDigits } from './TimerDigits';

describe('TimerDigits component', () => {
  describe('more than one minute remaining', () => {
    const component = (
      <TimerDigits secondsRemaining={1499} sessionLengthMins={25} />
    );

    it('renders the minutes', () => {
      const { getByLabelText } = render(component);
      const minsRemainingElement = getByLabelText(/Minutes remaining/i);
      expect(minsRemainingElement).toHaveTextContent('24');
    });

    it('renders the seconds', () => {
      const { getByLabelText } = render(component);
      const secsRemainingElement = getByLabelText(/Seconds remaining/i);
      expect(secsRemainingElement).toHaveTextContent('59');
    });
  });

  describe('less than one minute remaining', () => {
    const component = (
      <TimerDigits secondsRemaining={58} sessionLengthMins={25} />
    );

    it('renders the minutes', () => {
      const { getByLabelText } = render(component);
      const minsRemainingElement = getByLabelText(/Minutes remaining/i);
      expect(minsRemainingElement).toHaveTextContent('00');
    });

    it('renders the seconds', () => {
      const { getByLabelText } = render(component);
      const secsRemainingElement = getByLabelText(/Seconds remaining/i);
      expect(secsRemainingElement).toHaveTextContent('58');
    });
  });

  describe('zero seconds remaining', () => {
    const component = (
      <TimerDigits secondsRemaining={0} sessionLengthMins={5} />
    );

    it('renders the minutes', () => {
      const { getByLabelText } = render(component);
      const minsRemainingElement = getByLabelText(/Minutes remaining/i);
      expect(minsRemainingElement).toHaveTextContent('05');
    });

    it('renders the seconds', () => {
      const { getByLabelText } = render(component);
      const secsRemainingElement = getByLabelText(/Seconds remaining/i);
      expect(secsRemainingElement).toHaveTextContent('00');
    });
  });
});
