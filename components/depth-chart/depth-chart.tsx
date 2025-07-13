'use client';

import { useRoster } from '@/stores/rosterStore';
import type {
  DepthChartPosition,
  PlayerPosition,
  PlayerProps,
} from '@/types/player';
import { DcPositionGroup } from './dc-position-group';
import { ExportCsv } from './export-csv';

export function DepthChart({ players }: { players: PlayerProps[] }) {
  const roster = useRoster();
  const getDepthChartValue = (player: PlayerProps) => {
    return (
      roster[player.position as PlayerPosition].find(
        (rosterPlayer) => rosterPlayer.playerId === player.playerId
      )?.depthChartValue ?? 0
    );
  };
  const playersByPosition = players.reduce(
    (acc, player) => {
      if (
        roster[player.position as PlayerPosition].some(
          (rosterPlayer) => rosterPlayer.playerId === player.playerId
        )
      ) {
        acc[player.depthChartPosition] = [
          ...(acc[player.depthChartPosition] || []),
          player,
        ];
      }
      return acc;
    },
    {
      QB: [],
      WR: [],
      RB: [],
      TE: [],
      T: [],
      G: [],
      C: [],
      LB: [],
      ILB: [],
      OLB: [],
      DE: [],
      DT: [],
      CB: [],
      FS: [],
      SS: [],
      K: [],
      LS: [],
      P: [],
    } as Record<DepthChartPosition, PlayerProps[]>
  );
  for (const position in playersByPosition) {
    if (playersByPosition[position as DepthChartPosition].length > 0) {
      playersByPosition[position as DepthChartPosition].sort((a, b) => {
        return getDepthChartValue(a) - getDepthChartValue(b);
      });
    }
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6">
      <h1 className="text-center font-bold text-2xl text-jax-brown md:text-4xl">
        Depth Chart
      </h1>

      <div className="space-y-4 md:space-y-6">
        {Object.keys(playersByPosition).map((position) => (
          <DcPositionGroup
            depthChartPosition={position as DepthChartPosition}
            key={position}
            players={playersByPosition[position as DepthChartPosition]}
          />
        ))}
      </div>
      <ExportCsv playersByPosition={playersByPosition} />
    </div>
  );
}
