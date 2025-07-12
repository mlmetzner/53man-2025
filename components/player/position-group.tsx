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
      <div className="grid min-h-72 w-full min-w-0 max-w-svw grid-cols-1 flex-row flex-wrap gap-4 md:flex">
        {roster[position]
          .map((playerId) =>
            players.find((player) => player.playerId === playerId)
          )
          .map((player) =>
            player ? <PlayerCard key={player.playerId} {...player} /> : null
          )}
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
