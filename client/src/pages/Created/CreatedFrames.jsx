import React, { useContext } from "react";
import { Frame } from "./Frame";
import { ActionsContext } from "./../../context/ActionsContext";
import { ContentContext } from "./../../context/ContentContext";
import { Palette } from "../../components/Palette/Palette.jsx";

export const CreatedFrames = ({ frame }) => {
  const {
    allowframetools,
    setAllowframetools,
    setAllowtoolbar,
    allowhandrock,
    allowresize,
    allowpallete,
  } = useContext(ActionsContext);

  const {
    setCurrentframeid,
    setCurrentframeparams,
    currentframeid,
    currentframeparams,
  } = useContext(ContentContext);

  const frameToolBar = () => {
    if (!allowresize) { 
      setAllowframetools(!allowframetools);
      setAllowtoolbar(false);
      if (!allowframetools) {
        setCurrentframeid(frame._id);
        setCurrentframeparams(frame);
      } else {
        setCurrentframeid("");
        setCurrentframeparams(null);
      }
    }
    return;
  };

  const l = parseInt(currentframeparams?.left);
  const t = parseInt(currentframeparams?.top);
  const w = parseInt(currentframeparams?.width);
  const h = parseInt(currentframeparams?.height);

  const left = l <= w ? w : l;
  const top = t <= h ? t + h + 10 : t - h - 10;

  return (
    <>
      <Frame
        theme={frame}
        dispnone={allowhandrock && currentframeid === frame._id}
        palletenone={allowpallete && currentframeid === frame._id}
        allowframetools={allowframetools && currentframeid === frame._id}
        nonedisp={allowresize && currentframeid === frame._id}
        onClick={frameToolBar}
      ></Frame>
      {allowpallete ? <Palette left={left} top={top} /> : <></>}
    </>
  );
};
