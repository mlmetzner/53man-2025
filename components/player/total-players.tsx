'use client';

import { useTotalPlayers } from '@/stores/rosterStore';

export function TotalPlayers() {
  const totalPlayers = useTotalPlayers();

  let totalPlayersClass = 'text-red-500';
  if (totalPlayers <= 52) {
    totalPlayersClass = 'text-yellow-500';
  } else if (totalPlayers === 53) {
    totalPlayersClass = 'text-green-500';
  }

  return <div className={totalPlayersClass}>Total Players: {totalPlayers}</div>;
}
