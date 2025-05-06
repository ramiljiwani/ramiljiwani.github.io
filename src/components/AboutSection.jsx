import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section 
            id="about" 
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 
                            className="text-start text-2xl font-semibold"
                        >
                                Mechanical Engineering Student @ McMaster University
                        </h3>
                        <p 
                            className="text-muted-foreground text-start"
                        >
                            I am a passionate Mechanical Engineering Student at McMaster University with a lifelong fascination 
                            for space exploration and a strong interest in the aerospace industry. I am proficient in 
                            programming (Python, Java, Arduino) and CAD software (Fusion360, SolidWorks, OnShape), with hands-on 
                            experience in engineering design and prototyping. I also have practical experience in integrating 
                            technology into projects, optimizing performance, and solving complex problems
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                                href="public/resume.pdf"
                                target="_blank" 
                                className="px-6 py-2 rounded-lg border border-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-128 h-120 rounded-lg overflow-hidden border-4 border-primary shadow-lg">
                        <img
                          src="/pfp.jpeg"
                          alt="Your Name"
                          className="w-full h-full object-cover scale-110"
                       />
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};