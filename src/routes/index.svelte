<script>
	import Form from "$lib/components/Form.svelte";
	import Inside from "$lib/components/Inside.svelte";
	import Outside from "$lib/components/Outside.svelte";

	let page = "outside";

	import { SvelteToast, toast } from "@zerodevx/svelte-toast";
	import { onMount } from "svelte";

	const handleScroll = (e) => {
		const pos = document.getElementById("asd").offsetTop;
		console.log(pos);
	};

	onMount(() => document.addEventListener("scroll", handleScroll));
</script>

{#if page === "outside"}
	<Outside bind:page />
{:else if page === "inside"}
	<Inside bind:page />
{:else if page === "form"}
	<Form />
{/if}
<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
