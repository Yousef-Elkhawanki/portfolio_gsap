import React from "react";
import HeaderSection from "../common/headerSection/HeaderSection";
import ToolsCard from "../toolsCard/ToolsCard";

export default function ToolsSection() {
    return (
        <section className="tools-section flex items-start flex-wrap gap-10 bg-[var(--dark-secondary-color)]">
            <div className="container py-30 grid xl:grid-cols-5 grid-cols-1 xl:gap-4 gap-10 xl:w-[80%] w-[95%] mx-auto">
                <HeaderSection subtitle="Technical Tools" title="TOOLS FOR MY CREATIVE WORK" />
                <div className="tools-section-container grid xl:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full col-span-3">
                    <ToolsCard />
                    <ToolsCard />
                    <ToolsCard />
                    <ToolsCard />
                </div>
            </div>
        </section>
    );
}
