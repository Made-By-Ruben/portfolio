<script lang="ts">
	import me from '$lib/assets/Me.avif';
	import LinkedIn from 'virtual:icons/fa7-brands/linkedin';
	import GitHub from 'virtual:icons/fa7-brands/github';

	const linkedInUrl = 'https://www.linkedin.com/in/ruben-verhoef-00bb47267/';
	const gitHubUrl = 'https://github.com/Made-By-Ruben';
</script>

<main class="flex h-screen w-full flex-col items-center p-5">
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
		<div class="flex gap-1 h-5">
			<img class="rounded" src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" alt="">
			<img class="rounded" src="https://img.shields.io/badge/-SvelteKit-black?style=for-the-badge&logo=svelte&color=orangered&logoColor=white" alt="">
			<img class="rounded" src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="">
			<img class="rounded" src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="">
		</div>
	</div>
</main>
