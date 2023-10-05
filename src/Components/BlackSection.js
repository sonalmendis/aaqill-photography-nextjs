import React, { useEffect } from "react";

const BlackSection = (props) => {
  useEffect(() => {
    // querySelectorAll is used here instead of useRef because useRef doesn't work easily with multiple elements of the same class
    const hiddenElementsRef = document.querySelectorAll(".hiddenSlideUp");

    // Create an IntersectionObserver to observe the hidden elements
    const hiddenElementsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element is intersecting the viewport, show it
          if (entry.target.closest(".hidden-parent")) {
            // If the element has a parent with the class "hidden-parent", show the parent element
            /* The .hidden-parent class is an invisible div that acts as an offset marker so that 
                the element doesn't appear until it's scrolled into view + the offset */
            entry.target.closest(".hidden-parent").classList.add("showSlideUp");
          } else {
            // Otherwise, show the element itself
            entry.target.classList.add("showSlideUp");
          }

          // Stop observing the element once its been shown
          hiddenElementsObserver.unobserve(entry.target);
        } else {
          // If the element is not intersecting the viewport, make sure it doesn't have the "show" class (note this should be defualt but this is just a precaution)
          entry.target.classList.remove("showSlideUp");
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
    <div className={props.className}>
      {
        props.children /* this injects the content from wherever its used as a HOC, that way you can call the BlackSection component and put your own text */
      }
    </div>
  );
};

export default BlackSection;
