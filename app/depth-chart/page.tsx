import { DepthChart } from '@/components/player/depth-chart';
import { api } from '@/trpc/server';

export default async function DepthChartPage() {
  const allPlayers = await api.players.getPlayers();
  return <DepthChart players={allPlayers} />;
}
