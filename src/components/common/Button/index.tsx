import React from "react";

import classes from "./button.module.css";

const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    styletype?: "primary" | "secondary";
  }
) => {
  return (
    <button
      {...props}
      className={`${classes["button"]} ${
        classes[props.styletype || "primary"] || ""
      }  ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
