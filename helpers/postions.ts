import type { PlayerPosition } from '@/types/player';

export const positions: {
  label: PlayerPosition;
  value: string;
}[] = [
  {
    label: 'QB',
    value: 'QB',
  },
  {
    label: 'WR',
    value: 'WR',
  },
  {
    label: 'RB',
    value: 'RB',
  },
  {
    label: 'TE',
    value: 'TE',
  },
  {
    label: 'OL',
    value: 'OL',
  },
  {
    label: 'LB',
    value: 'LB',
  },
  {
    label: 'DB',
    value: 'DB',
  },
  {
    label: 'DL',
    value: 'DL',
  },
  {
    label: 'K',
    value: 'K',
  },
  {
    label: 'LS',
    value: 'LS',
  },
  {
    label: 'P',
    value: 'P',
  },
];

export function getNextPosition(currentPosition: PlayerPosition) {
  const currentIndex = positions.findIndex(
    (position) => position.value === currentPosition
  );
  if (currentIndex === positions.length - 1) {
    return 'depth-chart';
  }
  return positions[currentIndex + 1].value;
}

export function getPreviousPosition(currentPosition: PlayerPosition) {
  const currentIndex = positions.findIndex(
    (position) => position.value === currentPosition
  );
  if (currentIndex === 0) {
    return null;
  }
  return positions[currentIndex - 1].value;
}
