import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import CustomCursor from "../common/customCursor/CustomCursor";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Provider({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapperRef.current || !contentRef.current) return;

        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 10,
            effects: true,
            normalizeScroll: true,
            ignoreMobileResize: true,
        });

        const elements = contentRef.current.querySelectorAll<HTMLElement>(".animated-text");

        elements.forEach((el) => {
            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    y: 80,
                    filter: "blur(8px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        scroller: wrapperRef.current,
                        scrub: 0.5,
                        start: "top 80%",
                        end: "bottom 50%",
                        toggleActions: "play reverse play reverse",
                    },
                },
            );
        });

        return () => {
            smoother.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <>
            <CustomCursor />
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
                        minHeight: "200vh", // مهم جداً المحتوى أطول من الشاشة عشان السكروول يشتغل
                        position: "relative",
                    }}>
                    <Navbar />
                    {children}
                    <div className="py-14"></div>
                </div>
            </div>
        </>
    );
}
