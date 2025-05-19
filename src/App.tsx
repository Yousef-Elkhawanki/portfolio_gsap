import Provider from "./components/layout/Provider";
import Banner from "./components/banner/Banner";
import ToolsSection from "./components/toolsSection/ToolsSection";
import WorkExperience from "./components/workExperience/WorkExperience";

export default function App() {
    return (
        <Provider>
            <Banner />
            <ToolsSection />
            <WorkExperience/>
        </Provider>
    );
}
