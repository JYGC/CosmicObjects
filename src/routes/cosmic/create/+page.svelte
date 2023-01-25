<!-- /create -->
<script lang="ts">
    import CosmicDetails from '$lib/cosmic/Details.svelte';
	import { isCosmicValid, newCosmic } from "$lib/cosmic/dtos";

    let cosmic = newCosmic();

    $: enableSubmit = isCosmicValid(cosmic);
</script>

<h1>Add cosmic object</h1>
<form method="POST">
    <CosmicDetails bind:cosmic={cosmic} />
    <br />
    <a class="btn" href="/cosmic">Cancel</a>
    <button type="submit" class="btn" disabled={!enableSubmit}>Create</button>
</form>