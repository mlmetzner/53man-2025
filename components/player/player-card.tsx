import { useRoster, useRosterActions } from '@/stores/rosterStore';
import type { PlayerProps } from '@/types/player';
import { BackgroundEffect } from './backgorund-effect';
import { JerseyNumber } from './jersey-number';
import { PlayerHoverEffect } from './player-hover-effect';
import { PlayerImage } from './player-image';
import { PlayerName } from './player-name';

export function PlayerCard({
  depthChartPosition,
  position,
  playerName,
  headshotUrl,
  jerseyNumber,
  playerId,
  birthDate,
}: PlayerProps) {
  const roster = useRoster();
  const { addPlayer, removePlayer } = useRosterActions();

  const isOnRoster = roster[position].some((player) => player === playerId);
  const handleClick = () => {
    if (isOnRoster) {
      removePlayer(playerId, position);
    } else {
      addPlayer(playerId, position);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      aria-label={`${isOnRoster ? 'Remove' : 'Add'} ${playerName} ${isOnRoster ? 'from' : 'to'} roster`}
      className={`group relative flex min-h-[140px] w-full gap-4 overflow-hidden rounded-xl border-4 p-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-jax-teal/50 focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98] md:min-h-[160px] md:gap-6 md:p-6 ${
        isOnRoster
          ? 'border-jax-teal bg-gradient-to-br from-jax-teal/20 via-gray-800 to-black hover:shadow-jax-teal/30'
          : 'border-red-700 bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:shadow-jax-gold/20'
      } hover:shadow-xl`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
    >
      <BackgroundEffect />
      <JerseyNumber number={jerseyNumber} />
      <PlayerImage alt={`${playerName}'s headshot`} src={headshotUrl} />
      <PlayerName
        birthDate={birthDate}
        depthChartPosition={depthChartPosition}
        jerseyNumber={jerseyNumber}
        playerName={playerName}
      />
      <PlayerHoverEffect />
    </button>
  );
}
