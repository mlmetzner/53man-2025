import { useRoster, useRosterActions } from '@/stores/roster-store';
import type { DepthChartPosition, PlayerProps } from '@/types/player';
import { DcPlayer } from './dc-player';

export function DcPositionGroup({
  depthChartPosition,
  players,
}: {
  depthChartPosition: DepthChartPosition;
  players: PlayerProps[];
}) {
  const { swapPlayers } = useRosterActions();
  const position = players[0]?.position;
  const roster = useRoster();

  function moveUp(playerId: PlayerProps['playerId']) {
    const player1 = roster[position].find(
      (rosterPlayer) => rosterPlayer.playerId === playerId
    );
    if (!player1) {
      return;
    }
    const player2 = roster[position].find(
      (rosterPlayer) => rosterPlayer.depthChartValue < player1.depthChartValue
    );
    if (!player2) {
      return;
    }
    swapPlayers(playerId, player2.playerId, position);
  }
  function moveDown(playerId: PlayerProps['playerId']) {
    const player1 = roster[position].find(
      (rosterPlayer) => rosterPlayer.playerId === playerId
    );
    if (!player1) {
      return;
    }
    const player2 = roster[position].find(
      (rosterPlayer) => rosterPlayer.depthChartValue > player1.depthChartValue
    );
    if (!player2) {
      return;
    }
    swapPlayers(playerId, player2.playerId, position);
  }

  return (
    <div className="flex w-full grow flex-col gap-6 md:gap-8">
      <section
        className="rounded-lg bg-gray-900 p-4 md:p-6"
        key={depthChartPosition}
      >
        <h2 className="mb-3 font-bold text-jax-teal text-lg md:mb-4 md:text-2xl">
          {depthChartPosition}
        </h2>

        <div className="flex flex-wrap justify-start gap-4 ">
          {players.map((player, index) => (
            <DcPlayer
              index={index}
              key={player.playerId}
              moveDown={moveDown}
              moveUp={moveUp}
              player={player}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
