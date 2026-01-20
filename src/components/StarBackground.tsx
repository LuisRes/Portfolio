import { useEffect, useState } from "react";

type star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}

type meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    animationDuration: number;
}

export const StarBackground = () => {
    const [stars, setStars] = useState<star[]>([]);
    const [meteors, setMeteors] = useState<meteor[]>([]);

    useEffect(() => {
        generateMeteors();
        generateStars();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }; 

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const generateStars = () => {
        const numStars:number = Math.floor(window.innerWidth * window.innerHeight) / 10000;

        const newStars:star[] = [];
        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numMeteors:number = 4;

        const newMeteors:meteor[] = [];
        for (let i = 0; i < numMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 70,
                y: Math.random() * 20,
                delay: Math.random() * 5,
                animationDuration: Math.random() * 3 + 3
            });
        }
        setMeteors(newMeteors);
    };

    return (<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" 
            style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.y}%`,
                left: `${star.x}%`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`
            }}/>
        ))}
        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor"
            style={{
                width: `${meteor.size * 20}px`,
                height: `${meteor.size * 2}px`,
                top: `${meteor.y}%`,
                left: `${meteor.x}%`,
                animationDelay: `${meteor.delay}s`,
                animationDuration: `${meteor.animationDuration}s`,
            }}/>
        ))}
    </div>)
};