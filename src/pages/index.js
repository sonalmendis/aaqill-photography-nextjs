import { useEffect, useState } from "react";
import * as GlobalVariables from "@/styles/GlobalVariables";
import globalVars from "@/styles/GlobalVariables.module.scss";
import homeStyles from "../styles/index.module.scss";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { useParallax } from "react-scroll-parallax";
import styled from "styled-components";
import Image from "next/image";
import BlackSectionStyles from "../Components/BlackSection.module.scss";
import DividerStyles from "../Components/ImageDivider.module.scss";

// Components
import ScrollDownArrow from "../Components/ScrollDownArrow";
import ColourSquare from "@/Components/ColourSqare";
import ColourSquareContainer from "@/Components/ColourSqareContainer";
import BlackSection from "@/Components/BlackSection";
import ImageDivider from "@/Components/ImageDivider";

// Images
import quoteMark from "../../public/img/quote-mark.svg";
import quoteMarkBlack from "../../public/img/quote-mark-black.svg";

import background from "../../public/img/opening-bg.webp";
import openingImageLarge from "../../public/img/opening-image-large.webp";

import shrineLarge from "../../public/img/photos/shrine-high-ppi.webp";
import shrine from "../../public/img/photos/shrine-low-ppi.webp";

import barberLarge from "../../public/img/photos/barber-large.webp";
import barber from "../../public/img/photos/barber-small.webp";

import templeLarge from "../../public/img/photos/temple-large.webp";
import temple from "../../public/img/photos/temple-small.webp";

import girlLarge from "../../public/img/photos/girl-large.webp";
import girlMedium from "../../public/img/photos/girl-medium.webp";
import girl from "../../public/img/photos/girl-small.webp";

import landscapeLarge from "../../public/img/photos/nature-landscape-large.webp";
import landscapeMedium from "../../public/img/photos/nature-landscape-medium.webp";
import landscape from "../../public/img/photos/nature-landscape-small.webp";

import sageLarge from "../../public/img/photos/sage-large.webp";
import sage from "../../public/img/photos/sage-small.webp";

import temple2Large from "../../public/img/photos/temple2-large.webp";
import temple2 from "../../public/img/photos/temple2-small.webp";

import potMakerLarge from "../../public/img/photos/pot-maker-large.webp";
import potMakerMedium from "../../public/img/photos/pot-maker-medium.webp";
import potMaker from "../../public/img/photos/pot-maker-small.webp";

import rugsLarge from "../../public/img/photos/rugs-large.webp";
import rugsMedium from "../../public/img/photos/rugs-medium.webp";
import rugs from "../../public/img/photos/rugs-small.webp";

import civLarge from "../../public/img/photos/civ-large.webp";
import civ from "../../public/img/photos/civ-small.webp";

import potMaker2Large from "../../public/img/photos/potmaker2-large.webp";
import potMaker2 from "../../public/img/photos/potmaker2-small.webp";

import kidLarge from "../../public/img/photos/kid-large.webp";
import kid from "../../public/img/photos/kid-small.webp";

import loversPerchLarge from "../../public/img/photos/loversperch-large.webp";
import loversPerch from "../../public/img/photos/loversperch-small.webp";

import camelLarge from "../../public/img/photos/camel-large.webp";
import camelMedium from "../../public/img/photos/camel-medium.webp";
import camel from "../../public/img/photos/camel-small.webp";

