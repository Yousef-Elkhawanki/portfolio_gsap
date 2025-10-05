import React from "react";
import HeaderSection from "../common/headerSection/HeaderSection";

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="container xl:py-30 lg:py-20 py-16  xl:w-[80%] w-[90%] mx-auto">
                <HeaderSection title="+4 YEARS OF EXPERIENCE" subtitle="about me" />
                <p className="about-section-description capitalize large-line-height xl:text-sm text-xs animated-text">
                    Senior Frontend Developer with 4+ years’ experience building scalable, high-performance web
                    applications using React.js, Next.js, and modern frontend technologies. Expert in GSAP animations,
                    performance optimization (LCP), and delivering pixel-perfect UI for enterprise and e-commerce
                    platforms. Skilled in team leadership, API integration, and cross-functional collaboration.
                </p>
            </div>
        </section>
    );
}
