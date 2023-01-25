<!-- /read -->
<script lang="ts">
    import { page } from '$app/stores';
    import type { CosmicDTO } from '$lib/cosmic/dtos';
    import  { isCosmicValid } from '$lib/cosmic/dtos';
    import CosmicDetails from '$lib/cosmic/Details.svelte';
    const id = $page.params.id;

    export let data: { cosmic: CosmicDTO };
    let cosmic = data.cosmic;

    $: enableSubmit = isCosmicValid(cosmic);
</script>

<h1>Read or Update cosmic object</h1>
<form method="POST" action="/cosmic/update">
    <input type="hidden" name="id" value="{id}" />
    <CosmicDetails bind:cosmic={cosmic} />
    <br />
    <a class="btn" href="/cosmic">Back</a>
    <button type="submit" class="btn" disabled={!enableSubmit}>Update</button>
    <a class="btn" href="/cosmic/delete/{id}">Delete</a>
</form>