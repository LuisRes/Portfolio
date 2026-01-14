import { useEffect, useState } from "react";

type star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
}

export const StarBackground = () => {
    const [stars, setStars] = useState<star[]>([]);

    useEffect(() => {
        generateStars();
    }, []);

    const generateStars = () => {
        const numStars:number = Math.floor(window.innerWidth * window.innerHeight) / 10000;
        console.log(`Generating ${numStars} stars`);

        const newStars:star[] = [];
        for (let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            });
        }
        setStars(newStars);
    };
    return (<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map(star => (
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
    </div>)
};