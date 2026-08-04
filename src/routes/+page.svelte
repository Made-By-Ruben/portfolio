<script lang="ts">
	import me from '$lib/assets/Me.avif';
	import LinkedIn from 'virtual:icons/fa7-brands/linkedin';
	import GitHub from 'virtual:icons/fa7-brands/github';
	import Landing from 'virtual:icons/lucide/plane-landing';
	import Plane from 'virtual:icons/lucide/plane';
	import ArrowRight from 'virtual:icons/lucide/arrow-right';


	const linkedInUrl = 'https://www.linkedin.com/in/ruben-verhoef-00bb47267/';
	const gitHubUrl = 'https://github.com/Made-By-Ruben';
</script>

<main class="relative flex h-screen w-full flex-col items-center bg-radial from-[#54BEF0] to-[#a4c9e3] p-5">
	<img src={me} class="h-44 rounded-full pb-5" />
	<div class="flex">
		<a href={linkedInUrl} target="_blank">
			<LinkedIn />
		</a>
		<a href={gitHubUrl} target="_blank">
			<GitHub />
		</a>
	</div>

	<div class="flex flex-col items-center gap-1 pb-5">
		<h1 class="text-3xl font-bold">Hi, I'm Ruben.</h1>
		<h2 class="">A 24yo software engineer from The Netherlands 🇳🇱</h2>
		<div class="flex h-5 gap-1">
			<img
				class="rounded"
				src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"
				alt=""
			/>
			<img
				class="rounded"
				src="https://img.shields.io/badge/-SvelteKit-black?style=for-the-badge&logo=svelte&color=orangered&logoColor=white"
				alt=""
			/>
			<img
				class="rounded"
				src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"
				alt=""
			/>
			<img
				class="rounded"
				src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white"
				alt=""
			/>
		</div>
	</div>

	<button class="flex cursor-pointer items-center gap-2 rounded bg-gray-800 px-2 py-2 text-white">
		<div class="rounded bg-yellow-400 p-2">
			<Landing font-size="1em" color="black" />
		</div>

		<div class="flex gap-1">
			<p>Next Stop:</p>
			<p class="text-yellow-400">Experience</p>
		</div>

		<ArrowRight />
	</button>

</main>
