import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';

const projectSummaries = projects.map((p) => {
	return {
		slug: p.slug,
		...p.summary
	};
});

export const load: PageLoad = ({ params }) => {
	return {
		projectSummaries: [...projectSummaries]
	};
};
