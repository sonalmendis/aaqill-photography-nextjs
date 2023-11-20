import React, { useEffect, useState } from "react";
import * as GlobalVariables from "@/styles/GlobalVariables";
import styles from "./IntroAnimation.module.scss";
import homeStyles from "@/styles/index.module.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive"; // A must for detecting responsivity
import openingImageLarge from "../../public/img/opening-image-large-cropped.webp";
import openingImageCroppedMob from "../../public/img/opening-image-large-cropped-mob.webp";
import openingBG from "../../public/img/opening-bg.webp";
import image1 from "../../public/img/photos/introAnimation/1.jpg";
import image2 from "../../public/img/photos/introAnimation/2.jpg";
import image3 from "../../public/img/photos/introAnimation/3.jpg";
import image4 from "../../public/img/photos/introAnimation/4.jpg";

import image6 from "../../public/img/photos/introAnimation/6.jpg";
import image7 from "../../public/img/photos/introAnimation/7.jpg";
import image8 from "../../public/img/photos/introAnimation/8.jpg";
import image9 from "../../public/img/photos/introAnimation/9.jpg";

import image10 from "../../public/img/photos/introAnimation/10.jpg";
import image11 from "../../public/img/photos/introAnimation/11.jpg";

const IntroAnimation = (props) => {
  const setImagesLoaded = props.setImagesLoaded;
  const [numberOfImagesLoaded, setNumberOfImagesLoaded] = useState(0);

  const increaseNumberOfImagesLoaded = () => {
    setNumberOfImagesLoaded((prev) => prev + 1);
  };
  const desktop = useMediaQuery({
    query: `${GlobalVariables.device.laptop}`,
  });

  const isPortrait = useMediaQuery({
    query: `${GlobalVariables.device.portrait}`,
  });

  useEffect(() => {
    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same classs

    const hiddenElementsRef = document.querySelectorAll(
      `.${styles.IntroAnimation}`
    );
    const wrapper = document.querySelector(`.${styles.ImagesWrapper}`);
    const imageContainerColumnRef = document.querySelectorAll(
      `.${styles.imageContainerColumn}`
    );

    const images = document.querySelectorAll(
      `.${styles.imageContainerColumn} img`
    );

    const mainBackgroundImage = document.querySelector(
      `.${styles.mainBackgroundImage}`
    );
    // Create an IntersectionObserver to observe the hidden elements

    const revealImages = () => {
      setImagesLoaded(true);
      imageContainerColumnRef.forEach((element) => {
        element.classList.add("introReveal");
      });

      wrapper.classList.add("introWrapperReveal");
      images.forEach((element) => {
        element.classList.add("introReveal");
        element.classList.add("introImgHeightTransition");
      });

      if (desktop) {
        mainBackgroundImage.classList.add("introMainBgBlurTransition");
      }

      // Stop observing the element once its been shown
      setTimeout(() => {
        // entry.target.style.display = "none";
        // document.querySelector("html").style.overflowY = "scroll";
        // mainBackgroundImage.classList.add("introMainBgOpacityTransition");
        document.querySelector(`.${homeStyles.HomeWrapper}`).style.display =
          "block";
        document.querySelector("html").style.overflowY = "scroll"; // This is for mobile, this method isn't used on desktop because the scrollbar becoming visible after being invisible affects the doucment width
        setTimeout(() => {
          document.querySelector(`.${homeStyles.HomeWrapper}`).style.opacity =
            "1";
          document
            .querySelector(".openingLogo")
            .classList.add("basicOpacityReveal");

          document
            .querySelector(".mainOpeningImage")
            .classList.add("basicOpacityReveal");

          document.querySelector(".header").classList.add("basicOpacityReveal");
          setTimeout(() => {
            hiddenElementsRef.forEach((element) => {
              element.style.display = "none";
            });
          }, 2000);
        }, 100);
      }, 4000);
    };

    if (numberOfImagesLoaded === 11) {
      revealImages();
    }

    // Remove the intro animation after 10 seconds if the images still haven't loaded
    // This acts as a failsafe in case the intro animation doesn't trigger for whatever reason
    const timeoutFunction = setTimeout(() => {
      const loader = document.getElementById("globalLoader");
      const homeWrapper = document.querySelector(`.${homeStyles.HomeWrapper}`);
      const openingLogo = document.querySelector(".openingLogo");
      const mainOpeningImage = document.querySelector(".mainOpeningImage");
      const header = document.querySelector(".header");
      const introAnimationContainer = document.querySelector(
        ".introAnimationContainer"
      );

      // If the images still haven't loaded after 10 seconds, remove the intro animation
      if (numberOfImagesLoaded !== 11) {
        if ((loader, homeWrapper, openingLogo, mainOpeningImage, header)) {
          introAnimationContainer.remove();
          document.getElementById("globalLoader").remove();
          document.querySelector(`.${homeStyles.HomeWrapper}`).style.display =
            "block";
          homeWrapper.classList.add("basicOpacityReveal");
          document
            .querySelector(".openingLogo")
            .classList.add("basicOpacityReveal");

          document
            .querySelector(".mainOpeningImage")
            .classList.add("basicOpacityReveal");

          document.querySelector(".header").classList.add("basicOpacityReveal");
        }
      }
    }, 10000);
    // Observe all hidden elements

    const opacityTimeoutCheck = setTimeout(() => {
      const homeWrapper = document.querySelector(`.${homeStyles.HomeWrapper}`);
      if ((homeWrapper.style.opacity = "0")) {
        revealImages();
      }
    }, 10000);

    return () => {
      clearTimeout(timeoutFunction);
    };
  }, [numberOfImagesLoaded]);

  return (
    <div className={`${styles.IntroAnimation} introAnimationContainer`}>
      <div className={styles.ImagesWrapper}>
        <div className={`${styles.imageContainerColumn}`}>
          <Image
            priority={true}
            width={300}
            height={300}
            alt="test"
            src={image1}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image2}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image3}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />

          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image10}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />

          {/* <Image alt="test" priority={true} width={300} height={300} src="https://fastly.picsum.photos/id/1065/800/800.jpg?hmac=QmaUIMK67Rv2weK-p9ycob57GTonEfDzlqTp4VKhaKY" /> */}
        </div>

        <div className={styles.imageContainerColumn}>
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image4}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          <div className={styles.maingBGImageContainer}>
            {isPortrait ? (
              <Image
                alt="test"
                priority={true}
                className={styles.mainBackgroundImage}
                src={openingImageCroppedMob}
                onLoadingComplete={() => {
                  increaseNumberOfImagesLoaded();
                }}
              />
            ) : (
              <Image
                alt="test"
                priority={true}
                className={styles.mainBackgroundImage}
                src={openingImageLarge}
                onLoadingComplete={() => {
                  increaseNumberOfImagesLoaded();
                }}
              />
            )}
            <div className={styles.gradientContainer}></div>
          </div>
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image6}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          {/* <Image alt="test" priority={true} width={300} height={300} src="https://fastly.picsum.photos/id/17/800/800.jpg?hmac=aulLt7OcWQv76ndg-tcBeDyhGo6YuPq5WGXgV5BqF2A" /> */}
        </div>

        <div className={styles.imageContainerColumn}>
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image7}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image8}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image9}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          <Image
            alt="test"
            priority={true}
            width={300}
            height={300}
            src={image11}
            onLoadingComplete={() => {
              increaseNumberOfImagesLoaded();
            }}
          />
          {/* <Image alt="test" priority={true} width={300} height={300} src="https://fastly.picsum.photos/id/672/800/800.jpg?hmac=HCPlXWGg3IUoTvf08Y4NurWS5OJ7vqF2Vjt1qdBFJj4" /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
