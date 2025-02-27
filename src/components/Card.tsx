import { FC } from "react";

import { MatchStatus, Team } from "../services/match-service";
import { StatusSection } from "./StatusSection";

type CardProps = {
  status: MatchStatus;
  awayTeam: Team;
  homeTeam: Team;
};

export const Card: FC<CardProps> = ({ awayTeam, homeTeam, status }) => (
  <div className="flex justify-between items-center p-3 w-full bg-grey-500 font-semibold text-base rounded-4 py-16 px-36">
    <div className="py-14 leading-20">{homeTeam.name}</div>
    <StatusSection homeScore={homeTeam.points} awayScore={awayTeam.points} status={status} />
    <div className="py-14 leading-20">{awayTeam.name}</div>
  </div>
);
