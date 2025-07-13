'use client';

import { useRoster } from '@/stores/roster-store';
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
    <div className="flex w-full grow flex-col gap-6 md:gap-8">
      <h2 className="text-center font-bold text-jax-brown text-xl md:text-2xl">
        {position} On Roster
      </h2>
      <section className="w-full ">
        <div className="grid w-full grid-cols-1 place-items-center justify-center gap-4 align-center sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {roster[position]
            .map((rosterPlayer) =>
              players.find(
                (player) => player.playerId === rosterPlayer.playerId
              )
            )
            .map((player) =>
              player ? <PlayerCard key={player.playerId} {...player} /> : null
            )}
        </div>
      </section>

      <h2 className="mt-4 text-center font-bold text-jax-brown text-xl md:text-2xl">
        {position} Available / Will Be Cut
      </h2>
      <section className="grid grid-cols-1 place-items-center justify-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {players
          .filter(
            (player) =>
              !roster[position].some(
                (rosterPlayer) => rosterPlayer.playerId === player.playerId
              )
          )
          .map((player) => (
            <PlayerCard key={player.playerId} {...player} />
          ))}
      </section>
    </div>
  );
}
