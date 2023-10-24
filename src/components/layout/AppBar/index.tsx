import UserInfo from "./UserInfo";
import classes from "./appBar.module.css";
import cuvetteLogo from "/logo.png";

const user = {
  name: "Husain Shahid Rao",
  avatar: "https://i.pravatar.cc/256",
};

const AppBar = () => {
  return (
    <nav className={classes["container"]}>
      <div className={classes["logo"]}>
        <img alt="cuvette-logo" src={cuvetteLogo} width={100} />
      </div>
      <div className={classes["user-info"]}>
        {/* <UserInfo name={user.name} avatar={user.avatar} /> */}
      </div>
    </nav>
  );
};

export default AppBar;
