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
    import type { Cosmic } from '$lib/schemas';
    export let data: { cosmics: Cosmic[] };
</script>

<h1>Cosmic Objects</h1>
<a class="btn" href="/create">Create new object</a>
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
            {#each data.cosmics as {id, name, type}}
                <tr id="{id}">
                    <td>{name}</td>
                    <td>{type}</td>
                    <td>
                        <a class="btn" href="/read/{id}">Details</a>
                    </td>
                    <td>
                        <a class="btn" href="/delete/{id}">Delete</a>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <h2>No cosmic objects in database</h2>
{/if}