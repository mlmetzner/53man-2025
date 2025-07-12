'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PlayerPosition } from '@/types/player';
import { TotalPlayers } from '../player/total-players';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

export const Positions: {
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
  const pathname = usePathname();
  return (
    <nav className="flex w-full flex-wrap items-center justify-between bg-black p-4">
      <div className="mx-auto hidden items-center gap-4 md:flex">
        {Positions.map((position) => (
          <Link
            className={`font-extrabold text-bold text-gray-500 text-xl hover:text-gray-700 ${
              pathname === `/${position.value}` ? 'text-jax-teal' : ''
            }`}
            href={`/${position.value}`}
            key={position.value}
          >
            {position.label}
          </Link>
        ))}
        <Link
          className={`font-extrabold text-bold text-gray-500 text-xl hover:text-gray-700 ${
            pathname === '/depth-chart' ? 'text-jax-teal' : ''
          }`}
          href="/depth-chart"
        >
          Depth Chart
        </Link>
      </div>
      <TotalPlayers />

      <MobileMenu activePosition={pathname} />
    </nav>
  );
}

export function MobileMenu({ activePosition }: { activePosition: string }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex flex-row items-center gap-4 md:hidden">
        <MenuIcon className="h-6 w-6 text-gray-500" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-4 p-4 text-center">
          {Positions.map((position) => (
            <Link
              className={`font-extrabold text-bold text-gray-500 text-xl transition-all duration-300 hover:cursor-pointer hover:text-gray-700 ${
                activePosition === `/${position.value}` ? 'text-jax-teal' : ''
              }`}
              href={`/${position.value}`}
              key={position.value}
            >
              {position.label}
            </Link>
          ))}
          <Link
            className={`font-extrabold text-bold text-gray-500 text-xl transition-all duration-300 hover:cursor-pointer hover:text-gray-700 ${
              activePosition === '/depth-chart' ? 'text-jax-teal' : ''
            }`}
            href="/depth-chart"
          >
            Depth Chart
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
