import React from "react";
import HeaderSection from "../common/headerSection/HeaderSection";
import ToolsCard from "../toolsCard/ToolsCard";
import { techData } from "../../data/data";

export default function ToolsSection() {
    return (
        <section className="tools-section flex items-start flex-wrap gap-10 bg-[var(--dark-secondary-color)]">
            <div className="container xl:py-30 lg:py-20 py-16 grid xl:grid-cols-5 grid-cols-1 xl:w-[80%] w-[90%] mx-auto">
                <HeaderSection subtitle="Technical Tools" title="TOOLS FOR MY CREATIVE WORK" />
                <div className="tools-section-container grid xl:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full col-span-3">
                    {techData.map((tool) => (
                        <ToolsCard title={tool.title} key={tool.id} image={tool.image} />
                    ))}
                </div>
            </div>
        </section>
    );
}
