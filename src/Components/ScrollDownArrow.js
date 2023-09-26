import React from "react";
import styled from "styled-components";
import styles from "./ScrollDownArrow.module.scss";
import * as GlobalVariables from "@/styles/GlobalVariables";

const ScrollDownArrow = (props) => {
  return (
    <div className={styles.ScrollDownArrow}>
      <div className="arrow arrow-first"></div>
      <div className="arrow arrow-second"></div>
    </div>
  );
};

export default ScrollDownArrow;
