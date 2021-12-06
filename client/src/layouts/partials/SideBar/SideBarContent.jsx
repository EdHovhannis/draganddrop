import React from "react";
import cls from "classnames";
import styles from "./SideBar.module.css";
import { sidebarstate } from "../../../locales/sidebarstate";
import { ExampleBtns } from "../../../components/Button/ExampleBtns";

export const SideBarContent = ({ attribute }) => {
  return (
    <>
      <h3 className={cls(styles.title)}>{sidebarstate(attribute)?.title}</h3>
      {sidebarstate(attribute)?.properties.map((exbtns) => (
        <ExampleBtns key={exbtns?.bg + exbtns?.cl} theme={exbtns}>
          {attribute === "buttons" && <button>{exbtns.text}</button>}
          {attribute === "inputs" && (
            <input value={exbtns.text} onChange={() => {}} />
          )}
          {attribute === "texts" && <span>{exbtns.text}</span>}
        </ExampleBtns>
      ))}
    </>
  );
};
