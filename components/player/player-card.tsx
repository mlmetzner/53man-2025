import Image from 'next/image';
import { useRoster, useRosterActions } from '@/stores/rosterStore';
import type { PlayerProps } from '@/types/player';

export function PlayerCard({
  depthChartPosition,
  position,
  firstName,
  lastName,
  headshotUrl,
  jerseyNumber,
  playerId,
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
      aria-label={`${isOnRoster ? 'Remove' : 'Add'} ${firstName} ${lastName} ${isOnRoster ? 'from' : 'to'} roster`}
      className={`group relative flex min-h-[140px] w-full gap-4 overflow-hidden rounded-xl border-2 p-4 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-jax-teal/50 focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98] md:min-h-[160px] md:gap-6 md:p-6 ${
        isOnRoster
          ? 'border-jax-teal bg-gradient-to-br from-jax-teal/20 via-gray-800 to-black hover:shadow-jax-teal/30'
          : 'border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:shadow-jax-gold/20'
      } hover:shadow-xl`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
    >
      <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,var(--color-jax-teal),transparent_50%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_30%_40%,var(--color-jax-teal),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-jax-gold),transparent_50%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_70%_30%,var(--color-jax-gold),transparent_70%)]" />
      </div>

      <div className="absolute top-2 right-2 font-black text-2xl text-white/5 transition-all duration-500 group-hover:text-white/15 md:top-4 md:right-4 md:text-4xl">
        {jerseyNumber}
      </div>

      <div className="relative z-10 flex-shrink-0">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-jax-brown bg-gradient-to-br from-white/10 to-white/5 p-1 transition-all duration-300 group-hover:border-jax-teal group-hover:shadow-jax-teal/30 group-hover:shadow-lg md:h-20 md:w-20">
          <Image
            alt={`${firstName} ${lastName}'s headshot`}
            className="h-full w-full rounded-full object-cover transition-all duration-300 group-hover:brightness-110"
            fill
            src={headshotUrl ?? '/placeholder.png'}
          />
        </div>
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="truncate font-bold text-base text-white md:text-lg">
            {firstName}
          </div>
          <div className="truncate font-black text-lg text-white uppercase tracking-wide md:text-xl">
            {lastName}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <div className="rounded-full bg-gradient-to-r from-jax-teal to-jax-teal/90 px-3 py-1 font-bold text-xs uppercase tracking-wider shadow-md">
            {depthChartPosition}
          </div>
          <div className="rounded-full bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-1 font-black text-xs shadow-md">
            #{jerseyNumber}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-20 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />

      <div className="absolute inset-0 z-20 translate-y-[-100%] bg-gradient-to-b from-transparent via-jax-teal/3 to-transparent transition-transform duration-1500 ease-out group-hover:translate-y-[100%]" />
    </button>
  );
}
