<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import Voice from '$lib/components/Voice.svelte';
	import WhatIs from '$lib/components/WhatIs.svelte';
	import Timelines from '$lib/components/Timelines.svelte';
	import Author from '$lib/components/Author.svelte';
	import EntryPoints from '$lib/components/EntryPoints.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Hero />

<FadeIn delay={100}>
	<Voice />
</FadeIn>

<FadeIn delay={100}>
	<WhatIs />
</FadeIn>

<FadeIn delay={100}>
	<Timelines />
</FadeIn>

<FadeIn delay={100}>
	<Author />
</FadeIn>

<FadeIn delay={100}>
	<EntryPoints />
</FadeIn>

<Footer />
