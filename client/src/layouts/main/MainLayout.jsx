import React from "react";
import { NavBar } from "../partials/NavBar/NavBar";
import { SideBar } from "../partials/SideBar/SideBar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainlayout}>
      <NavBar gridposition={styles.navbar} />
      <div className={styles.content}>{children}</div>
      <SideBar />
    </div>
  );
};
