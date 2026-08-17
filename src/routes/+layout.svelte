<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/images/favicon.avif';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="flex h-screen w-full flex-col items-center gap-10 p-10">
	{@render children()}
</main>
