'use client';

import { cn } from '@/lib/utils';
import { useTotalPlayers } from '@/stores/roster-store';

export function TotalPlayers() {
  const totalPlayers = useTotalPlayers();

  let totalPlayersClass = 'text-red-500';
  if (totalPlayers <= 52) {
    totalPlayersClass = 'text-yellow-500';
  } else if (totalPlayers === 53) {
    totalPlayersClass = 'text-green-500';
  }

  return (
    <div className={cn(totalPlayersClass, 'font-bold')}>
      Total Players: {totalPlayers}
    </div>
  );
}
