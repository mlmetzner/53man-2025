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
      className={`group relative flex h-72 w-64 flex-col gap-4 overflow-hidden rounded-2xl border-2 p-6 text-white shadow-2xl transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-jax-teal/50 focus:ring-offset-2 focus:ring-offset-black ${
        isOnRoster
          ? 'border-jax-teal bg-gradient-to-br from-jax-teal/20 via-gray-800 to-black hover:shadow-jax-teal/30'
          : 'border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:shadow-jax-gold/20'
      } hover:shadow-3xl`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      type="button"
    >
      <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,var(--color-jax-teal),transparent_50%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_30%_40%,var(--color-jax-teal),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-jax-gold),transparent_50%)] transition-all duration-700 group-hover:bg-[radial-gradient(circle_at_70%_30%,var(--color-jax-gold),transparent_70%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,var(--color-jax-brown),transparent)] opacity-10 transition-all duration-1000 group-hover:rotate-12 group-hover:opacity-20" />
      </div>

      {isOnRoster && (
        <div className="absolute top-2 left-2 z-20 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-jax-teal shadow-lg">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      )}

      <div className="absolute top-4 right-4 font-black text-6xl text-white/5 transition-all duration-500 group-hover:scale-110 group-hover:text-white/15">
        {jerseyNumber}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 opacity-0 backdrop-blur-[1px] transition-all duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-full border-2 border-jax-brown bg-gradient-to-br from-white/10 to-white/5 p-1 transition-all duration-500 group-hover:border-jax-teal group-hover:shadow-2xl group-hover:shadow-jax-teal/50">
          <Image
            alt={`${firstName} ${lastName}'s headshot`}
            className="relative z-10 rounded-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
            height={120}
            src={headshotUrl ?? '/placeholder.png'}
            width={120}
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-row items-center justify-between">
        <div className="rounded-full bg-gradient-to-r from-jax-teal to-jax-teal/90 px-3 py-1 font-bold text-xs uppercase tracking-wider shadow-lg">
          {depthChartPosition}
        </div>
        <div className="rounded-full bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-1 font-black text-sm shadow-lg">
          #{jerseyNumber}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="bg-gradient-to-r from-white to-gray-300 bg-clip-text font-bold text-lg text-transparent">
          {firstName}
        </div>
        <div className="bg-gradient-to-r from-white to-gray-300 bg-clip-text font-black text-transparent text-xl uppercase tracking-wide">
          {lastName}
        </div>
      </div>

      <div className="absolute inset-0 z-20 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />

      <div className="absolute inset-0 z-20 translate-y-[-100%] bg-gradient-to-b from-transparent via-jax-teal/5 to-transparent transition-transform duration-1500 ease-out group-hover:translate-y-[100%]" />

      <div className="-z-10 absolute inset-0 rounded-2xl bg-gradient-to-r from-jax-teal/50 via-jax-gold/50 to-jax-brown/50 opacity-0 blur-sm transition-all duration-500 group-hover:animate-pulse group-hover:opacity-100 group-hover:blur-md" />
    </button>
  );
}
