import { useEffect, useState } from "react";
import Page from "../../components/common/Page";
import classes from "./skillTest.module.css";
import SkillCard from "../../components/SkillTest/SkillCard";
import QuickStatistics from "../../components/SkillTest/QuickStatistics";
import ComparisonGraph from "../../components/SkillTest/ComparisonGraph";
import SyllabusWiseAnalysis from "../../components/SkillTest/SyllabusWiseAnalysis";
import QuestionAnalysis from "../../components/SkillTest/QuestionAnalysis";
import { IComparisonGraph, IQuestionAnalysis, IStatistics } from "../../types";

import {
  fetchUserStats,
  getGraphData,
  getQuestionAnalysisData,
  getSkillData,
  getSyllabusAnalysis,
} from "../../helpers/getData";

const skill_data = getSkillData();
const syllabus_data = getSyllabusAnalysis();

const SkillTest = () => {
  const [skillTestData, setSkillTestData] = useState<IStatistics | null>(null);

  const updateScores = ({
    rank,
    percentile,
    currentScore,
  }: {
    rank?: number;
    percentile?: number;
    currentScore?: number;

  }) => {
    setSkillTestData((prev) => {
      return {
        rank: rank || prev?.rank,
        correct: currentScore || prev?.correct,
        percentile: percentile || prev?.percentile,
        total: prev?.total,
      };
    });
  };

  useEffect(() => {
    setSkillTestData(fetchUserStats())
  }, []);

  const comparison_graph_data: IComparisonGraph = getGraphData(skillTestData);

  const question_analysis_data: IQuestionAnalysis =
    getQuestionAnalysisData(skillTestData);

  return (
    <Page pageTitle="Skill Test">
      <div className={classes["main"]}>
        <div className={classes["first-column"]}>
          <SkillCard
            {...skill_data}
            {...skillTestData}
            updateScores={updateScores}
          />
          {skillTestData && <QuickStatistics {...skillTestData} />}
          <ComparisonGraph {...comparison_graph_data} {...skillTestData} />
        </div>
        <div className={classes["second-column"]}>
          <SyllabusWiseAnalysis {...syllabus_data} />
          <QuestionAnalysis {...question_analysis_data} />
        </div>
      </div>
    </Page>
  );
};

export default SkillTest;
