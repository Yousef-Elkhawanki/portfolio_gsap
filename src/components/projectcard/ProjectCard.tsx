import clsx from "clsx";
import React from "react";

export default function ProjectCard({ project }: any) {
    return (
        <a
            href={project.link}
            target="_blank"
            className={clsx("product-card rounded-2xl h-[39vh] overflow-hidden relative image_view animated-text", {
                "pointer-events-none": !project.link,
            })}>
            <img src={project.image} alt={project.title} className=" xl:aspect-3/2 lg:aspect-4/3 md:aspect-7/6 aspect-square object-cover object-left" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw " />
            {project.link && (
                <div className="product-card-layer flex justify-end flex-col xl:p-6 p-4 absolute w-full h-full top-0 left-0 bg-linear-to-b to-[rgba(0,0,0,.8)]">
                    <h3 className="text-2xl font-antonio capitalize mb-4">{project.title}</h3>
                    <div className="flex items-center justify-start gap-2 flex-wrap">
                        {project.tools.map((tool: any, index: number) => (
                            <span className="bg-[var(--dark-secondary-color)] px-4 py-2 rounded-full  text-[10px] capitalize header-blur pointer-events-none" key={index}>
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {!project.link && (
                <div className="product-card-layer flex justify-center items-center flex-col xl:p-10 p-4 absolute w-full h-full top-0 left-0 bg-linear-[rgba(0,0,0,.8)]">
                    <h2 className="text-2xl font-antonio capitalize">Coming soon</h2>
                </div>
            )}
        </a>
    );
}
