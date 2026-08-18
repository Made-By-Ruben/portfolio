import type { PageLoad } from './$types';
import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) error(404);
	return {
		project
	};
}) satisfies PageLoad;
