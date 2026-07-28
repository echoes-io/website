<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let { children, delay = 0 }: { children: Snippet; delay?: number } = $props();

	let el: HTMLElement | undefined = $state();
	let visible = $state(false);

	onMount(() => {
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						if (delay > 0) {
							setTimeout(() => { visible = true; }, delay);
						} else {
							visible = true;
						}
						observer.unobserve(entry.target);
					}
				}
			},
			{ threshold: 0.05 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={el}
	class="transition-all duration-1000 ease-out {visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}"
>
	{@render children()}
</div>
