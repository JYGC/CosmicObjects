<!-- / -->
<style lang="scss">
    table {
        margin-top: 20px;
    }

    thead th {
        font-weight: bold;
    }

    td {
        padding-bottom: 15px;
    }
</style>

<script lang="ts">
    import type { CosmicDTO } from '$lib/cosmic/dtos';
    export let data: { cosmics: CosmicDTO[] };
</script>

<h1>Cosmic Objects</h1>
<a class="btn" href="/cosmic/create">Create new object</a>
{#if data.cosmics !== undefined && data.cosmics.length > 0}
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each data.cosmics as {id, name, cosmicType} (id)}
                <tr id="{id}">
                    <td>{name}</td>
                    <td>{cosmicType}</td>
                    <td>
                        <a class="btn" href="/cosmic/read/{id}">Details</a>
                    </td>
                    <td>
                        <a class="btn" href="/cosmic/delete/{id}">Delete</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <h2>No cosmic objects in database</h2>
{/if}