<script lang="ts">
    import { page } from '$app/stores';
    import type { CosmicObject } from '$lib/models';
    const id = $page.params.id;

    export let data: { object: CosmicObject };
</script>

<h1>Read or Update cosmic object</h1>
<form method="POST">
    <input type="hidden" name="id" value="{id}" />
    <label>
        Name<br />
        <input name="name" type="text" value="{data.object.name}" />
    </label><br />
    <label>
        Type<br />
        <input name="type" type="text" value="{data.object.type}" />
    </label><br /><br />
    <a class="btn" href="/">Back</a>
    <button class="btn">Update</button>
    <a class="btn" href="/delete/{id}">Delete</a>
</form>