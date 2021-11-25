<script>
	import Outside from "$lib/Outside.svelte";
	import Inside from "$lib/Inside.svelte";

	let page = "outside";
</script>

{#if page === "outside"}
	<Outside bind:page />
{:else}
	<Inside />
{/if}
