"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = "slide-up", // "slide-up" | "slide-down" | "slide-left" | "slide-right" | "fade" | "scale"
  duration = 700,
  delay = 0,
  threshold = 0.15,
  className = "",
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Determine initial and visible styles based on animation type
  const getStyles = () => {
    let baseStyles = {
      opacity: isVisible ? 1 : 0,
      transitionProperty: "opacity, transform, filter",
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium snappy/smooth ease
      transitionDelay: `${delay}ms`,
      filter: isVisible ? "blur(0px)" : "blur(4px)",
    };

    switch (animation) {
      case "slide-up":
        baseStyles.transform = isVisible ? "translateY(0)" : "translateY(40px)";
        break;
      case "slide-down":
        baseStyles.transform = isVisible ? "translateY(0)" : "translateY(-40px)";
        break;
      case "slide-left":
        baseStyles.transform = isVisible ? "translateX(0)" : "translateX(40px)";
        break;
      case "slide-right":
        baseStyles.transform = isVisible ? "translateX(0)" : "translateX(-40px)";
        break;
      case "scale":
        baseStyles.transform = isVisible ? "scale(1)" : "scale(0.92)";
        break;
      case "fade":
      default:
        baseStyles.transform = "none";
        break;
    }

    return baseStyles;
  };

  return (
    <div ref={ref} style={getStyles()} className={className}>
      {children}
    </div>
  );
}
