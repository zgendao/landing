<script>
	let page = "outside";

	import { onMount } from "svelte";
	import { SvelteToast, toast } from "@zerodevx/svelte-toast";
	import Form from "./form.svelte";
	import Outside from "./outside.svelte";
	import Inside from "./inside.svelte";

	let LottiePlayer;

	onMount(async () => {
		const module = await import("@lottiefiles/svelte-lottie-player");
		LottiePlayer = module.LottiePlayer;
	});

	let controlsLayout = [
		"previousFrame",
		"playpause",
		"stop",
		"nextFrame",
		"progress",
		"frame",
		"loop",
		"spacer",
		"background",
		"snapshot",
		"zoom",
		"info"
	];
</script>

{#if page === "outside"}
	<Outside bind:page />
{:else if page === "inside"}
	<Inside bind:page />
{:else if page === "form"}
	<Form />
{/if}
<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />

<!-- {#if LottiePlayer}
	<LottiePlayer
		src="https://assets1.lottiefiles.com/packages/lf20_twlz7dr7.json"
		autoplay={true}
		loop={true}
		controls={true}
		renderer="svg"
		background="transparent"
		height={600}
		width={600}
		{controlsLayout}
	/>
{/if} -->
