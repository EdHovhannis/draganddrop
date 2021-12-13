import React, { useContext, useEffect } from "react";
import cls from "classnames";
import styles from "./Content.module.css";
import { ActionsContext } from "../../context/ActionsContext";
import { Temp } from "../Temp/Temp";
import { CreatedFrames } from "../Created/CreatedFrames";
import { ContentContext } from "../../context/ContentContext";
import {
  getDataAction,
  updatecurrentframeAction,
} from "./../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Createhelper } from "./Createhelper";
import { useCheckparent } from "./../../helpers/useCheckparent";

export const Content = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [dispatch]);

  const { data } = useSelector((state) => state?.getDataReducer);

  const { allowcreateframe, temphide, allowresize } =
    useContext(ActionsContext);

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
    if (allowresize && currentframeparams) {
      setX(e.clientX);
      setY(e.clientY);
    }
    return;
  };
  const createFrameProgress = (e) => {
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
  const { parentChecker } = useCheckparent();
  const createFrameFinish = () => {
    const check = parentChecker(data, tempstyle);
    if (allowresize && currentframeparams && x && y) {
      setX(0);
      setY(0);
      setCurrentframeparams(tempstyle);
      if (check?._id) {
        return new Promise((resolve) => {
          resolve(
            dispatch(
              updatecurrentframeAction(
                { ...tempstyle, parentId: check?._id },
                currentframeid
              )
            )
          );
        }).then(() => {
          dispatch(getDataAction());
        });
      }
      return new Promise((resolve) => {
        resolve(
          dispatch(
            updatecurrentframeAction(
              { ...tempstyle, parentId: "" },
              currentframeid
            )
          )
        );
      }).then(() => {
        dispatch(getDataAction());
      });
    }
  };
  return (
    <>
      <div
        className={cls(styles.content, {
          [styles.crosshair]: allowcreateframe,
        })}
        onMouseDown={createFrameStart}
        onMouseMove={createFrameProgress}
        onMouseUp={createFrameFinish}
      >
        {allowcreateframe && <Createhelper />}
        {temphide ? <Temp /> : <></>}
        {data?.map((frame) => (
          <CreatedFrames key={frame.top + frame.left} frame={frame} />
        ))}
      </div>
    </>
  );
};
