import React, { useState } from "react";
import { createContext } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  const [frames, setFrames] = useState([]);
  const [currentframeid, setCurrentframeid] = useState("");
  const [currentframeparams, setCurrentframeparams] = useState(null);
  const [codedata, setCodedata] = useState(null);

  const st = {
    top: "",
    left: "",
    width: "",
    height: "",
    background: "#bdbdbd",
    borderRadius: "0px",
    parentId: "",
  };
  const [tempstyle, setTempstyle] = useState(st);

  return (
    <ContentContext.Provider
      value={{
        tempstyle,
        setTempstyle,
        setY,
        setX,
        x,
        y,
        frames,
        setFrames,
        currentframeid,
        setCurrentframeid,
        currentframeparams,
        setCurrentframeparams,
        codedata,
        setCodedata,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
