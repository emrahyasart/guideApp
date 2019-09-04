import React, { createRef, useEffect } from "react";
import "./styleAnimated.css";

const AnimatedText = () => {
  const ref = createRef();
  useEffect(() => {
    let spans = ref.current.children;

    Array.from(spans).forEach((span, idx) => {
      span.addEventListener("click", e => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", e => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
  }, [ref]);

  return (
    <div
      className="word"
      ref={ref}
      style={{
        color: "red",
        fontWeight: "bold",
        letterSpacing: "10px",
        marginLeft: "-150px"
      }}
    >
      <span>G</span>
      <span>U</span>
      <span>I</span>
      <span>D</span>
      <span>E</span>
    </div>
  );
};

export default AnimatedText;
