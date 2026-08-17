<script lang="ts">
	import GitHub from 'virtual:icons/fa7-brands/github';
	let { projects } = $props();
</script>

<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
	{#each projects as project}
		<div class="flex flex-col rounded-2xl shadow shadow-gray-400 sm:max-w-xl">
			<a href="/projects/{project.slug}"
				><img class="max-h-52 w-full rounded-t-2xl object-cover" src={project.heroImage} alt="Project Screenshot" /></a
			>
			<div class="flex h-full flex-col justify-items-normal gap-2 p-5">
				<h2>{project.title}</h2>
				<p class="text-sm">{project.description}</p>
				<div class="flex flex-wrap gap-2 pb-1">
					{#each project.techStack as tech}
						<span class="rounded bg-gray-200 px-2 py-0.5 text-xs font-bold">{tech}</span>
					{/each}
				</div>

				<div class="mt-auto flex items-center justify-between">
					<a
						href={project.source}
						target="_blank"
						class="flex w-fit items-center gap-1 rounded bg-gray-900 px-3 py-1 text-sm font-semibold text-white"
					>
						<GitHub />
						Source
					</a>
					<a href="/projects/{project.slug}"> Read More </a>
				</div>
			</div>
		</div>
	{/each}
</div>
