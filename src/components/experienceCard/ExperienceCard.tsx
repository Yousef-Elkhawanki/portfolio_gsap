import React from "react";
import WrapperBtn from "../common/wrapperBtn/WrapperBtn";

interface IExperienceCard {
    title: string;
    date: string;
    company: string;
}
export default function ExperienceCard({ title, company, date }: IExperienceCard) {
    return (
        <div className="experience-card py-8 xl:border-b border-gray-800 flex justify-between items-end flex-wrap gap-6">
            <div className="experience-card-title flex items-end gap-6">
                <span className="text-xs">{date}</span>
                <h3 className="xl:text-5xl text-lg uppercase xl:w-[300px] font-antonio">{company}</h3>
            </div>
            <WrapperBtn title={title} />
        </div>
    );
}
