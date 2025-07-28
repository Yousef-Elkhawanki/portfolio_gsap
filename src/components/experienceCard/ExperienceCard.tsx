import React from "react";
import WrapperBtn from "../common/wrapperBtn/WrapperBtn";

interface IExperienceCard {
    title: string;
    date: string;
    company: string;
}
export default function ExperienceCard({ title, company, date }: IExperienceCard) {
    return (
        <div className="experience-card py-8 border-b border-white/5 last-of-type:border-0 flex justify-between xl:items-end flex-wrap gap-6 animated-text xl:flex-row flex-col items-start">
            <div className="experience-card-title flex items-end gap-6 flex-wrap">
                <span className="text-xs min-w-[150px]">{date}</span>
                <h3 className="xl:text-5xl text-2xl uppercase  font-antonio xl:w-fit w-full">{company}</h3>
            </div>
            <WrapperBtn title={title} />
        </div>
    );
}
