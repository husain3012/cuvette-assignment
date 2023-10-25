import Card from "../../common/Card";
import classes from "./quickStatistics.module.css";
import { IStatistics } from "../../../types";
import RankIcon from "../../../assets/rank-icon.png";
import PercentileIcon from "../../../assets/percentile-icon.png";
import CorrectIcon from "../../../assets/correct-icon.png";

const QuickStatistics = (statistics: IStatistics) => {
  return (
    <Card className={classes["main"]}>
      <h2 className={classes["heading"]}>Quick Statistics</h2>
      <div className={classes["stats"]}>
        <StatCard
          statIcon={RankIcon}
          statName="Rank"
          statValue={statistics.rank.toLocaleString()}
        />
        <StatCard
          statIcon={PercentileIcon}
          statName="Percentile"
          statValue={`${statistics.percentile}%`}
        />
        <StatCard
          statIcon={CorrectIcon}
          statName="Correct Answers"
          statValue={`${statistics.correct}/${statistics.total}`}
        />
      </div>
    </Card>
  );
};

const StatCard = ({
  statIcon,
  statName,
  statValue,
}: {
  statIcon: string;
  statName: string;
  statValue: string | number;
}) => {
  return (
    <div className={classes["stat-card"]}>
        
      <div className={classes["stat-icon"]} >
      <img
        alt={statName}
        src={statIcon}
        width={32}
      />
      </div>
    
      <div className={classes["stat-card-info"]}>
        <span className={classes["stat-value"]}>{statValue}</span>
        <span className={classes["stat-name"]}>{statName}</span>
      </div>
    </div>
  );
};

export default QuickStatistics;
