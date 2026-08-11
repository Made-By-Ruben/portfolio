<script>
	import { scale } from 'svelte/transition';
	import MailIcon from 'virtual:icons/fa7-regular/envelope';
	import CheckCircle from 'virtual:icons/fa7-regular/check-circle';
	const email = 'ruben.leopold@gmail.com';

	let copiedEmail = $state(false);
	async function copyMail() {
		await navigator.clipboard.writeText(email);
		copiedEmail = true;
	}
</script>

<button
	class="mt-2 flex cursor-pointer items-center gap-2 rounded bg-gray-900 px-2 py-1 text-sm font-semibold text-white"
	onclick={() => copyMail()}
>
	{#if copiedEmail}
		<span in:scale><CheckCircle /></span>
		<span class="">Copied!</span>
	{:else}
		<span in:scale><MailIcon /></span>
		<span class="">My Email</span>
	{/if}
</button>
