import { useCallback } from "react";

export const useCheckparent = () => {
  const parentChecker = useCallback((data, exp) => {
    const accum = [];
    for (let i = 0; i < data?.length; i++) {
      const first = parseInt(exp.left) > parseInt(data[i]?.left); //  1
      const second = parseInt(exp.top) > parseInt(data[i]?.top); //  2
      const third =
        parseInt(exp.top) < parseInt(data[i]?.top) + parseInt(data[i]?.height); //  3
      const fourth =
        parseInt(exp.left) < parseInt(data[i]?.left) + parseInt(data[i]?.width); //  4
      if (first && second && third && fourth) {
        accum.push(data[i]);
      }
    }
    const m = Math.min(
      ...accum.map((item) => parseInt(item.width) + parseInt(item.height))
    );
    return accum.filter(
      (item) => parseInt(item.width) + parseInt(item.height) === m
    )[0];
  }, []);
  return { parentChecker };
};
