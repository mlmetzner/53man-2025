import { PlayerCard } from '@/components/player/player-card';
import { api } from '@/trpc/server';

export default async function Home() {
  const players = await api.players.getPlayersByPosition('DB');
  console.log(players);
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        {players.map((player) => (
          <PlayerCard key={player.playerId} {...player} />
        ))}
      </main>
    </div>
  );
}
