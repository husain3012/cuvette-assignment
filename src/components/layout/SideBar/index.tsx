import  { useEffect, useState } from "react";
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
   const [activePage, setActivePage] = useState(window.location.pathname);
  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);
  return (
    <div className={classes["main"]}>
      {menu_items.map((item) => (
        <div onClick={() => setActivePage(item.link)} key={item.link} className={`${activePage==item.link?classes['active']:""} ${classes["item"]}`}>
          {item.icon}
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
