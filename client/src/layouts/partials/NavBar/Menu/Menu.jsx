import React, { useContext } from "react";
import { ActionsContext } from "../../../../context/ActionsContext";
import styles from "./Menu.module.css";
import cls from "classnames";
import { Button } from "../../../../components/Button/Button";
import { ContentContext } from "./../../../../context/ContentContext";
import { useDispatch } from "react-redux";
import {
  deletecurrentframeAction,
  getDataAction,
} from "./../../../../store/actions/actions";
import { useHistory } from "react-router-dom";

export const Menu = ({ gridposition }) => {
  const router = useHistory();
  const dispatch = useDispatch();
  const st = {
    top: "",
    left: "",
    width: "",
    height: "",
    background: "#bdbdbd",
    borderRadius: "0px",
  };
  const {
    allowtoolbar,
    allowcreateframe,
    setAllowcreateframe,
    temphide,
    setTempHide,
    allowframetools,
    allowhandrock,
    setAllowhandrock,
    setAllowtoolbar,
    setAllowframetools,
    allowresize,
    setAllowresize,
    allowpallete,
    setAllowpalette,
    allowhtmltagsmenu,
    setAllowhtmltagsmenu,
  } = useContext(ActionsContext);

  const {
    setTempstyle,
    currentframeid,
    setCurrentframeid,
    currentframeparams,
    setCurrentframeparams,
  } = useContext(ContentContext);

  const allowcreateframehandler = () => {
    setAllowcreateframe(!allowcreateframe);
    setTempHide(!temphide);
    setTempstyle(st);
  };

  const deletecurrentframehandler = () => {
    if (currentframeid) {
      new Promise((resolve) => {
        resolve(dispatch(deletecurrentframeAction(currentframeid)));
      }).then(() => {
        dispatch(getDataAction());
        setTimeout(() => setTempHide(false), 500);
        setAllowtoolbar(!allowtoolbar);
        setAllowframetools(false);
        setCurrentframeid("");
        setCurrentframeparams(null);
        setAllowresize(false);
        setAllowhandrock(false);
        setAllowpalette(false);
      });
      return;
    }
  };

  const allowresizeframehandler = () => {
    if (allowresize) {
      setTempHide(false);
    } else {
      setTempHide(true);
    }
    setTempstyle(currentframeparams);
    setAllowresize(!allowresize);
    setAllowhandrock(false);
    setAllowpalette(false);
    return;
  };

  const allowhandrockhandler = () => {
    if (allowhandrock) {
      setTempHide(false);
    } else {
      setTempHide(true);
    }
    setTempstyle(currentframeparams);
    setAllowhandrock(!allowhandrock);
    setAllowresize(false);
    setAllowpalette(false);
    return;
  };

  const allowpalletehandler = () => {
    if (allowpallete) {
      setTempHide(false);
    } else {
      setTempHide(true);
    }
    setTempstyle(currentframeparams);
    setAllowpalette(!allowpallete);
    setAllowresize(false);
    setAllowhandrock(false);
    return;
  };

  const allowbuttonshandler = (e) => {
    setAllowhtmltagsmenu({
      ...allowhtmltagsmenu,
      atr: e.target.getAttribute("atr"),
      flag: true,
    });
  };
  const tocodeview = () => {
    router.push("/code");
  };

  return (
    <div className={cls(gridposition, styles.menu)}>
      {allowtoolbar && (
        <>
          <i
            className={cls("fas fa-border-style", {
              [styles.activelink]: allowcreateframe,
            })}
            onClick={allowcreateframehandler}
          ></i>
          <Button
            way="navbtn"
            atr={"buttons"}
            onClick={allowbuttonshandler}
            className={cls({
              [styles.activelink]: allowhtmltagsmenu.atr === "buttons",
            })}
          >
            Buttons
          </Button>
          <Button
            way="navbtn"
            atr={"inputs"}
            onClick={allowbuttonshandler}
            className={cls({
              [styles.activelink]: allowhtmltagsmenu.atr === "inputs",
            })}
          >
            Inputs
          </Button>
          <Button
            way="navbtn"
            atr={"texts"}
            onClick={allowbuttonshandler}
            className={cls({
              [styles.activelink]: allowhtmltagsmenu.atr === "texts",
            })}
          >
            Texts
          </Button>
          <i
            className={cls("fas fa-code", { [styles.activelink]: false })}
            onClick={tocodeview}
          ></i>
        </>
      )}
      {allowframetools && (
        <>
          <i
            className={cls("fas fa-hand-rock", {
              [styles.activelink]: allowhandrock,
            })}
            onClick={allowhandrockhandler}
          ></i>
          <i
            className={cls("fas fa-crop-alt", {
              [styles.activelink]: allowresize,
            })}
            onClick={allowresizeframehandler}
          ></i>
          <i
            className={cls("fas fa-palette", {
              [styles.activelink]: allowpallete,
            })}
            onClick={allowpalletehandler}
          ></i>
          <i
            className={cls("fas fa-trash", styles.trash)}
            onClick={deletecurrentframehandler}
          ></i>
        </>
      )}
    </div>
  );
};
