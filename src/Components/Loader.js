import React from "react";

const YourComponentNameHere = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="globalLoader"
      className={props.className}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          color: "white",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          fontWeight: "300",
        }}
      >
        Loading
      </h1>
    </div>
  );
};

export default YourComponentNameHere;
