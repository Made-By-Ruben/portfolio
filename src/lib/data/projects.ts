import rolHero from "$lib/assets/projectRolHero.avif"

type project = {
    title: string;
    heroImage: string;
    description: string;
    techStack: string[];
    links: Record<string, string>
}

export const projects: project[] = [{
    title: "RoL liveStats",
    description: "Full stack applicatie wat GameWaves in staat stelt data uit hun League of Legends toernooien te verwerken tot visuele elementen in de live-uitzending. De applicatie wordt momenteel gebruikt in twee officiële regionale toernooien, de Road of Legends en de NLC.",
    heroImage: rolHero,
    links: {repo: "https://github.com/Made-By-Ruben/liveStatsDashboard", architecture: ""},
    techStack: ["TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "Zod", "SvelteKit", "Vite", "TailwindCSS"]
}]