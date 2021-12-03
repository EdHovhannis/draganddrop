import React, { useContext } from "react";
import styles from "./SideBar.module.css";
import cls from "classnames";
import { ActionsContext } from "../../../context/ActionsContext";
import { SideBarContent } from "./SideBarContent";
import { SideBarContentBox } from "./SideBarContentBox";
import { sidebarstate } from "../../../locale/sidebarstate";

export const SideBar = () => {
  const { allowhtmltagsmenu, setAllowhtmltagsmenu } =
    useContext(ActionsContext);
  const allowclosesidebar = () => {
    setAllowhtmltagsmenu({ ...allowhtmltagsmenu, flag: false });
    setTimeout(() => setAllowhtmltagsmenu({ atr: "", flag: false }), 1200);
    return;
  };
  return (
    <div
      className={cls(styles.sidebar, styles.sidebarshow, {
        [styles.sidebarhide]: allowhtmltagsmenu.flag,
      })}
    >
      <SideBarContentBox
        theme={sidebarstate(allowhtmltagsmenu.atr)?.parentstyle}
      >
        <i
          className={cls("fas fa-times", styles.timesicon)}
          onClick={allowclosesidebar}
        ></i>
        <SideBarContent attribute={allowhtmltagsmenu.atr} />
      </SideBarContentBox>
    </div>
  );
};
