import { GithubIcon } from "lucide-react"

type Project = {
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    link: string
}

const projectList:Project[] = [
    {
        id: 1, 
        title: "Admin Dashboard", 
        description: "Dashboard for tracking of business expenses made for local restaurant" + 
        " using Windows Forms in .NET and Azure for database deployment",
        image: "/projects/plcs.jpg",
        tags: ["C#, .NET, Azure"],
        link: "https://github.com/LuisRes/PlcsAdmin"
    },
    {
        id: 2, 
        title: "Pitch Jams", 
        description: "Full-stack web application for creating and sharing business pitches " + 
        "using JavaEE, Java persistance API and Javascript",
        image: "/projects/pitchjams.png",
        tags: ["Java, JavaEE, Javascript"],
        link: "https://www.wearepitchjams.com/"
    },
    {
        id: 3, 
        title: "Compiler", 
        description: "Compiler made for fictional programming language, capable of reading," + 
        " scanning and parsing source files, and dealing with errors",
        image: "/projects/juan.png",
        tags: ["C, CMake, Visual Studio"],
        link: "https://github.com/LuisRes/JUANSCRIPT"
    }
]

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-goreground mb-12 max-w-2xl mx-auto">
                Some of my most recent projects, featuring both web applications and 
                desktop applications, carefully crafted with attention to detail and performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gao-8">
                {projectList.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform
                            duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full
                                    bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.link} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary
                                    transition-colors duration-300">
                                        <GithubIcon size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}