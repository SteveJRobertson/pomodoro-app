import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonGroup, IconName, Intent } from '@blueprintjs/core';
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

  const renderButton = (
    buttonText: string,
    icon: IconName,
    intent: Intent,
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
  ) => (
    <Button large={true} icon={icon} intent={intent} onClick={onClick}>
      {buttonText}
    </Button>
  );

  return (
    <ButtonGroup>
      {!isRunning &&
        renderButton(
          'Play',
          IconNames.PLAY,
          Intent.SUCCESS,
          handlePlayButtonClick,
        )}
      {isRunning &&
        renderButton(
          'Pause',
          IconNames.PAUSE,
          Intent.SUCCESS,
          handlePauseButtonClick,
        )}
      {renderButton(
        'Stop',
        IconNames.STOP,
        Intent.DANGER,
        handleStopButtonClick,
      )}
      {/* <Button large={true}>
          <Icon icon={IconNames.STEP_FORWARD} iconSize={Icon.SIZE_LARGE} />
        </Button> */}
    </ButtonGroup>
  );
};
