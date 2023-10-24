import React from "react";

import classes from "./button.module.css";

const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styletype?: "primary" | "secondary";
  }
) => {
  return (
    <button className={`${classes['button']} ${classes[props.styletype || "primary"] || ""}`} {...props}>
      Button
    </button>
  );
};

export default Button;
