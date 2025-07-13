import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import type { PlayerProps } from '@/types/player';

export function DcPlayer({
  player,
  index,
  moveUp,
  moveDown,
}: {
  player: PlayerProps;
  index: number;
  moveUp: (playerId: PlayerProps['playerId']) => void;
  moveDown: (playerId: PlayerProps['playerId']) => void;
}) {
  return (
    <div
      className="flex flex-shrink-0 flex-col justify-between rounded-lg border border-jax-teal/30 bg-gradient-to-r from-jax-teal/20 to-jax-teal/10 p-3 sm:flex-row sm:items-center md:p-4"
      key={player.playerId}
    >
      <div className="mb-2 flex items-center gap-3 sm:mb-0">
        <div className="flex h-8 w-8 items-center justify-center p-0 font-bold text-jax-brown text-sm">
          {index + 1}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <span className="font-semibold text-white">
            {player.firstName} {player.lastName}
          </span>
          <span className="text-jax-brown text-sm">#{player.jerseyNumber}</span>
        </div>

        <span className="rounded bg-jax-gold/20 px-2 py-1 font-medium text-jax-gold text-xs">
          {player.depthChartPosition}
        </span>
        <span className="rounded bg-gray-700 px-2 py-1 font-medium text-gray-300 text-xs">
          {player.position}
        </span>
        <button
          className="p-2 hover:cursor-pointer hover:bg-jax-gold/20 hover:text-jax-gold"
          onClick={() => moveUp(player.playerId)}
          type="button"
        >
          <ArrowUpIcon className="h-4 w-4" />
        </button>
        <button
          className="p-2 hover:cursor-pointer hover:bg-jax-gold/20 hover:text-jax-gold"
          onClick={() => moveDown(player.playerId)}
          type="button"
        >
          <ArrowDownIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
