<!-- /read -->
<script lang="ts">
    import { page } from '$app/stores';
    import type { Cosmic } from '$lib/schemas';
    import  { isCosmicValid } from '$lib/schemas';
    import CosmicDetails from '$lib/cosmic/Details.svelte';
    const id = $page.params.id;

    export let data: { cosmic: Cosmic };
    let cosmic = data.cosmic;

    $: enableSubmit = isCosmicValid(cosmic);
</script>

<h1>Read or Update cosmic object</h1>
<form method="POST" action="/update">
    <input type="hidden" name="id" value="{id}" />
    <CosmicDetails bind:cosmic={cosmic} />
    <br />
    <a class="btn" href="/">Back</a>
    <button type="submit" class="btn" disabled={!enableSubmit}>Update</button>
    <a class="btn" href="/delete/{id}">Delete</a>
</form>