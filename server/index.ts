import { playersRouter } from './routers/players';
import { createCallerFactory, createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  players: playersRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
