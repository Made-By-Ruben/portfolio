import rolHero from "$lib/assets/projectRolHero.avif"
import greenInnovationHero from "$lib/assets/greenInnovationHero.avif"

type project = {
    title: string;
    heroImage: string;
    description: string;
    techStack: string[];
    source: string;
}

export const projects: project[] = [{
    title: "RoL liveStats",
    description: "Full stack applicatie wat data uit officiële League of Legends toernooien verwerkt tot visuele elementen voor een live-uitzending. De applicatie wordt momenteel gebruikt in twee officiële regionale toernooien, de Road of Legends en de NLC.",
    heroImage: rolHero,
    source: "https://github.com/Made-By-Ruben/liveStatsDashboard",
    techStack: ["TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "Zod", "SvelteKit", "Vite", "TailwindCSS"]
},
{
    title: "Green Innovation",
    description: "A web-based interactive tool for designing, planning, and simulating permaculture forest gardens. Built with the latest web technologies to provide a performant, infinite-canvas experience.",
    heroImage: greenInnovationHero,
    source: "https://github.com/Made-By-Ruben/voedselBosApp",
    techStack: ["TypeScript", "SvelteKit", "Konva", "bits-ui", "tailwindcss"]
}
]