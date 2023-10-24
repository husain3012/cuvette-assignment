import React from "react";
import classes from "./syllabusWiseAnalysis.module.css";
import Card from "../../common/Card";

import { ISyllabusAnalysis, ISyllabusTopic } from "../../../types";
import ProgressBar from "../../common/ProgressBar";

const SyllabusWiseAnalysis = (syllabusAnalysis: ISyllabusAnalysis) => {
  return (
    <Card className={classes["main"]}>
      <h2 className={classes["heading"]}>Syllabus wise Analysis</h2>
      <div className={classes["topic-list"]}>
        {syllabusAnalysis.topics.map((topic) => (
          <TopicAnalysis key={topic.topic} {...topic} />
        ))}
      </div>
    </Card>
  );
};

const TopicAnalysis = (topic: ISyllabusTopic) => {
  return (
    <div className={classes["topic-card"]}>
      <h3 className={classes["topic-name"]}>{topic.topic}</h3>
      <div className={classes["progress-bar"]}>
        <ProgressBar progress={topic.percentage} total={100} thumbColor={topic.color}  trackColor={topic.color + "33"} />
        <span className={classes['progress-label']} style={{
          color:topic.color
        }}>{topic.percentage}%</span>
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;