// Lazy loaded components
const ContactFormMedia = dynamic(() =>
  import("../Components/ContactFormMedia")
);

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

  const desktopIntroTextParallax = useParallax({
    speed: 15,
    disabled: !isDesktop,
  });

  useEffect(() => {
    setisDesktop(desktop);
  }, [desktop]);

  return (
    <>
      <div className={homeStyles.HomeWrapper}>
        <div className={homeStyles.OpeningSectionWrapper}>
          <Image
            className={homeStyles.background}
            src={background}
            alt="Background"
            priority
          />
          <div className={homeStyles["inner-container"]}>
            <div
              className={`${homeStyles["desktop-background-container"]} desktop-inner-grid`}
            >
              <Image
                className={homeStyles.mainOpeningImage}
                src={openingImageLarge}
                alt="Friends"
                priority
              />
            </div>

            <div ref={logoParallax.ref}>
              <Image
                className={homeStyles.logo}
                priority
                src="../../img/opening-graphic.svg"
                alt="Logo"
                width={isDesktop ? 500 : 300}
                height={isDesktop ? 500 : 300}
              />
            </div>

            <div className="parallax-container" ref={theparallax.ref}>
              <div className={`${homeStyles["desktop-intro-container"]}`}>
                <h2>Welcome 22</h2>
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

        {/* INTRO SECTION */}

        <div
          className={`${homeStyles["intro-section"]} outer-grid tablet-inner-grid vertical-padding-large desktop-vertical-padding-small desktop-inner-grid `}
        >
          <h2>Welcome 2</h2>
          <p>
            Welcome to Aaqil's Photography, where every picture tells a story.
            Aaqil captures life's moments with an eye for detail and a passion
            for authenticity, creating timeless images that will be treasured
            for years to come.
          </p>

          <div ref={desktopIntroTextParallax.ref}>
            <div className={`${homeStyles["desktop-text-container"]}`}>
              <h2>Stepping out of the comfort zone</h2>
              <p>
                TEST. SECOND TEST RETEST TEST rfAaqil fearlessly captures the
                essence of city life as well as the essence of nature through
                his lens, unapologetically exploring the raw and unfiltered
                reality of the streets as a passionate and talented
                photographer.
              </p>
            </div>
          </div>

          <div className={`${homeStyles["left-column-desktop"]}`}>
            <div className={`${homeStyles["image-container"]}`}>
              <Image width="360" height="640" src={shrineLarge} alt="Shrine" />

              <div className={homeStyles.PictureFooterContainer}>
                <ColourSquareContainer>
                  <ColourSquare color="#C6994A" />
                  <ColourSquare color="#687F78" />
                  <ColourSquare color="#EFE9E5" />
                </ColourSquareContainer>
                <h4>Shrine/India</h4>
              </div>
            </div>

            <div
              className={`${homeStyles["image-container"]} ${homeStyles["desktop-visible"]}`}
            >
              <Image width="500" height="500" src={templeLarge} alt="Temple" />

              <div className={homeStyles.PictureFooterContainer}>
                <ColourSquareContainer>
                  <ColourSquare color="#233923" />
                  <ColourSquare color="#D6BE92" />
                  <ColourSquare color="#E8E529" />
                </ColourSquareContainer>
                <h4>Shrines/India</h4>
              </div>
            </div>
          </div>

          <div className={`${homeStyles["image-container"]} `}>
            <Image width="500" height="1000" src={barberLarge} alt="Barber" />

            <div className={homeStyles.PictureFooterContainer}>
              <ColourSquareContainer>
                <ColourSquare color="#327D45" />
                <ColourSquare color="#042211" />
                <ColourSquare color="#B1C9C6" />
              </ColourSquareContainer>
              <h4>Barber/India</h4>
            </div>
          </div>
        </div>

        {/* FULL WIDTH IMAGE SECTION */}

        <div
          className={`${homeStyles["full-width-image-section"]} vertical-padding-normal desktop-vertical-padding-large`}
        >
          <div className={`${homeStyles["image-container"]}`}>
            <Image src={girlMedium} alt="Girl looking out window" />

            <q>Photographer’s capture the essence of life</q>
          </div>

          <div className={`${homeStyles["image-container"]}`}>
            <Image src={landscapeMedium} alt="Landscape" />

            <q>And the mysteries of nature</q>
          </div>
        </div>

        {/* BLACK SECTION */}

        <BlackSection>
          <div
            className={`${BlackSectionStyles["first-section"]} outer-grid desktop-inner-grid tablet-inner-grid vertical-padding-normal`}
          >
            <div className={`${BlackSectionStyles["image-container"]}`}>
              <Image src={sageLarge} alt="Sage" />

              <div className={`${BlackSectionStyles["vertical-line"]}`}></div>

              <div>
                <div className={`${BlackSectionStyles["quote-container"]}`}>
                  <Image src={quoteMarkBlack} alt="Quote mark" />
                  <p className={`${BlackSectionStyles.quote}`}>
                    "In time we will tell our stories to the world about our
                    daily living and small joys"
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${BlackSectionStyles["image-container"]} ${BlackSectionStyles["desktop-right"]}`}
            >
              <Image src={temple2Large} alt="Templ 2" />

              <div className={`${BlackSectionStyles["vertical-line"]}`}></div>

              <div>
                <div
                  className={`${BlackSectionStyles["quote-container"]}  ${BlackSectionStyles["second"]} `}
                >
                  <Image src={quoteMarkBlack} alt="Quote mark" />
                  <p className={`${BlackSectionStyles.quote}`}>
                    Amidst the bustle of life, civilization thrives, <br />
                    <br />
                    A tapestry woven with humanity's lives,
                    <br />
                    <br />
                    From towering skyscrapers to humble abodes,
                    <br />
                    <br />A melting pot of cultures and stories untold.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${BlackSectionStyles["full-width-image-section2"]} vertical-padding-normal`}
          >
            <div className={`${BlackSectionStyles["image-container"]}`}>
              <Image src={potMakerMedium} alt="Pot Maker" />

              <h3>THE POT MAKER</h3>
            </div>

            <div className={`${BlackSectionStyles["image-container"]}`}>
              <Image src={rugsMedium} alt="Bazaars" />

              <h3>Bazaar Galore</h3>
            </div>
          </div>

          <div
            className={`${BlackSectionStyles["section3"]}  outer-grid tablet-inner-grid vertical-padding-normal desktop-inner-grid`}
          >
            <div className={homeStyles.PhotoWithCaption}>
              <Image src={civ} alt="Civ" />

              <h3>Civilization</h3>
            </div>

            <div className={homeStyles.PhotoWithCaption}>
              <Image src={potMaker2} alt="Pot Maker 2" />

              <h3>The Pot Maker (II)</h3>
            </div>
          </div>
        </BlackSection>

        {/* WHITE SECTION */}
        <div
          className={`${homeStyles.WhiteSectionWrapper} tablet-inner-grid outer-grid vertical-padding-normal desktop-inner-grid`}
        >
          <div className={homeStyles.PhotoWithCaption}>
            <Image src={kid} alt="Child with stick" />

            <h3>Another World, a different experience</h3>
          </div>

          <div className={homeStyles.PhotoWithCaption}>
            <Image src={loversPerch} alt="Lovers Perch" />

            <h3>Lover’s Perch</h3>
          </div>
        </div>

        <div>
          <ImageDivider className={DividerStyles.ImageDividerWrapper}>
            <Image src={camelLarge} alt="Camel" />
          </ImageDivider>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <div className="outer-grid desktop-inner-grid">
            <ContactFormMedia className="vertical-padding-large"></ContactFormMedia>
          </div>
        </div>
        {/* HOME WARPPER END */}
      </div>
    </>
  );
}
