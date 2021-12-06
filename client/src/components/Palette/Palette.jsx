import React, { useContext, useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import styles from "./Palette.module.css";
import { ContentContext } from "../../context/ContentContext";
import { useDispatch } from "react-redux";
import {
  getDataAction,
  updatecurrentbackgroundframeAction,
} from "../../store/actions/actions";

export const Palette = ({ left, top }) => {
  const [color, setColor] = useColor("hex", "#bdbdbd");
  const { tempstyle, setTempstyle, currentframeid } =
    useContext(ContentContext);
  const dispatch = useDispatch();
  useEffect(() => {
    setTempstyle({
      ...tempstyle,
      background: color.hex,
    });
    new Promise((resolve) => {
      resolve(
        dispatch(updatecurrentbackgroundframeAction(tempstyle, currentframeid))
      );
    }).then(() => {
      dispatch(getDataAction());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);
 
  return (
    <div
      className={styles.palette}
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      <ColorPicker
        width={228}
        height={128}
        color={color}
        onChange={setColor}
        hideHSV
        dark
        hideHEX
        hideRGB
      />
    </div>
  );
};
