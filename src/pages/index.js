import * as GlobalVariables from "@/styles/GlobalVariables";
import homeStyles from "@/styles/index.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import { useParallax } from "react-scroll-parallax";
import dynamic from "next/dynamic";

//Styles
import BlackSectionStyles from "@/Components/BlackSection.module.scss";
import DividerStyles from "@/Components/ImageDivider.module.scss";

// Components
import IntroAnimation from "@/Components/IntroAnimation";
import BlackSection from "@/Components/BlackSection";
import ColourSquare from "@/Components/ColourSqare";
import ColourSquareContainer from "@/Components/ColourSqareContainer";
import ImageDivider from "@/Components/ImageDivider";
import ScrollDownArrow from "@/Components/ScrollDownArrow";
import Spacer from "@/Components/Spacer";

// Images
import quoteMark from "../../public/img/quote-mark.svg";

import background from "../../public/img/opening-bg.webp";
import openingImageLarge from "../../public/img/opening-image-large.webp";

import shrineLarge from "../../public/img/photos/shrine-high-ppi.webp";

import barberLarge from "../../public/img/photos/barber-large.webp";

import templeLarge from "../../public/img/photos/temple-large.webp";

import girlLarge from "../../public/img/photos/girl-large.webp";

import landscapeLarge from "../../public/img/photos/nature-landscape-large.webp";

import sageLarge from "../../public/img/photos/sage-large.webp";

import temple2Large from "../../public/img/photos/temple2-large.webp";

import potMakerMedium from "../../public/img/photos/pot-maker-medium.webp";

import rugsMedium from "../../public/img/photos/rugs-medium.webp";

import civ from "../../public/img/photos/civ-small.webp";

import potMaker2 from "../../public/img/photos/potmaker2-small.webp";

import kid from "../../public/img/photos/kid-small.webp";

import loversPerch from "../../public/img/photos/loversperch-small.webp";

import camelLarge from "../../public/img/photos/camel-large.webp";

// Lazy loaded components
// import ContactFormMedia from "@/Components/ContactFormMedia";
const ContactFormMedia = dynamic(() =>
  import("../Components/ContactFormMedia")
);

