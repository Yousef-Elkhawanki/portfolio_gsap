import React from "react";

interface IHeaderSection {
    subtitle: string;
    title: string;
}
export default function HeaderSection({ subtitle, title }: IHeaderSection) {
    return (
        <div className="header-section xl:col-span-2 col-span-full mb-8">
            <div className="header-section-subtitle flex items-center gap-2 mb-2 ">
                <div className="header-section-bullet w-8 h-8 rounded-full bg-[#242424] flex items-center justify-center">
                    <span className="bullet w-4 h-4 rounded-full bg-[var(--light-color)]"></span>
                </div>
                <span className="font-satisfy uppercase text-sm">{subtitle}</span>
            </div>
            <h2 className="header-section-title font-antonio xl:text-6xl md:text-4xl text-3xl uppercase">{title}</h2>
        </div>
    );
}
