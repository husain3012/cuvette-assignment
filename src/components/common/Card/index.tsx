import React from "react";
import classes from './card.module.css'
const Card = (props: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div className={classes['card']} {...props}>{props.children}</div>;
};

export default Card;