export default function Home(props) {
  const desktop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
  });

  const portrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
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

  const blackSectionParallax = useParallax({
    speed: 15,
    disabled: !isDesktop,
  });

  const blackSectionParallax2 = useParallax({
    speed: 15,
    disabled: !isDesktop,
  });

  useEffect(() => {
    setisDesktop(desktop);

    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same class
    const hiddenElementsRef = document.querySelectorAll(".hidden");

    // Create an IntersectionObserver to observe the hidden elements
    const hiddenElementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is intersecting the viewport, show it
          if (entry.target.closest(".hidden-parent")) {
            // If the element has a parent with the class "hidden-parent", show the parent element
            /* The .hidden-parent class is an invisible div that acts as an offset marker so that 
              the element doesn't appear until it's scrolled into view + the offset */
            entry.target.closest(".hidden-parent").classList.add("show");
          } else {
            // Otherwise, show the element itself
            entry.target.classList.add("show");
          }

          // Stop observing the element once its been shown
          hiddenElementsObserver.unobserve(entry.target);
        } else {
          // If the element is not intersecting the viewport, make sure it doesn't have the "show" class (note this should be defualt but this is just a precaution)
          entry.target.classList.remove("show");
        }
      });
    });

    // Observe all hidden elements
    hiddenElementsRef.forEach((element) => {
      hiddenElementsObserver.observe(element);
    });

    return () => {
      hiddenElementsObserver.disconnect();
    };
  }, [desktop]);

  return (
    <>
      <IntroAnimation></IntroAnimation>
      <div className={`${homeStyles.HomeWrapper} homeWrapper`}>
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
                className={`${homeStyles.mainOpeningImage} mainOpeningImage`}
                src={openingImageLarge}
                alt="Friends"
                priority
              />
            </div>

            <div ref={logoParallax.ref}>
              <Image
                className={`${homeStyles.logo} openingLogo`}
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
            {/* <Image
              loader={({ width }) => width}
              src={girlLarge}
              alt="Girl looking out window"
            /> */}

            <picture>
              <source
                media={`${GlobalVariables.device.portrait}`}
                srcSet="img/photos/girl-port.webp"
              />
              <source
                media={`${GlobalVariables.device.laptop}`}
                srcSet="img/photos/girl-large.webp"
              />
              <Image src={girlLarge} alt="Girl looking out window" />
            </picture>

            {/* <q>Photographer’s capture the essence of life</q> */}
          </div>

          <div className={`${homeStyles["image-container"]}`}>
            <picture>
              <source
                media={`${GlobalVariables.device.portrait}`}
                srcSet="img/photos/full-2-port.webp"
              />
              <source
                media={`${GlobalVariables.device.laptop}`}
                srcSet="img/photos/nature-landscape-large.webp"
              />
              <Image src={landscapeLarge} alt="Landscape" />
            </picture>

            {/* <q>And the mysteries of nature</q> */}
          </div>
        </div>

        {/* BLACK SECTION */}

        <BlackSection className={BlackSectionStyles.BlackSectionWrapper}>
          <div
            className={`${BlackSectionStyles["first-section"]} outer-grid desktop-inner-grid tablet-inner-grid vertical-padding-large`}
          >
            <Spacer space="s8"></Spacer>
            <div className={`${BlackSectionStyles["section-container"]}`}>
              <div className={`${BlackSectionStyles["image-container"]}`}>
                <Image src={sageLarge} alt="Sage" fill />

                {/* <div className={`${BlackSectionStyles["vertical-line"]}`}></div> */}
              </div>

              <div
                className={`${BlackSectionStyles["outer-quote-container"]}`}
                ref={blackSectionParallax.ref}
              >
                <div className={`${BlackSectionStyles["quote-container"]}`}>
                  <Image src={quoteMark} alt="Quote mark" className="hidden" />
                  <div className={`${BlackSectionStyles.quote}`}>
                    <div className={`lineContainer`}>
                      <span className={`invisibleText`}>
                        "In time we will tell our stories to the world about our
                        daily living and small joys"
                      </span>
                      <span className={`hiddenSlideUp `}>
                        "In time we will tell our stories to the world about our
                        daily living and small joys"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${BlackSectionStyles["section-container"]} ${BlackSectionStyles["second"]}`}
            >
              <div className={`${BlackSectionStyles["image-container"]}`}>
                <Image
                  src={temple2Large}
                  alt="Templ 2"
                  sizes="(min-width:728px) 33vw, 100vw"
                  fill
                />
              </div>

              {/* <div className={`${BlackSectionStyles["vertical-line"]}`}></div> */}

              <div
                ref={blackSectionParallax2.ref}
                className={`${BlackSectionStyles["outer-quote-container"]}`}
              >
                <div
                  className={`${BlackSectionStyles["quote-container"]}  ${BlackSectionStyles["second"]} `}
                >
                  <Image src={quoteMark} alt="Quote mark" className="hidden" />
                  <div className={`${BlackSectionStyles.quote}`}>
                    <div className={`lineContainer`}>
                      <span className={`invisibleText`}>
                        Amidst the bustle of life, civilization thrives,
                      </span>
                      <span className={`hiddenSlideUp `}>
                        Amidst the bustle of life, civilization thrives,
                      </span>
                    </div>
                    <br></br>
                    <div className={`lineContainer`}>
                      <span className={`invisibleText`}>
                        A tapestry woven with humanity's lives,
                      </span>
                      <span className={`delayMini hiddenSlideUp `}>
                        A tapestry woven with humanity's lives,
                      </span>
                    </div>
                    <br></br>
                    <div className={`lineContainer`}>
                      <span className={`invisibleText`}>
                        From towering skyscrapers to humble abodes,
                      </span>
                      <span className={`delay hiddenSlideUp `}>
                        From towering skyscrapers to humble abodes,
                      </span>
                    </div>
                    <br></br>
                    <div className={`lineContainer`}>
                      <span className={`invisibleText`}>
                        A melting pot of cultures and stories untold.
                      </span>
                      <span className={`delay2 hiddenSlideUp `}>
                        A melting pot of cultures and stories untold.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${BlackSectionStyles["full-width-image-section2"]} vertical-padding-normal`}
          >
            <div className={`${BlackSectionStyles["section-container"]}`}>
              <div className={`${BlackSectionStyles["image-container"]}`}>
                <Image src={potMakerMedium} alt="Pot Maker" />
              </div>

              {/* <h3>THE POT MAKER</h3> */}
            </div>

            <div className={`${BlackSectionStyles["section-container"]}`}>
              <div className={`${BlackSectionStyles["image-container"]}`}>
                <Image src={rugsMedium} alt="Bazaars" />
              </div>
              {/* <h3>Bazaar Galore</h3> */}
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

              <h3>The Pot Maker</h3>
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
