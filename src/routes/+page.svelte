<script lang="ts">
	import me from '$lib/assets/Me.avif';
	import LinkedIn from 'virtual:icons/fa7-brands/linkedin';
	import GitHub from 'virtual:icons/fa7-brands/github';
	import TechBadges from '$lib/components/TechBadges.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import { projects } from '$lib/data/projects';

	const linkedInUrl = 'https://www.linkedin.com/in/ruben-verhoef-00bb47267/';
	const gitHubUrl = 'https://github.com/Made-By-Ruben';
</script>

<main class="flex h-screen w-full flex-col items-center gap-5 p-10">
	<section class="section items-center gap-0">
		<img src={me} class="h-44 rounded-full pb-5" />
		<div class="flex">
			<a href={linkedInUrl} target="_blank">
				<LinkedIn />
			</a>
			<a href={gitHubUrl} target="_blank">
				<GitHub />
			</a>
		</div>

		<div class="flex flex-col items-center">
			<h1 class="text-3xl font-bold">Hi, I'm Ruben.</h1>
			<p class="pb-1">A 24yo software engineer from The Netherlands 🇳🇱</p>
			<TechBadges />
		</div>
	</section>

	<section class="section">
		<h1>My Experience</h1>
		<Experience />
	</section>

	<section class="section">
		<h1>My Projects</h1>

		<div class="grid rounded-2xl shadow shadow-gray-400">
			{#each projects as project}
				<div class="p-5">
					<img class="" src={project.heroImage} />
					<h2>{project.title}</h2>
					<p>{project.description}</p>
				</div>
			{/each}
		</div>
	</section>
</main>
