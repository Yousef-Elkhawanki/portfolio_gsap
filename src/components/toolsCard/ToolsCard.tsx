import React from "react";

export default function ToolsCard() {
    return (
        <div className="tools-card bg-[var(--dark-color)] p-4 rounded-2xl flex items-center gap-2">
            <div className="tools-card-image w-16 h-16 bg-[var(--dark-secondary-color)] rounded-2xl flex items-center justify-center">
                <img src="https://template.dsngrid.com/mexdot/dark/assets/img/skills/2.webp" alt="" className="w-[80%] h-[80%] object-contain "/>
            </div>
            <div className="tools-card-details">
                <h3 className="text-md uppercase">ADOBE PHOTOSHOP</h3>
            </div>
        </div>
    );
}
