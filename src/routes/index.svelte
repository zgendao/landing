<script>
	import Inside from "$lib/inside.svelte";
	import Outside from "$lib/Outside.svelte";

	let page = "outside";
</script>

{#if page === "outside"}
	<Outside bind:page />
{:else}
	<Inside />
{/if}
