<script>
	import { scale } from 'svelte/transition';
	import MailIcon from 'virtual:icons/fa7-regular/envelope';
	import CheckCircle from 'virtual:icons/fa7-regular/check-circle';

	let {email} = $props()

	let copiedEmail = $state(false);
	async function copyMail() {
		await navigator.clipboard.writeText(email);
		copiedEmail = true;
	}
</script>

<button class="btn" onclick={() => copyMail()}>
	{#if copiedEmail}
		<span in:scale><CheckCircle /></span>
		<span class="">Copied!</span>
	{:else}
		<span in:scale><MailIcon /></span>
		<span class="">Email</span>
	{/if}
</button>
