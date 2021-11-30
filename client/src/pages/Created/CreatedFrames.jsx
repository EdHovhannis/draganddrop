import React, { useContext } from "react";
import { Frame } from "./Frame";
import { ActionsContext } from "./../../context/ActionsContext";
import { ContentContext } from "./../../context/ContentContext";

export const CreatedFrames = ({ frame }) => {
  const {
    allowframetools,
    setAllowframetools,
    setAllowtoolbar,
    allowhandrock,
    allowresize,
  } = useContext(ActionsContext);

  const {
    setCurrentframeid,
    setCurrentframeparams,
    currentframeid, 
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

  return (
    <Frame
      theme={frame}
      dispnone={allowhandrock && currentframeid === frame._id}
      allowframetools={allowframetools && currentframeid === frame._id}
      nonedisp={allowresize && currentframeid === frame._id}
      onClick={frameToolBar}  
    ></Frame>
  );
};
