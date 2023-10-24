import React from "react";
import classes from "./sidebar.module.css";
import { CgLoadbarSound } from "react-icons/cg";
import { PiMedalThin } from "react-icons/pi";
import { AiOutlineFile } from "react-icons/ai";

const menu_items = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <CgLoadbarSound />,
  },
  {
    title: "Skill Test",
    link: "/",
    icon: <PiMedalThin />,
  },
  {
    title: "Internships",
    link: "/internships",
    icon: <AiOutlineFile />,
  },
];
const SideBar = () => {
  return (
    <div className={classes["main"]}>
      {menu_items.map((item) => (
        <div key={item.link} className={classes["item"]}>
          {item.icon}
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
