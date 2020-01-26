interface SessionIntervals {
  WORK: number;
  LONG: number;
  SHORT: number;
}

export const sessionIntervals: SessionIntervals = {
  WORK: 25,
  LONG: 15,
  SHORT: 5,
};

interface SessionTypes {
  WORK: string;
  LONG: string;
  SHORT: string;
}

export const sessionTypes: SessionTypes = {
  WORK: 'Work Session',
  LONG: 'Long Break',
  SHORT: 'Short Break',
};

export const INTERVAL_DELAY = 1;

export const MAX_WORK_INTERVAL_COUNT = 4;
