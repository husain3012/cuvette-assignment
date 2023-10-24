import React from "react";
import classes from "./skillCard.module.css";
import Card from "../../common/Card";
import { ISkill } from "../../../types";
import dayjs from "dayjs";
import Button from "../../common/Button";

const SkillCard = (skillInfo: ISkill) => {
  return (
    <Card className={classes["main"]}>
      <div className={classes["icon"]}>
        <img alt={skillInfo.skillName} src={skillInfo.skillIcon} width={32} />
      </div>
      <div className={classes["skill-info"]}>
        <h2 className={classes["skill-name"]}>{skillInfo.skillName}</h2>
        <p className={classes["skill-description"]}>
          <span>Questions: {skillInfo.numberOfQuestions}</span>
          <span> | Duration: {skillInfo.duration} mins</span>
          {skillInfo.submittedOn && (
            <span>
              {" "}
              | Submitted On:{" "}
              {dayjs(skillInfo.submittedOn).format("DD MMMM YYYY")}
            </span>
          )}
        </p>
      </div>

      <Button className={classes["update-btn"]} styletype="primary">
        Update
      </Button>
    </Card>
  );
};

export default SkillCard;
