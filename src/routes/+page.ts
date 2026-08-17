import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';
import { workExperience } from '$lib/data/experience';

export const load: PageLoad = ({ params }) => {
	return {
        experience: [...workExperience],
		projects: [...projects],
        email: "ruben.leopold@gmail.com"
	};
};
