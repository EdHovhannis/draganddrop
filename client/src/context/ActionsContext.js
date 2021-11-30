import React, { useState } from "react";
import { createContext } from "react";

export const ActionsContext = createContext();

export const ActionsProvider = ({ children }) => {
  const [allowtoolbar, setAllowtoolbar] = useState(false);
  const [allowcreateframe, setAllowcreateframe] = useState(false);
  const [temphide, setTempHide] = useState(false);
  const [allowframetools, setAllowframetools] = useState(false);
  const [allowhandrock, setAllowhandrock] = useState(false);
  const [allowresize, setAllowresize] = useState(false);

  return (
    <ActionsContext.Provider
      value={{
        allowtoolbar,
        setAllowtoolbar,
        allowcreateframe,
        setAllowcreateframe,
        temphide,
        setTempHide,
        allowframetools,
        setAllowframetools,
        allowhandrock,
        setAllowhandrock,
        allowresize,
        setAllowresize,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};
