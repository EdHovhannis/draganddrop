import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import React from "react";
import styles from "./Palette.module.css";

export const Palette = ({ left, top }) => {
  const [color, setColor] = useColor("hex", "#121212");
  return (
    <div
      className={styles.palette}
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      <ColorPicker
        width={128}
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
