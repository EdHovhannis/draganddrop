import React from "react";
import styles from "./Resizers.module.css";
import cls from "classnames";

export const Resizers = () => {
  return (
    <div className={cls(styles.resizers)}>
      <div
        className={cls(styles.resizer, styles.top_left)}
        id="topleft"
      ></div>
      <div
        className={cls(styles.resizer, styles.top_right)}
        id="topright"
      ></div>
      <div
        className={cls(styles.resizer, styles.bottom_left)}
        id="bottomleft"
      ></div>
      <div
        className={cls(styles.resizer, styles.bottom_right)}
        id="bottomright"
      ></div>
    </div>
  );
};
