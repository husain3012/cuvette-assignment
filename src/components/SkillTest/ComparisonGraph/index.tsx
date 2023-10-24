import React from "react";
import classes from "./comparisonGraph.module.css";

import Card from "../../common/Card";
import {
  LineChart,
  Line,
  XAxis,
  
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IComparisonGraph } from "../../../types";

const data = [
  {
    percentile: "0%",
    number: 3,
  },
  {
    percentile: "20%",
    number: 41,
  },
  {
    percentile: "40%",
    number: 24,
  },
  {
    percentile: "60%",
    number: 87,
  },
  {
    percentile: "80%",

    number: 24,
  },
  {
    percentile: "100%",
    number: 8,
  },
];

const ComparisonGraph = (comparisonGraphData: IComparisonGraph) => {
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
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="percentile" />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ComparisonGraph;
