import React from "react";
import HeaderSection from "../common/headerSection/HeaderSection";

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="container py-30  xl:w-[80%] w-[90%] mx-auto">
                <HeaderSection title="+4 YEARS OF EXPERIENCE" subtitle="about me" />
                <p className="about-section-description capitalize large-line-height">
                    A frontend developer with strong experience in building high-performance, scalable web applications using HTML, CSS, JavaScript, React.js, and Next.js. Possesses advanced skills in
                    designing interactive interfaces with GSAP to enhance user experience. Focused on optimizing website components for fast loading and smooth interaction. Demonstrates an exceptional
                    ability to collaborate with cross-functional teams to deliver robust applications that meet project goals and adhere to the latest industry standards.
                </p>
            </div>
        </section>
    );
}
