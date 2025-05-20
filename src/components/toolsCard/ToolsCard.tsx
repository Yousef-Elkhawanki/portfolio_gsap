import React from "react";
interface IToolsCard {
    title: string;
    image: string;
}
export default function ToolsCard({ image, title }: IToolsCard) {
    return (
        <div className="tools-card bg-[var(--dark-color)] p-4 rounded-2xl flex items-center gap-2">
            <div className="tools-card-image w-14 h-14 bg-[var(--dark-secondary-color)] rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={image} alt={title} className="w-[70%] h-[70%] object-contain" />
            </div>
            <div className="tools-card-details">
                <h3 className="text-md uppercase">{title}</h3>
            </div>
        </div>
    );
}
