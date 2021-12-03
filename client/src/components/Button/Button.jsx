import React from "react";
import styles from "./Button.module.css";
import cls from "classnames";

export const Button = ({ children, way, className, atr, ...props }) => {
  switch (way) {
    case "navbtn":
      return (
        <button className={cls(styles.navbtn, className)} atr={atr} {...props}>
          {children}
        </button>
      );
    default:
      break;
  }
};
