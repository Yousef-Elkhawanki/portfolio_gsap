import React from "react";

export default function ProjectCard({ project }: any) {
    return (
        <a href={project.link} target="_blank" className="product-card rounded-4xl h-[60vh] overflow-hidden relative image_view animated-text" >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-left" />
            <div className="product-card-layer flex justify-end flex-col xl:p-10 p-4 absolute w-full h-full top-0 left-0 bg-linear-to-b to-[rgba(0,0,0,.4)]">
                <h3 className="text-2xl font-antonio capitalize mb-4">{project.title}</h3>
                <div className="flex items-center justify-start gap-2 flex-wrap">
                    {project.tools.map((tool: any, index: number) => (
                        <span className="bg-[var(--dark-secondary-color)] px-4 py-2 rounded-full  text-[10px] capitalize header-blur pointer-events-none" key={index}>{tool}</span>
                    ))}
                </div>
            </div>
        </a>
    );
}
