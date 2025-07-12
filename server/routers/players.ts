import data from '@/data/players.json' with { type: 'json' };
import type { PlayerProps } from '@/types/player';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const playersRouter = createTRPCRouter({
  getPlayers: publicProcedure.query(() => {
    return data as unknown as PlayerProps[];
  }),
});
