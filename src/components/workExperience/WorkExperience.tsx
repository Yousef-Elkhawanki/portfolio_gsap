import React from "react";
import HeaderSection from "../common/headerSection/HeaderSection";
import ExperienceCard from "../experienceCard/ExperienceCard";

export default function WorkExperience() {
    return (
        <section className="work-experience">
            <div className="container py-30 xl:w-[80%] w-[95%] mx-auto">
                <HeaderSection subtitle="Work Experience" title="Take a look at our projects" />
                <div className="work-experience-container mt-16">
                    <ExperienceCard title="frontend developer" company="beyond creation" date="2023/" />
                    <ExperienceCard title="frontend developer" company="beyond creation" date="2023/" />
                    <ExperienceCard title="frontend developer" company="beyond creation" date="2023/" />
                    <ExperienceCard title="frontend developer" company="beyond creation" date="2023/" />
                </div>
            </div>
        </section>
    );
}
