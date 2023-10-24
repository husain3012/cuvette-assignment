import React, { useEffect, useState } from "react";
import classes from "./progressBar.module.css";

const ProgressBar = ({
  total,
  progress,

  trackColor,
  thumbColor,
}: {
  total: number;
  progress: number;

  trackColor?: string;
  thumbColor?: string;
}) => {
  const [currProgress, setCurrProgress] = useState(0);
  const [currTotal, setCurrTotal] = useState(total);
  useEffect(() => {
    setCurrProgress(progress);
    setCurrTotal(total);
  }, [progress, total]);
  return (
    <div
      className={classes["progress-track"]}
      style={{ backgroundColor: trackColor }}
    >
      <div
        className={classes["progress-thumb"]}
        style={{
          backgroundColor: thumbColor,
          width: `${(currProgress / currTotal) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
