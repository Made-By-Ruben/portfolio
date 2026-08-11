<script lang="ts">
	import me from '$lib/assets/Me.avif';
	import LinkedIn from 'virtual:icons/fa7-brands/linkedin';
	import GitHub from 'virtual:icons/fa7-brands/github';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import CopyEmail from '$lib/components/CopyEmail.svelte';
	import PdfIcon from 'virtual:icons/fa7-regular/file-pdf';
	import CV from '$lib/assets/Ruben_Verhoef_SoftwareEngineer_2026.pdf';

	const linkedInUrl = 'https://www.linkedin.com/in/ruben-verhoef-00bb47267/';
	const gitHubUrl = 'https://github.com/Made-By-Ruben';
</script>

<main class="flex h-screen w-full flex-col items-center gap-10 p-10">
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
			<!-- <TechBadges /> -->

			<div class="flex gap-1">
				<a href={CV} target="_blank" class="btn">
					<PdfIcon />
					<span>Resume</span>
				</a>

				<CopyEmail />
			</div>
		</div>
	</section>

	<section class="section">
		<h1>My Experience</h1>
		<Experience />
	</section>

	<section class="section">
		<header class="flex items-center justify-between">
			<h1>My Projects</h1>
			<a href="./projects">See More</a>
		</header>
		<Projects />
	</section>
</main>
