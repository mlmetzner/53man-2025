'use client';

import { useRoster } from '@/stores/rosterStore';
import type { PlayerPosition, PlayerProps } from '@/types/player';

export function DepthChart({ players }: { players: PlayerProps[] }) {
  const roster = useRoster();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Depth Chart</h1>
      <div className="flex flex-col gap-4">
        {Object.keys(roster).map((position) => (
          <div className="flex flex-row gap-4" key={position}>
            <span className="font-bold text-2xl">{position}</span>
            {roster[position as PlayerPosition].map((playerId) => {
              const player = players.find((p) => p.playerId === playerId);
              if (!player) {
                return null;
              }
              return (
                <div
                  className="flex flex-row gap-2 rounded-sm bg-jax-teal px-4 py-1"
                  key={playerId}
                >
                  <div className="flex flex-row gap-2">
                    <span className="text-jax-brown">
                      #{player.jerseyNumber}
                    </span>
                    {player.firstName} {player.lastName}
                  </div>
                  <div className="flex flex-row gap-2">{player.position}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
