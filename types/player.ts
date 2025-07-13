export type PlayerPosition =
  | 'DB'
  | 'DL'
  | 'K'
  | 'LB'
  | 'LS'
  | 'OL'
  | 'P'
  | 'QB'
  | 'RB'
  | 'TE'
  | 'WR';

export type DepthChartPosition =
  | 'C'
  | 'CB'
  | 'DE'
  | 'DT'
  | 'FS'
  | 'G'
  | 'ILB'
  | 'K'
  | 'LB'
  | 'LS'
  | 'OLB'
  | 'P'
  | 'QB'
  | 'RB'
  | 'SS'
  | 'T'
  | 'TE'
  | 'WR';
type PlayerStatus = 'ACT' | 'CUT' | 'E14' | 'RES' | 'U01';

export type PlayerProps = {
  team: string;
  position: PlayerPosition;
  depthChartPosition: DepthChartPosition;
  jerseyNumber: number;
  status: PlayerStatus;
  playerName: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  height: number;
  weight: number;
  college: string;
  headshotUrl: string | undefined;
  playerId: string;
  yearsExp: number;
  entryYear: number;
  rookieYear: number;
  draftClub: string;
  draftNumber: number;
};

export type Roster = {
  [key in PlayerPosition]: {
    playerId: PlayerProps['playerId'];
    depthChartPosition: PlayerProps['depthChartPosition'];
    depthChartValue: number;
  }[];
};
