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
    <main className="flex items-center gap-[32px] px-2 md:px-20 ">
      <PositionGroup players={players} position={pos} />
    </main>
  );
}
