import React from "react";
import styles from "./ColourSquare.module.scss";

const ColourSquare = (props) => {
  return (
    <div
      className={styles.ColourSquare}
      style={{ backgroundColor: props.color }}
    ></div>
  );
};

export default ColourSquare;
