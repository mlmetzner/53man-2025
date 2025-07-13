'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { positions } from '@/helpers/postions';
import { TotalPlayers } from '../player/total-players';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

export function TopMenu() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-black p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <MobileMenu activePosition={pathname} />
        <div className="hidden items-center gap-4 md:flex">
          {positions.map((position) => (
            <Link
              className={`font-extrabold text-gray-500 text-lg transition-colors hover:text-gray-300 ${
                pathname === `/${position.value}` ? 'text-jax-teal' : ''
              }`}
              href={`/${position.value}`}
              key={position.value}
            >
              {position.label}
            </Link>
          ))}
          <Link
            className={`font-extrabold text-gray-500 text-lg transition-colors hover:text-gray-300 ${
              pathname === '/depth-chart' ? 'text-jax-teal' : ''
            }`}
            href="/depth-chart"
          >
            Depth Chart
          </Link>
        </div>
      </div>

      <TotalPlayers />
    </nav>
  );
}

export function MobileMenu({ activePosition }: { activePosition: string }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-gray-800 md:hidden">
        <MenuIcon className="h-6 w-6 text-gray-300" />
        <span className="font-bold text-gray-300 text-sm">Menu</span>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader className="border-gray-700 border-b text-center">
          <DrawerTitle className="font-bold text-gray-100 text-xl">
            Navigation
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-3 overflow-y-auto p-6">
          <div className="mb-4">
            <h3 className="mb-3 font-semibold text-gray-400 text-sm uppercase tracking-wider">
              Positions
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {positions.map((position) => (
                <Link
                  className={`flex items-center justify-center rounded-lg px-4 py-3 font-bold text-lg transition-all duration-200 hover:scale-105 ${
                    activePosition === `/${position.value}`
                      ? 'bg-jax-teal text-black shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  href={`/${position.value}`}
                  key={position.value}
                >
                  {position.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-gray-700 border-t pt-4">
            <Link
              className={`flex items-center justify-center rounded-lg px-6 py-4 font-bold text-lg transition-all duration-200 hover:scale-105 ${
                activePosition === '/depth-chart'
                  ? 'bg-jax-teal text-black shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              href="/depth-chart"
            >
              Depth Chart
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
