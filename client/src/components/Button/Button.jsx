import React from "react";
import styles from "./Button.module.css";
import cls from "classnames";

export const Button = ({ children, way, ...props }) => {
  switch (way) {
    case "navbtn":
      return (
        <button className={cls(styles.navbtn)} {...props}>
          {children}
        </button>
      );
    default:
      break;
  }
};
