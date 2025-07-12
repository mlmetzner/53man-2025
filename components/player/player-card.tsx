import Image from 'next/image';
import type { PlayerProps } from '@/types/player';

export function PlayerCard({
  depthChartPosition,
  firstName,
  lastName,
  headshotUrl,
  jerseyNumber,
}: PlayerProps) {
  return (
    <div className="group relative flex h-72 w-64 flex-col gap-4 overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,var(--color-jax-teal),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_20%_50%,var(--color-jax-teal),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,var(--color-jax-gold),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_80%_20%,var(--color-jax-gold),transparent_50%)]" />
      </div>

      <div className="absolute top-4 right-4 font-black text-6xl text-white/5 transition-all duration-300 group-hover:text-white/10">
        {jerseyNumber}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-full border-2 border-jax-brown bg-gradient-to-br from-white/10 to-white/5 p-1 transition-all duration-300 group-hover:border-jax-teal">
          <Image
            alt={`${firstName} ${lastName}'s headshot`}
            className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
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

      <div className="absolute inset-0 z-20 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />

      <div className="-z-10 absolute inset-0 rounded-2xl bg-gradient-to-r from-jax-teal/50 via-jax-gold/50 to-jax-brown/50 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
