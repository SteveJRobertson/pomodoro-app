/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { sessionIntervals } from '../../constants';

type TimerDigitProps = {
  secondsRemaining: number;
  sessionLengthMins: number;
};

export const TimerDigits: React.FC<TimerDigitProps> = ({
  secondsRemaining,
  sessionLengthMins,
}: TimerDigitProps) => {
  const [displayMins, setDisplayMins] = useState(sessionIntervals.WORK);
  const [displaySecs, setDisplaySecs] = useState(0);

  useEffect(() => {
    if (secondsRemaining === 0) {
      setDisplayMins(sessionLengthMins);
      setDisplaySecs(0);
    } else if (secondsRemaining < 60) {
      setDisplayMins(0);
      setDisplaySecs(secondsRemaining);
    } else {
      const newSecs = secondsRemaining % 60;
      const newMins = (secondsRemaining - newSecs) / 60;

      setDisplayMins(newMins);
      setDisplaySecs(newSecs);
    }
  }, [secondsRemaining, sessionLengthMins]);

  const timerStyles = css`
    display: flex;
    font-size: 10rem;
    font-weight: bold;
    justify-content: center;
    margin-bottom: 1rem;
  `;

  const timerDigitStyles = css`
    width: 12rem;
  `;

  const getDisplayValue = (num: number) =>
    `${num}`.length === 1 ? `0${num}` : `${num}`;

  return (
    <div css={timerStyles}>
      <div aria-label="Minutes remaining" css={timerDigitStyles}>
        {getDisplayValue(displayMins)}
      </div>
      :
      <div aria-label="Seconds remaining" css={timerDigitStyles}>
        {getDisplayValue(displaySecs)}
      </div>
    </div>
  );
};
