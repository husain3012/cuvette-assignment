import AppBar from "./AppBar";
import classes from "./layout.module.css";
import SideBar from "./SideBar";
const Layout = ({ children }: { children?: React.ReactNode }) => {
 
  return (
    <div className={classes["main"]}>
      <div className={classes["app-bar"]}>
        
        <AppBar />
      </div>
      <div className={classes["body"]}>
        <div className={classes["side-bar"]}>
          <SideBar  />
        </div>
        <div className={classes["content"]}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
