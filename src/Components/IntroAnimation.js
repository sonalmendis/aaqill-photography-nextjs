import React, { useEffect } from "react";
import styles from "./IntroAnimation.module.scss";

import openingImageLarge from "../../public/img/opening-image-large.webp";

const IntroAnimation = (props) => {
  useEffect(() => {
    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same class

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
    <div className={styles.IntroAnimation}>
      <div className={styles.ImagesWrapper}>
        <div className={`${styles.imageContainerColumn}`}>
          <img src="https://fastly.picsum.photos/id/914/800/800.jpg?hmac=1N4XLmGKjcqFzGHNGTMF-tlyzXNJlBLW3gWDVKW0hio" />
          <img src="https://fastly.picsum.photos/id/672/800/800.jpg?hmac=HCPlXWGg3IUoTvf08Y4NurWS5OJ7vqF2Vjt1qdBFJj4" />
          <img src="https://fastly.picsum.photos/id/204/800/800.jpg?hmac=Ukg8ME66xbF3h87FWIWxtX_5VNn61DnubU4dsCpJNUE" />
          {/* <img src="https://fastly.picsum.photos/id/1065/800/800.jpg?hmac=QmaUIMK67Rv2weK-p9ycob57GTonEfDzlqTp4VKhaKY" /> */}
        </div>

        <div className={styles.imageContainerColumn}>
          <img src="https://fastly.picsum.photos/id/586/800/800.jpg?hmac=3PdEnAY5jO71UQs1ACJ6W4AXDM30ebKJTmNuSXeOmy8" />
          <img src="img/opening-bg.webp" />
          <img src="https://fastly.picsum.photos/id/383/800/800.jpg?hmac=_jdghuIv75hNdxM8Yn5uS-Qe2FBjwz4i-usLRwayJgQ" />
          {/* <img src="https://fastly.picsum.photos/id/17/800/800.jpg?hmac=aulLt7OcWQv76ndg-tcBeDyhGo6YuPq5WGXgV5BqF2A" /> */}
        </div>

        <div className={styles.imageContainerColumn}>
          <img src="https://fastly.picsum.photos/id/204/800/800.jpg?hmac=Ukg8ME66xbF3h87FWIWxtX_5VNn61DnubU4dsCpJNUE" />
          <img src="https://fastly.picsum.photos/id/1065/800/800.jpg?hmac=QmaUIMK67Rv2weK-p9ycob57GTonEfDzlqTp4VKhaKY" />
          <img src="https://fastly.picsum.photos/id/914/800/800.jpg?hmac=1N4XLmGKjcqFzGHNGTMF-tlyzXNJlBLW3gWDVKW0hio" />
          {/* <img src="https://fastly.picsum.photos/id/672/800/800.jpg?hmac=HCPlXWGg3IUoTvf08Y4NurWS5OJ7vqF2Vjt1qdBFJj4" /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
