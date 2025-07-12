import createDeepMerge from '@fastify/deepmerge';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';
import type { PlayerPosition, Roster } from '@/types/player';

const deepMerge = createDeepMerge({ all: true });

interface RosterStore {
  roster: Roster;
  addPlayer: (playerId: string, position: PlayerPosition) => void;
  removePlayer: (playerId: string, position: PlayerPosition) => void;
  replacePlayer: (
    oldPlayerId: string,
    newPlayerId: string,
    position: PlayerPosition
  ) => void;
}

const useRosterStore = create<RosterStore>()(
  persist(
    (set) => ({
      roster: {
        DB: [],
        DL: [],
        K: [],
        LB: [],
        LS: [],
        OL: [],
        P: [],
        QB: [],
        RB: [],
        TE: [],
        WR: [],
      },
      totalPlayers: 0,
      addPlayer: (playerId: string, position: PlayerPosition) =>
        set((state) => ({
          roster: {
            ...state.roster,
            [position]: [...state.roster[position], playerId],
          },
        })),
      removePlayer: (playerId: string, position: PlayerPosition) =>
        set((state) => ({
          roster: {
            ...state.roster,
            [position]: state.roster[position].filter((id) => id !== playerId),
          },
        })),
      replacePlayer: (
        oldPlayerId: string,
        newPlayerId: string,
        position: PlayerPosition
      ) =>
        set((state) => ({
          roster: {
            ...state.roster,
            [position]: state.roster[position].map((id) =>
              id === oldPlayerId ? newPlayerId : id
            ),
          },
        })),
    }),
    {
      name: 'roster',
      merge: (persistedState, currentState) =>
        deepMerge(persistedState, currentState),
    }
  )
);

export const useRoster = () =>
  useRosterStore(useShallow((state) => state.roster));

export const useTotalPlayers = () =>
  useRosterStore(
    useShallow((state) =>
      Object.values(state.roster).reduce(
        (acc, position) => acc + position.length,
        0
      )
    )
  );

export const useRosterActions = () =>
  useRosterStore(
    useShallow(() => ({
      addPlayer: useRosterStore.getState().addPlayer,
      removePlayer: useRosterStore.getState().removePlayer,
      replacePlayer: useRosterStore.getState().replacePlayer,
    }))
  );
