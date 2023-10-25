import React, { useEffect, useState } from "react";
import classes from "./skillCard.module.css";
import Card from "../../common/Card";
import { ISkill, IStatistics } from "../../../types";
import dayjs from "dayjs";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import { CgArrowRight } from "react-icons/cg";
import Input from "../../common/Input";

const SkillCard = (
  skillInfo: ISkill & {
    updateScores: ({
      rank,
      percentile,
      currentScore,
    }: {
      rank?: number;
      percentile?: number;
      currentScore?: number;
    }) => void;
  } & IStatistics
) => {
  const [scoresModalOpen, setScoresModalOpen] = useState(false);

  const [rank, setRank] = useState(skillInfo.rank);
  const [percentile, setPercentile] = useState(skillInfo.percentile);
  const [correct, setCorrect] = useState(skillInfo.correct);

  useEffect(() => {
    setRank(skillInfo.rank);
    setPercentile(skillInfo.percentile);
    setCorrect(skillInfo.correct);
  }, [skillInfo.correct, skillInfo.percentile, skillInfo.rank]);
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

      <Button
        className={classes["update-btn"]}
        styletype="primary"
        onClick={() => setScoresModalOpen(true)}
      >
        Update
      </Button>
      <Modal
        isOpen={scoresModalOpen}
        modalIcon={
          <img alt={skillInfo.skillName} src={skillInfo.skillIcon} width={32} />
        }
        cancelText="Cancel"
        okText={
          <span style={{ display: "flex", alignItems: "center", gap: "1ch" }}>
            Save <CgArrowRight />
          </span>
        }
        handleClose={() => setScoresModalOpen(false)}
        title="Update Scores"
        handleOk={() => {
          skillInfo.updateScores({
            rank: rank,
            percentile: percentile,
            currentScore: correct,
          });
          setScoresModalOpen(false);
          
        }}
      >
        <ul className={classes["update-form"]}>
          <li className={classes["update-form-item"]}>
            <div className={classes["update-form-desc"]}>
              <div className={classes["update-form-number"]}>1</div>{" "}
              <div className={classes["update-form-text"]}>
                Update your{" "}
                <span className={classes["update-form-highlighted"]}>rank</span>
              </div>
            </div>
            <Input
            
              type="number"
              value={rank}
              onChange={(v) => setRank(parseInt(v.target.value))}
              min={1}
            />
          </li>
          <li className={classes["update-form-item"]}>
            <div className={classes["update-form-desc"]}>
              <div className={classes["update-form-number"]}>2</div>{" "}
              <div className={classes["update-form-text"]}>
                Update your{" "}
                <span className={classes["update-form-highlighted"]}>
                  percentile
                </span>
              </div>
            </div>
            <Input
            width={'5em'}
              type="number"
              value={percentile}
              onChange={(v) => setPercentile(parseFloat(v.target.value))}
              max={100}
              min={0}
            />
          </li>
          <li className={classes["update-form-item"]}>
            <div className={classes["update-form-desc"]}>
              <div className={classes["update-form-number"]}>3</div>{" "}
              <div className={classes["update-form-text"]}>
                Update your{" "}
                <span className={classes["update-form-highlighted"]}>
                  current score out of {skillInfo.numberOfQuestions}
                </span>
              </div>
            </div>

            <Input
              type="number"
              value={correct}
              onChange={(v) => setCorrect(parseInt(v.target.value))}
              max={skillInfo.total}
              min={0}
            />
          </li>
        </ul>
      </Modal>
    </Card>
  );
};

export default SkillCard;
