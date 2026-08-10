<script lang="ts">
	import me from '$lib/assets/Me.avif';
	import LinkedIn from 'virtual:icons/fa7-brands/linkedin';
	import GitHub from 'virtual:icons/fa7-brands/github';
	import TechBadges from '$lib/components/TechBadges.svelte';
	import Experience from '$lib/components/Experience.svelte';

	const linkedInUrl = 'https://www.linkedin.com/in/ruben-verhoef-00bb47267/';
	const gitHubUrl = 'https://github.com/Made-By-Ruben';
</script>

<main class="flex h-screen w-full flex-col items-center gap-5 p-10">
	<header class="flex flex-col items-center">
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
			<h2 class="pb-1">A 24yo software engineer from The Netherlands 🇳🇱</h2>
			<TechBadges />
		</div>
	</header>

	<Experience />
</main>
