import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import { Recursion } from "./Recursion";

export const Preview = () => {
  const { codedata } = useContext(ContentContext);
  return (
    <div style={{ position: "absolute" }}>
      <Recursion data={codedata} />
    </div>
  );
};
