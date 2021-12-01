import React, { useContext } from "react";
import cls from "classnames";
import styles from "./Temp.module.css";
import { ContentContext } from "../../context/ContentContext";
import { ActionsContext } from "./../../context/ActionsContext";
import { Resizers } from "../../components/Resizers/Resizers";
import {
  getDataAction,
  updatecurrentframeAction,
} from "../../store/actions/actions";
import { useDispatch } from "react-redux";

export const Temp = () => {
  const dispatch = useDispatch();
  const {
    tempstyle,
    currentframeparams,
    setX,
    setY,
    x,
    y,
    setTempstyle,
    setCurrentframeparams,
    currentframeid,
  } = useContext(ContentContext);
  const { allowresize, allowhandrock } = useContext(ActionsContext);

  const dragingStart = (e) => {
    if (allowhandrock && currentframeparams && !allowresize) {
      console.log("work");
      setX(e.clientX - parseInt(currentframeparams.left));
      setY(e.clientY - parseInt(currentframeparams.top));
    }
  };
  const dragingProgress = (e) => {
    if (x && y && !allowresize) {
      const l = e.clientX - x;
      const t = e.clientY - y;
      setTempstyle({
        ...tempstyle,
        left: `${l}px`,
        top: `${t}px`,
      });
    }
  };
  const dragingFinish = () => {
    if (allowhandrock && currentframeparams && x && y && !allowresize) {
      setX(0);
      setY(0);
      setCurrentframeparams(tempstyle);
      new Promise((resolve) => {
        resolve(dispatch(updatecurrentframeAction(tempstyle, currentframeid)));
      }).then(() => {
        dispatch(getDataAction());
      });
    }
  };

  return (
    <div
      className={cls(styles.temp, { [styles.move]: allowhandrock })}
      style={tempstyle}
      onMouseDown={dragingStart}
      onMouseMove={dragingProgress}
      onMouseUp={dragingFinish}
    >
      {allowresize && <Resizers />}
    </div>
  );
};
