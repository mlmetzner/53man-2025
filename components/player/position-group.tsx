'use client';

import { useRoster } from '@/stores/rosterStore';
import type { PlayerPosition, PlayerProps } from '@/types/player';
import { PlayerCard } from './player-card';

export function PositionGroup({
  position,
  players,
}: {
  position: PlayerPosition;
  players: PlayerProps[];
}) {
  const roster = useRoster();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="font-bold text-2xl">{position} On Roster</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {players
          .filter((player) => roster[position].includes(player.playerId))
          .map((player) => (
            <PlayerCard key={player.playerId} {...player} />
          ))}
      </div>
      <h2 className="font-bold text-2xl">{position} Available / Will Be Cut</h2>
      <div className="flex flex-row flex-wrap gap-4">
        {players
          .filter((player) => !roster[position].includes(player.playerId))
          .map((player) => (
            <PlayerCard key={player.playerId} {...player} />
          ))}
      </div>
    </div>
  );
}
