<script>
	let page = "outside";

	import { SvelteToast, toast } from "@zerodevx/svelte-toast";
	import Form from "./form.svelte";
	import Outside from "./outside.svelte";
	import Inside from "./inside.svelte";
</script>

{#if page === "outside"}
	<Outside bind:page />
{:else if page === "inside"}
	<Inside bind:page />
{:else if page === "form"}
	<Form />
{/if}
<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
