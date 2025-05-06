import { ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Automatic Water Gun",
        description: "Check out how I made an automatic water gun using CAD and electronics.",
        image: "public/projects/watergun.png",
        tags: ["CAD", "Electronics", "Manufacturing"],
        demoURL: "https://orchid-shock-127.notion.site/Water-Gun-1049c82007f781c08db1df87000a0d7e",
    },
    {
        id: 2,
        title: "Map My Mart",
        description: "Check out how I made a grocery store assistant for those with visual disabilities.",
        image: "public/projects/mapmymart.png",
        tags: ["ReactJS", "ExpoGo", "Python", "Flask"],
        demoURL: "https://sites.google.com/view/ramil-jiwani-portfolio/p3",
    },
    {
        id: 3,
        title: "Tourni",
        description: "Check out how I made an intramural hosting system for universities in 36 hours.",
        image: "public/projects/tourni.png",
        tags: ["ReactJS", "NextJS", "PostgreSQL"],
        demoURL: "https://devpost.com/software/tourni",
    },
]

export const ProjectsSection = () => {
    return (
        <section 
            id="projects"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Check Out Some Of My Work!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="ml-3 mt-4">
                                <a 
                                    href={project.demoURL} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                </a>
                            </div>
                            <div className="p-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="ml-3 mb-4">
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}