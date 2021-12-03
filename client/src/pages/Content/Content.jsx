import React, { useContext, useEffect } from "react";
import cls from "classnames";
import styles from "./Content.module.css";
import { ActionsContext } from "../../context/ActionsContext";
import { Temp } from "../Temp/Temp";
import { CreatedFrames } from "../Created/CreatedFrames";
import { ContentContext } from "../../context/ContentContext";
import {
  createDataAction,
  getDataAction,
  updatecurrentframeAction,
} from "./../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

export const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  const { data } = useSelector((state) => state?.getDataReducer);

  const {
    allowcreateframe,
    setAllowcreateframe,
    temphide,
    setTempHide,
    allowresize,
  } = useContext(ActionsContext);

  const {
    tempstyle,
    setTempstyle,
    setX,
    setY,
    x,
    y,
    currentframeparams,
    setCurrentframeparams,
    currentframeid,
  } = useContext(ContentContext);

  const createFrameStart = (e) => {
    if (allowcreateframe) {
      setX(e.clientX);
      setY(e.clientY);
      const left = e.nativeEvent.offsetX;
      const top = e.nativeEvent.offsetY;
      setTempstyle({
        ...tempstyle,
        top: `${top}px`,
        left: `${left}px`,
      });
    }
    if (allowresize && currentframeparams) {
      setX(e.clientX);
      setY(e.clientY);
    }
    return;
  };
  const createFrameProgress = (e) => {
    if (allowcreateframe) {
      const left = parseInt(tempstyle.left) > 0;
      const top = parseInt(tempstyle.top) > 0;
      if (left > 0 || top > 0) {
        const width = Math.abs(x - e.clientX);
        const height = Math.abs(y - e.clientY);
        setTempstyle({
          ...tempstyle,
          width: `${width}px`,
          height: `${height}px`,
        });
      }
    }
    if (allowresize && currentframeparams && x && y) {
      const id = e.target.id;
      if (id === "topleft") {
        const w = parseInt(currentframeparams.width) - (e.clientX - x);
        const h = parseInt(currentframeparams.height) - (e.clientY - y);
        const l = parseInt(currentframeparams.left) + (e.clientX - x);
        const t = parseInt(currentframeparams.top) + (e.clientY - y);
        setTempstyle({
          ...tempstyle,
          width: `${w}px`,
          height: `${h}px`,
          left: `${l}px`,
          top: `${t}px`,
        });
      }
      if (id === "topright") {
        const w = parseInt(currentframeparams?.width) + (e.clientX - x);
        const h = parseInt(currentframeparams?.height) - (e.clientY - y);
        const t = parseInt(currentframeparams?.top) + (e.clientY - y);
        setTempstyle({
          ...tempstyle,
          width: `${w}px`,
          height: `${h}px`,
          left: currentframeparams?.left,
          top: `${t}px`,
        });
      }
      if (id === "bottomleft") {
        const h = parseInt(currentframeparams?.height) + (e.clientY - y);
        const w = parseInt(currentframeparams?.width) - (e.clientX - x);
        const l = parseInt(currentframeparams?.left) + (e.clientX - x);
        setTempstyle({
          ...tempstyle,
          width: `${w}px`,
          height: `${h}px`,
          left: `${l}px`,
          top: currentframeparams?.top,
        });
      }
      if (id === "bottomright") {
        const w = parseInt(currentframeparams?.width) + (e.clientX - x);
        const h = parseInt(currentframeparams?.height) + (e.clientY - y);
        setTempstyle({
          ...tempstyle,
          width: `${w}px`,
          height: `${h}px`,
          left: currentframeparams?.left,
          top: currentframeparams?.top,
        });
      }
    }
  };
  const createFrameFinish = () => {
    if (allowcreateframe) {
      new Promise((resolve) => {
        resolve(dispatch(createDataAction(tempstyle)));
      }).then(() => {
        dispatch(getDataAction());
        setTimeout(() => setTempHide(false), 500);
      });
      setAllowcreateframe(false);
      setX(0);
      setY(0);
      return;
    }
    if (allowresize && currentframeparams && x && y) {
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
  console.log(data);
  return (
    <div
      className={cls(styles.content, {
        [styles.crosshair]: allowcreateframe,
      })}
      onMouseDown={createFrameStart}
      onMouseMove={createFrameProgress}
      onMouseUp={createFrameFinish}
    >
      {temphide ? <Temp /> : <></>}
      {data?.map((frame) => (
        <CreatedFrames key={frame.top + frame.left} frame={frame} />
      ))}
    </div>
  );
};
