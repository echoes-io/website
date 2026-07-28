<script lang="ts">
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let sectionEl: HTMLElement | undefined = $state();

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section bind:this={sectionEl} class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
	<!-- Background image with parallax -->
	<img
		src="/images/echoes-banner.jpg"
		alt=""
		class="absolute inset-0 h-[120%] w-full object-cover opacity-50"
		style="transform: translateY({scrollY * 0.3}px)"
	/>
	<!-- Gradient overlay -->
	<div class="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/30 to-neutral-900"></div>

	<!-- Content -->
	<div class="relative z-10 flex flex-col items-center">
		<blockquote class="max-w-2xl font-heading text-2xl font-light italic leading-relaxed text-white drop-shadow-lg sm:text-3xl">
			"I was twenty-four and too scared to want things out loud.<br />
			I'm not twenty-four anymore."
		</blockquote>

		<div class="mt-10">
			<h1 class="font-heading text-6xl font-extralight lowercase tracking-[0.15em] text-white drop-shadow sm:text-8xl">
				echoes
			</h1>
			<p class="mt-4 text-base tracking-wide text-neutral-200 sm:text-lg">
				Serial fiction. Dual POV. The things we don't say.
			</p>
		</div>

		<div class="mt-12 flex flex-col items-center gap-4 sm:flex-row">
			<a
				href="https://readechoes.substack.com"
				class="rounded-full bg-white px-8 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
			>
				Read free on Substack
			</a>
			<a
				href="https://reamstories.com/readechoes"
				class="rounded-full border border-white/60 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
			>
				Subscribe on Ream
			</a>
		</div>
	</div>

	<div class="absolute bottom-8 z-10 animate-pulse text-white/50">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
		</svg>
	</div>
</section>
