import { notFound } from 'next/navigation';
import { PositionGroup } from '@/components/player/position-group';
import { api } from '@/trpc/server';
import type { PlayerPosition } from '@/types/player';

export default async function Home({
  params,
}: {
  params: Promise<{ pos: PlayerPosition }>;
}) {
  const { pos } = await params;
  const players = await api.players.getPlayersByPosition(pos);
  if (!players) {
    notFound();
  }

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="flex grow items-center gap-4" />
      <main className="flex items-center gap-[32px] sm:items-start">
        <PositionGroup players={players} position={pos} />
      </main>
    </div>
  );
}
