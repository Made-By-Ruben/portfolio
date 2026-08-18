<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let projectSummary = $derived(data.project.summary);
	let projectDetails = $derived(data.project.details);
</script>

<section class="section">
	<h1 class="text-3xl">{projectSummary.title}</h1>
	<p>{projectSummary.description}</p>
	<div class="flex flex-wrap gap-2 pb-1">
		{#each projectSummary.techStack as tech}
			<span class="rounded bg-gray-200 px-2 py-0.5 text-xs font-bold">{tech}</span>
		{/each}
	</div>
	<div class="grid gap-1 md:grid-cols-2">
		<img  class="rounded-2xl shadow shadow-gray-400 h-full" src={projectSummary.heroImage}/>
		<img class="rounded-2xl shadow shadow-gray-400 h-full" src={projectSummary.secondImage}>
	</div>
</section>

{#each projectDetails as detail}
	<section class="section">
		<h2>{detail.sectionTitle}</h2>
		{#each detail.sectionBody as paragraph}
			<p>{paragraph}</p>
		{/each}
		<img class="rounded-2xl shadow shadow-gray-400" src={detail.image} />
	</section>
{/each}
