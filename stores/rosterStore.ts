import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import type { PlayerPosition, Roster } from '@/types/player';

interface RosterStore {
  roster: Roster;
  actions: {
    addPlayer: (playerId: string, position: PlayerPosition) => void;
    removePlayer: (playerId: string, position: PlayerPosition) => void;
    replacePlayer: (
      oldPlayerId: string,
      newPlayerId: string,
      position: PlayerPosition
    ) => void;
  };
}

const useRosterStore = create<RosterStore>((set) => ({
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
  actions: {
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
  },
}));

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
  useRosterStore(useShallow((state) => state.actions));
