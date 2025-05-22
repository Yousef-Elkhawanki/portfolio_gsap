import { projectsData } from "../../data/data";
import HeaderSection from "../common/headerSection/HeaderSection";
import ProductCard from "../projectcard/ProjectCard";

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <div className="container py-30 xl:w-[80%] w-[90%] mx-auto">
                <HeaderSection title="Take a look at our projects" subtitle="projects" customClass="xl:w-1/2" />
                <div className="projects-section-container grid xl:grid-cols-2 grid-cols-1 gap-10 mt-16">
                    {projectsData.map((project) => (
                        <ProductCard project={project} key={project.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}
