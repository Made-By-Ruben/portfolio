<script lang="ts">
	import Projects from '$lib/components/Projects.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<section class="section">
	<header class="flex items-center justify-between">
		<h1>My Projects</h1>
		<a href="./#projects" >Take me back</a>
	</header>
	<Projects projects={data.projectSummaries} />
</section>
