import type { DepthChartPosition, PlayerProps } from '@/types/player';

export function ExportCsv({
  playersByPosition,
}: {
  playersByPosition: Record<DepthChartPosition, PlayerProps[]>;
}) {
  const handleExport = () => {
    const rows: string[][] = [];
    for (const position in playersByPosition) {
      if (playersByPosition[position as DepthChartPosition].length === 0) {
        continue;
      }
      const headers = ['Position', 'Player Name', 'Depth Chart Value', 'Team'];
      rows.push(headers);
      const players = playersByPosition[position as DepthChartPosition].map(
        (player, index) => [
          position,
          String(index + 1),
          player.playerName,
          player.depthChartPosition,
          player.team,
        ]
      );
      rows.push(...players);
    }
    const csv = rows.map((row) => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <button
      className="rounded-md bg-jax-gold px-4 py-2 text-black hover:cursor-pointer hover:bg-jax-gold/80"
      onClick={handleExport}
      type="button"
    >
      Export CSV
    </button>
  );
}
