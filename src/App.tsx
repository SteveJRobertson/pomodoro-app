import React from 'react';
import { TimerDigits } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <TimerDigits secondsRemaining={0} sessionLengthMins={25} />
    </div>
  );
};

export default App;
