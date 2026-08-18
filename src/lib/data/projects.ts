import rolHero from '$lib/assets/images/liveStats/rolOverview1600X900.avif';
import greenInnovationHero from '$lib/assets/images/greenInnovation/greenInnovationHero.avif';
import erlOverview from '$lib/assets/images/liveStats/erlOverview.avif';
import casterDesk from '$lib/assets/images/liveStats/casterDesk1600X900.avif';
import runtime1 from '$lib/assets/images/liveStats/runtime1.avif';
import runtime2 from '$lib/assets/images/liveStats/runtime2.avif';
import runtime3 from '$lib/assets/images/liveStats/runtime3.avif';
import newGarden from '$lib/assets/images/greenInnovation/createNewGarden.avif';
import plantSelection from '$lib/assets/images/greenInnovation/plantSelectionMenu.avif';
import simResults from '$lib/assets/images/greenInnovation/simulationResults.avif';

type Project = {
	slug: string;
	summary: ProjectSummary;
	details: ProjectSection[];
};
type ProjectSummary = {
	title: string;
	heroImage: string;
	secondImage: string;
	description: string;
	techStack: string[];
	source: string;
};
type ProjectSection = {
	image: string;
	sectionTitle: string;
	sectionBody: string[];
};

export const projects: Project[] = [
	{
		slug: 'rolLiveStats',
		summary: {
			title: 'RoL liveStats',
			description:
				'Full stack applicatie wat data uit officiële League of Legends toernooien verwerkt tot visuele elementen voor een live-uitzending. De applicatie wordt momenteel gebruikt in twee officiële regionale toernooien, de Road of Legends en de NLC.',
			heroImage: rolHero,
			secondImage: erlOverview,
			source: 'https://github.com/Made-By-Ruben/liveStatsDashboard',
			techStack: [
				'TypeScript',
				'Node.js',
				'Express.js',
				'MySQL',
				'Redis',
				'Zod',
				'SvelteKit',
				'Vite',
				'TailwindCSS'
			]
		},
		details: [
			{
				image: casterDesk,
				sectionTitle: 'Het designprobleem',
				sectionBody: [
					'Na onderzoek heb ik het kernvraagstuk als volgt geformuleerd:',
					"'Hoe kunnen we league of legends commentatoren helpen om live-wedstrijd data voor te bereiden zodat ze, tijdens een wedstrijd, dit kunnen gebruiken ter onderbouwing van storylines en analyses?",
                    "Dit alles zodat aan de hand van deze storylines en analyses merken gekoppeld kunnen worden aan in-game momenten die er echt toe doen.'"
				]
			},
			{
				image: rolHero,
				sectionTitle: 'Oplossings strategie',
				sectionBody: ["Het liveStats systeem bestaat vanuit een hoog over blik uit twee abstracties, de client genaamd 'liveStatsDashboard' en de server, genaamd 'liveStatsServer'.", 
                    "De LiveStatsServer is de server-container van het systeem en levert alle visual-functionaliteit aan het dashboard (LiveStatsDashboard). Het betreft een Node.js-applicatie, geschreven in TypeScript met het Express-framework. De container stelt een API beschikbaar via JSON over HTTP en duwt live-gebeurtenissen naar het dashboard via een Server-Sent-Events-stream (SSE). Daarnaast ontvangt de server gebeurtenissen van het externe systeem Bitfocus Companion en haalt hij matchgegevens op uit de GameWaves-database (MySQL).",
                    "Het LiveStatsDashboard container is een transitionele SvelteKit applicatie, wat betekent dat het zowel server als client componenten heeft. Het stelt drie routes beschikbaar, waarin de gebruiker visuals kan voorbereiden, verbinden met een wedstrijd en visuals kan oproepen en laten zien. De routes communiceren intern via HTML FormActions, een best-practice van SvelteKit. Daarnaast kan de applicatie HTTP verzoeken maken naar de LiveStatsServer en events ontvangen van een Server-Sent Events (SSE) connectie."
                ]
			},
            {
                image: runtime1,
                sectionTitle: "Runtime voorbeeld ophalen visualisatie",
                sectionBody: ['Door op een knopje op Bitfocus Companion te klikken haalt de gebruiker een visual op. Deze visuals gaan allemaal door dezelfde pipeline  heen. Dit diagram beschrijft het proces voor de totalDamageDoneH2H visual.', 
                    'Bitfocus communiceert met de server via de companionRelay route. Deze route herkent verschillende verzoeken en start een proces waardoor de client wordt geïnformeerd.',
                    'Vervolgens verwerkt de client in de activeVisuals route het event (zie diagram B).'
                ]
            },
            {
                image: runtime2,
                sectionTitle: "Diagram B",
                sectionBody: ['De activeVisual class stuurt een verzoek naar de server. De defaultVisual controller delegeert het ophalen van de data aan de services module.',
                    "In deze module worden verschillende query's geschreven naar de database. Eerst wordt de meest recente game opgezocht, dit kunnen er wel 5 zijn. Vervolgens wordt aan de hand van het gameID het juiste event ID opgezocht. Aan de hand van dit event ID wordt de specifieke dataset opgevraagd, gevalideerd en teruggestuurd.",
                    "De ruwe data wordt verwerkt tot informatie door de processor functies in de utils module. Ten slotte stuurt de server de informatie terug als JSON."
                ]
            },
            {
                image: runtime3,
                sectionTitle: "Visual pipeline",
                sectionBody: [
                    "Gelijktijdig aan diagram B wordt een reeks van componenten ingezet om de visual in de broadcast te verwerken.",
                    "Ten eerste de stinger in, een korte animatie met ruimte voor een sponsor of het toernooi logo. Dit component animeert naadloos over het scorebord heen.",
                    "Vervolgens de visual, gevuld met  informatie vanuit de server.",
                    "Na twaalf seconde animeert de visual automatisch uit via het stingerOut component."
                ]
            }
		]
	},
	{
		slug: 'greenInnovation',
		summary: {
			title: 'Green Innovation',
			description:
				'A web-based interactive tool for designing, planning, and simulating permaculture forest gardens. Built with the latest web technologies to provide a performant, infinite-canvas experience.',
			heroImage: greenInnovationHero,
			secondImage: plantSelection,
			source: 'https://github.com/Made-By-Ruben/voedselBosApp',
			techStack: ['TypeScript', 'SvelteKit', 'Konva', 'bits-ui', 'tailwindcss']
		},	
		details: [
			{
				image: greenInnovationHero,
				sectionTitle: '✨ Key Features',
				sectionBody: [
					'Infinite Canvas Navigation: A custom-built viewport system allowing users to drag and pan across large garden plots.',
					'Terraforming System: Modify the landscape by adding water features (ponds/rivers) or marking terrain as unusable.',
					'Interactive Minimap: A high-performance minimap built with Konva (HTML5 Canvas) that provides a real-time, scaled overview of the forest with a viewport overlay.',
					'Planting System: Place specific plants with distinct attributes (Height, Habit, etc.) onto the grid.',
					'State Persistence: Smart state handling that remembers your scroll position and selection even when navigating menus.',
					'Simulation: (In Progress) Analyze the garden layout against environmental elements.'
				]
			},
			{
				image: newGarden,
				sectionTitle: 'Create a new garden',
				sectionBody: ['']
			},
			{
				image: simResults,
				sectionTitle: 'Simulation Results',
				sectionBody: ['']
			}
		]
	}
];
