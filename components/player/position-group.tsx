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
    <div className="flex flex-col gap-6 md:gap-8">
      <h2 className="text-center font-bold text-xl md:text-2xl">
        {position} On Roster
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {roster[position]
            .map((playerId) =>
              players.find((player) => player.playerId === playerId)
            )
            .map((player) =>
              player ? <PlayerCard key={player.playerId} {...player} /> : null
            )}
        </div>
      </div>

      <h2 className="mt-4 text-center font-bold text-xl md:text-2xl">
        {position} Available / Will Be Cut
      </h2>
      <div className="w-full">
        <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {players
            .filter((player) => !roster[position].includes(player.playerId))
            .map((player) => (
              <PlayerCard key={player.playerId} {...player} />
            ))}
        </div>
      </div>
    </div>
  );
}
