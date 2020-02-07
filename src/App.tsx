/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import {
  NumberOfSessionsDisplay,
  SessionTypeDisplay,
  TimerControls,
  TimerDigits,
} from './components';

import '@blueprintjs/core/lib/css/blueprint.css';

const App: React.FC = () => {
  const sessionLengthMins = 25;
  const workIntervalCount = 4;
  const isRunning = false;

  const handlePlay = () => {};
  const handlePause = () => {};
  const handleStop = () => {};

  const appStyles = css`
    align-items: center;
    display: flex;
    flex-direction: column;
  `;

  return (
    <div className="App" css={appStyles}>
      <TimerDigits secondsRemaining={0} sessionLengthMins={sessionLengthMins} />
      <SessionTypeDisplay sessionLengthMins={sessionLengthMins} />
      <NumberOfSessionsDisplay workIntervalCount={workIntervalCount} />
      <TimerControls
        isRunning={isRunning}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />
    </div>
  );
};

export default App;
