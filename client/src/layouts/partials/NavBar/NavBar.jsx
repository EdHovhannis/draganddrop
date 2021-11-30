import React, { useContext } from "react";
import { ActionsContext } from "../../../context/ActionsContext";
import cls from "classnames";
import styles from "./NavBar.module.css";
import { Menu } from "./Menu/Menu";

export const NavBar = ({ gridposition }) => {
  const { allowtoolbar, setAllowtoolbar, setAllowframetools } =
    useContext(ActionsContext);

  const allowtoolbarhandler = () => {
    setAllowtoolbar(!allowtoolbar);
    setAllowframetools(false);
  };

  return (
    <nav className={cls(gridposition, styles.navbar)}>
      <div className={styles.logo}>
        <span>
          Drag
          <span> & </span>
          Drop
        </span>
      </div>

      <Menu gridposition={styles.menu} />

      <div className={styles.addbtn}>
        <i
          className={cls("fas fa-plus-square", {
            [styles.activedtoolbarbtn]: allowtoolbar,
          })}
          onClick={allowtoolbarhandler}
        ></i>
      </div>
    </nav>
  );
};
