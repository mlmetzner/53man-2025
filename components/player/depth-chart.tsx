'use client';

import { useRoster } from '@/stores/rosterStore';
import type { PlayerPosition, PlayerProps } from '@/types/player';

export function DepthChart({ players }: { players: PlayerProps[] }) {
  const roster = useRoster();

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        Depth Chart
      </h1>

      <div className="space-y-4 md:space-y-6">
        {Object.keys(roster).map((position) => (
          <div className="rounded-lg bg-gray-900 p-4 md:p-6" key={position}>
            <h2 className="mb-3 font-bold text-jax-teal text-lg md:mb-4 md:text-2xl">
              {position}
            </h2>

            <div className="space-y-2 md:space-y-3">
              {roster[position as PlayerPosition].length === 0 ? (
                <p className="text-gray-500 italic">No players selected</p>
              ) : (
                roster[position as PlayerPosition].map((playerId, index) => {
                  const player = players.find((p) => p.playerId === playerId);
                  if (!player) {
                    return null;
                  }
                  return (
                    <div
                      className="flex flex-col justify-between rounded-lg border border-jax-teal/30 bg-gradient-to-r from-jax-teal/20 to-jax-teal/10 p-3 sm:flex-row sm:items-center md:p-4"
                      key={playerId}
                    >
                      <div className="mb-2 flex items-center gap-3 sm:mb-0">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-jax-teal font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                          <span className="font-semibold text-white">
                            {player.firstName} {player.lastName}
                          </span>
                          <span className="text-jax-brown text-sm">
                            #{player.jerseyNumber}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="rounded bg-jax-gold/20 px-2 py-1 font-medium text-jax-gold text-xs">
                          {player.depthChartPosition}
                        </span>
                        <span className="rounded bg-gray-700 px-2 py-1 font-medium text-gray-300 text-xs">
                          {player.position}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
