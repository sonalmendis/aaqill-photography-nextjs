import { useEffect, useState } from "react";
import * as GlobalVariables from "@/styles/GlobalVariables";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { useParallax } from "react-scroll-parallax";
import styled from "styled-components";

import ScrollDownArrow from "../Components/ScrollDownArrow";

import background from "../../public/img/opening-bg.webp";

import openingImageLarge from "../../public/img/opening-image-large.webp";
import openingImageMedium from "../../public/img/opening-image-medium.webp";
import openingImage from "../../public/img/opening-image-mob.webp";

const HomeStyled = styled.div`
  @media ${GlobalVariables.device.tablet} {
    text-align: center;
  }
  @media ${GlobalVariables.device.laptop} {
    text-align: left;
  }
  .intro-section,
  .section2 {
    img {
      margin-top: 2em;
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
  .offset-inview {
    margin-top: -19em;

    margin-bottom: 18.9em;
    z-index: -1;
    position: relative;
  }
  .section2 {
    @media ${GlobalVariables.device.laptop} {
      display: none;
    }
  }

  .intro-section {
    position: relative;
    .desktop-text-container {
      display: none;
    }
    @media ${GlobalVariables.device.laptop} {
      .desktop-text-container {
        width: 26em;
        position: absolute;
        display: block;
        left: 56vw;
        bottom: -26em;

        display: block;
        > * {
          display: block;
        }
      }
      display: flex;
      height: 78vw;
      justify-content: space-between;
      align-items: center;
      h2,
      p {
        display: none;
      }
      img {
        height: 100%;
        margin-top: 0;
      }
      picture {
        display: block;
      }
      > .image-container {
        height: 100%;
        flex: 1 1 50%;
        picture {
          height: 100%;
        }
        img {
          object-fit: cover;
        }
      }
      .left-column-desktop {
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 0 1 39%;
        margin-right: 2em;
        .image-container:first-of-type {
          height: 55%;

          picture {
            height: 100%;
          }
        }
        .image-container:last-of-type {
          margin-top: 3em;
          flex: 1 1 auto;
          picture {
            height: 100%;
          }
        }
      }
    }
    .image-container.desktop-visible {
      display: none;
      @media ${GlobalVariables.device.laptop} {
        display: block;
      }
    }
  }
  .desktop-intro-container,
  .desktop-text-container {
    display: none;
    padding: 2.7em 2.7em;
    background: white;
  }
  .parallax-container {
  }
  .desktop-intro-container {
    position: absolute;

    left: -78vw;
    top: calc(32vw * 0.5);
    bottom: initial;
    width: 23em;

    @media ${GlobalVariables.device.laptop} {
      display: block;
    }
  }

  .full-width-image-section {
    padding-bottom: 0;
    .image-container {
      position: relative;
      display: flex;
      justify-content: center;
    }
    img {
      width: 100%;
      display: block;
    }
    q {
      font-family: "Abhaya Libre", sans-serif;
      font-weight: bold;
      position: absolute;
      background: white;
      padding: 0.5em 1em;
      bottom: 20%;
      text-transform: capitalize;
      @media ${GlobalVariables.device.laptop} {
        font-size: 1.2em;
        bottom: 15%;
      }
    }
  }

  .white-section {
    @media ${GlobalVariables.device.laptop} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-column-gap: 3em;
      grid-row-gap: 0px;
    }
  }
  .vertical-line {
    width: 2px;
    height: 2em;
    background: white;
    margin-left: auto;
    margin-right: auto;
    @media ${GlobalVariables.device.laptop} {
      display: none;
    }
  }

  video.zoom-video {
    width: 100%;
    display: block;
  }
`;

const PictureFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.6em;
`;

const OpeningSectionWrapper = styled.div`
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${GlobalVariables.device.laptop} {
    height: 200vh;

    background: url(${background.src}) no-repeat top center;
    background-size: contain;
  }
  background-size: cover;
  position: relative;
  .inner-container {
    height: 100%;
    width: 100%;
    position: relative;
    background: url(${openingImage.src}) no-repeat top center;

    .desktop-background-container {
      display: none;
      height: 100%;
    }
    @media ${GlobalVariables.device.tablet} {
      background: url(${openingImageMedium.src}) no-repeat top center;
      background-size: cover;
    }
    @media ${GlobalVariables.device.laptop} {
      background: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    img.logo {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      @media ${GlobalVariables.device.tablet} {
        width: 70%;
      }
      @media ${GlobalVariables.device.laptop} {
        width: 26vw;
        position: absolute;
        right: -6em;
        bottom: 17em;
      }
    }
    img.arrows {
      position: absolute;
      width: 46px;
      bottom: 35%;
    }

    @media ${GlobalVariables.device.laptop} {
      .desktop-background-container {
        display: block;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .text-container {
    background: black;
    color: white;
    padding: 2rem;
    border-radius: 4px;
  }
  .colors-container {
    position: absolute;
    bottom: -2%;
  }
`;

const PhotoWithCaption = styled.div`
  margin-bottom: 3em;
  &:last-of-type {
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
`;

export default function Home(props) {
  const desktop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
  });

  const [isDesktop, setisDesktop] = useState(false);

  const theparallax = useParallax({
    speed: 25,
  });

  useEffect(() => {
    setisDesktop(desktop);
  }, [desktop]);

  return (
    <>
      {/* <ParallaxProvider> */}
      <HomeStyled>
        <OpeningSectionWrapper>
          <div className="inner-container">
            <div className="desktop-background-container desktop-inner-grid">
              {isDesktop && (
                <picture>
                  <source
                    sizes="70vw"
                    srcSet="https://ik.imagekit.io/kx65wqg4n/73cea883fe0a152fef26aaab2abf05b6.webp?tr=w-730 730w,
                           https://ik.imagekit.io/kx65wqg4n/73cea883fe0a152fef26aaab2abf05b6.webp?tr=w-1024 1024w,
                           https://ik.imagekit.io/kx65wqg4n/73cea883fe0a152fef26aaab2abf05b6.webp?tr=w-1250 1250w,
                           https://ik.imagekit.io/kx65wqg4n/73cea883fe0a152fef26aaab2abf05b6.webp?tr=w-1442 1442w,
                           https://ik.imagekit.io/kx65wqg4n/73cea883fe0a152fef26aaab2abf05b6.webp?tr=w-1620 1620w,
                           https://ik.imagekit.io/kx65wqg4n/73cea883fe0a152fef26aaab2abf05b6.webp?tr=w-1770 1770w"
                  />
                  <img rel="preload" src={openingImageLarge} alt="Friends" />
                </picture>
              )}
            </div>

            <div className="parallax-container" ref={theparallax.ref}>
              <div className="desktop-intro-container">
                <h2>Welcome</h2>
                <p>
                  Welcome to Aaqil's Photography, where every picture tells a
                  story. Aaqil captures life's moments with an eye for detail
                  and a passion for authenticity, creating timeless images that
                  will be treasured for years to come.
                </p>
              </div>
            </div>

            <ScrollDownArrow></ScrollDownArrow>
          </div>
        </OpeningSectionWrapper>
        <div style={{ height: "100vh", background: "red" }}>rtrtrt</div>
      </HomeStyled>
      {/* </ParallaxProvider> */}
    </>
  );
}
