import React from "react";
import HeaderSection from "../common/headerSection/HeaderSection";
import ExperienceCard from "../experienceCard/ExperienceCard";
import { workExperience } from "../../data/data";

export default function WorkExperience() {
    return (
        <section className="work-experience">
            <div className="container py-30 xl:w-[80%] w-[90%] mx-auto">
                <HeaderSection subtitle="Work Experience" title="Take a look at our projects" customClass="xl:w-1/2"/>
                <div className="work-experience-container">
                    {workExperience.map((exp) => (
                        <ExperienceCard key={exp.id} title={exp.title} company={exp.company} date={exp.date} />
                    ))}
                </div>
            </div>
        </section>
    );
}
