import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";

export const Home = ()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <ThemeToggle />

        <StarBackground />

        <NavBar />

        <main>
            <HeroSection />
            <About  />
        </main>
        
    </div>
}