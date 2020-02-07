import React, { useState, useEffect } from 'react';
import { MAX_WORK_INTERVAL_COUNT } from '../../constants';

type NumberOfSessionsDisplayProps = {
  workIntervalCount: number;
};

export const NumberOfSessionsDisplay: React.FC<NumberOfSessionsDisplayProps> = ({
  workIntervalCount,
}: NumberOfSessionsDisplayProps) => {
  const [displayNumberOfSessions, setDisplayNumberOfSessions] = useState('');

  useEffect(() => {
    if (workIntervalCount === 3) {
      setDisplayNumberOfSessions('Big break up next');
    } else if (workIntervalCount === 4) {
      setDisplayNumberOfSessions(
        `${MAX_WORK_INTERVAL_COUNT} sessions remaining until your big break`,
      );
    } else {
      setDisplayNumberOfSessions(
        `${MAX_WORK_INTERVAL_COUNT -
          workIntervalCount} sessions remaining until your big break`,
      );
    }
  }, [workIntervalCount]);

  return <p>{displayNumberOfSessions}</p>;
};
