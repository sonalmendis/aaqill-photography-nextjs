import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";
const ImageDividerStyled = styled.div`
  width: 100%;
  height: 530px;
  background: ${(props) => `url(${props.src}) no-repeat center`};
  background-attachment: fixed;
  background-size: cover;
  @media ${GlobalVariables.device.tablet} {
    background: ${(props) => `url(${props.srclarge}) no-repeat center`};
    background-attachment: fixed;
    background-size: cover;
  }

  @media ${GlobalVariables.device.laptop} {
    background: ${(props) => `url(${props.srclarge}) no-repeat center`};
    background-attachment: fixed;
    background-size: cover;
  }
`;

const ImageDivider = (props) => {
  return (
    <ImageDividerStyled
      className={props.className}
      src={props.src}
      srclarge={props.srclarge}
    >
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the ImageDivider component and put your own text */
      }
    </ImageDividerStyled>
  );
};

export default ImageDivider;
