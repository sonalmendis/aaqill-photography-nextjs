import React from "react";
import styled from "styled-components";
const YourComponentNameHereStyled = styled.div`
  background: red;
`;

const YourComponentNameHere = (props) => {
  return (
    <YourComponentNameHereStyled className={props.className}>
      <h1>THis is page 2</h1>
    </YourComponentNameHereStyled>
  );
};

export default YourComponentNameHere;
