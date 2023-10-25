import classes from "./comparisonGraph.module.css";

import Card from "../../common/Card";
import {
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ComposedChart,
  Bar,
} from "recharts";
import { IComparisonGraph, IStatistics } from "../../../types";

const ComparisonGraph = (
  comparisonGraphData: IComparisonGraph & IStatistics
) => {
  const userPercentile = comparisonGraphData.percentile;
  const maxNumber = comparisonGraphData.data.reduce(
    (a, d) => Math.max(a, d.number),
    0
  );
  console.log(maxNumber);
  let graphData = comparisonGraphData.data.map((d) => ({ ...d, you: 0 }));
  const percentileExists = graphData.findIndex(
    (x) => x.percentile == userPercentile
  );
  if (percentileExists != -1) {
    graphData = graphData.map((d, i) =>
      i == percentileExists ? { ...d, you: maxNumber } : { ...d }
    );
  } else {
    const allLower = comparisonGraphData.data
      .filter((x) => x.percentile < userPercentile)
      .map((d) => d.percentile);
    const allUpper = comparisonGraphData.data
      .filter((x) => x.percentile > userPercentile)
      .map((d) => d.percentile);

    const lowerBound = Math.max(...allLower);
    const upperBound = Math.min(...allUpper);

    graphData.push({
      percentile: userPercentile,
      you: maxNumber,
      number: Math.floor((lowerBound + upperBound) / 2),
    });
  }
  return (
    <Card className={classes["main"]}>
      <h2 className={classes["heading"]}>Comparison Graph</h2>

      <p className={classes["analysis"]}>
        <span className={classes["bold"]}>
          You scored {comparisonGraphData.percentile}%
        </span>{" "}
        which is{" "}
        {comparisonGraphData.percentile < comparisonGraphData.averagePercentile
          ? "lower"
          : "higher"}{" "}
        than average percentile {comparisonGraphData.averagePercentile}% of all
        the engineers who took the test.
      </p>
      <div className={classes["chart-container"]}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={graphData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="percentile"
              unit={"%"}
              type="number"
              tickCount={6}
            />
            <Tooltip content={CustomTooltip} />
            <ReferenceLine
              x={comparisonGraphData.percentile}
              label="You are here"
              stroke="#3F3A66"
            />
            <Line
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={false}
            />
            <Bar dataKey="you" barSize={40} fill="#413ea0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { number, percentile, you } = payload[0].payload;


    return (
      <div className={classes["tooltip"]}>
        <p className={classes["value"]}>{`${percentile}% Percentile`}</p>
        <p className={classes["label"]}>
          {you > 0 ? "Your Score" : `${number} engineers`}
        </p>
      </div>
    );
  }

  return null;
};

export default ComparisonGraph;
