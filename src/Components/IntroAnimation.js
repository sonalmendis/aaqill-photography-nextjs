import React, { useEffect } from "react";
import styles from "./IntroAnimation.module.scss";
import Image from "next/image";

import openingImageLarge from "../../public/img/opening-image-large.webp";
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
  useEffect(() => {
    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same classs

    const hiddenElementsRef = document.querySelectorAll(
      `.${styles.introAnimation}`
    );
    const wrapper = document.querySelector(`.${styles.ImagesWrapper}`);
    const imageContainerColumnRef = document.querySelectorAll(
      `.${styles.imageContainerColumn}`
    );

    const images = document.querySelectorAll(
      `.${styles.imageContainerColumn} img`
    );

    const introBg = document.querySelector(`.${styles.IntroBg}`);
    console.log(hiddenElementsRef);
    // Create an IntersectionObserver to observe the hidden elements
    const hiddenElementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imageContainerColumnRef.forEach((element) => {
            element.classList.add("introReveal");
          });

          wrapper.classList.add("introWrapperReveal");
          images.forEach((element) => {
            element.classList.add("introReveal");
            element.classList.add("introImgHeightTransition");
          });

          //   introBg.classList.add("introBgReveal");
          // Stop observing the element once its been shown
          setTimeout(() => {
            entry.target.style.display = "none";
            // document.querySelector("html").style.overflowY = "scroll";
            document.querySelector(".homeWrapper").style.display = "block";

            setTimeout(() => {
              document
                .querySelector(".openingLogo")
                .classList.add("basicOpacityReveal");

              document
                .querySelector(".mainOpeningImage")
                .classList.add("basicOpacityReveal");

              document
                .querySelector(".header")
                .classList.add("basicOpacityReveal");
            }, 100);
          }, 6000);

          hiddenElementsObserver.unobserve(entry.target);
        } else {
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
  }, []);

  return (
    <div className={styles.introAnimation}>
      <div className={styles.ImagesWrapper}>
        <div className={`${styles.imageContainerColumn}`}>
          <Image
            priority={true}
            width={300}
            height={300}
            alt="test"
            src={image1.src}
          />
          <Image priority={true} width={300} height={300} src={image2.src} />
          <Image priority={true} width={300} height={300} src={image3.src} />
          <Image priority={true} width={300} height={300} src={image10.src} />
          {/* <Image priority={true} width={300} height={300} src="https://fastly.picsum.photos/id/1065/800/800.jpg?hmac=QmaUIMK67Rv2weK-p9ycob57GTonEfDzlqTp4VKhaKY" /> */}
        </div>

        <div className={styles.imageContainerColumn}>
          <Image priority={true} width={300} height={300} src={image4.src} />
          <Image
            priority={true}
            width={1500}
            height={1500}
            src={openingImageLarge.src}
          />
          <Image priority={true} width={300} height={300} src={image6.src} />
          {/* <Image priority={true} width={300} height={300} src="https://fastly.picsum.photos/id/17/800/800.jpg?hmac=aulLt7OcWQv76ndg-tcBeDyhGo6YuPq5WGXgV5BqF2A" /> */}
        </div>

        <div className={styles.imageContainerColumn}>
          <Image priority={true} width={300} height={300} src={image7.src} />
          <Image priority={true} width={300} height={300} src={image8.src} />
          <Image priority={true} width={300} height={300} src={image9.src} />
          <Image priority={true} width={300} height={300} src={image11.src} />
          {/* <Image priority={true} width={300} height={300} src="https://fastly.picsum.photos/id/672/800/800.jpg?hmac=HCPlXWGg3IUoTvf08Y4NurWS5OJ7vqF2Vjt1qdBFJj4" /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
