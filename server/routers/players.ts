import z from 'zod';
import data from '@/data/players.json' with { type: 'json' };
import type { PlayerProps } from '@/types/player';
import { createTRPCRouter, publicProcedure } from '../trpc';

const positionEnum = z.enum([
  'DB',
  'DL',
  'K',
  'LB',
  'LS',
  'OL',
  'P',
  'QB',
  'RB',
  'TE',
  'WR',
]);

export const playersRouter = createTRPCRouter({
  getPlayers: publicProcedure.query(() => {
    return data as unknown as PlayerProps[];
  }),

  getPlayersByPosition: publicProcedure
    .input(positionEnum)
    .query(({ input }) => {
      return data.filter(
        (player) => player.position === input
      ) as unknown as PlayerProps[];
    }),
});
