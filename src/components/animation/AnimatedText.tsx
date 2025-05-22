// components/AnimatedText.tsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className = "" }) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const chars = children.split("");

    el.innerHTML = ""; // Clear original content

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0.2";
      span.style.color = "gray";
      span.style.display = "inline-block";
      el.appendChild(span);
    });

    const spans = el.querySelectorAll("span");

    gsap.fromTo(
      spans,
      { opacity: 0.2, color: "gray" },
      {
        opacity: 1,
        color: "#000",
        stagger: 0.05,
        duration: 0.6,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [children]);

    return <p ref={textRef} className={className}>{children }</p>;
};

export default AnimatedText;
