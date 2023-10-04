import React from "react";
import styles from "./Spacer.module.scss";

const Spacer = (props) => {
  const space = props.space;
  return (
    <div className={`${styles[space]}`}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the Spacer component and put your own text */
      }
    </div>
  );
};

export default Spacer;
