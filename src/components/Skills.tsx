import { useState } from "react";
import { cn } from "../lib/utils"


type Skill = {
    name: string;
    years: number;
    category: string;
}

const currentYear:number = new Date().getFullYear() - 1;

function calculateYears(startYear:number):number{
    return currentYear-startYear;
}

function calculatePercentage(years:number):number{
    const totalYears:number = currentYear - 2020;
    return years/totalYears * 100;
}

const skills:Skill[] = [
    {name: "Java", years: calculateYears(2020), category: "Languages"},
    {name: "C", years: calculateYears(2020), category: "Languages"},
    {name: "C++", years: calculateYears(2021), category: "Languages"},
    {name: "C#", years: calculateYears(2021), category: "Languages"},
    {name: "HTML/CSS", years: calculateYears(2021), category: "Languages"},
    {name: "Javascript", years: calculateYears(2022), category: "Languages"},
    {name: "Python", years: calculateYears(2022), category: "Languages"},

    {name: "JavaEE", years: calculateYears(2023), category: "Frameworks"},
    {name: ".NET", years: calculateYears(2023), category: "Frameworks"},
    {name: "React", years: calculateYears(2024), category: "Frameworks"},
    {name: "Node", years: calculateYears(2024), category: "Frameworks"},
    {name: "Express", years: calculateYears(2024), category: "Frameworks"},

    {name: "Git/Github", years: 4, category: "Tools"},
    {name: "VS Code", years: 4, category: "Tools"},
    {name: "MySQL Workbench", years: 3, category: "Tools"},
    {name: "MongoDB Atlas", years: 3, category: "Tools"},
    {name: "Azure", years: 2, category: "Tools"},
];

const categories:string[] = ["All" , "Languages", "Frameworks", "Tools"]

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills:Skill[] = skills.filter((skill) => (
        activeCategory === "All" || skill.category === activeCategory
    ));

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300",
                        activeCategory === category ? "bg-primary text-primary-foreground" :
                        "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left 
                            animate-[grow_1.5s_ease-out" 
                            style={{width: calculatePercentage(skill.years) + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.years} {skill.years > 1 ? "years" : "year"}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </section>
}