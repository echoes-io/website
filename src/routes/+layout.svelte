<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Echoes — by Nic Vane</title>
	<meta name="description" content="Serial fiction. Dual POV. The things we don't say. Literary erotica by an Italian man, in English." />
</svelte:head>

<div class="min-h-screen bg-neutral-900 text-neutral-50 font-body antialiased">
	{@render children()}
</div>
