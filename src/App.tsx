import React from 'react';
import { SessionTypeDisplay, TimerDigits } from './components';

const App: React.FC = () => {
  const sessionLengthMins = 25;

  return (
    <div className="App">
      <TimerDigits secondsRemaining={0} sessionLengthMins={sessionLengthMins} />
      <SessionTypeDisplay sessionLengthMins={sessionLengthMins} />
    </div>
  );
};

export default App;
