import classNames from "classnames";
import { FC } from "react";

import { MatchStatus } from "../services/match-service";

const STATUS_LABELS = {
  Scheduled: "Match preparing",
  Finished: "Finished",
  Ongoing: "Live",
};

type StatusSectionProps = {
  status: MatchStatus;
  homeScore: number;
  awayScore: number;
};

export const StatusSection: FC<StatusSectionProps> = ({ homeScore, awayScore, status }) => (
  <div className="grid grid-flow-col grid-rows-2 gap-1">
    <div className="flex items-center justify-center text-xl leading-24">
      {homeScore} : {awayScore}
    </div>
    <div>
      <div
        className={classNames("flex justify-center items-center text-xs py-6 px-8 rounded-4 min-w-92", {
          "bg-warning-500": status === "Scheduled",
          "bg-primary-500": status === "Finished",
          "bg-success-500": status === "Ongoing",
        })}
      >
        {STATUS_LABELS[status]}
      </div>
    </div>
  </div>
);
