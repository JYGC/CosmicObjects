<script lang="ts">
	import { newCosmicDTO, type CosmicDTO } from "$lib/cosmic/dtos";
	import { cosmicTypesFromCache } from '$lib/cosmictype/cache';

    export let cosmic: CosmicDTO = newCosmicDTO();
</script>

<label>
    Name<br />
    <input name="name" type="text" bind:value="{cosmic.name}" />
</label><br />
<label>
    Type<br />
    <select name="cosmicType" bind:value="{cosmic.cosmicType}">
        <option value="">-- Select cosmic type --</option>
        {#each cosmicTypesFromCache as {id, name} (id)}
            <option value={id}>{name}</option>
        {/each}
    </select>
</label><br />