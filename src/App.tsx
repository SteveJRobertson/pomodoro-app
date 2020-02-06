import React from 'react';
import {
  NumberOfSessionsDisplay,
  SessionTypeDisplay,
  TimerDigits,
} from './components';

const App: React.FC = () => {
  const sessionLengthMins = 25;
  const workIntervalCount = 4;

  return (
    <div className="App">
      <TimerDigits secondsRemaining={0} sessionLengthMins={sessionLengthMins} />
      <SessionTypeDisplay sessionLengthMins={sessionLengthMins} />
      <NumberOfSessionsDisplay workIntervalCount={workIntervalCount} />
    </div>
  );
};

export default App;
