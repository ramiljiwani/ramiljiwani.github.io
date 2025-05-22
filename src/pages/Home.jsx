import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
            {/* Background Effects */}
            <StarBackground/>

            {/* Nav Bar */}
            <NavBar/>

            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <ProjectsSection/>
                <SkillsSection/>
                <ContactSection/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    );
};