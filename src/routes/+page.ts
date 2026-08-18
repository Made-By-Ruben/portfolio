import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';
import { workExperience } from '$lib/data/experience';

const projectSummaries = projects.map((p) => {
	return {
		slug: p.slug,
		...p.summary
	};
});

export const load: PageLoad = ({ params }) => {
	return {
		experience: [...workExperience],
		projects: [...projectSummaries],
		email: 'ruben.leopold@gmail.com'
	};
};
