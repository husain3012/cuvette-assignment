import { useEffect, useState } from "react";
import Card from "../../common/Card";
import classes from "./questionAnalysis.module.css";
import { IQuestionAnalysis } from "../../../types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const QuestionAnalysis = (questionAnalysisData: IQuestionAnalysis) => {
  const [correctData, setCorrectData] = useState(0);
  const [totalData, setTotalData] = useState(questionAnalysisData.total);

  const pieChartData = [
    { name: "Correct", value: correctData, color: "#438AF6" },
    {
      name: "Incorrect",
      value: totalData - correctData,
      color: "#438AF633",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCorrectData(questionAnalysisData.correct);
    }, 200);

    setTotalData(questionAnalysisData.total);
  }, [questionAnalysisData.correct, questionAnalysisData.total]);

  return (
    <Card className={classes["main"]}>
      <h2 className={classes["heading"]}>
        Question Analysis
        <span className={classes["questions-ratio"]}>
          {questionAnalysisData.correct}/{questionAnalysisData.total}
        </span>
      </h2>

      <p className={classes["analysis"]}>
        <span className={classes["bold"]}>
          You scored {questionAnalysisData.correct} correct out of{" "}
          {questionAnalysisData.total}.
        </span>{" "}
        {questionAnalysisData.analysis}
      </p>
      <div className={classes["chart-container"]}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400} >
            <Pie
              data={pieChartData}
              dataKey="value"
             
              outerRadius={90}
              innerRadius={60}
              animationDuration={1400}
              paddingAngle={0}
              enableBackground='sax'
        
              
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default QuestionAnalysis;
