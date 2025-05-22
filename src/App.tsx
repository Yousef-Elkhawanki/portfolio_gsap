import Provider from "./components/layout/Provider";
import Banner from "./components/banner/Banner";
import ToolsSection from "./components/toolsSection/ToolsSection";
import WorkExperience from "./components/workExperience/WorkExperience";
import AboutSection from "./components/aboutSection/AboutSection";
import ProjectsSection from "./components/projectsSection/ProjectsSection";

export default function App() {
    return (
        <Provider>
            <Banner />
            <AboutSection/>
            <ToolsSection />
            <ProjectsSection/>
            <WorkExperience/>
        </Provider>
    );
}
