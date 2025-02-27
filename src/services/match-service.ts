const BASE_URL = "https://app.ftoyd.com/fronttemp-service";

export type Match = {
  status: MatchStatus;
  homeScore: number;
  awayScore: number;
  awayTeam: Team;
  homeTeam: Team;
  title: string;
  time: string;
};

export type Team = {
  total_kills: number;
  players: Player[];
  points: number;
  place: number;
  name: string;
};

export type MatchStatus = "Scheduled" | "Finished" | "Ongoing";

export type Player = {
  username: string;
  kills: number;
};

export const getMatches = async () =>
  fetch(`${BASE_URL}/fronttemp`)
    .then((response) => response.json())
    .then((result) => result.data.matches as Match[]);
