import React from 'react';
import { Button, ButtonGroup, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

interface TimerControlProps {
  isRunning: boolean;
  onPlay: Function;
  onPause: Function;
  onStop: Function;
}

export const TimerControls: React.FC<TimerControlProps> = ({
  isRunning,
  onPlay,
  onPause,
  onStop,
}: TimerControlProps) => {
  const handlePlayButtonClick = () => {
    onPlay();
  };

  const handlePauseButtonClick = () => {
    onPause();
  };

  const handleStopButtonClick = () => {
    onStop();
  };

  return (
    <ButtonGroup>
      {!isRunning && (
        <Button
          icon={IconNames.PLAY}
          intent={Intent.SUCCESS}
          large={true}
          onClick={handlePlayButtonClick}
        >
          Play
        </Button>
      )}
      {isRunning && (
        <Button
          icon={IconNames.PAUSE}
          intent={Intent.SUCCESS}
          large={true}
          onClick={handlePauseButtonClick}
        >
          Pause
        </Button>
      )}
      <Button
        icon={IconNames.STOP}
        intent={Intent.DANGER}
        large={true}
        onClick={handleStopButtonClick}
      >
        Stop
      </Button>
      {/* <Button large={true}>
          <Icon icon={IconNames.STEP_FORWARD} iconSize={Icon.SIZE_LARGE} />
        </Button> */}
    </ButtonGroup>
  );
};
