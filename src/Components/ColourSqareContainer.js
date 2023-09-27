import React from "react";

const ColourSquareContainer = (props) => {
  return (
    <div
      style={{ lineHeight: 0 }}
      className={`colors-container ${props.className}`}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the button component and put your own text */
      }
    </div>
  );
};

export default ColourSquareContainer;
