import React from "react";
import styled from "styled-components";
import * as GlobalVariables from "@/styles/GlobalVariables";

import quoteMarkBlack from "../../public/img/quote-mark-black.svg";
const BlackSectionStyled = styled.div`
  background: black;
  position: relative;
  color: white;
  .first-section .image-container > picture img {
    margin-top: 2em;
    width: 100%;
    display: block;

    @media ${GlobalVariables.device.laptop} {
      width: 48%;
    }
  }
  .image-container {
    position: relative;

    @media ${GlobalVariables.device.laptop} {
      margin-bottom: 7em;
    }
    &.desktop-right {
      @media ${GlobalVariables.device.laptop} {
        img {
          margin-left: auto;
        }
      }
    }
  }
  .quote-container {
    padding: 2em 1.5em;
    border: 2px solid white;
    border-radius: 10px;
    @media ${GlobalVariables.device.laptop} {
      border: none;
      background: white;
      color: black;
      width: 25em;
      border-radius: 0;
      position: absolute;
      left: 38%;
      bottom: 20vw;
    }
    img {
      width: 2.5em;
      margin-bottom: 1.4em;
      @media ${GlobalVariables.device.laptop} {
        content: url(${quoteMarkBlack});

        margin-bottom: 0.8em;
      }
    }
  }

  .quote-container.second {
    @media ${GlobalVariables.device.laptop} {
      width: 27em;

      left: initial;
      right: 40%;

      br:nth-child(2n) {
        display: none;
      }
    }
  }
  p.quote {
    font-family: "Abhaya Libre", sans-serif;
    font-size: 29px;
    line-height: 40px;
    font-weight: bold;
    @media ${GlobalVariables.device.tablet} {
      font-size: 2em;
      line-height: 1.3em;
    }
    @media ${GlobalVariables.device.laptop} {
      font-size: 1.2em;
      line-height: 1.5em;
    }
  }

  .first-section .image-container:first-of-type img {
    margin-top: 0;
  }
  .full-width-image-section2 {
    img {
      width: 100%;
    }
    .image-container {
      margin-bottom: 3em;
      &:last-of-type {
        margin-bottom: 0;
      }
      @media ${GlobalVariables.device.laptop} {
        margin-bottom: 8em;
      }
    }
  }

  .section3 {
    @media ${GlobalVariables.device.laptop} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 3em;
      grid-row-gap: 0px;
    }
  }
`;

const BlackSection = (props) => {
  return (
    <BlackSectionStyled className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the BlackSection component and put your own text */
      }
    </BlackSectionStyled>
  );
};

export default BlackSection;
