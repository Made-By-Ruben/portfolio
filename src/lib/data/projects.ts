import rolHero from "$lib/assets/images/projectRolHero.avif"
import greenInnovationHero from "$lib/assets/images/greenInnovationHero.avif"


type Project = {
    slug: string;
    summary: ProjectSummary;
    details: ProjectSection[];
}
type ProjectSummary = {
    title: string;
    heroImage: string;
    description: string;
    techStack: string[];
    source: string;
}
type ProjectSection = {
    image: string;
    sectionTitle: string;
    sectionBody: string;
}


export const projects: Project[] = [
    {
        slug: "rolLiveStats",
        summary: {
            title: "RoL liveStats",
            description: "Full stack applicatie wat data uit officiële League of Legends toernooien verwerkt tot visuele elementen voor een live-uitzending. De applicatie wordt momenteel gebruikt in twee officiële regionale toernooien, de Road of Legends en de NLC.",
            heroImage: rolHero,
            source: "https://github.com/Made-By-Ruben/liveStatsDashboard",
            techStack: ["TypeScript", "Node.js", "Express.js", "MySQL", "Redis", "Zod", "SvelteKit", "Vite", "TailwindCSS"]
        },
        details: [
            {
                image: rolHero,
                sectionTitle: "Title 1",
                sectionBody: "Body 1"
            },
            {
                image: rolHero,
                sectionTitle: "Title 2",
                sectionBody: "Body 2"
            }
        ]
    },
    {
        slug: "greenInnovation",
        summary: {
            title: "Green Innovation",
            description: "A web-based interactive tool for designing, planning, and simulating permaculture forest gardens. Built with the latest web technologies to provide a performant, infinite-canvas experience.",
            heroImage: greenInnovationHero,
            source: "https://github.com/Made-By-Ruben/voedselBosApp",
            techStack: ["TypeScript", "SvelteKit", "Konva", "bits-ui", "tailwindcss"]
        },
        details: [            
            {
                image: rolHero,
                sectionTitle: "Title 1",
                sectionBody: "Body 1"
            },
            {
                image: rolHero,
                sectionTitle: "Title 2",
                sectionBody: "Body 2"
            }
        ]
    }   
]