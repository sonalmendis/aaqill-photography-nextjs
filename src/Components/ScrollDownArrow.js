import React from "react";
import styles from "./ScrollDownArrow.module.scss";
import * as GlobalVariables from "@/styles/GlobalVariables";

const ScrollDownArrow = (props) => {
  return (
    <div className={styles.ScrollDownArrow}>
      <div className={`${styles.arrow} ${styles["arrow-first"]}`}></div>
      <div className="arrow arrow-second"></div>
    </div>
  );
};

export default ScrollDownArrow;
