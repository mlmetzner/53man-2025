import createDeepMerge from '@fastify/deepmerge';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';
import type {
  DepthChartPosition,
  PlayerPosition,
  PlayerProps,
  Roster,
} from '@/types/player';

const deepMerge = createDeepMerge({ all: true });

interface RosterStore {
  roster: Roster;
  addPlayer: (
    playerId: string,
    position: PlayerPosition,
    depthChartPosition: DepthChartPosition
  ) => void;
  removePlayer: (
    playerId: string,
    position: PlayerPosition,
    depthChartPosition: DepthChartPosition
  ) => void;

  swapPlayers: (
    player1: PlayerProps['playerId'],
    player2: PlayerProps['playerId'],
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
      addPlayer: (
        playerId: string,
        position: PlayerPosition,
        depthChartPosition: DepthChartPosition
      ) =>
        set((state) => {
          const depthChartValue =
            state.roster[position].filter(
              (player) => player.depthChartPosition === depthChartPosition
            ).length + 1;
          return {
            roster: {
              ...state.roster,
              [position]: [
                ...state.roster[position],
                { playerId, depthChartPosition, depthChartValue },
              ],
            },
          };
        }),
      removePlayer: (
        playerId: string,
        position: PlayerPosition,
        depthChartPosition: DepthChartPosition
      ) =>
        set((state) => {
          const playerToRemove = state.roster[position].find(
            (player) => player.playerId === playerId
          );
          if (!playerToRemove) {
            return state;
          }
          const newRoster = state.roster[position]
            .filter(
              (player) =>
                player.depthChartPosition === depthChartPosition &&
                player.playerId !== playerId
            )
            .map((player) => {
              return {
                ...player,
                depthChartValue:
                  player.depthChartValue > playerToRemove.depthChartValue
                    ? player.depthChartValue - 1
                    : player.depthChartValue,
              };
            });
          const oldRoster = state.roster[position].filter(
            (player) => player.depthChartPosition !== depthChartPosition
          );
          const finalRoster = [...oldRoster, ...newRoster];
          return {
            roster: {
              ...state.roster,
              [position]: finalRoster,
            },
          };
        }),
      swapPlayers: (
        player1: PlayerProps['playerId'],
        player2: PlayerProps['playerId'],
        position: PlayerPosition
      ) =>
        set((state) => ({
          roster: {
            ...state.roster,
            [position]: state.roster[position].map((player) => {
              if (player.playerId === player1) {
                return { ...player, playerId: player2 };
              }
              if (player.playerId === player2) {
                return { ...player, playerId: player1 };
              }
              return player;
            }),
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
      swapPlayers: useRosterStore.getState().swapPlayers,
    }))
  );
