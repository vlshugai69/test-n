"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SlotMachineNumber = ({
  finalValue,
  className,
}: {
  finalValue: number;
  className?: string;
}) => {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = numberRef.current;

    if (element) {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom top",
          scrub: false,
        },
      });

      const startValue = Math.floor(finalValue / 2); // Start from halfway point

      // Animate numbers
      animation.to(element, {
        onUpdate: function () {
          const progress = this.progress();
          const currentNumber = Math.floor(
            startValue + progress * (finalValue - startValue)
          ).toString();
          element.innerHTML = currentNumber;
        },
        duration: 1.5,
        ease: "expo.out",
      });

      return () => {
        animation.kill(); // Cleanup animation on unmount
      };
    }
  }, [finalValue]);

  return (
    <div
      ref={numberRef}
      className={`text-white font-extrabold ${className}`}
      style={{ width: "6.25rem", textAlign: "right" }} // Fixed width and alignment
    >
      0
    </div>
  );
};

export default SlotMachineNumber;
