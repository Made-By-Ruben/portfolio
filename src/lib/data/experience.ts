import staatsbosbeheerLogo from '$lib/assets/staatsbosbeheerLogo.avif';
import gamewavesLogo from '$lib/assets/gamewavesLogo.avif';
import growGGLogo from '$lib/assets/growGGLogo.avif';

type WorkExperience = {
	id: number;
	nameCompany: 'Staatsbosbeheer' | 'GameWaves' | 'GrowGG';
	logoCompany: string;
	website: string;
	jobTitle: string;
	fromUntill: string;
	milstonesEng: string[];
	milestonesNl: string[];
};

export const workExperience: WorkExperience[] = [
	{
		id: 0,
		nameCompany: 'GameWaves',
		logoCompany: gamewavesLogo,
		website: 'https://gamewaves.nl/',
		fromUntill: 'Feb 2026 - Present',
		jobTitle: 'Software Engineer',
		milstonesEng: [
			'Fullstack applicatie ontwikkeld wat in 20ms, 2000 regels aan officiële Riot Games API Data verwerkt tot 15 informatieve data visualisaties, via TypeScript en SvelteKit. Commentatoren gebruikten deze visualisaties al in 100+ officiële Riot Games livestreams, om 10.000+ unieke kijkers mee te nemen in verhaallijnen. Visualisaties maken gebruik van professionele UI/UX, soepele animaties en voldoen aan de huisstijl van het toernooi.'
		],
		milestonesNl: [
			'Fullstack applicatie ontwikkeld wat in 20ms, 2000 regels aan officiële Riot Games API Data verwerkt tot 15 informatieve data visualisaties, via TypeScript en SvelteKit.',
			'Commentatoren gebruikten deze visualisaties al in 100+ officiële Riot Games livestreams, om 10.000+ unieke kijkers mee te nemen in verhaallijnen.'
		]
	},
	{
		id: 1,
		nameCompany: 'GrowGG',
		logoCompany: growGGLogo,
		website: 'To Do',
		fromUntill: 'Feb 2024 - Jun 2024 & Feb 2025 - Juli 2025',
		jobTitle: 'Founder',
		milestonesNl: [
			'Een full stack applicatie ontwikkeld in Go en Svelte 5 wat game simulatie bestanden parsed naar leesbare data en hier belangrijke momenten uit filtert en te structureert voor een front-end; een online 2D herhalings-systeem voor het analyseren van gefilterde data uit gespeelde wedstrijden.',
			'Een voor conversie geoptimaliseerde landing page ontwikkeld met Svelte 5, Firebase en Vercel wat, zonder betaald verkeer, heeft geleid tot 30+ wachtlijst aanmeldingen van de 500+ unieke bezoekers.'
		],
		milstonesEng: ['todo']
	},
	{
		id: 2,
		nameCompany: 'Staatsbosbeheer',
		logoCompany: staatsbosbeheerLogo,
		website: 'https://www.staatsbosbeheer.nl/',
		fromUntill: 'Sep 2024 - Jan 2025',
		jobTitle: 'Product Development (intern)',
		milestonesNl: [
			'Een innovatieve oplossing ontwikkeld om monitoring van een Microsoft Azure omgeving te automatiseren. Met als uitkomst een prototype van een Power BI omgeving gelinkt aan Azure monitor die maandelijkse rapportages van het systeem genereerd en naar het Backoffice team verstuurd via E-mail.',
			'Systeem architectuur gemodelleerd via het C4Model en beschreven in arc42 documentatie.'
		],
		milstonesEng: ['todo']
	}
];
