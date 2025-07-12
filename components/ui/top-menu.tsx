import Link from 'next/link';
import type { PlayerPosition } from '@/types/player';

const Positions: {
  label: PlayerPosition;
  value: string;
}[] = [
  {
    label: 'DB',
    value: 'DB',
  },
  {
    label: 'DL',
    value: 'DL',
  },
  {
    label: 'K',
    value: 'K',
  },
  {
    label: 'LB',
    value: 'LB',
  },
  {
    label: 'LS',
    value: 'LS',
  },
  {
    label: 'OL',
    value: 'OL',
  },
  {
    label: 'P',
    value: 'P',
  },
  {
    label: 'QB',
    value: 'QB',
  },
  {
    label: 'RB',
    value: 'RB',
  },
  {
    label: 'TE',
    value: 'TE',
  },
  {
    label: 'WR',
    value: 'WR',
  },
];

export function TopMenu() {
  return (
    <nav className="flex items-center justify-between bg-black p-4 ">
      <div className="mx-auto flex items-center gap-4">
        {Positions.map((position) => (
          <Link
            className="font-extrabold text-bold text-gray-500 text-xl hover:text-gray-700"
            href={`#${position.value}`}
            key={position.value}
          >
            {position.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
