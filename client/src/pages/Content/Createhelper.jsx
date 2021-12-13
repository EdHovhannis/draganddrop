import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionsContext } from "../../context/ActionsContext";
import { ContentContext } from "../../context/ContentContext";
import { createDataAction, getDataAction } from "../../store/actions/actions";
import styles from "./Content.module.css";
import { useCheckparent } from "./../../helpers/useCheckparent";

export const Createhelper = () => {
  const dispatch = useDispatch();
  const { allowcreateframe, setAllowcreateframe, setTempHide } =
    useContext(ActionsContext);

  const { tempstyle, setTempstyle, setX, setY, x, y } =
    useContext(ContentContext);

  const { parentChecker } = useCheckparent();
  const { data } = useSelector((state) => state?.getDataReducer);

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
    return;
  };
  const createFrameProgress = (e) => {
    if (allowcreateframe) {
      const left = parseInt(tempstyle.left) > 0;
      const top = parseInt(tempstyle.top) > 0;

      if (left || top) {
        const width = Math.abs(x - e.clientX);
        const height = Math.abs(y - e.clientY);
        setTempstyle({
          ...tempstyle,
          width: `${width}px`,
          height: `${height}px`,
        });
      }
    }
  };
  const createFrameFinish = async () => {
    const check = parentChecker(data, tempstyle);
    if (allowcreateframe) {
      if (check?._id) {
        return new Promise((resolve) => {
          resolve(
            dispatch(createDataAction({ ...tempstyle, parentId: check?._id }))
          );
        }).then(() => {
          dispatch(getDataAction());
          setTimeout(() => setTempHide(false), 500);
          setAllowcreateframe(false);
          setX(0);
          setY(0);
        });
      }
      return new Promise((resolve) => {
        resolve(dispatch(createDataAction(tempstyle)));
      }).then(() => {
        dispatch(getDataAction());
        setTimeout(() => setTempHide(false), 500);
        setAllowcreateframe(false);
        setX(0);
        setY(0);
      });
    }
  };

  return (
    <div
      className={styles.createframehelper}
      onMouseDown={createFrameStart}
      onMouseMove={createFrameProgress}
      onMouseUp={createFrameFinish}
      style={{ zIndex: "100" }}
    ></div>
  );
};
