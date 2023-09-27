import React from "react";
import styles from "./BlackSection.module.scss";

const BlackSection = (props) => {
  return (
    <div className={styles.BlackSectionWrapper}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the BlackSection component and put your own text */
      }
    </div>
  );
};

export default BlackSection;
