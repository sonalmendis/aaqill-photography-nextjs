import { useEffect, useState } from "react";
import * as GlobalVariables from "@/styles/GlobalVariables";
import globalVars from "@/styles/GlobalVariables.module.scss";
import homeStyles from "../styles/index.module.scss";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { useParallax } from "react-scroll-parallax";
import styled from "styled-components";
import Image from "next/image";

import ScrollDownArrow from "../Components/ScrollDownArrow";

import background from "../../public/img/opening-bg.webp";

import openingImageLarge from "../../public/img/opening-image-large.webp";

export default function Home(props) {
  const desktop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
  });

  // const desktop = true;

  const [isDesktop, setisDesktop] = useState(false);

  const theparallax = useParallax({
    speed: 15,
    disabled: !isDesktop,
  });

  const logoParallax = useParallax({
    speed: 10,
    disabled: !isDesktop,
  });

  useEffect(() => {
    setisDesktop(desktop);
  }, [desktop]);

  return (
    <>
      {/* <ParallaxProvider> */}
      <div className={homeStyles.HomeWrapper}>
        <div className={homeStyles.OpeningSectionWrapper}>
          <Image
            className={homeStyles.background}
            src={background}
            alt="Background"
          />
          <div className={homeStyles["inner-container"]}>
            <div
              className={`${homeStyles["desktop-background-container"]} desktop-inner-grid`}
            >
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
                <Image
                  rel="preload"
                  className={homeStyles.mainOpeningImage}
                  src={openingImageLarge}
                  alt="Friends"
                />
              </picture>
            </div>

            <div ref={logoParallax.ref}>
              <Image
                className={homeStyles.logo}
                rel="preload"
                src="../../img/opening-graphic.svg"
                alt="Logo"
                width={isDesktop ? 500 : 300}
                height={isDesktop ? 500 : 300}
              />
            </div>

            <div className="parallax-container" ref={theparallax.ref}>
              <div className={`${homeStyles["desktop-intro-container"]}`}>
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
        </div>
        <div style={{ height: "100vh", background: "red" }}>rtrtrt</div>
      </div>
      {/* </ParallaxProvider> */}

      {/* INTRO SECTION */}
    </>
  );
}
