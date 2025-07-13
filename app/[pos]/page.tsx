import { notFound } from 'next/navigation';
import { PositionGroup } from '@/components/player/position-group';
import { NavButtons } from '@/components/ui/nav-buttons';
import { positions } from '@/helpers/postions';
import { api } from '@/trpc/server';
import type { PlayerPosition } from '@/types/player';

export default async function PositionPage({
  params,
}: {
  params: Promise<{ pos: PlayerPosition }>;
}) {
  const { pos } = await params;
  if (!positions.some((position) => position.value === pos)) {
    notFound();
  }

  const players = await api.players.getPlayersByPosition(pos);
  if (!players) {
    notFound();
  }

  return (
    <div className="flex grow flex-col items-center justify-between gap-[32px] px-2 md:px-20 ">
      <PositionGroup players={players} position={pos} />
      <NavButtons currentPosition={pos} />
    </div>
  );
}
