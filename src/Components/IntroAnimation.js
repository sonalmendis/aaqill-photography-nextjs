import React, { useEffect } from "react";
import styles from "./IntroAnimation.module.scss";

const IntroAnimation = (props) => {
  useEffect(() => {
    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same class
    const hiddenElementsRef = document.querySelectorAll(
      `.${styles.imageContainerColumn}`
    );
    console.log(hiddenElementsRef);
    // Create an IntersectionObserver to observe the hidden elements
    const hiddenElementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("test");

          // Reveal as soon as the user sees the element/intro (in this case instantly on pageload)
          entry.target.classList.add("introReveal");

          // Stop observing the element once its been shown
          hiddenElementsObserver.unobserve(entry.target);
        } else {
          // If the element is not intersecting the viewport, make sure it doesn't have the "show" class (note this should be defualt but this is just a precaution)
          entry.target.classList.remove("introReveal");
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
          <img src="https://fastly.picsum.photos/id/1065/800/800.jpg?hmac=QmaUIMK67Rv2weK-p9ycob57GTonEfDzlqTp4VKhaKY" />
        </div>

        <div className={styles.imageContainerColumn}>
          <img src="https://fastly.picsum.photos/id/586/800/800.jpg?hmac=3PdEnAY5jO71UQs1ACJ6W4AXDM30ebKJTmNuSXeOmy8" />
          <img src="https://fastly.picsum.photos/id/807/800/800.jpg?hmac=HBZUgJoOsMoTKDYdCcK94Aw7234HozpdHJ2OLQkv2M4" />
          <img src="https://fastly.picsum.photos/id/383/800/800.jpg?hmac=_jdghuIv75hNdxM8Yn5uS-Qe2FBjwz4i-usLRwayJgQ" />
          <img src="https://fastly.picsum.photos/id/17/800/800.jpg?hmac=aulLt7OcWQv76ndg-tcBeDyhGo6YuPq5WGXgV5BqF2A" />
        </div>

        <div className={styles.imageContainerColumn}>
          <img src="https://fastly.picsum.photos/id/204/800/800.jpg?hmac=Ukg8ME66xbF3h87FWIWxtX_5VNn61DnubU4dsCpJNUE" />
          <img src="https://fastly.picsum.photos/id/1065/800/800.jpg?hmac=QmaUIMK67Rv2weK-p9ycob57GTonEfDzlqTp4VKhaKY" />
          <img src="https://fastly.picsum.photos/id/914/800/800.jpg?hmac=1N4XLmGKjcqFzGHNGTMF-tlyzXNJlBLW3gWDVKW0hio" />
          <img src="https://fastly.picsum.photos/id/672/800/800.jpg?hmac=HCPlXWGg3IUoTvf08Y4NurWS5OJ7vqF2Vjt1qdBFJj4" />
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
