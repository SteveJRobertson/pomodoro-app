import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TimerControls } from './TimerControls';

describe('TimerControls component', () => {
  afterEach(cleanup);

  const mockOnPlay = jest.fn();
  const mockOnPause = jest.fn();
  const mockOnStop = jest.fn();

  let renderedComponent: JSX.Element;

  describe('when the timer is not running', () => {
    beforeEach(() => {
      renderedComponent = (
        <TimerControls
          isRunning={false}
          onPlay={mockOnPlay}
          onPause={mockOnPause}
          onStop={mockOnStop}
        />
      );
    });

    test('displays the play button', () => {
      const { getByText } = render(renderedComponent);
      expect(getByText('Play')).toBeTruthy();
    });

    test('does not display the play button', () => {
      const { queryByText } = render(renderedComponent);
      expect(queryByText('Pause')).toBeFalsy();
    });

    test('displays the stop button', () => {
      const { getByText } = render(renderedComponent);
      expect(getByText('Stop')).toBeTruthy();
    });
  });

  describe('when the timer is running', () => {
    beforeEach(() => {
      renderedComponent = (
        <TimerControls
          isRunning={true}
          onPlay={mockOnPlay}
          onPause={mockOnPause}
          onStop={mockOnStop}
        />
      );
    });

    test('does not display the play button', () => {
      const { queryByText } = render(renderedComponent);
      expect(queryByText('Play')).toBeFalsy();
    });

    test('displays the pause button', () => {
      const { getByText } = render(renderedComponent);
      expect(getByText('Pause')).toBeTruthy();
    });

    test('displays the stop button', () => {
      const { getByText } = render(renderedComponent);
      expect(getByText('Stop')).toBeTruthy();
    });
  });

  describe('event handlers', () => {
    beforeEach(() => {
      renderedComponent = (
        <TimerControls
          isRunning={false}
          onPlay={mockOnPlay}
          onPause={mockOnPause}
          onStop={mockOnStop}
        />
      );
    });

    describe('when the play button is clicked', () => {
      test('calls the onPlay event handler', () => {
        const { getByText } = render(renderedComponent);
        const playButton = getByText('Play');
        playButton.click();

        expect(mockOnPlay).toHaveBeenCalledWith();
      });
    });

    describe('when the pause button is clicked', () => {
      // TODO: Implement test when functionality is in place
      test.skip('calls the onPause event handler', () => {
        const { getByText } = render(renderedComponent);
        const playButton = getByText('Play');
        playButton.click();
        const pauseButton = getByText('Pause');
        pauseButton.click();

        expect(mockOnPause).toHaveBeenCalledWith();
      });
    });

    describe('when the stop button is clicked', () => {
      test('calls the onPlay event handler', () => {
        const { getByText } = render(renderedComponent);
        const stopButton = getByText('Stop');
        stopButton.click();

        expect(mockOnStop).toHaveBeenCalledWith();
      });
    });
  });
});
