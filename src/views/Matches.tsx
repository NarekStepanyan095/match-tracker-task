import { useEffect, useState, FC } from "react";
import classNames from "classnames";

import { getMatches, Match } from "../services/match-service";
import { Card } from "../components/Card";

export const Matches: FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMatches = async () => {
    setError(false);
    setIsLoading(true);

    try {
      const result = await getMatches();
      setMatches(result);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  };

  const handleRefreshClick = () => {
    if (!isLoading && !isRefreshing) {
      setIsRefreshing(true);
      fetchMatches();
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="flex flex-col px-42 pt-42 text-white w-screen gap-20 relative">
      {(isLoading || isRefreshing) && (
        <div className="fixed w-full h-full z-10 top-0 left-0 bg-[rgba(0,0,0,0.3)]">
          <img
            className="absolute top-1/2 left-1/2 w-1/12 h-1/12 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-spin"
            src="public/assets/refresh.svg"
            alt="loader"
          />
        </div>
      )}
      <div className="flex justify-between items-center">
        <span className="font-[Tactic_Sans] italic font-normal text-[32px] leading-32 my-12 rounded-circle">
          Match Tracker
        </span>
        <div className="flex items-center font-medium text-[18px] leading-22 gap-x-12">
          {error && (
            <div className="flex justify-center items-center gap-x-10 bg-grey-600 py-16 px-24 rounded-4">
              <img src="public/assets/alert-triangle.svg" alt="alert" />
              <p>Ошибка: не удалось загрузить информацию</p>
            </div>
          )}
          <button
            className="flex justify-center items-center gap-x-10 bg-primary-500 px-40 py-16 rounded-4 text-[18px] font-semibold leading-22 hover:bg-primary-600 disabled:bg-primary-700 disabled:text-[#787878]"
            onClick={handleRefreshClick}
            disabled={isRefreshing}
          >
            Обновить
            <img
              className={classNames("group-disabled:fill-[#787878]", { "animate-spin": isRefreshing })}
              src="public/assets/refresh.svg"
              alt="refresh"
            />
          </button>
        </div>
      </div>
      <div className="grid gap-12">
        {matches.map((item) => (
          <Card homeTeam={item.homeTeam} awayTeam={item.awayTeam} status={item.status} key={item.title} />
        ))}
      </div>
    </div>
  );
};
