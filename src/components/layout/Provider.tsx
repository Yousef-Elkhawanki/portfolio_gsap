import React, { useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "./Navbar";
import CustomCursor from "../common/customCursor/CustomCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Provider({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        if (!wrapperRef.current || !contentRef.current) return;

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1,
            effects: true,
            normalizeScroll: true,
            ignoreMobileResize: true,
        });

        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".animated-text").forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 90, filter: "blur(8px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            // end: "bottom bottom",
                            toggleActions: "play none none none",
                            once: true,
                        },
                    },
                );
            });
            gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 90 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            // end: "bottom bottom",
                            toggleActions: "play none none none",
                            once: true,
                        },
                    },
                );
            });
            gsap.utils.toArray<HTMLElement>(".fill-text").forEach((el) => {
                const splitText = el.textContent
                    ?.split("")
                    .map((char) => {
                        if (char === " ") return `<span>&nbsp;</span>`;
                        return `<span>${char}</span>`;
                    })
                    .join("");

                if (splitText) {
                    el.innerHTML = splitText;

                    const letters = el.querySelectorAll("span");

                    gsap.fromTo(
                        letters,
                        { opacity: 0.5 },
                        {
                            opacity: 1,
                            duration: 1.5,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                            //   end: "bottom bottom",
                                scrub: 10,
                                toggleActions: "play ",
                            },
                        },
                    );
                }
            });

            ScrollTrigger.refresh();
        }, contentRef);

        return () => {
            ctx.revert();
            smoother.kill();
        };
    }, []);

    return (
        <>
            <CustomCursor />
            <Navbar />
            <div
                ref={wrapperRef}
                style={{
                    height: "100vh",
                    overflow: "hidden",
                    position: "relative",
                }}>
                <div
                    ref={contentRef}
                    className="smooth-content"
                    style={{
                        position: "relative",
                    }}>
                    {children}
                    {/* <div className="py-14"></div> */}
                </div>
            </div>
        </>
    );
}
