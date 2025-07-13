import { Age } from './age';

export function PlayerName({
  playerName,
  depthChartPosition,
  jerseyNumber,
  birthDate,
}: {
  playerName: string;
  depthChartPosition: string;
  jerseyNumber: number;
  birthDate: string;
}) {
  return (
    <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center gap-2">
      <div className="flex flex-col gap-1">
        <div className="truncate font-bold text-base text-white md:text-lg">
          {playerName}
        </div>
      </div>
      <div className="mx-auto grid grid-cols-3 items-center gap-2">
        <span>Pos.</span>
        <span>#</span>
        <span>Age</span>
        <span className="rounded-full bg-gradient-to-r from-jax-teal to-jax-teal/90 px-3 py-1 font-bold text-xs uppercase tracking-wider shadow-md">
          {depthChartPosition}
        </span>
        <span className="rounded-full bg-gradient-to-r from-gray-700 to-gray-600 px-3 py-1 font-black text-xs shadow-md">
          {jerseyNumber}
        </span>
        <Age birthdayTimestamp={Number(birthDate)} />
      </div>
    </div>
  );
}
