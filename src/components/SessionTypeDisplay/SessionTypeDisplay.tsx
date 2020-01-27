import React, { useState, useEffect } from 'react';
import { sessionIntervals, sessionTypes } from '../../constants';

type SessionTypeDisplayProps = {
  sessionLengthMins: number;
};

export const SessionTypeDisplay: React.FC<SessionTypeDisplayProps> = ({
  sessionLengthMins,
}: SessionTypeDisplayProps) => {
  const [displaySessionType, setDisplaySessionType] = useState<string>(
    sessionTypes.WORK,
  );

  useEffect(() => {
    switch (sessionLengthMins) {
      case sessionIntervals.WORK:
        setDisplaySessionType(sessionTypes.WORK);
        break;
      case sessionIntervals.LONG:
        setDisplaySessionType(sessionTypes.LONG);
        break;
      case sessionIntervals.SHORT:
        setDisplaySessionType(sessionTypes.SHORT);
        break;
      default:
        break;
    }
  }, [sessionLengthMins]);

  return <h2>{displaySessionType}</h2>;
};
