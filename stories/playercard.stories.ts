import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { PlayerCard } from '@/components/player/player-card';
import type { PlayerProps } from '@/types/player';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'PlayerCard/QB',
  component: PlayerCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof PlayerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const QBStory: Story = {
  args: {
    team: 'JAX',
    position: 'QB',
    depthChartPosition: 'QB',
    jerseyNumber: 16,
    status: 'ACT',
    playerName: 'Trevor Lawrence',
    firstName: 'Trevor',
    lastName: 'Lawrence',
    birthDate: '939168000000',
    height: 78,
    weight: 220,
    college: 'Clemson',
    playerId: '00-0036971',
    headshotUrl:
      'https://static.www.nfl.com/image/upload/f_auto,q_auto/league/ftznnho2rk2xzrculbob',
    yearsExp: 4,
    entryYear: 2021,
    rookieYear: 2021,
    draftClub: 'JAX',
    draftNumber: 1,
  } satisfies PlayerProps,
};
