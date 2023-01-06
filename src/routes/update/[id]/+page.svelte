<!-- /update -->
<script lang="ts">
    import { page } from '$app/stores';
    import type { Cosmic } from '$lib/schemas';
    import CosmicDetails from '$lib/cosmic/CosmicDetails.svelte';
    const id = $page.params.id;

    export let data: { cosmic: Cosmic };
    console.log(data.cosmic);
</script>

<h1>Read or Update cosmic object</h1>
<form method="POST">
    <input type="hidden" name="id" value="{id}" />
    <CosmicDetails cosmic={data.cosmic} />
    <br />
    <a class="btn" href="/">Back</a>
    <button type="submit" class="btn">Update</button>
    <a class="btn" href="/delete/{id}">Delete</a>
</form>