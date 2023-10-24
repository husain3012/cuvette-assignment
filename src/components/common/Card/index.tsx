import React from "react";
import classes from "./card.module.css";
const Card = (props: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${classes["card"]} ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default Card;
