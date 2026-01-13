import { useEffect, useState, type ButtonHTMLAttributes } from "react";
import {Sun} from "lucide-react";
import {Moon} from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = (): ButtonHTMLAttributes<HTMLButtonElement>  => {
    const[isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
    <button onClick={toggleTheme}
    className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors",
    "duration 300 focus:outline-hidden")}>
        {" "}
            {isDarkMode ? (
                <Moon className="h-6 w-6 text-blue-900" />
            ) : (
                <Sun className="h-6 w-6 text-yellow-300" />
            )}
        </button>)
};