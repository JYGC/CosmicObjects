<!-- /create -->
<script lang="ts">
    import CosmicDetails from '$lib/cosmic/components/Details.svelte';
	import { isCosmicDTOValid, newCosmicDTO } from "$lib/cosmic/dtos";

    let cosmic = newCosmicDTO();

    $: enableSubmit = isCosmicDTOValid(cosmic);
</script>

<h1>Add cosmic object</h1>
<form method="POST">
    <CosmicDetails bind:cosmic={cosmic} />
    <br />
    <a class="btn" href="/cosmic">Cancel</a>
    <button type="submit" class="btn" disabled={!enableSubmit}>Create</button>
</form>