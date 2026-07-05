import React, { useState, useEffect, useRef } from "react";

const Reveal = ({
  children,
  className = "",
  animation = "motion-preset-fade",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentElement = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animation : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
