import React from "react";
import Page from "../../components/common/Page";
import classes from "./skillTest.module.css";
import Card from "../../components/common/Card";
import SkillCard from "../../components/SkillTest/SkillCard";
import QuickStatistics from "../../components/SkillTest/QuickStatistics";
import ComparisonGraph from "../../components/SkillTest/ComparisonGraph";
import SyllabusWiseAnalysis from "../../components/SkillTest/SyllabusWiseAnalysis";
import QuestionAnalysis from "../../components/SkillTest/QuestionAnalysis";
import {
  IComparisonGraph,
  IQuestionAnalysis,
  ISkill,
  IStatistics,
  ISyllabusAnalysis,
} from "../../types";
import dayjs from "dayjs";

const skill_data: ISkill = {
  skillName: "Hypertext Markup Language",
  duration: 15,
  submittedOn: dayjs().subtract(3, "days").toDate(),
  numberOfQuestions: 15,
  skillIcon: "/html5-logo.png",
};

const quick_statistics_data: IStatistics = {
  correct: 7,
  percentile: 37,
  rank: 41414,
  total: 15,
};

const comparison_graph_data: IComparisonGraph = {
  analysis: "",
  averagePercentile: 72,
  percentile: 32,
  data: [],
};

const question_analysis_data:IQuestionAnalysis = {
    analysis:"There is a score of improvement",
    correct:7,
    total:15
}

const syllabus_data: ISyllabusAnalysis = {
  topics: [
    {
      topic: "HTML Tools, Forms, History",
      percentage: 80,
      color: "#438AF6",
    },
    {
      topic: "Tags & References in HTML",
      percentage: 60,
      color: "#FF9142",

    },
    {
      topic: "Tables & CSS Basics",
      percentage: 24,
      color: "#FB5E5E",

    },
    {
      topic: "Tables & CSS Basics",
      percentage: 96,
      color: "#2EC971",

    },
  ],
};
const SkillTest = () => {
  return (
    <Page pageTitle="Skill Test">
      <div className={classes["main"]}>
        <div className={classes["first-column"]}>
          <SkillCard {...skill_data} />

          <QuickStatistics {...quick_statistics_data} />
          <ComparisonGraph {...comparison_graph_data} />
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
