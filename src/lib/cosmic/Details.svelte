<script lang="ts">
    import axios from 'axios';
	import { newCosmic } from "$lib/cosmic/schemas";
	import type { Cosmic } from "$lib/cosmic/schemas";
	import type { CosmicType } from '$lib/cosmictype/schemas';

    export let cosmic: Cosmic = newCosmic();

    async function getCosmicTypes(): Promise<CosmicType[]> {
        const response = await axios.get('/cosmictype/api/read');
        let cosmicTypes: CosmicType[] = await response.data;
        return cosmicTypes;
    }

    let cosmicTypesPromise = getCosmicTypes();
</script>

<label>
    Name<br />
    <input name="name" type="text" bind:value="{cosmic.name}" />
</label><br />
{#await cosmicTypesPromise}
    <p>Getting cosmic types...</p>
{:then cosmicTypes}
    <label>
        Type<br />
        <select name="cosmicType" bind:value="{cosmic.cosmicType}">
            {#if cosmicTypes !== null && cosmicTypes.length > 0}
                <option value="">-- Select cosmic type --</option>
                {#each cosmicTypes as {id, name}}
                    <option value={id}>{name}</option>
                {/each}
            {/if}
        </select>
    </label><br />
{:catch error}
    <p>Error: can't get cosmic types</p>
{/await}