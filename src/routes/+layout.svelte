<script lang="ts">
	import './layout.css';
	import favicon from "$lib/assets/images/cool.avif"

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
